import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './Market/Market';

const middlewares = [thunk];

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
