import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    reset: false,
  },
  reducers: {
    setReset: (state: any, action: PayloadAction<Boolean>) => {
      state.reset = action.payload
    },
  },
})

export const { setReset } = authSlice.actions
export default authSlice.reducer