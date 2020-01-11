// sagas
import { put, takeLatest, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { push } from 'connected-react-router';

// action creators
import { SessionTypes, loginSuccess, loginFailure } from './actions';

// services
import { login } from './services';

// types
import { LoginRequestAction } from './actions';

// workers
function* loginWorker(values: LoginRequestAction): SagaIterator {
  try {
    const { payload } = values;
    const { email, password } = payload;

    const data = yield call(login, email, password);

    yield put(loginSuccess(data));

    yield put(push('/dashboard'));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

// watchers
export function* loginWatcher(): SagaIterator {
  yield takeLatest(SessionTypes.LOG_IN_REQUEST, loginWorker);
}
