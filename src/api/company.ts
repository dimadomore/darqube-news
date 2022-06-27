import { NewsItem } from 'types';
import { api } from './setup';

const token = 'bpjsf67rh5r9328ecgvg';

interface Params {
  symbol: string;
  from: string;
  to: string;
}

export const getCompanyNews = (params: Params): Promise<NewsItem[]> =>
  api.get('/company-news', { params: { ...params, token } });
