import './i18n';

import React from 'react';
import { render } from 'react-dom';

import jss from 'jss';
import preset from 'jss-preset-default';

import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import * as serviceWorker from './serviceWorker';
import styles from './styles';

// create global styles
jss.setup(preset());
jss.createStyleSheet(styles(), { meta: 'global' }).attach();

render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
