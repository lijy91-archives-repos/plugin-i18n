import toCompatibleIOSLanguageTag from './toCompatibleIOSLanguageTag';

const deviceLocale = toCompatibleIOSLanguageTag(navigator.language);

const RNI18n = {
  deviceLocale,
};

export default RNI18n;
