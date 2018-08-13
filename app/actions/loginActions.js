export const EMAIL_INPUT_CHANGE = 'EMAIL_INPUT_CHANGE';
export const PASSWORD_INPUT_CHANGE = 'PASSWORD_INPUT_CHANGE';
export const LOGIN_BUTTON_PRESSED = 'LOGIN_BUTTON_PRESSED';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGOUT = 'LOGOUT';

export const emailInputChanged = email => ({
  type: EMAIL_INPUT_CHANGE,
  payload: {
    email,
  },
});

export const passwordInputChanged = password => ({
  type: PASSWORD_INPUT_CHANGE,
  payload: {
    password,
  },
});

export const loginButtonPressed = (email, password) => ({
  type: LOGIN_BUTTON_PRESSED,
  payload: {
    email,
    password,
  },
});

export const loginResponse = (success, fetchError, message) => ({
  type: LOGIN_RESPONSE,
  payload: {
    success,
    fetchError,
    message,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
