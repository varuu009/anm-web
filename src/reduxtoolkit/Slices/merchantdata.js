// src/features/merchantDataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk to fetch data
export const fetchMerchantData = createAsyncThunk(
  'merchantData/fetchMerchantData',
  async (merchantId) => {
    const apiUrl = 'http://ec2-65-0-85-78.ap-south-1.compute.amazonaws.com:8083/api/ina-ams-event/search';
    const requestData = {
      criteria: {
        searchBy: {
          merchantId,
        },
      },
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Error: ${error.message}`);
    }

    return response.json();
  }
);

// Define the slice
const merchantDataSlice = createSlice({
  name: 'merchantData',
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMerchantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMerchantData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMerchantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default merchantDataSlice.reducer;
