// Common
export interface CommonPageInputModel {
  pageNo: number;
  pageSize: number;
}
export interface CommonPagedQueryInputModel<T> {
  data: T;
  page: CommonPageInputModel;
}
export interface CommonPagedQueryOutputModel<T> {
  data: T[];
  totalCount: number;
}
export interface CommonOutputModel<T> {
  success: boolean;
  message: string;
  data: T;
}
// Default
export interface DefaultJsonInputModel {
  text: string;
  value: number;
  date: Date;
}
export interface DefaultSignInInputModel {
  account: string;
  password: string;
}
export interface DefaultJsonHttpGetInputModel {
  text: string;
  value: number;
  date: Date;
}
export interface DefaultJsonHttpPostInputModel {
  text: string;
  value: number;
  date: Date;
}
export interface DefaultJsonOutputModel {
  text: string;
  value: number;
  date: Date;
}
export interface DefaultDownloadInputModel {
  filename?: string;
}
export interface DefaultJsonPageInputModel extends CommonPageInputModel {
  text: string;
  value: number;
  date: Date;
  values: string[];
}
