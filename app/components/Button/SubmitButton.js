import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const SubmitButton = (props) => {
  const {
    text,
    onPress,
    disabled,
    isLoading,
  } = props;

  const wrapperStyles = [
    styles.wrapper,
    disabled ? styles.buttonDisabled : styles.buttonEnabled,
  ];

  /**
   * ActivityIndicator does not work if animating prop has initial value of false.
   * This is the workaround
   */
  const loaderStyles = [
    styles.loader,
    { opacity: isLoading ? 1 : 0 },
  ];

  return (
    <TouchableOpacity
      underlayColor="#fff"
      activeOpacity={disabled ? 1 : 0.5}
      disabled={disabled}
      style={styles.container}
      onPress={onPress}
    >
      <View style={wrapperStyles}>
        <ActivityIndicator
          style={loaderStyles}
          size="large"
          color="#0000ff"
        />
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default SubmitButton;
