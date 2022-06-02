import { useState } from 'react';
import { BASE_URL } from './demo-ajax-const';
import {
  FetchDefault,
  FetchAuthorizationGet,
  FetchAuthorizationPost,
} from './demo-ajax-fetch-intercept';
export function DemoAjaxFetch() {
  const synchronous = () => {
    console.log('before');
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(
      new Request(`${BASE_URL}/`, {
        method: 'GET',
        headers: headers,
      }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('finally'));
    console.log('after');
  };
  const asynchronous = async () => {
    console.log('before');
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    await FetchDefault(
      new Request(`${BASE_URL}/`, {
        method: 'GET',
        headers: headers,
      }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('finally'));
    console.log('after');
  };
  // Login
  const onClickLoginSignIn = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(
      new Request(`${BASE_URL}/signIn`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ Account: 'Account', Password: 'Password' }),
      }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
          localStorage.setItem('token', JSON.parse(value));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => localStorage.removeItem('refresh'));
  };
  const onClickLoginRefresh = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(
      new Request(`${BASE_URL}/refresh`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(localStorage.getItem('token')!),
      }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
          localStorage.setItem('token', JSON.parse(value));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => localStorage.removeItem('refresh'));
  };
  const onClickLoginSignOut = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(
      new Request(`${BASE_URL}/signOut`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(localStorage.getItem('token')!),
      }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          localStorage.removeItem('token');
        }
      })
      .catch((error) => console.log(error))
      .finally(() => localStorage.removeItem('refresh'));
  };
  // Click
  const onClickTest = () => {
    FetchAuthorizationGet(`${BASE_URL}/valueFromQuery?model=hello`)
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('valueFromQuery'));
    FetchAuthorizationPost(`${BASE_URL}/valueFromBody`, JSON.stringify('hello'))
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.text();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('valueFromBody'));
    FetchAuthorizationGet(
      `${BASE_URL}/jsonFromQuery?Text=Pete&Value=1&Date=2020-01-01`,
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.json();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('jsonFromQuery'));
    FetchAuthorizationPost(
      `${BASE_URL}/jsonFromBody`,
      JSON.stringify({ Text: 'Pete', Value: 12, Date: new Date() }),
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('Content-Type'));
          const value = await response.json();
          console.log(value);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('jsonFromBody'));
  };
  const onClickDownload = () => {
    FetchAuthorizationGet(`${BASE_URL}/download`)
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('content-type'));
          if (
            response.headers.get('content-type') !== 'text/plain; charset=utf-8'
          ) {
            const contentDispositionValues = response.headers
              .get('content-disposition')
              ?.split(';');
            let filename = 'download';
            contentDispositionValues?.forEach((f) => {
              if (f.indexOf('filename') > -1) {
                let texts = f.split('=');
                if (texts.length > 1) {
                  filename = decodeURIComponent(texts[1]);
                }
              }
            });
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(
              new Blob([await response.blob()]),
            );
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else {
            console.log(await response.text());
          }
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('download'));
  };
  const [file, setFile] = useState<FileList | null>();
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length! > 0) {
      setFile(e.target.files);
    } else {
      setFile(null);
    }
  };
  const onClickUpload = () => {
    const formData = new FormData();
    if (file?.length! > 0) {
      formData.append('File', file?.item(0)!);
    }
    FetchAuthorizationPost(`${BASE_URL}/upload`, formData)
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('content-type'));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('upload'));
  };
  const onClickUploads = () => {
    const formData = new FormData();
    if (file?.length! > 0) {
      for (let i = 0; i < file?.length!; ++i) {
        formData.append(`[${i}].File`, file?.item(i)!);
      }
    }
    FetchAuthorizationPost(`${BASE_URL}/upload`, formData)
      .then(async (response) => {
        if (response.ok) {
          console.log(response.headers.get('content-type'));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('upload'));
  };
  return (
    <>
      <button onClick={synchronous}>synchronous</button>&nbsp;
      <button onClick={asynchronous}>asynchronous</button>&nbsp;
      <br />
      <br />
      <button onClick={onClickLoginSignIn}>LoginSignIn</button>&nbsp;
      <button onClick={onClickLoginRefresh}>LoginRefresh</button>&nbsp;
      <button onClick={onClickLoginSignOut}>LoginSignOut</button>&nbsp;
      <br />
      <br />
      <button onClick={onClickTest}>Test</button>&nbsp;
      <button onClick={onClickDownload}>Download</button>&nbsp;
      <br />
      <br />
      <input type="file" multiple onChange={onChangeFile}></input>
      <button onClick={onClickUpload}>Upload</button>&nbsp;
      <button onClick={onClickUploads}>Uploads</button>&nbsp;
      <br />
      <br />
    </>
  );
}
