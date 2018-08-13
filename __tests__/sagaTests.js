import { put } from 'redux-saga/effects';
import { loginRequest } from '../app/config/sagas';
import { loginResponse } from '../app/actions/loginActions';

describe('saga tests', () => {
  it('', () => {
    const gen = loginRequest();

    const call1 = gen.next();
    expect(call1.done).toBe(false);

    const call2 = gen.next();

    expect(call2.value).toEqual(put(loginResponse(true, null, '')));
    expect(call2.done).toBe(false);
  });
});
