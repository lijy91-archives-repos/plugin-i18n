package org.blankapp.plugins.i18n;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

public class RNPluginI18nModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNPluginI18nModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNPluginI18n";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("deviceLocale", I18n.getDeviceLocale());
        constants.put("deviceCountry", I18n.getDeviceCountry());
        return constants;
    }
}
