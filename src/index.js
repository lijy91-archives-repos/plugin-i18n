import RNI18n from './RNI18n';

const get = (object, path) => {
  if (typeof object === 'object' && path) {
    return path
      .split(/[\.\["'\]]/) // eslint-disable-line
      .filter(Boolean)
      .reduce((acc, current) => acc && acc[current], object);
  }
  return object;
};

const i18nOptions = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  languages: {},
};

/**
 * Register Languages
 *
 * @param {*} languages - languages
 */
const register = (languages) => {
  Object.assign(i18nOptions.languages, languages);
};

/**
 * Register Language
 *
 * @param {*} locale - locale
 * @param {*} values - values
 */
const registerLanguage = (locale, values) => {
  Object.assign(i18nOptions.languages, {
    [locale]: values,
  });
};

/**
 * Use Locale
 *
 * @param {*} l - locale
 */
const useLocale = (l) => {
  i18nOptions.locale = l;
};

/**
 * Use Device Locale
 *
 */
const useDeviceLocale = () => {
  if (RNI18n) {
    const { deviceLocale } = RNI18n;
    useLocale(deviceLocale);
  } else {
    // eslint-disable-next-line
    console.warn('If you need to use `deviceLocale`, Please link `@blankapp/plugin-i18n` to the project first. \nhttps://blankapp.org/plugins/i18n.html');
  }
};

/**
 * Use Fallback Locale
 *
 * @param {*} l - fallbackLocale
 */
const useFallbackLocale = (l) => {
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
const t = (key, args = {}, defaultMessage) => {
  const {
    locale,
    fallbackLocale,
    languages,
  } = i18nOptions;

  let value = get(languages, `${locale}.${key}`);

  if (value === undefined) {
    value = get(languages, `${fallbackLocale}.${key}`);
  }

  if (value === undefined) {
    value = defaultMessage || `Missing ${locale}.${key}`;
  }

  if (args) {
    const keys = Object.keys(args);
    keys.forEach((argKey) => {
      const argValue = args[argKey];

      const regexp = new RegExp(`__${argKey}__`, 'g');
      value = value.replace(regexp, argValue);
    });
  }
  return value;
};

/**
 * select
 *
 * @example
 * const languageName = I18n.select({
 *   'en-US': 'English',
 *   'zh-Hans': '简体中文',
 * });
 * @param {*} obj - any
 */
const select = (obj) => {
  const { locale } = i18nOptions;
  return (locale in obj ? obj[locale] : obj.default);
};

const I18n = {
  i18nOptions,
  register,
  registerLanguage,
  useLocale,
  useDeviceLocale,
  useFallbackLocale,
  t,
  select,
};

export {
  I18n as default,
  t,
};
