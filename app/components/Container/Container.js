import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
};

Container.defaultProps = {
  onPress: () => {
    Keyboard.dismiss();
  },
};

export default Container;
