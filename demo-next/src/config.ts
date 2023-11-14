import getConfig from 'next/config';

type serverRuntimeConfigType = {
  NAME: string;
  GCP_PROJECT_ID: string;
  GOOGLE_APPLICATION_CREDENTIALS: string;
  APP_UPLOAD: string;
  VALUE: string;
  APP_DATABASE: string | undefined;
}

type publicRuntimeConfigType = {
  NAME: string;
  VALUE: string;
}

const serverRuntimeConfig = getConfig().serverRuntimeConfig as serverRuntimeConfigType;
const publicRuntimeConfig = getConfig().publicRuntimeConfig as publicRuntimeConfigType;
// const serverRuntimeConfig : serverRuntimeConfigType = {
//   NAME: process.env.NAME!,
//   GCP_PROJECT_ID: process.env.GCP_PROJECT_ID!,
//   GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS!,
//   APP_UPLOAD: process.env.APP_UPLOAD!,
//   VALUE: process.env.VALUE!,
//   APP_DATABASE: process.env.APP_DATABASE
// };
// const publicRuntimeConfig : publicRuntimeConfigType = {
//   NAME: process.env.NEXT_PUBLIC_NAME!,
//   VALUE: process.env.NEXT_PUBLIC_VALUE!,
// };

export { serverRuntimeConfig, publicRuntimeConfig };