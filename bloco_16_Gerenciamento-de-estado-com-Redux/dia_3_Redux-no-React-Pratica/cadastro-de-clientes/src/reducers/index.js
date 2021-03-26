import { combineReducers } from 'redux';
import setUserAndPassword from './loginReduce'

const rootReducer = combineReducers({
  setUserAndPassword,
});

export default rootReducer;
