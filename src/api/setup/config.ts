import axios from 'axios';
import { responseSuccessHandler } from './interceptors';

const HOST = 'https://finnhub.io/api';
const API_VERSION = 'v1';
const BASE_URL = `${HOST}/${API_VERSION}`;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

api.interceptors.response.use(responseSuccessHandler);
api.interceptors.request.use();
