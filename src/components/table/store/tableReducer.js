export const initialTableState = {
  loading: false,
  tableData: {
    ids: [],
  },
};

export const tableReducer = (state, action) => {
  switch (action.type) {

    case 'ON_CHANGE_LOADING_TABLE_ACTION':
      return {
        ...state,
        loading: action.payload,
      };

    case 'ADD_NEW_VENDOR_SAGA':
      return {
        ...state,
        tableData: action.payload,
      };

    case 'REMOVE_VENDOR_SAGA':
      return {
        ...state,
        tableData: action.payload,
      };

    default:
      return state;
  }
};
