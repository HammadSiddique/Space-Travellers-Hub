import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { missionReducer } from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
