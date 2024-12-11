import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTerminals = createAsyncThunk(
  'terminals/fetchTerminals',
  async () => {
    const response = await fetch('http://ec2-65-0-85-78.ap-south-1.compute.amazonaws.com:8081/api/ina-merchant-terminal/getAllTerminals');
  
    if (!response.ok) {
      throw new Error('Failed to fetch terminals');
    }
    return response.json();
  }
);

const terminalsSlice = createSlice({
  name: 'terminals',
  initialState: {
    terminals: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTerminals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTerminals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.terminals = action.payload;
      })
      .addCase(fetchTerminals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default terminalsSlice.reducer;
