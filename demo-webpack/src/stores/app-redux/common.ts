import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const commonAction = createAction('common/action', (value: string) => {
  return {
    payload: value,
  };
});

export const commonThunk = createAsyncThunk('commonThunk', async (postData: string, thunkAPI: any) => {
  return await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      // resolve('commonThunk');
      reject('commonThunk');
    }, 2000);
  });
});
