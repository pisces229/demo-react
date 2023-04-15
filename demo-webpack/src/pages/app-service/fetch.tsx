import { useEffect } from 'react';
import AppService from '@/services/app-service/fetch';
import { CommonOutputModel } from '@/services/app-service/model';
import FileUtil from '@/utils/file';

const onStorage = (event: StorageEvent) => {
  console.log(event);
  if (event.key === 'token') {
    if (event.newValue) {
      if (event.oldValue) {
        console.log('Storage.onClickRefresh');
      } else {
        console.log('Storage.onClickSignIn');
      }
    } else {
      console.log('Storage.onClickSignOut');
    }
  }
};

const Index = () => {
  useEffect(() => {
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);
  const onClickSignIn = async () => {
    await AppService.signIn({ account: 'Account', password: 'Password' })
      .then(async (response) => {
        console.log(response);
        if (response.success) {
          localStorage.setItem('token', response.data);
        }
      })
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.signIn.finally`));
  };
  const onClickValidate = async () => {
    await AppService.validate()
      .then((response) => {
        console.log(response);
      })
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.validate.finally`));
  };
  const onClickRefresh = async () => {
    if (localStorage.getItem('token')) {
      await AppService.refresh(localStorage.getItem('token') || '')
        .then((response) => {
          console.log(response);
          if (response.success) {
            localStorage.setItem('token', response.data);
          }
        })
        // .catch((error) => console.log(error))
        .finally(() => console.log(`AppService.refresh.finally`));
    }
  };
  const onClickSignOut = async () => {
    if (localStorage.getItem('token')) {
      await AppService.signOut(localStorage.getItem('token') || '')
        .then((response) => {
          console.log(response);
          if (response.success) {
            localStorage.removeItem('token');
          }
        })
        // .catch((error) => console.log(error))
        .finally(() => console.log(`AppService.signOut.finally`));
    }
  };

  const onClickValueHttpGet = () => {
    AppService.valueHttpGet('[Test]')
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.valueHttpGet.finally`));
  };
  const onClickValueHttpPost = () => {
    AppService.valueHttpPost('[Test]')
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.valueHttpPost.finally`));
  };
  const onClickJsonHttpGet = () => {
    AppService.jsonHttpGet({ text: '[Test]', value: 9, date: new Date() })
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.valueHttpGet.finally`));
  };
  const onClickJsonHttpPost = () => {
    AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() })
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.ValueHttpPost.finally`));
  };

  const onClickDownload = async () => {
    AppService.download({ filename: 'test' })
      // AppService.download({ filename: undefined })
      .then((response) => {
        console.log(response);
        if (response?.ok) {
          return FileUtil.fetchResponseDownload(response);
          // return FileUtil.fetchResponseOpen(response);
        } else {
          return;
        }
      })
      .then((value: CommonOutputModel<string>) => {
        console.log(value);
        if (!value.success) {
          console.log(value.message);
        }
      })
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.download.finally`));
  };
  const onClickUpload = async () => {
    const formData = new FormData();
    const file = new File(['a', 'b', 'c'], 'upload');
    formData.append('file', file);
    formData.append('name', 'upload');
    AppService.upload(formData)
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.download.finally`));
  };
  const onClickCommonPagedQueryGet = () => {
    AppService.commonPagedQueryGet({
      pageNo: 1,
      pageSize: 10,
      text: '[Test]',
      value: 9,
      date: new Date(),
      values: ['1', 'A'],
    })
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.commonPagedQuery.finally`));
  };
  const onClickCommonPagedQueryPost = () => {
    AppService.commonPagedQueryPost({
      page: { pageNo: 1, pageSize: 10 },
      data: { text: '[Test]', value: 9, date: new Date() },
    })
      .then((response) => console.log(response))
      // .catch((error) => console.log(error))
      .finally(() => console.log(`AppService.commonPagedQuery.finally`));
  };
  const onClickMultiple = () => {
    AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() })
      .then((response) => console.log('1.then', response))
      // .catch((error) => console.log('1.catch', error))
      .finally(() => console.log(`1.finally`));
    AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() })
      .then((response) => console.log('2.then', response))
      // .catch((error) => console.log('2.catch', error))
      .finally(() => console.log(`2.finally`));
    AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() })
      .then((response) => console.log('3.then', response))
      // .catch((error) => console.log('3.catch', error))
      .finally(() => console.log(`3.finally`));
  };
  const onClickMultipleAll = () => {
    Promise.all([
      AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() }),
      AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() }),
      AppService.jsonHttpPost({ text: '[Test]', value: 9, date: new Date() }),
    ])
      .then((response) => console.log('then', response))
      // .catch((error) => console.log('catch', error))
      .finally(() => console.log(`finally`));
  };
  return (
    <>
      <h3>App Service Fetch</h3>
      <button onClick={onClickSignIn}>Sign In</button>&nbsp;
      <button onClick={onClickValidate}>Validate</button>&nbsp;
      <button onClick={onClickRefresh}>Refresh</button>&nbsp;
      <button onClick={onClickSignOut}>Sign Out</button>&nbsp;
      <hr></hr>
      <button onClick={onClickValueHttpGet}>Value Get</button>&nbsp;
      <button onClick={onClickValueHttpPost}>Value Post</button>&nbsp;
      <button onClick={onClickJsonHttpGet}>Json Get</button>&nbsp;
      <button onClick={onClickJsonHttpPost}>Json Post</button>&nbsp;
      <hr></hr>
      <button onClick={onClickDownload}>Download</button>&nbsp;
      <button onClick={onClickUpload}>Upload</button>&nbsp;
      <hr></hr>
      <button onClick={onClickCommonPagedQueryGet}>Paged Query Get</button>
      &nbsp;
      <button onClick={onClickCommonPagedQueryPost}>Paged Query Post</button>
      &nbsp;
      <button onClick={onClickMultiple}>Multiple</button>&nbsp;
      <button onClick={onClickMultipleAll}>Multiple All</button>&nbsp;
      <hr></hr>
    </>
  );
};
export default Index;
