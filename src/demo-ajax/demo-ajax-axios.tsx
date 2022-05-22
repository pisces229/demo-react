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
      .then((response) => console.log(`then:[${JSON.stringify(response)}]`))
      .catch((error) => console.log(`catch:[${error}]`))
      .finally(() => console.log(`finally`));
  };
  const asynchronous = async () => {
    let result = await axiosDefaultInstance
      .get<string>(`/`)
      .then((response) => response.data)
      .catch((error) => console.log(`catch:[${error}]`))
      .finally(() => console.log(`finally`));
    if (result) {
      console.log(`result:[${result}]`);
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
        console.log(`data:[${JSON.stringify(response.data)}]`);
        localStorage.setItem('token', response.data);
      });
  };
  const onClickLoginRefresh = () => {
    axiosDefaultInstance
      .post<string>(`/Refresh`, localStorage.getItem('token')!)
      .then((response) => {
        console.log(`data:[${JSON.stringify(response.data)}]`);
        localStorage.setItem('token', response.data);
      });
  };
  const onClickLoginSignOut = () => {
    axiosDefaultInstance
      .post<string>(`/SignOut`, localStorage.getItem('token')!)
      .then((response) => {
        console.log(`data:[${JSON.stringify(response.data)}]`);
        localStorage.removeItem('token');
      });
  };
  // Click
  const onClickTest = () => {
    axiosAuthorizationInstance
      .get<string>(`/ValueFromQuery?model=hello`)
      .then((response) => console.log(`data:[${response.data}]`));
    axiosAuthorizationInstance
      .post(`/ValueFromBody`, 'hello')
      .then((response) => console.log(`data:[${response.data}]`));
    axiosAuthorizationInstance
      .get<{ Text: string; Value: number; Date: Date }>(
        `/JsonFromQuery?Text=Pete&Value=1&Date=2020-01-01`,
      )
      .then((response) =>
        console.log(`data:[${JSON.stringify(response.data)}]`),
      );
    axiosAuthorizationInstance
      .post<{ Text: string; Value: number; Date: Date }>(
        `/JsonFromBody`,
        { Text: 'Pete', Value: 12, Date: new Date() },
      )
      .then((response) =>
        console.log(`data:[${JSON.stringify(response.data)}]`),
      );
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
        console.log(response.data.type);
        if (response.data.type !== 'text/plain') {
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
      .then((response) =>
        console.log(`data:[${JSON.stringify(response.data)}]`),
      );
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
      .then((response) =>
        console.log(`data:[${JSON.stringify(response.data)}]`),
      );
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
