import React, {Component} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import I18n, { t } from '@blankapp/plugin-i18n';
import RNI18n from '@blankapp/plugin-i18n/lib/RNI18n';

I18n.useDeviceLocale();

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePressUseDeviceLocale = this.handlePressUseDeviceLocale.bind(this);
  }

  handlePressUseDeviceLocale() {
    alert(JSON.stringify(RNI18n.deviceLocale));
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
      </View>
    );
  }
}

export default App;
