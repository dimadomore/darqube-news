import { useCallback, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList, Pagination } from 'components/shared';
import { MainLayout } from 'components/layout';
import { useAppDispatch, useAppSelector, useSearch } from 'common/hooks';
import {
  removeOne,
  selectFilteredPaginatedBookmarks,
} from 'store/features/bookmark';
import { NewsItem } from 'common/types';
import { PER_PAGE_NUMBER } from 'common/constants';

const Bookmarks: NextPage = () => {
  const bookmarkIds = useAppSelector((state) => state.bookmark.ids);
  const dispatch = useAppDispatch();
  const { searchValue, setSearchValue } = useSearch();
  const [page, setPage] = useState(1);
  const { data: bookmarks, filteredCount } = useAppSelector(
    selectFilteredPaginatedBookmarks(searchValue, page),
  );

  const removeBookmark = useCallback(
    (newsItem: NewsItem) => {
      dispatch(removeOne(newsItem.id));
    },
    [dispatch],
  );

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  return (
    <MainLayout setSearchValue={setSearchValue}>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <NewsCardList
        data={bookmarks as NewsItem[]}
        bookmarkIds={bookmarkIds as number[]}
        onNewsItemSaveToggle={removeBookmark}
      />
      {filteredCount > PER_PAGE_NUMBER && (
        <Pagination
          totalCount={filteredCount}
          currentPage={page}
          perPageNumber={PER_PAGE_NUMBER}
          onChange={setPage}
        />
      )}
    </MainLayout>
  );
};

export default Bookmarks;
