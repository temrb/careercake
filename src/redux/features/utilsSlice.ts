import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    backdrop: false,
    addModal: false,
  },
  reducers: {
    setBackdrop: (state: any, action: PayloadAction<Boolean>) => {
      state.backdrop = action.payload;
    },
    setAddModal: (state: any, action: PayloadAction<Boolean>) => {
      state.addModal = action.payload;
    },
  },
});

export const { setBackdrop, setAddModal } = utilsSlice.actions;
export default utilsSlice.reducer;
