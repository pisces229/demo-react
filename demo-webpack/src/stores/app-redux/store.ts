import { configureStore } from '@reduxjs/toolkit';
import { reducer as firstReducer } from './create-reducer';
import { reducer as secondReducer } from './create-slice';

// const combineReducer = combineReducers({
//   name: reducer,
// });
// store
export const store = configureStore({
  reducer: {
    firstReducer,
    secondReducer,
  },
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
