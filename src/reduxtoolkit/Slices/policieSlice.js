// src/redux/policySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPolicies = createAsyncThunk(
  'policies/fetchPolicies',
  async () => {
    const response = await fetch('http://ec2-65-0-85-78.ap-south-1.compute.amazonaws.com:8083/api/ina-ams-policy/getAllPolicies');
    if (!response.ok) {
      throw new Error('Failed to fetch policies');
    }
    const data = await response.json();
    return data;
  }
);

const policySlice = createSlice({
  name: 'policies',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPolicies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default policySlice.reducer;
