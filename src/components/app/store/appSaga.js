import { take, call, put, delay } from 'redux-saga/effects';
import ServiceApi from '../../../services/serviceApi';
import { onChangeAppLoadingAction, getVendorsSaga } from './appActions';

const serviceApi = new ServiceApi();
const { getVendors } = serviceApi;

export function* getVendorsWatcher() {
  while (true) {
    yield take('GET_VENDORS_ACTION');
    yield call(getVendorsWorker);
  }
}

function* getVendorsWorker() {
  yield put(onChangeAppLoadingAction(true));
  yield delay(2000);
  const vendors = yield call(getVendors);
  const vendorsEntity = vendors.reduce((acc, currentV, idx) => {

    const transformItemProps = (itemProps) => {
      return currentV[itemProps].reduce((acc, cur) => {
        acc[cur.propName] = {
          propName: cur.propName,
          value: cur.value,
        };
        return acc;
      }, {});
    }

    const newCompanyInfoProps = transformItemProps('companyInfoProps');
    const newCustomerCaseStudiesProps = transformItemProps('customerCaseStudiesProps');
    const newFeaturesProps = transformItemProps('featuresProps');
    const newFindingHistoryProps = transformItemProps('findingHistoryProps');

    const vendor = {
      ...currentV,
      companyInfoProps: newCompanyInfoProps,
      customerCaseStudiesProps: newCustomerCaseStudiesProps,
      featuresProps: newFeaturesProps,
      findingHistoryProps: newFindingHistoryProps,
    };

    acc.ids = [...acc.ids, idx];
    acc[idx] = vendor;

    return acc;
  }, { ids: [] });
  yield put(getVendorsSaga(vendorsEntity));
  yield put(onChangeAppLoadingAction(false));
}