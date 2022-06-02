import axios from 'axios';
import { BASE_URL } from './demo-ajax-const';

export const axiosDefaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosDefaultInstance.interceptors.request.use(
  (config) => {
    // console.log(`request (config)`);
    return config;
  },
  async (error) => {
    // console.log(`request (error)`);
    return Promise.reject(error);
  },
);
axiosDefaultInstance.interceptors.response.use(
  (response) => {
    // console.log(`response (response)`);
    return response;
  },
  async (error) => {
    // console.log(`response (error)`);
    return Promise.reject(error);
  },
);
export const axiosAuthorizationInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosAuthorizationInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      // Authorization: `Bearer ${localStorage.getItem('token')!}`,
      Token: `${localStorage.getItem('token')!}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
axiosAuthorizationInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      if (!DoingRefresh()) {
        await RunRefresh();
      } else {
        while (DoingRefresh()) {
          await WaitRefresh();
        }
      }
      if (localStorage.getItem('token')) {
        return axiosAuthorizationInstance(originalConfig);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
// Refresh
const RunRefresh = async () => {
  try {
    localStorage.setItem('refresh', `${true}`);
    const refreshResponse = await axiosDefaultInstance.post(
      '/refresh',
      JSON.stringify(localStorage.getItem('token')!),
    );
    if (refreshResponse.status === 200) {
      console.log(refreshResponse.headers['content-type']);
      localStorage.setItem('token', refreshResponse.data);
    } else {
      localStorage.removeItem('token');
    }
  } finally {
    localStorage.removeItem('refresh');
  }
};
const DoingRefresh = () => localStorage.getItem('refresh');
const WaitRefresh = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(!!localStorage.getItem('refresh')), 100),
  );
