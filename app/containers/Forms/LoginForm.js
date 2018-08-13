import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { InputWithValidation } from '../../components/InputText';
import { SubmitButton } from '../../components/Button';
import { emailInputChanged, passwordInputChanged, loginButtonPressed } from '../../actions/loginActions';
import { isValidEmailInput, isValidPasswordInput, isValidFormInput } from '../../selectors/loginSelector';

class LoginForm extends PureComponent {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    validEmail: PropTypes.bool,
    validPassword: PropTypes.bool,
    validFormInput: PropTypes.bool,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  textChanged = (name, text) => {
    switch (name) {
      case 'email':
        this.props.dispatch(emailInputChanged(text));
        break;
      case 'password':
        this.props.dispatch(passwordInputChanged(text));
        break;
      default:
    }
  }

  signInPressed = () => {
    this.props.dispatch(loginButtonPressed(this.props.email, this.props.password));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Email
        </Text>
        <InputWithValidation
          name="email"
          isValid={this.props.validEmail}
          textChanged={this.textChanged}
          text={this.props.email}
          placeholder="Input email address"
          errorText="not correct format for email"
        />
        <Text style={styles.label}>
          Password
        </Text>
        <InputWithValidation
          secureTextEntry
          name="password"
          isValid={this.props.validPassword}
          textChanged={this.textChanged}
          text={this.props.password}
          placeholder="Input password"
          errorText="please use at least 6 - 12 characters"
        />
        <SubmitButton
          isLoading={this.props.isFetching}
          disabled={!this.props.validFormInput}
          text="Sign In"
          onPress={this.signInPressed}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
  isFetching: state.login.isFetching,
  validEmail: isValidEmailInput(state),
  validPassword: isValidPasswordInput(state),
  validFormInput: isValidFormInput(state),
});

export default connect(mapStateToProps)(LoginForm);
