import I18n, { t } from './index';

const testLanguages = {
  'en-GB': {
    hello: 'Hello world',
    welcome: 'Welcome, Mr. __ name__',
  },
  'zh-Hans': {
    hello: '你好，世界',
    welcome: '欢迎光临，__name__先生',
  },
};

it('I18n register correctly', () => {
  I18n.register(testLanguages);
  expect(I18n.i18nOptions.languages).toMatchObject(testLanguages);
});

it('I18n registerLanguage correctly', () => {
  const jaLanguage = {
    hello: 'こんにちは、世界',
    welcome: 'ようこそ、__name__さん',
  };
  I18n.registerLanguage('ja', jaLanguage);
  expect(I18n.i18nOptions.languages.ja).toMatchObject(jaLanguage);
});

it('I18n useLocale correctly', () => {
  expect(I18n.i18nOptions.locale).toEqual('en-US');
  I18n.useLocale('ja');
  expect(I18n.i18nOptions.locale).toEqual('ja');
});

it('I18n useFallbackLocale correctly', () => {
  I18n.useFallbackLocale('en-GB');
  expect(I18n.i18nOptions.fallbackLocale).toEqual('en-GB');
});

it('I18n t correctly', () => {
  I18n.useLocale('ja');
  const helloMessage = t('hello');
  expect(helloMessage).toEqual('こんにちは、世界');

  I18n.useLocale('zh-Hans');
  const welcomeMessage = t('welcome', { name: '张三' });
  expect(welcomeMessage).toEqual('欢迎光临，张三先生');

  const missingMessage = t('missing');
  expect(missingMessage).toEqual('Missing zh-Hans.missing');

  const defaultMessage = t('defaultMessage', null, 'This is defaultMessage');
  expect(defaultMessage).toEqual('This is defaultMessage');
});
