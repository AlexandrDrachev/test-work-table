import { take, call, put, select, delay } from 'redux-saga/effects';

import { addNewVendorSaga, onChangeLoadingTableAction, removeVendorSaga } from './tableActions';

export function* addNewVendorWatcher() {
  while (true) {
    const { payload } = yield take('ADD_NEW_VENDOR_ACTION');
    yield call(addNewVendorWorker, payload);
  }
}

function* addNewVendorWorker(id) {
  yield put(onChangeLoadingTableAction(true));
  const allVendors = yield select((state) => state.appState.vendors);
  let currentVendors = yield select((state) => state.tableState.tableData);
  const checkVendor = currentVendors.ids.some((idx) => idx === id);
  const idxVendor = !checkVendor && allVendors.ids.find((idx) => idx === id);
  const newVendor = {
    ...allVendors[idxVendor],
    loaded: true,
  };
  if (!checkVendor) {
    currentVendors.ids.push(idxVendor);
    currentVendors[idxVendor] = newVendor;
    yield put(addNewVendorSaga(currentVendors));
  }
  yield delay(750);
  yield put(onChangeLoadingTableAction(false));
}

export function* removeVendorWatcher() {
  while (true) {
    const { payload } = yield take('REMOVE_VENDOR_ACTION');
    yield call(removeVendorWorker, payload);
  }
}

function* removeVendorWorker(id) {
  yield put(onChangeLoadingTableAction(true));
  let currentVendors = yield select((state) => state.tableState.tableData);
  delete currentVendors[id];
  currentVendors['ids'] = currentVendors.ids.filter((idx) => idx !== id);
  yield put(removeVendorSaga(currentVendors));
  yield delay(750);
  yield put(onChangeLoadingTableAction(false));
}
