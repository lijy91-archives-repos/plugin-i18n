// import fs from 'fs';
import availableLocaleIdentifiers from './availableLocaleIdentifiers.json';

const makeCompatibleIOSLanguageTags = () => {
  const compatibleIOSLanguageTags = {};

  for (let i = 0; i < availableLocaleIdentifiers.length; i += 1) {
    const identifier = availableLocaleIdentifiers[i];
    const splittedIdentifier = identifier.split('_');

    if (splittedIdentifier.length > 2) {
      const language = splittedIdentifier[0];
      const country = splittedIdentifier[2];

      compatibleIOSLanguageTags[`${language}-${country}`] = identifier.replace(/_/g, '-');
    }
  }

  let javaCode = '';
  Object.keys(compatibleIOSLanguageTags).forEach((key) => {
    const compatibleIOSLanguageTag = compatibleIOSLanguageTags[key];
    javaCode = `${javaCode}\n        compatibleIOSLanguageTags.put("${key}", "${compatibleIOSLanguageTag}");`;
  });

  // const i18nSourcePath = 'android/src/main/java/org/blankapp/i18n/I18n.java';
  // let i18nSourceString = fs.readFileSync(i18nSourcePath).toString();

  console.log(javaCode);
  // console.log(JSON.stringify(compatibleIOSLanguageTags, null, 2));
};

makeCompatibleIOSLanguageTags();
