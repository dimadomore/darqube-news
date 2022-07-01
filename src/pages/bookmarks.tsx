import { useCallback, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList, Pagination } from 'components/shared';
import { MainLayout } from 'components/layout';
import { useAppDispatch, useAppSelector, useSearch } from 'common/hooks';
import {
  removeOne,
  selectFilteredPaginatedBookmarks,
  selectBookmarkIds,
} from 'store/features/bookmark';
import { NewsItem } from 'common/types';
import { PER_PAGE_NUMBER } from 'common/constants';

const Bookmarks: NextPage = () => {
  const bookmarkIds = useAppSelector(selectBookmarkIds);
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

  const isEmptyBookmarkList = !bookmarkIds.length;
  const noBookmarkFound =
    !!searchValue && !bookmarks.length && !isEmptyBookmarkList;

  return (
    <MainLayout setSearchValue={setSearchValue}>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <div className="xl:w-max">
        {isEmptyBookmarkList && (
          <p className="text-xl opacity-80">No bookmarks yet...</p>
        )}
        {noBookmarkFound && (
          <p className="text-xl opacity-80">No bookmarks found...</p>
        )}
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
      </div>
    </MainLayout>
  );
};

export default Bookmarks;
