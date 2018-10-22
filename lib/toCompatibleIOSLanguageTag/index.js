'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compatibleIOSLanguageTags = require('./compatibleIOSLanguageTags.json');

var _compatibleIOSLanguageTags2 = _interopRequireDefault(_compatibleIOSLanguageTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert = function convert(locale) {
  return _compatibleIOSLanguageTags2.default[locale] || locale;
};

exports.default = convert;