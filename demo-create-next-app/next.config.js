/** @type {import('next').NextConfig} */
const fs = require('fs');
const { withSuperjson } = require('next-superjson');

// const nextConfig = {
//   reactStrictMode: true,
// }

const CONFIG = {
  ENVIRONMENT: '',
  ENDPOINT: '',
};
switch (process.env.NODE_ENV) {
  case 'production': {
    CONFIG.ENVIRONMENT = 'PRODUCTION';
    break;
  }
  default: {
    CONFIG.ENVIRONMENT = 'DEVELOPMENT';
  }
}

console.log(process.env.NODE_ENV);

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const nextConfig = {
  env: {
    ENVIRONMENT: CONFIG.ENVIRONMENT,
    NAME: 'Demo Create Next App',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    value: 'serverRuntimeConfig',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    ENVIRONMENT: CONFIG.ENVIRONMENT,
    NAME: 'Demo Create Next App',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    value: 'publicRuntimeConfig',
    // 
    ENVIRONMENT: CONFIG.ENVIRONMENT,
    NAME: 'Demo Create Next App',
  },
  reactStrictMode: true,
  images: {
    // unoptimized: false,
    // loader: 'imgix',
    // path: '/',
    unoptimized: true,
  },
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   // console.log(dev, dir, outDir, distDir, buildId);
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
};

// module.exports = nextConfig;
module.exports = withSuperjson()(nextConfig);