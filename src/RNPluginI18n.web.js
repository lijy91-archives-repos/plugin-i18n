import toCompatibleIOSLanguageTag from './toCompatibleIOSLanguageTag';

const deviceLocale = toCompatibleIOSLanguageTag(navigator.language);

const RNPluginI18n = {
  deviceLocale,
};

export default RNPluginI18n;
