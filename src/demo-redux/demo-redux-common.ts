import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const commonAction = createAction('common/action', (value: string) => {
  return {
    payload: value,
  };
});

export const commonThunk = createAsyncThunk(
  'commonThunk',
  async (postData: string, thunkAPI: {}) => {
    const response = await axios.get<string>(`https://localhost:9100`);
    return response.data;
  },
);
