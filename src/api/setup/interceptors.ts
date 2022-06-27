import { AxiosError, AxiosResponse } from 'axios';

export const responseSuccessHandler = (response: AxiosResponse) => {
  if (response.data) {
    return response.data;
  }
  return response;
};

export const responseErrorHandler = (error: AxiosError) => {
  let errors = ['Something went wrong, please try again!'];

  if (error.response) {
    if (error.response.data.errors) errors = error.response.data.errors;
    if (error.response.data.error) errors = [error.response.data.error];
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }

  return Promise.reject({
    status: error?.response?.status,
    errors: errors,
  });
};
