import reducer from '../../app/reducers/loginReducers';
import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  LOGIN_BUTTON_PRESSED,
  LOGIN_RESPONSE,
  LOGOUT,
} from '../../app/actions/loginActions';

describe('Login Reducer Tests', () => {
  it('should update email', () => {
    const email = 'dexter@yahoo.com';
    const action = {
      type: EMAIL_INPUT_CHANGE,
      payload: {
        email,
      },
    };

    const actual = reducer(undefined, action);
    const expected = {
      isAuthenticated: false,
      email: 'dexter@yahoo.com',
      password: '',
      isFetching: false,
      fetchError: null,
      message: '',
    };

    expect(actual).toEqual(expected);
  });

  it('should update password', () => {
    const password = '123456789';
    const action = {
      type: PASSWORD_INPUT_CHANGE,
      payload: {
        password,
      },
    };

    const actual = reducer(undefined, action);
    const expected = {
      isAuthenticated: false,
      email: '',
      password: '123456789',
      isFetching: false,
      fetchError: null,
      message: '',
    };

    expect(actual).toEqual(expected);
  });

  it('should request login', () => {
    const email = 'dexter@yahoo.com';
    const password = '123456789';
    const action = {
      type: LOGIN_BUTTON_PRESSED,
      payload: {
        email,
        password,
      },
    };

    const expected = {
      isAuthenticated: false,
      email: '',
      password: '',
      isFetching: true,
      fetchError: null,
      message: '',
    };

    const actual = reducer(undefined, action);

    expect(expected).toEqual(actual);
  });

  it('should handle login response', () => {
    const action = {
      type: LOGIN_RESPONSE,
      payload: {
        success: true,
        fetchError: null,
        message: '',
      },
    };

    const expected = {
      isAuthenticated: true,
      email: '',
      password: '',
      isFetching: false,
      fetchError: null,
      message: '',
    };

    const actual = reducer(undefined, action);

    expect(expected).toEqual(actual);
  });

  it('should handle logout', () => {
    const action = {
      type: LOGOUT,
    };

    const expected = {
      isAuthenticated: false,
      email: '',
      password: '',
      isFetching: false,
      fetchError: null,
      message: '',
    };

    const actual = reducer(undefined, action);

    expect(expected).toEqual(actual);
  });
});
