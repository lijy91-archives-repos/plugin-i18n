package org.blankapp.i18n;

import java.util.HashMap;

public class I18nOptions {
    private String locale = "en-US";
    private String fallbackLocale = "en-US";
    private HashMap<String, HashMap<String, String>> languages = new HashMap<>();

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getFallbackLocale() {
        return fallbackLocale;
    }

    public void setFallbackLocale(String fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
    }

    public HashMap<String, HashMap<String, String>> getLanguages() {
        return languages;
    }

    public void setLanguages(HashMap<String, HashMap<String, String>> languages) {
        this.languages = languages;
    }
}
