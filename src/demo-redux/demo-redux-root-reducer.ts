import { combineReducers } from 'redux';
import { countReducer } from './demo-redux-count-slice';
import { defaultReducer } from './demo-redux-default-slice';

export const rootReducer = combineReducers({
  default: defaultReducer,
  count: countReducer,
});
