'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var get = function get(object, path) {
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && path) {
    return path.split(/[\.\["'\]]/) // eslint-disable-line
    .filter(Boolean).reduce(function (acc, current) {
      return acc && acc[current];
    }, object);
  }
  return object;
};

var i18nOptions = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  languages: {}
};

/**
 * Register Languages
 *
 * @param {*} languages - languages
 */
var register = function register(languages) {
  Object.assign(i18nOptions.languages, languages);
};

/**
 * Register Language
 *
 * @param {*} locale - locale
 * @param {*} values - values
 */
var registerLanguage = function registerLanguage(locale, values) {
  Object.assign(i18nOptions.languages, _defineProperty({}, locale, values));
};

/**
 * Use Locale
 *
 * @param {*} l - locale
 */
var useLocale = function useLocale(l) {
  i18nOptions.locale = l;
};
/**
 * Use Fallback Locale
 *
 * @param {*} l - fallbackLocale
 */
var useFallbackLocale = function useFallbackLocale(l) {
  i18nOptions.fallbackLocale = l;
};

/**
 * t
 *
 * @example
 * t('helloWorld');
 *
 * @param {*} key - key
 * @param {*} args - args
 * @param {*} defaultMessage - defaultMessage
 */
var t = function t(key) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultMessage = arguments[2];
  var locale = i18nOptions.locale,
      fallbackLocale = i18nOptions.fallbackLocale,
      languages = i18nOptions.languages;


  var value = get(languages, locale + '.' + key);

  if (value === undefined) {
    value = get(languages, fallbackLocale + '.' + key);
  }

  if (value === undefined) {
    value = defaultMessage || 'Missing ' + locale + '.' + key;
  }

  if (args) {
    var keys = Object.keys(args);
    keys.forEach(function (argKey) {
      var argValue = args[argKey];

      var regexp = new RegExp('__' + argKey + '__', 'g');
      value = value.replace(regexp, argValue);
    });
  }
  return value;
};

var I18n = {
  i18nOptions: i18nOptions,
  register: register,
  registerLanguage: registerLanguage,
  useLocale: useLocale,
  useFallbackLocale: useFallbackLocale,
  t: t
};

exports.default = I18n;
exports.t = t;