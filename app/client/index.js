//
// base client file

import './assets/styles/index.scss';
import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
