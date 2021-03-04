import { all, take, put } from 'redux-saga/effects';

import { testRootReducerSaga } from './rootReducer';
import { getVendorsWatcher } from "../components/app/store/appSaga";

function* rootSaga() {
  yield all([
    testRootSaga(),
    getVendorsWatcher(),
  ]);
}

function* testRootSaga() {
  yield console.log(`rootSaga is work!`);
  while (true) {
    const { payload } = yield take('TEST_ROOT_REDUCER_ACTION');
    yield put(testRootReducerSaga(payload));
  }
}

export default rootSaga;