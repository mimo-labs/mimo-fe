// sagas
import { put, takeLatest, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

// action creators
import { SessionTypes, loginSuccess, loginFailure } from './actions';

// services
import { login } from './services';

// types
import { LoginRequestAction } from './actions';

// workers
function* loginWorker(values: LoginRequestAction): SagaIterator {
  try {
    // yield put(logInSuccess())
  } catch (error) {
    yield put(loginFailure(error));
  }
}

// watchers
export function* loginWatcher(): SagaIterator {
  yield takeLatest(SessionTypes.LOG_IN_REQUEST, loginWorker);
}

export const sagas = [loginWatcher];
