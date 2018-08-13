import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  LOGIN_BUTTON_PRESSED,
  LOGIN_RESPONSE,
  LOGOUT,
} from '../actions/loginActions';

const initialState = {
  isAuthenticated: false,
  email: '',
  password: '',
  isFetching: false,
  fetchError: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_INPUT_CHANGE:
      return {
        ...state,
        email: action.payload.email,
      };
    case PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        password: action.payload.password,
      };
    case LOGIN_BUTTON_PRESSED:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_RESPONSE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: action.payload.success,
        fetchError: action.payload.fetchError,
        message: action.payload.message,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
