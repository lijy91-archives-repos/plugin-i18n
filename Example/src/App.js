import React, { Component } from 'react';
import { Text, View } from 'react-native';
import I18n, { t } from '@blankapp/plugin-i18n';
import RNPluginI18n from '@blankapp/plugin-i18n/src/RNPluginI18n';

I18n.useDeviceLocale();

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePressUseDeviceLocale = this.handlePressUseDeviceLocale.bind(this);
  }

  handlePressUseDeviceLocale() {
    alert(JSON.stringify(RNPluginI18n.deviceLocale));
    alert(JSON.stringify(I18n.i18nOptions));
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>
          {t('hello_world')}
        </Text>
        <Text>
          {JSON.stringify(I18n.i18nOptions, null, 2)}
        </Text>
        <Text>
          {RNPluginI18n.deviceLocale}
        </Text>
      </View>
    );
  }
}

export default App;
