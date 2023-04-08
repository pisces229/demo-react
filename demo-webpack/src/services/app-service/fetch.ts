import FetchUtil from '@/utils/fetch';
import {
  CommonOutputModel,
  CommonPagedQueryInputModel,
  CommonPagedQueryOutputModel,
  DefaultDownloadInputModel,
  DefaultJsonInputModel,
  DefaultJsonOutputModel,
  DefaultJsonPageInputModel,
  DefaultSignInInputModel,
} from './model';

const controller = 'default';

const Index = {
  get: () => FetchUtil.get(`/get?${parseQuery({ value: 'mock' })}`),
  post: () => FetchUtil.post(`/post`, JSON.stringify({ value: 'mock' })),
  signIn: (value: DefaultSignInInputModel) =>
    FetchUtil.post(`/${controller}/signIn`, JSON.stringify(value)).then(
      (response) =>
        response.json().then((data: CommonOutputModel<string>) => data),
    ),
  validate: () =>
    FetchUtil.get(`/${controller}/validate`).then((response) =>
      response.json().then((data: CommonOutputModel<string>) => data),
    ),
  refresh: (value: string) =>
    FetchUtil.post(`/${controller}/refresh`, JSON.stringify(value)).then(
      (response) =>
        response.json().then((data: CommonOutputModel<string>) => data),
    ),
  signOut: (value: string) =>
    FetchUtil.post(`/${controller}/signOut`, JSON.stringify(value)).then(
      (response) =>
        response.json().then((data: CommonOutputModel<string>) => data),
    ),
  valueHttpGet: (value: string) =>
    FetchUtil.get(
      `/${controller}/valueHttpGet?${parseQuery({ inputModel: value })}`,
    ).then((response) => response.text()),
  valueHttpPost: (value: string) =>
    FetchUtil.post(`/${controller}/valueHttpPost`, JSON.stringify(value)).then(
      (response) => response.text(),
    ),
  jsonHttpGet: (value: DefaultJsonInputModel) =>
    FetchUtil.get(`/${controller}/jsonHttpGet?${parseQuery(value)}`).then(
      (response) =>
        response
          .json()
          .then((data: CommonOutputModel<DefaultJsonOutputModel>) => data),
    ),
  jsonHttpPost: (value: DefaultJsonInputModel) =>
    FetchUtil.post(`/${controller}/jsonHttpPost`, JSON.stringify(value)).then(
      (response) =>
        response
          .json()
          .then((data: CommonOutputModel<DefaultJsonOutputModel>) => data),
    ),
  commonPagedQueryGet: (value: DefaultJsonPageInputModel) =>
    FetchUtil.get(
      `/${controller}/commonPagedQueryGet?${parseQuery(value)}`,
    ).then((response) =>
      response
        .json()
        .then(
          (
            data: CommonOutputModel<
              CommonPagedQueryOutputModel<DefaultJsonOutputModel>
            >,
          ) => data,
        ),
    ),
  commonPagedQueryPost: (
    value: CommonPagedQueryInputModel<DefaultJsonInputModel>,
  ) =>
    FetchUtil.post(
      `/${controller}/commonPagedQueryPost`,
      JSON.stringify(value),
    ).then((response) =>
      response
        .json()
        .then(
          (
            data: CommonOutputModel<
              CommonPagedQueryOutputModel<DefaultJsonOutputModel>
            >,
          ) => data,
        ),
    ),
  download: (value: DefaultDownloadInputModel) =>
    FetchUtil.post(`/${controller}/download`, JSON.stringify(value)).then(
      (response) => response,
    ),
  upload: (value: FormData) =>
    FetchUtil.post(`/${controller}/upload`, value).then((response) =>
      response.json().then((data: CommonOutputModel<string>) => data),
    ),
};

const parseQuery = (json: any) =>
  Object.keys(json)
    .map((key) => {
      const value = json[key];
      if (value instanceof Date) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          (value as Date).toUTCString(),
        )}`;
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`;
      }
    })
    .join('&');

export default Index;
