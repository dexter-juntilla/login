import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { LOGIN_BUTTON_PRESSED, loginResponse } from '../actions/loginActions';

/**
 * Simulate login
 */
export function* loginRequest() {
  yield delay(2000);
  yield put(loginResponse(true, null, ''));
}

export default function* rootSaga() {
  yield takeEvery(LOGIN_BUTTON_PRESSED, loginRequest);
}
