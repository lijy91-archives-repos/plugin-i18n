package org.blankapp.plugins.i18n;

import android.content.Context;
import android.os.Build;

import java.util.HashMap;
import java.util.Locale;

public class I18n {
    private static Context reactApplicationContext;
    private static I18nOptions i18nOptions = new I18nOptions();

    public static void init(Context context) {
        I18n.reactApplicationContext = context;
    }

    private static String toCompatibleIOSLanguageTag(String languageTag) {
        HashMap<String, String> compatibleIOSLanguageTags = new HashMap<>();

        // makeCompatibleIOSLanguageTags
        compatibleIOSLanguageTags.put("az-AZ", "az-Latn-AZ");
        compatibleIOSLanguageTags.put("bs-BA", "bs-Latn-BA");
        compatibleIOSLanguageTags.put("en-POSIX", "en-US-POSIX");
        compatibleIOSLanguageTags.put("ms-BN", "ms-Arab-BN");
        compatibleIOSLanguageTags.put("ms-MY", "ms-Arab-MY");
        compatibleIOSLanguageTags.put("pa-PK", "pa-Arab-PK");
        compatibleIOSLanguageTags.put("pa-IN", "pa-Guru-IN");
        compatibleIOSLanguageTags.put("shi-MA", "shi-Tfng-MA");
        compatibleIOSLanguageTags.put("sr-BA", "sr-Latn-BA");
        compatibleIOSLanguageTags.put("sr-ME", "sr-Latn-ME");
        compatibleIOSLanguageTags.put("sr-RS", "sr-Latn-RS");
        compatibleIOSLanguageTags.put("sr-XK", "sr-Latn-XK");
        compatibleIOSLanguageTags.put("uz-AF", "uz-Arab-AF");
        compatibleIOSLanguageTags.put("uz-UZ", "uz-Latn-UZ");
        compatibleIOSLanguageTags.put("vai-LR", "vai-Vaii-LR");
        compatibleIOSLanguageTags.put("yue-CN", "yue-Hans-CN");
        compatibleIOSLanguageTags.put("yue-HK", "yue-Hant-HK");
        compatibleIOSLanguageTags.put("zh-CN", "zh-Hans-CN");
        compatibleIOSLanguageTags.put("zh-HK", "zh-Hant-HK");
        compatibleIOSLanguageTags.put("zh-MO", "zh-Hant-MO");
        compatibleIOSLanguageTags.put("zh-SG", "zh-Hans-SG");
        compatibleIOSLanguageTags.put("zh-TW", "zh-Hant-TW");
        // makeCompatibleIOSLanguageTags

        if (compatibleIOSLanguageTags.containsKey(languageTag)) {
            return compatibleIOSLanguageTags.get(languageTag);
        }
        return languageTag;
    }

    public static String getDeviceLocale() {
        Locale locale;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            locale = reactApplicationContext.getResources().getConfiguration().getLocales().get(0);
        } else {
            locale = reactApplicationContext.getResources().getConfiguration().locale;
        }

        String languageTag;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            languageTag = locale.toLanguageTag();
        } else {
            StringBuilder builder = new StringBuilder();
            builder.append(locale.getLanguage());
            if (locale.getCountry() != null) {
                builder.append("-");
                builder.append(locale.getCountry());
            }
            languageTag = builder.toString();
        }

        return toCompatibleIOSLanguageTag(languageTag);
    }

    public static String getDeviceCountry() {
        Locale current;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            current = reactApplicationContext.getResources().getConfiguration().getLocales().get(0);
        } else {
            current = reactApplicationContext.getResources().getConfiguration().locale;
        }

        return current.getCountry();
    }
}
