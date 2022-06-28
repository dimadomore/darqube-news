import { NewsItem } from 'common/types';
import { API_TOKEN } from 'common/constants';
import { api } from './setup';

interface Params {
  symbol: string;
  from: string;
  to: string;
}

export const getCompanyNews = (params: Params): Promise<NewsItem[]> =>
  api.get('/company-news', { params: { ...params, token: API_TOKEN } });
