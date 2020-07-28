import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NotFound from '@/components/NotFound';

const AsyncUpload = new Loadable({
  loader: () => import(/* webpackChunkName: "upload" */ './Upload'),
  loading: () => [],
});

const ConsoleIndex = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      {<Route exact path={url} render={() => <Redirect to={'/console/upload'} />} />}
      <Route path={`${url}/upload`} component={AsyncUpload} />
      {<Route component={NotFound} />}
    </Switch>
  );
};

export default ConsoleIndex;
