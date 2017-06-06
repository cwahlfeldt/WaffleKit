//
// store file

import { createStore } from 'redux';
import counterApp from '../reducers';

const configureStore = () => (
  createStore(counterApp)
);

export default configureStore;
