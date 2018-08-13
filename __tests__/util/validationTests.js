import {
  isValidEmail,
  isValidPasswordFormat,
} from '../../util/validation';

describe('validation tests', () => {
  it('should validate email', () => {
    expect(isValidEmail('dexter@email.com')).toBe(true);
    expect(isValidEmail('dexter@email.co')).toBe(true);
    expect(isValidEmail('dexter@email.c')).toBe(false);
    expect(isValidEmail('dexteremail.com')).toBe(false);
  });

  it('should validate password format', () => {
    expect(isValidPasswordFormat('12345')).toBe(false);
    expect(isValidPasswordFormat('123456')).toBe(true);
    expect(isValidPasswordFormat('123456789012')).toBe(true);
    expect(isValidPasswordFormat('1234567890123')).toBe(false);
  });
});
