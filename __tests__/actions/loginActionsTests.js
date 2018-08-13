import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  LOGIN_BUTTON_PRESSED,
  LOGIN_RESPONSE,
  LOGOUT,
  emailInputChanged,
  passwordInputChanged,
  loginButtonPressed,
  loginResponse,
  logout,
} from '../../app/actions/loginActions';

describe('Login Action Tests', () => {
  it('should create actions to update email input', () => {
    const email = 'dexter@email.com';

    const actual = emailInputChanged(email);
    const expected = {
      type: EMAIL_INPUT_CHANGE,
      payload: {
        email,
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should create actions to update password input', () => {
    const password = 'password123';

    const actual = passwordInputChanged(password);
    const expected = {
      type: PASSWORD_INPUT_CHANGE,
      payload: {
        password,
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should create action to submit login form', () => {
    const email = 'dexter@email.com';
    const password = 'password123';

    const actual = loginButtonPressed(email, password);
    const expected = {
      type: LOGIN_BUTTON_PRESSED,
      payload: {
        email,
        password,
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should create action to handle login response', () => {
    const actual = loginResponse(true, null, '');
    const expected = {
      type: LOGIN_RESPONSE,
      payload: {
        success: true,
        fetchError: null,
        message: '',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should create action to reset the state', () => {
    const actual = logout();
    const expected = {
      type: LOGOUT,
    };

    expect(actual).toEqual(expected);
  });
});
