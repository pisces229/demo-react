import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commonAction } from './demo-redux-action';
import { apiDefaultTest } from './demo-redux-thunk';

const initialState = {
  value: 0,
};
const slice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => ({
      value: state.value + 1,
    }),
    decrement: (state) => ({
      value: state.value - 1,
    }),
    incrementPayload: (state, action: PayloadAction<number>) => {
      console.log(`incrementPayload`);
      console.log(`state:[${state.value}]`);
      console.log(`action:[${action.type}]`);
      console.log(`action:[${action.payload}]`);
      return { ...state, value: state.value + action.payload };
    },
    decrementPayload: (state, action: PayloadAction<number>) => {
      console.log(`decrementPayload`);
      console.log(`state:[${state.value}]`);
      console.log(`action:[${action.type}]`);
      console.log(`action:[${action.payload}]`);
      return { ...state, value: state.value - action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(commonAction, (state, action) => {
        console.log(`countReducer.commonAction:${JSON.stringify(state)}`);
        console.log(`countReducer.commonAction:${JSON.stringify(action)}`);
      })
      // countApiDefaultTest
      .addCase(apiDefaultTest.pending, (state, action) => {
        console.log(
          `countReducer.apiDefaultTest.pending:${JSON.stringify(state)}`,
        );
        console.log(
          `countReducer.apiDefaultTest.pending:${JSON.stringify(action)}`,
        );
      })
      .addCase(apiDefaultTest.fulfilled, (state, action) => {
        console.log(
          `countReducer.apiDefaultTest.fulfilled:${JSON.stringify(state)}`,
        );
        console.log(
          `countReducer.apiDefaultTest.fulfilled:${JSON.stringify(action)}`,
        );
      })
      .addCase(apiDefaultTest.rejected, (state, action) => {
        console.log(
          `countReducer.apiDefaultTest.rejected:${JSON.stringify(state)}`,
        );
        console.log(
          `countReducer.apiDefaultTest.rejected:${JSON.stringify(action)}`,
        );
      });
  },
});
// reducer
export const countReducer = slice.reducer;
// action
export const {
  increment: countActionIncrement,
  decrement: countActionDecrement,
  incrementPayload: countActionIncrementPayload,
  decrementPayload: countActionDecrementPayload,
} = slice.actions;
