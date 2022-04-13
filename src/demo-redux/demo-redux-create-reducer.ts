import { combineReducers, configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { commonAction } from './demo-redux-action';
import { apiDefaultTest } from './demo-redux-thunk';

// action
export const countActionIncrement = createAction('count/increment');
export const countActionDecrement = createAction('count/decrement');
export const countActionIncrementPayload = createAction<number>('count/incrementPayload');
export const countActionDecrementPayload = createAction<number>('count/decrementPayload');
// reducer
export const countReducer = createReducer({ value: 0 }, (builder) => {
  builder
    // action
    .addCase(countActionIncrement, (state) => {
      state.value++;
    })
    .addCase(countActionDecrement, (state) => {
      state.value--;
    })
    .addCase(countActionIncrementPayload, (state, action) => {
      state.value += action.payload;
    })
    .addCase(countActionDecrementPayload, (state, action) => {
      state.value -= action.payload;
    })
    // common
    .addCase(commonAction, (state, action) => {
      console.log(`countReducer.commonAction:${JSON.stringify(state)}`);
      console.log(`countReducer.commonAction:${JSON.stringify(action)}`);
    })
    // apiDefaultTest
    .addCase(apiDefaultTest.pending, (state, action) => {
      console.log(`countReducer.apiDefaultTest.pending:${JSON.stringify(state)}`);
      console.log(`countReducer.apiDefaultTest.pending:${JSON.stringify(action)}`);
    })
    .addCase(apiDefaultTest.fulfilled, (state, action) => {
      console.log(`countReducer.apiDefaultTest.fulfilled:${JSON.stringify(state)}`);
      console.log(`countReducer.apiDefaultTest.fulfilled:${JSON.stringify(action)}`);
    })
    .addCase(apiDefaultTest.rejected, (state, action) => {
      console.log(`countReducer.apiDefaultTest.rejected:${JSON.stringify(state)}`);
      console.log(`countReducer.apiDefaultTest.rejected:${JSON.stringify(action)}`);
    })
});
// rootReducer
export const rootReducer = combineReducers({
  count: countReducer,
});
// store
export const store = configureStore({
  reducer: {
    rootReducer
  }
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch
