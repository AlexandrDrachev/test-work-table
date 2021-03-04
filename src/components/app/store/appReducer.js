export const initialAppState = {
  loading: false,
  loaded: false,
  testRootReducer: 'rootReducer is work!',
  vendors: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'TEST_ROOT_REDUCER_SAGA':
      return {
        ...state,
        testRootReducer: action.payload,
      };
    case 'GET_VENDORS_SAGA':
      return {
        ...state,
        vendors: action.payload,
      };
    case 'ON_CHANGE_APP_LOADING_ACTION':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};