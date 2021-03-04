import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import routes from '../../configs/routes';
import { testRootReducerAction } from '../../store/rootReducer';
import { getVendorsAction } from './store/appActions';
import Spinner from '../spinner';
import Home from '../home';

const App = () => {

  const dispatch = useDispatch();
  // const testString = useSelector((state) => state.appState.testRootReducer);
  const appState = useSelector((state) => state.appState);
  const { testRootReducer, loading } = appState;
  const testActionWork = (val) => dispatch(testRootReducerAction(val));

  useEffect(() => {
    !appState.vendors && dispatch(getVendorsAction());
  }, [appState.vendors, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      onClick={() => testActionWork('new value in testRootReducer field')}
      className="container mx-auto text-red-600"
    >
      <div>
        <Switch>
          {
            routes.map((route, idx) => {
              const { exact, path, component } = route;
              return <Route key={idx} exact={exact} path={path} component={component} />
            })
          }
        </Switch>
      </div>
    </div>
  );
};

export default App;
