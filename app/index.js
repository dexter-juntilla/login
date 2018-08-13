import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $red: '#F00',
  $white: '#FFF',
  $black: '#000',
  $green: '#0F0',
  $purple: '#A020F0',
  $lightPurple: '#d896ff',
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
