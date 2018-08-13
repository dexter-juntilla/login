import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const InputWithValidation = (props) => {
  const {
    name,
    isValid,
    secureTextEntry,
    text,
    errorText,
    textChanged,
    placeholder,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={(value) => { textChanged(name, value); }}
          placeholder={placeholder}
          value={text}
        />
      </View>
      <Text style={styles.errorText}>
        {isValid ? ' ' : errorText}
      </Text>
    </View>
  );
};

InputWithValidation.propTypes = {
  name: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  text: PropTypes.string,
  errorText: PropTypes.string,
  textChanged: PropTypes.func,
  placeholder: PropTypes.string,
};

InputWithValidation.defaultProps = {
  isValid: false,
  secureTextEntry: false,
  text: '',
  errorText: '',
  textChanged: () => { },
  placeholder: '',
};

export default InputWithValidation;
