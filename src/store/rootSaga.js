import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    testRootSaga(),
  ]);
}

function* testRootSaga() {
  yield console.log(`rootSaga is work!`);
}

export default rootSaga;