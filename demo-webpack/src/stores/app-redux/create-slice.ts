import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commonAction, commonThunk } from './common';

const slice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    actionIncrement: (state) => ({
      value: state.value + 1,
    }),
    actionDecrement: (state) => ({
      value: state.value - 1,
    }),
    actionIncrementPayload: (state, action: PayloadAction<number>) => {
      console.log(`
      Slice.actionIncrementPayload
      state:[${state.value}]
      action:[${action.type}]
      action:[${action.payload}]
      `);
      return { ...state, value: state.value + action.payload };
    },
    actionDecrementPayload: (state, action: PayloadAction<number>) => {
      console.log(`
      Slice.actionDecrementPayload
      state:[${state.value}]
      action:[${action.type}]
      action:[${action.payload}]
      `);
      return { ...state, value: state.value - action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // commonAction
      .addCase(commonAction, (state, action) => {
        console.log(`Slice.commonAction:${JSON.stringify(state)}`);
        console.log(`Slice.commonAction:${JSON.stringify(action)}`);
      })
      // commonThunk
      .addCase(commonThunk.pending, (state, action) => {
        console.log(`Slice.commonThunk.pending:${JSON.stringify(state)}`);
        console.log(`Slice.commonThunk.pending:${JSON.stringify(action)}`);
      })
      .addCase(commonThunk.fulfilled, (state, action) => {
        console.log(`Slice.commonThunk.fulfilled:${JSON.stringify(state)}`);
        console.log(`Slice.commonThunk.fulfilled:${JSON.stringify(action)}`);
      })
      .addCase(commonThunk.rejected, (state, action) => {
        console.log(`Slice.commonThunk.rejected:${JSON.stringify(state)}`);
        console.log(`Slice.commonThunk.rejected:${JSON.stringify(action)}`);
      });
  },
});
// action
export const {
  actionIncrement,
  actionDecrement,
  actionIncrementPayload,
  actionDecrementPayload,
} = slice.actions;
// reducer
export const reducer = slice.reducer;
