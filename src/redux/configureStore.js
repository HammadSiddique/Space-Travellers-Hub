import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: RocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk, logger));

export default store;
