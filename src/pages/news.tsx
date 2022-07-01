import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList, Pagination, NewsCardItem } from 'components/shared';
import { MainLayout } from 'components/layout';
import { newsAPI, selectPaginatedFilteredNewsFromResult } from 'store/queries';
import { useAppDispatch, useAppSelector, useSearch } from 'common/hooks';
import { toggleOne } from 'store/features/bookmark';
import { NewsItem } from 'common/types';
import { PER_PAGE_NUMBER } from 'common/constants';

const News: NextPage = () => {
  const [page, setPage] = useState(1);
  const { searchValue, setSearchValue } = useSearch();
  const bookmarkIds = useAppSelector((state) => state.bookmark.ids);
  const dispatch = useAppDispatch();
  const {
    data: news = [],
    latestNewsItem,
    filteredCount,
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

  return (
    <MainLayout setSearchValue={setSearchValue}>
      <Head>
        <title>News</title>
      </Head>
      <div className="flex h-screen">
        {latestNewsItem && (
          <div className="h-1/2 mr-6">
            <NewsCardItem
              itemData={latestNewsItem}
              isSaved
              onSaveToggle={handleNewsItemSave}
              isLatest
            />
          </div>
        )}
        <div>
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
