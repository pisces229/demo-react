// Common
export type CommonPageInputModel = {
  pageNo: number;
  pageSize: number;
}
export type CommonPagedQueryInputModel<T> = {
  data: T;
  page: CommonPageInputModel;
}
export type CommonPagedQueryOutputModel<T> = {
  data: T[];
  totalCount: number;
}
export type CommonOutputModel<T> = {
  success: boolean;
  message: string;
  data: T;
}
// Default
export type DefaultJsonInputModel = {
  text: string;
  value: number;
  date: Date;
}
export type DefaultSignInInputModel = {
  account: string;
  password: string;
}
export type DefaultJsonHttpGetInputModel = {
  text: string;
  value: number;
  date: Date;
}
export type DefaultJsonHttpPostInputModel = {
  text: string;
  value: number;
  date: Date;
}
export type DefaultJsonOutputModel = {
  text: string;
  value: number;
  date: Date;
}
export type DefaultDownloadInputModel = {
  filename?: string;
}
export type DefaultJsonPageInputModel = CommonPageInputModel & {
  text: string;
  value: number;
  date: Date;
  values: string[];
}
