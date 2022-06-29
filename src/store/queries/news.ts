import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { NewsItem } from 'common/types';
import { BASE_URL, API_TOKEN } from 'common/constants';

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
