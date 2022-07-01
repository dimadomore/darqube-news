import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { NewsItem } from 'common/types';
import { BASE_URL, API_TOKEN, PER_PAGE_NUMBER } from 'common/constants';
import { filterByTextInKeys } from 'common/utils';

interface QueryCompanyNewsParams {
  symbol: string;
  from: string;
  to: string;
}

export const newsAPI = createApi({
  reducerPath: 'newsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchCompanyNews: build.query<NewsItem[], QueryCompanyNewsParams>({
      query: (params) => ({
        url: '/company-news',
        params: { ...params, token: API_TOKEN },
      }),
    }),
  }),
});

export const selectPaginatedFilteredNewsFromResult =
  (searchValue: string, page: number) => (result: any) => {
    if (!result.data) return result;

    const [latestNewsItem, ...dataWithoutLatestNews] = result.data;

    const filteredData =
      searchValue && searchValue.length > 1
        ? filterByTextInKeys(dataWithoutLatestNews, searchValue, [
            'headline',
            'summary',
          ])
        : dataWithoutLatestNews;

    const startIndex = PER_PAGE_NUMBER * (page - 1);
    const endIndex = Math.min(
      page * PER_PAGE_NUMBER,
      dataWithoutLatestNews.length,
    );

    return {
      ...result,
      data: (filteredData.slice(startIndex, endIndex) as NewsItem[]) ?? [],
      latestNewsItem,
      filteredCount: filteredData.length,
      isFetching: result.isFetching,
    };
  };
