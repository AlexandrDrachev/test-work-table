import { all } from 'redux-saga/effects';

import { getVendorsWatcher } from '../components/app/store/appSaga';
import { addNewVendorWatcher, removeVendorWatcher } from '../components/table/store/tableSaga';

function* rootSaga() {
  yield all([
    getVendorsWatcher(),
    addNewVendorWatcher(),
    removeVendorWatcher(),
  ]);
}

export default rootSaga;