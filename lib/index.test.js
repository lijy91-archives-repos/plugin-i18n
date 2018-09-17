'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testLanguages = {
  'en-GB': {
    hello: 'Hello world',
    welcome: 'Welcome, Mr. __ name__'
  },
  'zh-Hans': {
    hello: '你好，世界',
    welcome: '欢迎光临，__name__先生'
  }
};

it('I18n register correctly', function () {
  _index2.default.register(testLanguages);
  expect(_index2.default.i18nOptions.languages).toMatchObject(testLanguages);
});

it('I18n registerLanguage correctly', function () {
  var jaLanguage = {
    hello: 'こんにちは、世界',
    welcome: 'ようこそ、__name__さん'
  };
  _index2.default.registerLanguage('ja', jaLanguage);
  expect(_index2.default.i18nOptions.languages.ja).toMatchObject(jaLanguage);
});

it('I18n useLocale correctly', function () {
  expect(_index2.default.i18nOptions.locale).toEqual('en-US');
  _index2.default.useLocale('ja');
  expect(_index2.default.i18nOptions.locale).toEqual('ja');
});

it('I18n useFallbackLocale correctly', function () {
  _index2.default.useFallbackLocale('en-GB');
  expect(_index2.default.i18nOptions.fallbackLocale).toEqual('en-GB');
});

it('I18n t correctly', function () {
  _index2.default.useLocale('ja');
  var helloMessage = (0, _index.t)('hello');
  expect(helloMessage).toEqual('こんにちは、世界');

  _index2.default.useLocale('zh-Hans');
  var welcomeMessage = (0, _index.t)('welcome', { name: '张三' });
  expect(welcomeMessage).toEqual('欢迎光临，张三先生');

  var missingMessage = (0, _index.t)('missing');
  expect(missingMessage).toEqual('Missing zh-Hans.missing');

  var defaultMessage = (0, _index.t)('defaultMessage', null, 'This is defaultMessage');
  expect(defaultMessage).toEqual('This is defaultMessage');
});