export const getVendorsAction = () => {
  return {
    type: 'GET_VENDORS_ACTION',
  };
};

export const getVendorsSaga = (vendors) => {
  return {
    type: 'GET_VENDORS_SAGA',
    payload: vendors,
  };
};

export const onChangeAppLoadingAction = (bool) => {
  return {
    type: 'ON_CHANGE_APP_LOADING_ACTION',
    payload: bool,
  };
};