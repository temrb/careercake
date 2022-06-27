import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    reset: false,
    signUp: true,
  },
  reducers: {
    setReset: (state: any, action: PayloadAction<Boolean>) => {
      state.reset = action.payload;
    },
    setSignUp: (state: any, action: PayloadAction<Boolean>) => {
      state.signUp = action.payload;
    },
  },
});

export const { setReset, setSignUp } = authSlice.actions;
export default authSlice.reducer;
