import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from 'store';
import { NewsItem } from 'common/types';
import { filterByTextInKeys } from 'common/utils';
import { PER_PAGE_NUMBER } from 'common/constants';

const bookmarkAdapter = createEntityAdapter<NewsItem>({
  selectId: (bookmark) => bookmark.id,
});

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: bookmarkAdapter.getInitialState({ perPage: PER_PAGE_NUMBER }),
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

export const selectBookmarkIds = (state: RootState) => state.bookmark.ids;
export const selectFilteredPaginatedBookmarks = (
  searchValue: string,
  currentPage: number,
) =>
  createSelector(
    (state: RootState) => state.bookmark.entities,
    (entities) => {
      const bookmarks = Object.values(entities);

      const startIndex = PER_PAGE_NUMBER * (currentPage - 1);
      const endIndex = Math.min(
        currentPage * PER_PAGE_NUMBER,
        bookmarks.length,
      );

      const filteredBookmarks =
        searchValue && searchValue.length > 1
          ? filterByTextInKeys(bookmarks as NewsItem[], searchValue, [
              'headline',
              'summary',
            ])
          : bookmarks;

      return {
        data: filteredBookmarks.slice(startIndex, endIndex),
        filteredCount: filteredBookmarks.length,
      };
    },
  );
