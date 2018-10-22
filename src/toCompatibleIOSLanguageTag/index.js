import compatibleIOSLanguageTags from './compatibleIOSLanguageTags.json';

const convert = locale => compatibleIOSLanguageTags[locale] || locale;

export default convert;
