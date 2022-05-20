import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit';
import { commonAction, commonThunk } from './demo-redux-common';

// action
export const actionIncrement = createAction('increment');
export const actionDecrement = createAction('decrement');
export const actionIncrementPayload = createAction<number>('incrementPayload');
export const actionDecrementPayload = createAction<number>('decrementPayload');
// reducer
export const countReducer = createReducer({ value: 0 }, (builder) => {
  builder
    // action
    .addCase(actionIncrement, (state) => ({
      value: state.value + 1,
    }))
    .addCase(actionDecrement, (state) => ({
      value: state.value - 1,
    }))
    .addCase(actionIncrementPayload, (state, action) => {
      console.log(`
      Reducer.actionIncrementPayload
      state:[${state.value}]
      action:[${action.type}]
      action:[${action.payload}]
      `);
      return { ...state, value: state.value + action.payload };
    })
    .addCase(actionDecrementPayload, (state, action) => {
      console.log(`
      Reducer.actionDecrementPayload
      state:[${state.value}]
      action:[${action.type}]
      action:[${action.payload}]
      `);
      return { ...state, value: state.value - action.payload };
    })
    // commonAction
    .addCase(commonAction, (state, action) => {
      console.log(`Reducer.commonAction:${JSON.stringify(state)}`);
      console.log(`Reducer.commonAction:${JSON.stringify(action)}`);
    })
    // commonThunk
    .addCase(commonThunk.pending, (state, action) => {
      console.log(`Reducer.commonThunk.pending:${JSON.stringify(state)}`);
      console.log(`Reducer.commonThunk.pending:${JSON.stringify(action)}`);
    })
    .addCase(commonThunk.fulfilled, (state, action) => {
      console.log(`Reducer.commonThunk.fulfilled:${JSON.stringify(state)}`);
      console.log(`Reducer.commonThunk.fulfilled:${JSON.stringify(action)}`);
    })
    .addCase(commonThunk.rejected, (state, action) => {
      console.log(`Reducer.commonThunk.rejected:${JSON.stringify(state)}`);
      console.log(`Reducer.commonThunk.rejected:${JSON.stringify(action)}`);
    });
});
