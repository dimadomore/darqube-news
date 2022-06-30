import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { NewsItem } from 'common/types';

const bookmarkAdapter = createEntityAdapter<NewsItem>({
  selectId: (bookmark) => bookmark.id,
});

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: bookmarkAdapter.getInitialState(),
  reducers: {
    removeOne: bookmarkAdapter.removeOne,
    toggleOne: (state, action) => {
      return [...state.ids].includes(action.payload.id)
        ? bookmarkAdapter.removeOne(state, {
            ...action,
            payload: action.payload.id,
          })
        : bookmarkAdapter.addOne(state, action);
    },
  },
});

export const { removeOne, toggleOne } = bookmarkSlice.actions;
export const bookmarkReducer = bookmarkSlice.reducer;
