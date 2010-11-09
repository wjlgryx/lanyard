/*global goog, lanyard, Image */
/*jslint white: false, onevar: false, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, sub: true, nomen: false */

goog.provide('lanyard.render.SurfaceImage');

/**
 * Renders a single image tile from a local or remote source.
 *
 * @implements {lanyard.Renderable}
 * @implements {lanyard.render.SurfaceTile}
 * @param {String} imageSource can be a local image path or a url pointing to another server.
 * @param {lanyard.geom.Sector} the sector covered by the image.
 * @param {lanyard.Layer|null} a reference to the layer handling this image.
 */
lanyard.render.SurfaceImage = function (imageSource, sector, layer) {
    /** @private */ this._logger = goog.debug.Logger.getLogger('lanyard.render.SurfaceImage');

    /**
     * @private
     * @type {lanyard.geom.Extent}
     */
    this.extent = null;

    /**
     * @private
     * @type {number}
     */
    this.extentVerticalExaggertion = Number.MIN_VALUE; // VE used to calculate the extent

    /**
     * @private
     * @type {number}
     */
    this.opacity = 1.0;

    /**
     * @private
     * @type {lanyard.util.Texture|null}
     */
    this.textureData = null;

    /**
     * @private
     * @type {boolean}
     */
    this.loaded = false; // True when image is loading or downloading

    /**
     * @private
     * @type {boolean}
     */
    this.hasProblem = false; // True when download failed

    /**
     * @private
     * @type {String}
     */
    this.imageSource = imageSource;

    /**
     * @private
     * @type {lanyard.geom.Sector}
     */
    this.sector = sector;

    /**
     * @private
     * @type {lanyard.geom.Position}
     */
    this.referencePosition = new lanyard.geom.Position(sector.getCentroid(), 0);

    /**
     * @private
     * @type {lanyard.Layer}
     */
    this.layer = layer;

    if (!this.imageSource) {
        this._logger.severe("The image source is null.");
    }

    if (!this.sector) {
        this._logger.severe("The sector is null.");
    }
};

/**
 * Sets the sector for the image allowing to change its size or position.
 *
 * @param {lanyard.geom.Sector} sector the new sector.
 */
lanyard.render.SurfaceImage.prototype.setSector = function (sector) {
    if (!sector) {
        this._logger.severe("The sector was null.");
    }

    this.sector = sector;
    this.extent = null;
};

/**
 * Returns if the image is loaded.
 *
 * @return {boolean} true if the image data is loaded.
 */
lanyard.render.SurfaceImage.prototype.isLoaded = function () {
    return this.loaded;
};

/**
 * Returns whether there was any problem loading texture data.
 *
 * @return {boolean} true if image data failed to download - or other problems.
 */
lanyard.render.SurfaceImage.prototype.hasProblem = function () {
    return this.hasProblem;
};

/**
 * Get the extent of the image.
 *
 * @param {lanyard.DrawContext} dc the current draw context.
 * @return {lanyard.geom.Extent} the extent of the image.
 */
lanyard.render.SurfaceImage.prototype.getExtent = function (dc) {
    if (!dc) {
        this._logger.severe("The draw context is null.");
    }

    if (!this.extent || this.extentVerticalExaggertion !== dc.getVerticalExaggeration()) {
        this.extent = dc.getGlobe().computeBoundingCylinder(dc.getVerticalExaggeration(), this.sector);
        this.extentVerticalExaggertion = dc.getVerticalExaggeration();
    }

    return this.extent;
};

/**
 * Initialize the texture for the image.
 *
 * @param {lanyard.DrawContext} dc the current draw context.
 * @return {lanyard.util.Texture} the texture.
 */
lanyard.render.SurfaceImage.prototype.initializeTexture = function (dc) {
    this._logger.fine("Initializing a texture.");

    if (!dc) {
        this._logger.severe("The draw context was null.");
    }

    /** @type {*} */
    var gl = dc.getGL();

    /** @type {lanyard.render.SurfaceImage} */
    var thix = this;

    /** @type {lanyard.util.Texture} */
    var surfaceTexture = new lanyard.util.Texture(dc.getGL());

    /** @type {Image} */
    var surfaceImage = new Image();

    surfaceImage.onload = function () {
        thix._logger.fine("Loaded image at: " + thix.imageSource);

        surfaceTexture.bind();
        surfaceTexture.setImage(surfaceImage);

        surfaceTexture.setTexParameteri(gl.TEXTURE_MIN_FILTER, gl.LINEAR); //_MIPMAP_LINEAR);
        surfaceTexture.setTexParameteri(gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        surfaceTexture.setTexParameteri(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        surfaceTexture.setTexParameteri(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        surfaceTexture.createMipmap();

        thix.isLoaded = true;
        thix.textureData = surfaceTexture;
    };

    surfaceImage.onerror = function () {
        thix._logger.warning("An image failed to load from: " + thix.imageSource);
        thix.hasProblem = true;
    };

    surfaceImage.onabort = function () {
        thix._logger.warning("An image load was aborted: " + thix.imageSource);
        thix.hasProblem = true;
    };

    // Fire it off
    surfaceImage.src = this.imageSource;  

    return surfaceTexture;
};

/**
 * Bind the surface image to the current context.
 *
 * @param {lanyard.DrawContext} dc the current draw context.
 * @return {boolean} if the bind was a success.
 */
lanyard.render.SurfaceImage.prototype.bind = function (dc) {
    this._logger.fine("Surface image bind was called.");

    if (!dc) {
        this._logger.severe("The draw context is null.");
    }

    /** @type {lanyard.util.Texture} */
    var t = this.textureData;

    if (!t) {
        t = this.initializeTexture(dc);

        if (t) {
            return true; // texture was bound during initialization.
        }
    }

    if (t) {
        t.bind();
        return true;
    }

    // t was null or not bound
    return false;
};

/**
 * Apply an internal transform.
 *
 * @param {lanyard.DrawContext} dc the current draw context.
 */
lanyard.render.SurfaceImage.prototype.applyInternalTransform = function (dc) {
    if (!dc) {
        this._logger.severe("The draw context was null.");
    }

    /** @type {lanyard.util.Texture} */
    var t = this.textureData;

    if (!t) {
        t = this.initializeTexture(dc);
    }

    if (t) {
        /*** FIXME

        if (t.getMustFlipVertically()) {
            var gl = dc.getGL();
            gl.matrixMode(GL.GL_TEXTURE);
            gl.loadIdentity();
            gl.scaled(1, -1, 1);
            gl.translated(0, -1, 0);
        }

        ***/
    }
};

/**
 * Render the surface image tile.
 *
 * @param {lanyard.DrawContext} dc the current draw context.
 */
lanyard.render.SurfaceImage.prototype.render = function (dc) {
    this._logger.fine("The surface image render was called.");

    if (!dc) {
        this._logger.severe("The draw context is null.");
    }

    if (!this.sector.intersects(dc.getVisibleSector())) {
        return;
    }

    /** @type {*} */
    var gl = dc.getGL();

    if (!dc.isPickingMode()) {

        /** @type {number} */
        var opacity = this.layer ? this.opacity * this.layer.opacity : this.opacity;

        if (opacity < 1) {
            //gl.pushAttrib(gl.COLOR_BUFFER_BIT | gl.GL_POLYGON_BIT | gl.GL_CURRENT_BIT);
            //gl.color4d(1.0, 1.0, 1.0, opacity);
        } else {
            //gl.pushAttrib(gl.COLOR_BUFFER_BIT | gl.GL_POLYGON_BIT);
        }

        //gl.enable(gl.BLEND);
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    } else {
        gl.pushAttrib(gl.POLYGON_BIT);
    }

    gl.polygonMode(gl.FRONT, gl.FILL);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);

    dc.getSurfaceTileRenderer().renderTile(dc, this);

    gl.glPopAttrib();
};

/**
 * Move the image to a new location.
 *
 * @param {lanyard.geom.Position} position the new position to move to.
 */
lanyard.render.SurfaceImage.prototype.move = function (position) {
    if (!position) {
        this._logger.severe("The position was null.");
    }

    // Increase the current sector position.

    /** @type {number} */
    var minlat = this.sector.getMinLatitude().getDegrees();

    /** @type {number} */
    var minlon = this.sector.getMinLongitude().getDegrees();

    /** @type {number} */
    var maxlat = this.sector.getMaxLatitude().getDegrees();

    /** @type {number} */
    var maxlon = this.sector.getMaxLongitude().getDegrees();

    /** @type {number} */
    var poslat = position.getLatitude().getDegrees();

    /** @type {number} */
    var poslon = position.getLongitude().getDegrees();

    minlat += poslat;
    maxlat += poslat;
    minlon += poslon;
    maxlon += poslon;

    // Check new values don't exceed the limits.
    if (maxlat > 90 || maxlat < -90 || minlat > 90 || minlat < -90 ||
            maxlon > 180 || maxlon < -180 || minlon > 180 || minlon < -180) {
        return;
    }

    this.referencePosition.add(position);
    this.setSector(lanyard.geom.Sector.prototype.fromDegrees(minlat, maxlat, minlon, maxlon));
};

/**
 * Move the image to a new position.
 *
 * @param {lanyard.geom.Position} position the new position to move to.
 */
lanyard.render.SurfaceImage.prototype.moveTo = function (position) {
    if (!position) {
        this._logger.severe("The new position was null.");
    }

    // Calculate new position

    /** @type {number} */
    var poslat = position.getLatitude().getDegrees();

    /** @type {number} */
    var poslon = position.getLongitude().getDegrees();

    /** @type {number} */
    var halfDeltaLat = this.sector.getDeltaLatDegrees() / 2;

    /** @type {number} */
    var halfDeltaLon = this.sector.getDeltaLonDegrees() / 2;

    /** @type {number} */
    var minlat = poslat - halfDeltaLat;

    /** @type {number} */
    var maxlat = poslat + halfDeltaLat;

    /** @type {number} */
    var minlon = poslon - halfDeltaLon;

    /** @type {number} */
    var maxlon = poslon + halfDeltaLon;

    // Check new values don't exceed the limits.
    if (maxlat > 90 || maxlat < -90 || minlat > 90 || minlat < -90 ||
            maxlon > 180 || maxlon < -180 || minlon > 180 || minlon < -180) {
        return;
    }

    this.referencePosition = position;
    this.setSector(lanyard.geom.Sector.prototype.fromDegrees(minlat, maxlat, minlon, maxlon));
};

/**
 * Get the reference position of this surface image.
 *
 * @return {lanyard.geom.Position} the reference position of this surface image.
 */
lanyard.render.SurfaceImage.prototype.getReferencePosition = function () {
    return this.referencePosition;
};

/* EOF */