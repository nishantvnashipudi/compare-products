import { combineReducers } from 'redux';
import productState from './reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  productState
});

export default rootReducer;