import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openResume: false,
    openTrack: true,
    openSearch: false,
    openAccount: false,
  },
  reducers: {
    setOpenResume: (state: any, action: PayloadAction<Boolean>) => {
      state.openResume = action.payload;
    },
    setOpenTrack: (state: any, action: PayloadAction<Boolean>) => {
      state.openTrack = action.payload;
    },
    setOpenSearch: (state: any, action: PayloadAction<Boolean>) => {
      state.openSearch = action.payload;
    },
    setOpenAccount: (state: any, action: PayloadAction<Boolean>) => {
      state.openAccount = action.payload;
    },
  },
});

export const {
  setOpenResume: setOpenResume,
  setOpenTrack: setOpenTrack,
  setOpenSearch: setOpenSearch,
  setOpenAccount: setOpenAccount,
} = menuSlice.actions;
export default menuSlice.reducer;
