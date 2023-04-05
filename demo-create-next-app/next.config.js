/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const CONFIG = {
  ENVIRONMENT: '',
  ENDPOINT: '',
};
switch (process.env.NODE_ENV) {
  case 'prod': {
    CONFIG.ENVIRONMENT = 'PRODUCTION';
    break;
  }
  default: {
    CONFIG.ENVIRONMENT = 'DEVELOPMENT';
  }
}

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const nextConfig = {
  env: {
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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // console.log(dev, dir, outDir, distDir, buildId);
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
    }
  },
}

module.exports = nextConfig;