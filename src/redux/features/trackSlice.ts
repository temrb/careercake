import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'track',
  initialState: {
    appliedContent: [],
    interviewContent: [],
    pendingContent: [],
    offerContent: [],
    rejectedContent: [],
  },
  reducers: {
    setAppliedContent: (state: any, action: PayloadAction<any>) => {
      state.appliedContent = action.payload;
    },
    setInterviewContent: (state: any, action: PayloadAction<any>) => {
      state.interviewContent = action.payload;
    },
    setPendingContent: (state: any, action: PayloadAction<any>) => {
      state.pendingContent = action.payload;
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
  setAppliedContent,
  setInterviewContent,
  setPendingContent,
  setOfferContent,
  setRejectedContent,
} = trackSlice.actions;
export default trackSlice.reducer;
