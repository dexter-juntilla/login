import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('./images/logo.png')}
      resizeMode="contain"
    />
  </View>
);

export default Logo;
