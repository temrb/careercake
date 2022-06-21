import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    backdrop: false,
    modal: false,
  },
  reducers: {
    setBackdrop: (state: any, action: PayloadAction<Boolean>) => {
      state.backdrop = action.payload;
    },
    setModal: (state: any, action: PayloadAction<Boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { setBackdrop, setModal } = utilsSlice.actions;
export default utilsSlice.reducer;
