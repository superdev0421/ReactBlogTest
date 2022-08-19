import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tournamentReducer from '../reducers/tournamentReducer';

export const store = configureStore({
  reducer: {
    users: tournamentReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
