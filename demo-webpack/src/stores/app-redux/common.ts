import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const commonAction = createAction('common/action', (value: string) => {
  return {
    payload: value,
  };
});

export const commonThunk = createAsyncThunk(
  'commonThunk',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (postData: string, thunkAPI: unknown) => {
    return await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        // resolve('commonThunk');
        reject('commonThunk');
      }, 2000);
    });
  },
);
