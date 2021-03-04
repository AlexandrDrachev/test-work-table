

const initialState = {
  testRootReducer: 'rootReducer is work!',
};

const rootReducer = (state = initialState, action) => {
  console.log('state: ', state);
  console.log('action: ', action.type);
  return state;
};

export default rootReducer;
