import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { LoginForm } from './Forms';
import { logout } from '../actions/loginActions';

class LoginScreen extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      Alert.alert(
        'Success',
        'Logged in',
        [
          { text: 'Log out', onPress: this.resetState },
        ],
      );
    }
  }

  resetState = () => {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <LoginForm />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(mapStateToProps)(LoginScreen);
