import AxiosUtil from '../../utils/axios';
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
  get: () => AxiosUtil.get<string>(`/get`, { params: { value: 'mock' } }),
  post: () => AxiosUtil.post<string>(`/post`, { value: 'mock' }),
  signIn: (value: DefaultSignInInputModel) => AxiosUtil.post<CommonOutputModel<string>>(`/${controller}/signIn`, value),
  validate: () => AxiosUtil.get<CommonOutputModel<string>>(`/${controller}/validate`),
  refresh: (value: string) => AxiosUtil.post<CommonOutputModel<string>>(`/${controller}/refresh`, value),
  signOut: (value: string) => AxiosUtil.post<CommonOutputModel<string>>(`/${controller}/signOut`, value),
  valueHttpGet: (value: string) =>
    AxiosUtil.get<string>(`/${controller}/valueHttpGet`, {
      params: { inputModel: value },
    }),
  valueHttpPost: (value: string) => AxiosUtil.post<string>(`/${controller}/valueHttpPost`, value),
  jsonHttpGet: (value: DefaultJsonInputModel) =>
    AxiosUtil.get<CommonOutputModel<DefaultJsonOutputModel>>(`/${controller}/jsonHttpGet`, { params: value }),
  jsonHttpPost: (value: DefaultJsonInputModel) =>
    AxiosUtil.post<CommonOutputModel<DefaultJsonOutputModel>>(`/${controller}/jsonHttpPost`, value),
  commonPagedQueryGet: (value: DefaultJsonPageInputModel) =>
    AxiosUtil.get<CommonPagedQueryOutputModel<DefaultJsonOutputModel>>(`/${controller}/commonPagedQueryGet`, {
      params: value,
    }),
  commonPagedQueryPost: (value: CommonPagedQueryInputModel<DefaultJsonInputModel>) =>
    AxiosUtil.post<CommonPagedQueryOutputModel<DefaultJsonOutputModel>>(`/${controller}/commonPagedQueryPost`, value),
  download: (value: DefaultDownloadInputModel) =>
    AxiosUtil.post<Blob>(`/${controller}/download`, value, {
      responseType: 'blob',
    }),
  upload: (value: FormData) => AxiosUtil.post<CommonOutputModel<string>>(`/${controller}/upload`, value),
};

export default Index;
