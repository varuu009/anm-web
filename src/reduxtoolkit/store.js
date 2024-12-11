

import { configureStore } from '@reduxjs/toolkit';
import merchantDataReducer from "../reduxtoolkit/Slices/merchantdata";  // Your existing slice
import terminalsReducer from "../reduxtoolkit/Slices/terminalSlice"
import policyReducer from "../reduxtoolkit/Slices/policieSlice"
import threatSlice from "../reduxtoolkit/Slices/threats"
const store = configureStore({
  reducer: {
    merchantData: merchantDataReducer,
    terminals: terminalsReducer, 
    policies: policyReducer,
    threats:threatSlice
  },
});

export default store;

