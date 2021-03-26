import { createStore, combineReducers } from 'redux';
import { formReducers } from '../reducers';

const rootReducer = combineReducers({
  formReducers,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
