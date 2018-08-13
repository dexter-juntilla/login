import { isValidEmailInput, isValidPasswordInput, isValidFormInput } from '../../app/selectors/loginSelector';

describe('login selector tests', () => {
  it('should validate email', () => {
    expect(isValidEmailInput.resultFunc('')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@g')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@yahoo')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@yahoo.c')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@yahoo.c0')).toBe(false);
    expect(isValidEmailInput.resultFunc('dexter@yahoo.co')).toBe(true);
    expect(isValidEmailInput.resultFunc('dexter@yahoo.com')).toBe(true);
  });

  it('should validate password', () => {
    expect(isValidPasswordInput.resultFunc('')).toBe(false);
    expect(isValidPasswordInput.resultFunc('1')).toBe(false);
    expect(isValidPasswordInput.resultFunc('12')).toBe(false);
    expect(isValidPasswordInput.resultFunc('123')).toBe(false);
    expect(isValidPasswordInput.resultFunc('1234')).toBe(false);
    expect(isValidPasswordInput.resultFunc('12345')).toBe(false);
    expect(isValidPasswordInput.resultFunc('123456')).toBe(true);
    expect(isValidPasswordInput.resultFunc('1234567')).toBe(true);
    expect(isValidPasswordInput.resultFunc('123456789012')).toBe(true);
    expect(isValidPasswordInput.resultFunc('sd5asd54sas5')).toBe(true);
    expect(isValidPasswordInput.resultFunc('sd5asd5&^*&5')).toBe(true);
    expect(isValidPasswordInput.resultFunc('1234567890123')).toBe(false);
  });
});

it('should validate form', () => {
  expect(isValidFormInput.resultFunc(false, true)).toBe(false);
  expect(isValidFormInput.resultFunc(true, false)).toBe(false);
  expect(isValidFormInput.resultFunc(false, false)).toBe(false);
  expect(isValidFormInput.resultFunc(true, true)).toBe(true);
});
