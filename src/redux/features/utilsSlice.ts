import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    backdrop: false,
    addModal: false,
    editModal: false,
  },
  reducers: {
    setBackdrop: (state: any, action: PayloadAction<Boolean>) => {
      state.backdrop = action.payload;
    },
    setAddModal: (state: any, action: PayloadAction<Boolean>) => {
      state.addModal = action.payload;
    },
    setEditModal: (state: any, action: PayloadAction<Boolean>) => {
      state.editModal = action.payload;
    },
  },
});

export const { setBackdrop, setAddModal, setEditModal } =
  utilsSlice.actions;
export default utilsSlice.reducer;
