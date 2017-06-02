//
// base client file

// import globals here
import './assets/styles/index.scss';
import 'bootstrap';

// all react and redux shit
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store';

const store = configureStore();

// render it all
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
