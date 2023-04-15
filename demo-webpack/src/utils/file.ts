import { AxiosResponse } from 'axios';
import { saveAs } from 'file-saver';
import { CommonOutputModel } from '../services/app-service/model';

const listToArray = (fileList: FileList | null) => {
  const result: File[] = [];
  if (fileList) {
    for (let i = 0; i < fileList?.length; ++i) {
      if (fileList.item(i)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        result.push(fileList.item(i)!);
      }
    }
  }
  return result;
};

const axiosResponseDownload = async (response: AxiosResponse<Blob>) => {
  console.log(response);
  if (response.headers['content-type'] !== 'application/json; charset=utf-8') {
    const contentDispositionValues =
      response.headers['content-disposition']?.split(';');
    let filename = 'download';
    contentDispositionValues?.forEach((f: string) => {
      if (f.indexOf('filename') > -1) {
        const texts = f.split('=');
        if (texts.length > 1) {
          filename = decodeURIComponent(texts[1]);
        }
      }
    });
    saveAs(response.data, filename);

    // const a = window.document.createElement('a');
    // a.href = window.URL.createObjectURL(new Blob([response.data]));
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    const value: CommonOutputModel<string> = {
      success: true,
      message: '',
      data: '',
    };
    return Promise.resolve(value);
  } else {
    return response.data.text().then((value) => {
      console.log(value);
      return JSON.parse(value);
    });
  }
};

const axiosResponseOpen = async (response: AxiosResponse<Blob>) => {
  console.log(response);
  if (response.headers['content-type'] !== 'application/json; charset=utf-8') {
    const fileURL = window.URL.createObjectURL(
      new Blob([response.data], { type: response.data.type }),
    );
    window.open(fileURL);
    const value: CommonOutputModel<string> = {
      success: true,
      message: '',
      data: '',
    };
    return Promise.resolve(value);
  } else {
    return response.data.text().then((value) => {
      console.log(value);
      return JSON.parse(value);
    });
  }
};

const fetchResponseDownload = async (response: Response) => {
  console.log(response);
  if (
    response.headers.get('content-type') !== 'application/json; charset=utf-8'
  ) {
    const contentDispositionValues = response.headers
      .get('content-disposition')
      ?.split(';');
    let filename = 'download';
    contentDispositionValues?.forEach((f: string) => {
      if (f.indexOf('filename') > -1) {
        const texts = f.split('=');
        if (texts.length > 1) {
          filename = decodeURIComponent(texts[1]);
        }
      }
    });
    saveAs(await response.blob(), filename);

    // const a = window.document.createElement('a');
    // a.href = window.URL.createObjectURL(new Blob([response.data]));
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    const value: CommonOutputModel<string> = {
      success: true,
      message: '',
      data: '',
    };
    return Promise.resolve(value);
  } else {
    return response.text().then((value) => {
      console.log(value);
      return JSON.parse(value);
    });
  }
};

const fetchResponseOpen = async (response: Response) => {
  console.log(response);
  if (
    response.headers.get('content-type') !== 'application/json; charset=utf-8'
  ) {
    const data = await response.blob();
    const fileURL = window.URL.createObjectURL(
      new Blob([data], { type: data.type }),
    );
    window.open(fileURL);
    const value: CommonOutputModel<string> = {
      success: true,
      message: '',
      data: '',
    };
    return Promise.resolve(value);
  } else {
    return response.text().then((value) => {
      console.log(value);
      return JSON.parse(value);
    });
  }
};

const util = {
  listToArray,
  axiosResponseDownload: axiosResponseDownload,
  axiosResponseOpen: axiosResponseOpen,
  fetchResponseDownload: fetchResponseDownload,
  fetchResponseOpen: fetchResponseOpen,
};
export default util;
