import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'track',
  initialState: {
    categoryInput: 'Applied',
  },
  reducers: {
    setCategoryInput: (state: any, action: PayloadAction<string>) => {
      state.categoryInput = action.payload;
    },
    // setCategoryId: (state: any, action: any) => {
    //   state.categoryId = action.payload;
    // },
  },
});

export const { setCategoryInput } = trackSlice.actions;
export default trackSlice.reducer;
