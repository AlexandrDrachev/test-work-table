export const onChangeLoadingTableAction = (bool) => {
  return {
    type: 'ON_CHANGE_LOADING_TABLE_ACTION',
    payload: bool,
  };
};

export const addNewVendorAction = (id) => {
  return {
    type: 'ADD_NEW_VENDOR_ACTION',
    payload: id,
  };
};

export const addNewVendorSaga = (vendors) => {
  return {
    type: 'ADD_NEW_VENDOR_SAGA',
    payload: vendors,
  };
};

export const removeVendorAction = (id) => {
  return {
    type: 'REMOVE_VENDOR_ACTION',
    payload: id,
  };
};

export const removeVendorSaga = (vendors) => {
  return {
    type: 'REMOVE_VENDOR_SAGA',
    payload: vendors,
  };
};
