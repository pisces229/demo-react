import CONFIG from '../config';
import RefreshUtil from './refresh';
import AppService from '../services/app-service/fetch';

const fetchInterceptor = async (request: Request) => {
  if (localStorage.getItem('token')) {
    request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
  }
  return fetch(request).catch((error) => {
    console.log(error);
    return Promise.resolve(error);
  });
};

const execute = async (url: string, method: string, body?: string | FormData) => {
  let header = new Headers();
  switch (method) {
    case 'GET':
      header.set('Content-Type', 'application/json');
      break;
    case 'POST':
    case 'PUT':
      if (typeof body === 'string') {
        header.set('Content-Type', 'application/json');
      }
      break;
  }
  let request = new Request(`${CONFIG.ENDPOINT}/api${url}`, {
    method: method,
    headers: header,
    body: body,
  });
  let response = await fetchInterceptor(request);
  switch (response?.status) {
    case 200:
      return Promise.resolve(response);
    case 401:
      if (localStorage.getItem('token')) {
        if (!RefreshUtil.do) {
          RefreshUtil.do = true;
          AppService.refresh(localStorage.getItem('token')!)
            .then((response) => {
              if (response.success) {
                localStorage.setItem('token', response.data);
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
        return new Promise<Response>((resolve, reject) => {
          let request = new Request(`${CONFIG.ENDPOINT}/api${url}`, {
            method: method,
            headers: header,
            body: body,
          });
          RefreshUtil.push(() => {
            resolve(fetchInterceptor(request));
          });
        });
      } else {
        localStorage.removeItem('token');
        return Promise.reject(response);
      }
    case 403:
      console.log(response);
      localStorage.removeItem('token');
      return Promise.reject(response);
    default:
      console.log(response);
      return Promise.reject(response);
  }
};

const util = {
  get: async (url: string) => execute(url, 'GET'),
  post: async (url: string, body: string | FormData) => execute(url, 'POST', body),
  put: async (url: string, body: string | FormData) => execute(url, 'PUT', body),
};
export default util;
