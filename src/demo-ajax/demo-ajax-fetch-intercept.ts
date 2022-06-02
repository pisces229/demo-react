import { BASE_URL } from './demo-ajax-const';

const FetchDefault = async (request: Request) => {
  // console.log(`FetchDefault Request Interceptor`);
  const response = await fetch(request);
  // console.log(`FetchDefault Response Interceptor`);
  // if (!response.ok) {
  //   console.log(`error:[${await response.text()}]`);
  // }
  return response;
};
const FetchAuthorizationGet = async (url: string) => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  // headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
  headers.set('Token', `${localStorage.getItem('token')!}`);
  const request = new Request(url, {
    method: 'GET',
    headers: headers,
  });
  const response = await FetchDefault(request);
  if (response.status === 401) {
    if (!DoingRefresh()) {
      await RunRefresh();
    } else {
      while (DoingRefresh()) {
        await WaitRefresh();
      }
    }
    if (localStorage.getItem('token')) {
      // headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      headers.set('Token', `${localStorage.getItem('token')!}`);
      const retryRequest = new Request(url, {
        method: 'GET',
        headers: headers,
      });
      return await FetchDefault(retryRequest);
    } else {
      return response;
    }
  } else {
    return response;
  }
};
const FetchAuthorizationPost = async (url: string, body: string | FormData) => {
  const headers = new Headers();
  if (typeof body === 'string') {
    headers.set('Content-Type', 'application/json');
  }
  // headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
  headers.set('Token', `${localStorage.getItem('token')!}`);
  const request = new Request(url, {
    method: 'POST',
    headers: headers,
    body,
  });
  const response = await FetchDefault(request);
  if (response.status === 401) {
    if (!DoingRefresh()) {
      await RunRefresh();
    } else {
      while (DoingRefresh()) {
        await WaitRefresh();
      }
    }
    if (localStorage.getItem('token')) {
      // headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      headers.set('Token', `${localStorage.getItem('token')!}`);
      const retryRequest = new Request(url, {
        method: 'POST',
        headers: headers,
        body,
      });
      return await FetchDefault(retryRequest);
    } else {
      return response;
    }
  } else {
    return response;
  }
};
// Refresh
const RunRefresh = async () => {
  try {
    localStorage.setItem('refresh', `${true}`);
    const refreshHeaders = new Headers();
    refreshHeaders.set('Content-Type', 'application/json');
    const refreshRequest = new Request(`${BASE_URL}/refresh`, {
      method: 'POST',
      headers: refreshHeaders,
      body: JSON.stringify(localStorage.getItem('token')!),
    });
    const refreshResponse = await FetchDefault(refreshRequest);
    if (refreshResponse.ok) {
      console.log(refreshResponse.headers.get('Content-Type'));
      localStorage.setItem('token', JSON.parse(await refreshResponse.text()));
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
export { FetchDefault, FetchAuthorizationGet, FetchAuthorizationPost };
