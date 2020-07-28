import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NotFound from '@/components/NotFound';

const AsyncAccount = new Loadable({
  loader: () => import(/* webpackChunkName: "account" */ './Account'),
  loading: () => [],
});

const ConsoleIndex = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      {<Route exact path={url} render={() => <Redirect to={'/console/account'} />} />}
      <Route path={`${url}/account`} component={AsyncAccount} />
      {<Route component={NotFound} />}
    </Switch>
  );
};

export default ConsoleIndex;
