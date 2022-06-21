import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'track',
  initialState: {
    wishlistContent: [],
    appliedContent: [],
    interviewContent: [],
    offerContent: [],
    rejectedContent: [],
  },
  reducers: {
    setWishlistContent: (state: any, action: PayloadAction<any>) => {
      state.wishlistContent = action.payload;
    },
    setAppliedContent: (state: any, action: PayloadAction<any>) => {
      state.appliedContent = action.payload;
    },
    setInterviewContent: (state: any, action: PayloadAction<any>) => {
      state.interviewContent = action.payload;
    },
    setOfferContent: (state: any, action: PayloadAction<any>) => {
      state.offerContent = action.payload;
    },
    setRejectedContent: (state: any, action: PayloadAction<any>) => {
      state.rejectedContent = action.payload;
    },
  },
});

export const {
  setWishlistContent,
  setAppliedContent,
  setInterviewContent,
  setOfferContent,
  setRejectedContent,
} = trackSlice.actions;
export default trackSlice.reducer;
