import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import routes from '../../configs/routes';
import { getVendorsAction } from './store/appActions';
import Spinner from '../spinner';
import Header from '../header';

const App = () => {

  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);
  const { loading } = appState;
  const [ spin, setSpin ] = useState(false);

  useEffect(() => {
    !appState.vendors && dispatch(getVendorsAction());
  }, [appState.vendors, dispatch]);

  useEffect(() => {
    setSpin(loading);
  }, [loading]);

  if (spin) {
    return <Spinner />;
  }

  return (
    <div
      className="container mx-auto text-purple-700"
    >
      <div>
        <Header />
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
