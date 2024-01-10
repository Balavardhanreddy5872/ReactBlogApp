// src/reducers/index.js
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  accounts: accountReducer,
});

export default rootReducer;
