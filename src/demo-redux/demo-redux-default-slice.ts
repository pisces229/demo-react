import { createSlice } from '@reduxjs/toolkit';
import { commonAction } from './demo-redux-action';
import { apiDefaultTest } from './demo-redux-thunk';

const initialState = {
  value: 0,
};
const slice = createSlice({
  name: 'default',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commonAction, (state, action) => {
        console.log(`defaultReducer.commonAction:${JSON.stringify(state)}`);
        console.log(`defaultReducer.commonAction:${JSON.stringify(action)}`);
      })
      // apiDefaultTest
      .addCase(apiDefaultTest.pending, (state, action) => {
        console.log(
          `defaultReducer.apiDefaultTest.pending:${JSON.stringify(state)}`,
        );
        console.log(
          `defaultReducer.apiDefaultTest.pending:${JSON.stringify(action)}`,
        );
      })
      .addCase(apiDefaultTest.fulfilled, (state, action) => {
        console.log(
          `defaultReducer.apiDefaultTest.fulfilled:${JSON.stringify(state)}`,
        );
        console.log(
          `defaultReducer.apiDefaultTest.fulfilled:${JSON.stringify(action)}`,
        );
      })
      .addCase(apiDefaultTest.rejected, (state, action) => {
        console.log(
          `defaultReducer.apiDefaultTest.rejected:${JSON.stringify(state)}`,
        );
        console.log(
          `defaultReducer.apiDefaultTest.rejected:${JSON.stringify(action)}`,
        );
      });
  },
});
// reducer
export const defaultReducer = slice.reducer;
