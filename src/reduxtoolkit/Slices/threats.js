// src/redux/threatSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchThreats = createAsyncThunk(
  'threats/fetchThreats',
  async () => {
    const response = await fetch('http://ec2-65-0-85-78.ap-south-1.compute.amazonaws.com:8083/api/ina-ams-threat/getAllThreats'); 
    if (!response.ok) {
      throw new Error('Failed to fetch threats');
    }

    const data = await response.json();
    return data;
  }
);

const threatSlice = createSlice({
  name: 'threats',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchThreats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchThreats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default threatSlice.reducer;
