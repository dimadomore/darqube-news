import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NewsItem } from 'common/types';

export interface BookmarkState {
  data: NewsItem[];
}

const initialState: BookmarkState = {
  data: [],
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    increment: (state) => {
      state.data = [];
    },
    incrementByAmount: (state, action: PayloadAction<NewsItem[]>) => {
      state.data = action.payload;
    },
  },
});

export const { increment, incrementByAmount } = bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
