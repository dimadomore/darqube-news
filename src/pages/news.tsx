import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList, Pagination, NewsCardItem } from 'components/shared';
import { MainLayout } from 'components/layout';
import { newsAPI, selectPaginatedFilteredNewsFromResult } from 'store/queries';
import {
  useAppDispatch,
  useAppSelector,
  useSearch,
  useWindowWidth,
} from 'common/hooks';
import { toggleOne, selectBookmarkIds } from 'store/features/bookmark';
import { NewsItem } from 'common/types';
import { PER_PAGE_NUMBER } from 'common/constants';

const News: NextPage = () => {
  const [page, setPage] = useState(1);
  const { searchValue, setSearchValue } = useSearch();
  const bookmarkIds = useAppSelector(selectBookmarkIds);
  const dispatch = useAppDispatch();
  const { isMobile } = useWindowWidth();
  const {
    data: news = [],
    latestNewsItem,
    filteredCount,
    isLoading,
    isError,
  } = newsAPI.useFetchCompanyNewsQuery(
    {
      symbol: 'AAPL',
      from: '2022-04-01',
      to: '2022-06-01',
    },
    {
      selectFromResult: selectPaginatedFilteredNewsFromResult(
        searchValue,
        page,
        isMobile,
      ),
    },
  );

  const handleNewsItemSave = useCallback(
    (newsItem: NewsItem) => {
      dispatch(toggleOne(newsItem));
    },
    [dispatch],
  );

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const isEmptyNewsList =
    !news.length && !latestNewsItem && !isError && !isLoading;
  const noNewsFound = !!searchValue && !news.length;

  return (
    <MainLayout setSearchValue={setSearchValue}>
      <Head>
        <title>News</title>
      </Head>
      {isLoading && <p className="text-xl opacity-80">Loading news...</p>}
      {isError && (
        <p className="text-xl opacity-80">
          Something went wrong. Please try again later...
        </p>
      )}
      {isEmptyNewsList && <p className="text-xl opacity-80">No news...</p>}
      <div className="xl:grid grid-cols-[auto_876px] grid-rows-[630px] h-max">
        {latestNewsItem && (
          <div className="xl:mr-6">
            <NewsCardItem
              itemData={latestNewsItem}
              isSaved
              onSaveToggle={handleNewsItemSave}
              isLatest
            />
          </div>
        )}
        <div className="pb-10">
          {noNewsFound && (
            <p className="text-xl opacity-80">No news found...</p>
          )}
          <NewsCardList
            data={news}
            bookmarkIds={bookmarkIds as number[]}
            onNewsItemSaveToggle={handleNewsItemSave}
          />
          {filteredCount > PER_PAGE_NUMBER && (
            <Pagination
              totalCount={filteredCount}
              perPageNumber={PER_PAGE_NUMBER}
              currentPage={page}
              onChange={setPage}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
