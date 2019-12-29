import { all } from 'redux-saga/effects';

// Sagas
import { loginWatcher } from 'modules/session/sagas';

export function* rootSaga() {
  yield all([loginWatcher()]);
}
