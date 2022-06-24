import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

//import slice as reducer
import menuReducer from './features/menuSlice';
import utilsReducer from './features/utilsSlice';
import trackReducer from './features/trackSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    utils: utilsReducer,
    track: trackReducer,
    auth: authReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
