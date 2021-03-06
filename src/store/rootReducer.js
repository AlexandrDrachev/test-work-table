import { initialAppState, appReducer } from '../components/app/store/appReducer';
import { initialTableState, tableReducer } from '../components/table/store/tableReducer';

const initialState = {
  appState: initialAppState,
  tableState: initialTableState,
};

const rootReducer = (state = initialState, action) => {

  const { appState, tableState } = state;

  return {
    appState: appReducer(appState, action),
    tableState: tableReducer(tableState, action),
  };
};

export default rootReducer;
