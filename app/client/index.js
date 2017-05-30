//
// base client file

// import globals here
import './assets/styles/index.scss';
import 'bootstrap';

// all react and redux shit
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
import store from './store';

// render it all
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
