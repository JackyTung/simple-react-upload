import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Upload from '@/components/Upload';
import configureStore from '@/redux/stores/Account/configureStore';

const store = configureStore();

const UploadRoute = () => {
  const { url } = useRouteMatch();

  return (
    <Provider store={store}>
      <Switch>
        <Route path={url} component={Upload} />
        <Redirect from={url} to={url} />
      </Switch>
    </Provider>
  );
};

export default UploadRoute;
