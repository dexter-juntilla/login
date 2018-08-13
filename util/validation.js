import { isEmail } from 'validator';

export const isValidEmail = string => isEmail(string);

export const isValidPasswordFormat = string => string.length < 13 && string.length > 5;
