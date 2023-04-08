import axios from 'axios';
import CONFIG from '../config';
import RefreshUtil from './refresh';
import AppService from '../services/app-service/axios';

const util = axios.create({
  baseURL: `${CONFIG.ENDPOINT}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

util.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')!}`,
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

util.interceptors.response.use(
  (response) => {
    // 200
    return response;
  },
  async (error) => {
    const config = error.config;
    switch (error?.response?.status) {
      case 401:
        if (localStorage.getItem('token')) {
          if (!RefreshUtil.do) {
            RefreshUtil.do = true;
            AppService.refresh(localStorage.getItem('token')!)
              .then((response) => {
                if (response.data.success) {
                  localStorage.setItem('token', response.data.data);
                } else {
                  localStorage.removeItem('token');
                }
              })
              .catch((error) => {
                console.log(error);
                localStorage.removeItem('token');
              })
              .finally(() => RefreshUtil.run());
          }
          return new Promise((resolve, reject) => {
            RefreshUtil.push(() => {
              resolve(util(config));
            });
          });
        } else {
          localStorage.removeItem('token');
          return Promise.reject(error);
        }
      case 403:
        console.log(error);
        localStorage.removeItem('token');
        return Promise.reject(error);
      default:
        console.log(error);
        return Promise.reject(error);
    }
  },
);

export default util;
