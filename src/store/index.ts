import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { newsAPI } from 'store/queries';

import bookmark from 'store/features/bookmark';

const reducer = combineReducers({
  bookmark,
  [newsAPI.reducerPath]: newsAPI.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
