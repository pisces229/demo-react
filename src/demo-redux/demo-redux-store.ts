import { configureStore } from '@reduxjs/toolkit';
import { countReducer as createReducer } from './demo-redux-create-reducer';
import { countReducer as createSlice } from './demo-redux-create-slice';
// const combineReducer = combineReducers({
//   name: reducer,
// });
// store
export const store = configureStore({
  reducer: {
    createReducer,
    createSlice,
  },
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
