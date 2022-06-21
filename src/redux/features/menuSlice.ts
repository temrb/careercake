import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openBuild: false,
    openTrack: true,
    openSearch: false,
    openAccount: false,
  },
  reducers: {
    setOpenBuild: (state: any, action: PayloadAction<Boolean>) => {
      state.openBuild = action.payload;
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
  setOpenBuild: setOpenBuild,
  setOpenTrack: setOpenTrack,
  setOpenSearch: setOpenSearch,
  setOpenAccount: setOpenAccount,
} = menuSlice.actions;
export default menuSlice.reducer;
