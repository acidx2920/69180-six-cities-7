import axios from 'axios';
import {showError} from '../notification';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response?.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    showError(response?.data?.error);
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  api.interceptors.request.use((request) => {
    request.headers = { 'x-token': localStorage.getItem('token') ?? '' };
    return request;
  });

  return api;
};
