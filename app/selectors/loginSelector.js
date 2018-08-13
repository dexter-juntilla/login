import { createSelector } from 'reselect';
import { isValidEmail, isValidPasswordFormat } from '../../util/validation';

const getEmail = state => state.login.email;
const getPassword = state => state.login.password;

export const isValidEmailInput = createSelector(
  [
    getEmail,
  ],
  email => isValidEmail(email),
);

export const isValidPasswordInput = createSelector(
  [
    getPassword,
  ],
  password => isValidPasswordFormat(password),
);

export const isValidFormInput = createSelector(
  [
    isValidEmailInput,
    isValidPasswordInput,
  ],
  (validEmail, validPassword) => validEmail && validPassword,
);
