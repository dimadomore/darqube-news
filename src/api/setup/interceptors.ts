import { AxiosResponse } from 'axios';

export const responseSuccessHandler = (response: AxiosResponse) => {
  if (response.data) {
    return response.data;
  }
  return response;
};
