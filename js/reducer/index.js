import {combineReducers} from 'redux';
import {nameReducer} from './nameReducer';
import {userReducer} from './userReducer';

const rootReducer = combineReducers({
  nameReducer,
  userReducer,
});

export default rootReducer;
