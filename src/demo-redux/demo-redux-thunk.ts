import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiDefaultTest = createAsyncThunk(
  'count/apiDefaultTest',
  async (postData: string, thunkAPI: {}) => {
    const response = await axios.get<string>(
      `https://localhost:44392/api/Default/Test`,
    );
    return response.data;
  },
);
