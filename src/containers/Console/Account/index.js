import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Profile from '@/components/Profile';
import configureStore from '@/redux/stores/Account/configureStore';

const store = configureStore();

const Account = () => {
  const { url } = useRouteMatch();

  return (
    <Provider store={store}>
      <Switch>
        <Route path={`${url}/profile`} component={Profile} />
        <Redirect from={url} to={`${url}/profile`} />
      </Switch>
    </Provider>
  );
};

export default Account;
