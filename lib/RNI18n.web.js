'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toCompatibleIOSLanguageTag = require('./toCompatibleIOSLanguageTag');

var _toCompatibleIOSLanguageTag2 = _interopRequireDefault(_toCompatibleIOSLanguageTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceLocale = (0, _toCompatibleIOSLanguageTag2.default)(navigator.language);

var RNI18n = {
  deviceLocale: deviceLocale
};

exports.default = RNI18n;