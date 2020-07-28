import React from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Console from './containers/Console';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/console" component={Console} />
      <Redirect to="/console" />
    </Switch>
  </Router>
);
