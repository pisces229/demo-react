/** @type {import('next').NextConfig} */
// require('console');
// const { withSuperjson } = require('next-superjson');

console.log(`ENVIRONMENT:[${process.env.ENVIRONMENT}]`);

const SERVER_ENV = {
  NAME: '',
  GCP_PROJECT_ID: '',
  GOOGLE_APPLICATION_CREDENTIALS: '',
  APP_UPLOAD: '',
};
const PUBLIC_ENV = {
  NAME: '',
};
switch (process.env.ENVIRONMENT) {
  case 'Development': {
    // SERVER_ENV
    SERVER_ENV.NAME = 'DEVELOPEMENT';
    SERVER_ENV.GCP_PROJECT_ID = '';
    // SERVER_ENV.GCP_PROJECT_ID='aeb-mla-dev-20231011';
    SERVER_ENV.GOOGLE_APPLICATION_CREDENTIALS = 'd:/workspace/app-credentials/cloud-logging.json';
    SERVER_ENV.GOOGLE_APPLICATION_CREDENTIALS = '';
    SERVER_ENV.APP_UPLOAD = 'd:/workspace/app-upload/demo-upload';
    // PUBLIC_ENV
    PUBLIC_ENV.NAME = 'DEVELOPEMENT';
    break;
  }
  case 'Staging': {
    // SERVER_ENV
    SERVER_ENV.NAME = 'STAGING';
    SERVER_ENV.GCP_PROJECT_ID = 'aeb-mla-dev-20231011';
    SERVER_ENV.GOOGLE_APPLICATION_CREDENTIALS = '/app-cloud-storage/credentials/cloud-logging.json';
    SERVER_ENV.APP_UPLOAD = '/app-cloud-storage/demo-upload';
    // PUBLIC_ENV
    PUBLIC_ENV.NAME = 'STAGING';
    break;
  }
  case 'Production': {
    // SERVER_ENV
    SERVER_ENV.NAME = 'PRODUCTION';
    SERVER_ENV.GCP_PROJECT_ID = 'aeb-mla-dev-20231011';
    SERVER_ENV.GOOGLE_APPLICATION_CREDENTIALS = '/app-cloud-storage/credentials/cloud-logging.json';
    SERVER_ENV.APP_UPLOAD = '/app-cloud-storage/demo-upload';
    // PUBLIC_ENV
    PUBLIC_ENV.NAME = 'PRODUCTION';
    break;
  }
  default: {
    throw new Error(`FAIL ENVIRONMENT:[${process.env.ENVIRONMENT}]`);
  }
}

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@google-cloud/logging-winston'],
  },
  serverRuntimeConfig: {
    VALUE: 'SERVER_ENV',
    APP_DATABASE: process.env.APP_DATABASE,
    ...SERVER_ENV,
  },
  publicRuntimeConfig: {
    VALUE: 'PUBLIC_ENV',
    ...PUBLIC_ENV,
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
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self';script-src 'self' 'unsafe-eval' 'unsafe-inline';object-src 'none';img-src *;frame-src 'self';style-src 'unsafe-inline' 'unsafe-eval' * data:;font-src 'self' data:;connect-src 'self';media-src 'self';frame-ancestors 'none';",
          },
          {
            key: 'Referrer-Policy',
            value: 'origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
// module.exports = withSuperjson()(nextConfig);
