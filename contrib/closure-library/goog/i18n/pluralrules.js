// Copyright 2010 The Closure Library Authors. All Rights Reserved
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Plural rules.
 *
 * This file is auto-generated.
 *
 * To reduce the file size (which may cause issues in some JS
 * developing environments), this file will only contain locales
 * that are usually supported by google products. This is defined as
 * closure_tier1_locales and will change (most likely addition)
 * over time.  Rest of the data can be found in another file named
 * "pluralrulesext.js", which will be generated at the
 * same time together with this file.
 *
 * Before checkin, this file could have been manually edited. This is
 * to incorporate changes before we could fix CLDR. All manual
 * modification must be documented in this section, and should be
 * removed after those changes land to CLDR.
 */

goog.provide('goog.i18n.pluralRules');


/**
 * Plural pattern keyword
 * @enum {string}
 */
goog.i18n.pluralRules.Keyword = {
  ZERO: 'zero',
  ONE: 'one',
  TWO: 'two',
  FEW: 'few',
  MANY: 'many',
  OTHER: 'other'
};


/**
 * Default plural select rule.
 * @param {number} n The count of items.
 * @return  {goog.i18n.pluralRules.Keyword} Default plural value.
 * @private
 */
goog.i18n.pluralRules.defaultSelect_ = function(n) {
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for ar locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.arSelect_ = function(n) {
  if (n == 0) {
    return goog.i18n.pluralRules.Keyword.ZERO;
  }
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 2) {
    return goog.i18n.pluralRules.Keyword.TWO;
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.MANY;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for en locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.enSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for fil locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.filSelect_ = function(n) {
  if (n == 0 || n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for fr locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.frSelect_ = function(n) {
  if (n >= 0 && n < 2) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for lv locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.lvSelect_ = function(n) {
  if (n == 0) {
    return goog.i18n.pluralRules.Keyword.ZERO;
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for ga locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.gaSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 2) {
    return goog.i18n.pluralRules.Keyword.TWO;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for ro locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.roSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for lt locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.ltSelect_ = function(n) {
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for hr locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.hrSelect_ = function(n) {
  if ((n % 10) == 1 && (n % 100) != 11) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  if ((n % 10) == 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.MANY;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for cs locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.csSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 2 || n == 3 || n == 4) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for pl locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.plSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for sl locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.slSelect_ = function(n) {
  if ((n % 100) == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if ((n % 100) == 2) {
    return goog.i18n.pluralRules.Keyword.TWO;
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for mt locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.mtSelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.MANY;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for mk locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.mkSelect_ = function(n) {
  if ((n % 10) == 1 && n != 11) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for cy locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.cySelect_ = function(n) {
  if (n == 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n == 2) {
    return goog.i18n.pluralRules.Keyword.TWO;
  }
  if (n == 8 || n == 11) {
    return goog.i18n.pluralRules.Keyword.MANY;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for lag locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.lagSelect_ = function(n) {
  if (n == 0) {
    return goog.i18n.pluralRules.Keyword.ZERO;
  }
  if (n > 0 && n < 2) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Plural select rules for shi locale
 *
 * @param {number} n The count of items.
 * @return {goog.i18n.pluralRules.Keyword} Locale specific plural value.
 * @private
 */
goog.i18n.pluralRules.shiSelect_ = function(n) {
  if (n >= 0 && n <= 1) {
    return goog.i18n.pluralRules.Keyword.ONE;
  }
  if (n >= 2 && n <= 10 && n == Math.floor(n)) {
    return goog.i18n.pluralRules.Keyword.FEW;
  }
  return goog.i18n.pluralRules.Keyword.OTHER;
};


/**
 * Selected plural rules by locale.
 */
goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;

if (goog.LOCALE == 'am') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.filSelect_;
}

if (goog.LOCALE == 'ar') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.arSelect_;
}

if (goog.LOCALE == 'bg') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'bn') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'ca') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'cs') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.csSelect_;
}

if (goog.LOCALE == 'da') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'de') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'de_AT' || goog.LOCALE == 'de-AT') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'de_CH' || goog.LOCALE == 'de-CH') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'el') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_AU' || goog.LOCALE == 'en-AU') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_GB' || goog.LOCALE == 'en-GB') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_IE' || goog.LOCALE == 'en-IE') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_IN' || goog.LOCALE == 'en-IN') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_SG' || goog.LOCALE == 'en-SG') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_US' || goog.LOCALE == 'en-US') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'en_ZA' || goog.LOCALE == 'en-ZA') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'es') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'et') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'eu') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'fa') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'fi') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'fil') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.filSelect_;
}

if (goog.LOCALE == 'fr') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.frSelect_;
}

if (goog.LOCALE == 'fr_CA' || goog.LOCALE == 'fr-CA') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.frSelect_;
}

if (goog.LOCALE == 'gl') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'gsw') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'gu') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'he') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'hi') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.filSelect_;
}

if (goog.LOCALE == 'hr') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.hrSelect_;
}

if (goog.LOCALE == 'hu') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'id') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'in') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'is') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'it') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'iw') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'ja') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'kn') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'ko') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'ln') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.filSelect_;
}

if (goog.LOCALE == 'lt') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.ltSelect_;
}

if (goog.LOCALE == 'lv') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.lvSelect_;
}

if (goog.LOCALE == 'ml') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'mo') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.roSelect_;
}

if (goog.LOCALE == 'mr') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'ms') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'mt') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.mtSelect_;
}

if (goog.LOCALE == 'nl') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'no') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'or') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'pl') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.plSelect_;
}

if (goog.LOCALE == 'pt') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'pt_BR' || goog.LOCALE == 'pt-BR') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'pt_PT' || goog.LOCALE == 'pt-PT') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'ro') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.roSelect_;
}

if (goog.LOCALE == 'ru') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.hrSelect_;
}

if (goog.LOCALE == 'sk') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.csSelect_;
}

if (goog.LOCALE == 'sl') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.slSelect_;
}

if (goog.LOCALE == 'sq') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'sr') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.hrSelect_;
}

if (goog.LOCALE == 'sv') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'sw') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'ta') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'te') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'th') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'tl') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.filSelect_;
}

if (goog.LOCALE == 'tr') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'uk') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.hrSelect_;
}

if (goog.LOCALE == 'ur') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.enSelect_;
}

if (goog.LOCALE == 'vi') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'zh') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'zh_CN' || goog.LOCALE == 'zh-CN') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'zh_HK' || goog.LOCALE == 'zh-HK') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

if (goog.LOCALE == 'zh_TW' || goog.LOCALE == 'zh-TW') {
  goog.i18n.pluralRules.select = goog.i18n.pluralRules.defaultSelect_;
}

