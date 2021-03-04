import { initialAppState, appReducer } from '../components/app/store/appReducer';

const initialState = {
  appState: initialAppState,
};

const rootReducer = (state = initialState, action) => {
  console.log('state: ', state);
  console.log('action: ', action.type);
  const { appState } = state;
  return {
    appState: appReducer(appState, action),
  };
};

export const testRootReducerAction = (value) => {
  return {
    type: 'TEST_ROOT_REDUCER_ACTION',
    payload: value,
  };
};

export const testRootReducerSaga = (value) => {
  return {
    type: 'TEST_ROOT_REDUCER_SAGA',
    payload: value,
  };
};

export default rootReducer;
