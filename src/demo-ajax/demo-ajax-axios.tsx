import React, { useState } from 'react';
import {
  axiosDefaultInstance,
  axiosAuthorizationInstance,
} from './demo-ajax-axios-instance';

export function DemoAjaxAxios() {
  // Example
  const synchronous = () => {
    axiosDefaultInstance
      .get<string>(`/`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
        }
      })
      .catch((error) => console.log(`catch:[${error}]`))
      .finally(() => console.log(`finally`));
  };
  const asynchronous = async () => {
    let result = await axiosDefaultInstance
      .get<string>(`/`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
          return response.data;
        }
      })
      .catch((error) => console.log(`catch:[${error}]`))
      .finally(() => console.log(`finally`));
    if (result) {
      console.log(result);
    }
  };
  // Login
  const onClickLoginSignIn = () => {
    axiosDefaultInstance
      .post<string>(`/SignIn`, {
        Account: 'Account',
        Password: 'Password',
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
          localStorage.setItem('token', response.data);
        }
      })
      .finally(() => localStorage.removeItem('refresh'));
  };
  const onClickLoginRefresh = () => {
    axiosDefaultInstance
      .post<string>(`/Refresh`, JSON.stringify(localStorage.getItem('token')!))
      .then((response) => {
        localStorage.removeItem('refresh');
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
          localStorage.setItem('token', response.data);
        }
      })
      .finally(() => localStorage.removeItem('refresh'));
  };
  const onClickLoginSignOut = () => {
    axiosDefaultInstance
      .post<string>(`/SignOut`, localStorage.getItem('token')!)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          localStorage.removeItem('token');
        }
      })
      .finally(() => localStorage.removeItem('refresh'));
  };
  // Click
  const onClickTest = () => {
    axiosAuthorizationInstance
      .get<string>(`/ValueFromQuery?model=hello`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
        }
      });
    axiosAuthorizationInstance
      .post(`/ValueFromBody`, 'hello')
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
        }
      });
    axiosAuthorizationInstance
      .get<{ Text: string; Value: number; Date: Date }>(
        `/JsonFromQuery?Text=Pete&Value=1&Date=2020-01-01`,
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
        }
      });
    axiosAuthorizationInstance
      .post<{ Text: string; Value: number; Date: Date }>(
        `/JsonFromBody`,
        { Text: 'Pete', Value: 12, Date: new Date() },
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          console.log(response.data);
        }
      });
  };
  const onClickDownload = () => {
    // axiosAuthorizationInstance.get<Blob>(`Test/Download`, {
    //   responseType: 'blob'
    // })
    axiosAuthorizationInstance
      .get<Blob>(
        `/Download`,
        {
          responseType: 'blob',
        },
      )
      .then(async (response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
          // console.log(response.data.type);
          if (response.headers['content-type'] !== 'text/plain; charset=utf-8') {
          // if (response.data.type !== 'text/plain') {
            const contentDispositionValues =
              response.headers['content-disposition']?.split(';');
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
            a.href = window.URL.createObjectURL(new Blob([response.data]));
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else {
            console.log(await response.data.text());
          }
        }
      });
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
    axiosAuthorizationInstance
      .post<string>(`/Upload`, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
        }
      });
  };
  const onClickUploads = () => {
    const formData = new FormData();
    if (file?.length! > 0) {
      for (let i = 0; i < file?.length!; ++i) {
        formData.append(`[${i}].File`, file?.item(i)!);
      }
    }
    axiosAuthorizationInstance
      .post<string>(`/Upload`, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.headers['content-type']);
        }
      });
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
