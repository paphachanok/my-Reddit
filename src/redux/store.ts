// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from './SubredditStore';

const store = configureStore({
  reducer: {
    subreddits: subredditReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
