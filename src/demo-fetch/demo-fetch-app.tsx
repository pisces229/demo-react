import { useState } from "react";
import { FetchDefault, FetchAuthorizationGet, FetchAuthorizationPost } from "./demo-fetch-intercept";
interface CommonModel<T> {
  Success: boolean;
  Message: string;
  Data: T;
}
export function DemoFetchApp() {
  // Example
  const synchronous = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(new Request(`https://localhost:44392/api/Default/Test`, {
      method: 'GET',
      headers: headers,
    }))
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${await response.text()}]`);
      }
    });
  };
  const asynchronous = async () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const result = await FetchDefault(new Request(`https://localhost:44392/api/Default/Test`, {
      method: 'GET',
      headers: headers,
    }))
    .then((response) => {
      if (response.ok) {
        return response.text()
      }
    });
    if (result) {
      console.log(`result:[${result}]`);
    }
  };
  // Login
  const onClickLoginSignIn = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(new Request(`https://localhost:44392/api/Login/SignIn`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ Username: 'Username', Password: 'Password' })
    }))
    .then(async (response) => {
      if (response.ok) {
        const value: CommonModel<string> = await response.json();
        console.log(`value:[${JSON.stringify(value)}]`);
        localStorage.setItem('token', value.Data);
      }
    });
  };
  const onClickLoginRefresh = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(new Request(`https://localhost:44392/api/Login/Refresh`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(localStorage.getItem('token')!),
    }))
    .then(async (response) => {
      if (response.ok) {
        const value = await response.text();
        console.log(`value:[${value}]`);
        localStorage.setItem('token', value);
      }
    });
  };
  const onClickLoginSignOut = () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    FetchDefault(new Request(`https://localhost:44392/api/Login/SignOut`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(localStorage.getItem('token')!),
    }))
    .then(async (response) => {
      if (response.ok) {
        localStorage.removeItem('token');
      }
    });
  };
  // Click
  const onClickTest = () => {
    FetchAuthorizationGet(`https://localhost:44392/api/Test/GetValueByValue?value=hello`)
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${await response.text()}]`);
      }
    });
    FetchAuthorizationPost(`https://localhost:44392/api/Test/PostValueByValue`,
      JSON.stringify('hello'))
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${await response.text()}]`);
      }
    });
    FetchAuthorizationGet(`https://localhost:44392/api/Test/GetValueByModel?Name=Pete&Count=1`)
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${JSON.stringify(await response.json())}]`);
      }
    });
    FetchAuthorizationPost(`https://localhost:44392/api/Test/PostValueByModel`,
      JSON.stringify({ Name: 'Pete', Count: 12, Date: new Date() }))
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${JSON.stringify(await response.json())}]`);
      }
    });
  };
  const onClickDownload = () => {
    FetchAuthorizationPost(`https://localhost:44392/api/Test/Download`, '')
    .then(async (response) => {
      if (response.ok) {
        console.log(response.headers.get('content-type'));
        if (response.headers.get('content-type') !== 'text/plain; charset=utf-8') {
          const contentDispositionValues = response.headers.get('content-disposition')?.split(';');
          let filename = 'download';
          contentDispositionValues?.forEach(f =>
            {
              if (f.indexOf('filename') > -1) {
                let texts = f.split('=');
                if (texts.length > 1) {
                  filename = texts[1];
                }
              }
            });
          const a = window.document.createElement('a');
          a.href = window.URL.createObjectURL(new Blob([await response.blob()]));
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          console.log(await response.text());
        }
      }
    });
  };
  const [file, setFile] = useState<FileList|null>();
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
      formData.append('UPLOAD_FILE', file?.item(0)!);
      formData.append('UPLOAD_NAME', 'upload');
      formData.append('UPLOAD_TYPE', 'txt');
    }
    FetchAuthorizationPost(`https://localhost:44392/api/Test/Upload`, formData)
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${JSON.stringify(await response.json())}]`);
      }
    });
  };
  const onClickUploads = () => {
    const formData = new FormData();
    if (file?.length! > 0) {
      for (let i = 0; i < file?.length!; ++i) {
        formData.append(`[${i}].UPLOAD_FILE`, file?.item(i)!);
        formData.append(`[${i}].UPLOAD_NAME`, `upload_${i}`);
        formData.append(`[${i}].UPLOAD_TYPE`, 'txt');
      }
    }
    FetchAuthorizationPost(`https://localhost:44392/api/Test/Uploads`, formData)
    .then(async (response) => {
      if (response.ok) {
        console.log(`then:[${JSON.stringify(await response.json())}]`);
      }
    });
  };
  return (
  <>
    <button onClick={synchronous}>synchronous</button>&nbsp;
    <button onClick={asynchronous}>asynchronous</button>&nbsp;
    <br /><br />
    <button onClick={onClickLoginSignIn}>LoginSignIn</button>&nbsp;
    <button onClick={onClickLoginRefresh}>LoginRefresh</button>&nbsp;
    <button onClick={onClickLoginSignOut}>LoginSignOut</button>&nbsp;
    <br /><br />
    <button onClick={onClickTest}>Test</button>&nbsp;
    <button onClick={onClickDownload}>Download</button>&nbsp;
    <br /><br />
    <input type='file' multiple onChange={onChangeFile}></input>
    <button onClick={onClickUpload}>Upload</button>&nbsp;
    <button onClick={onClickUploads}>Uploads</button>&nbsp;
    <br /><br />
  </>
  );
}
