/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const nextConfig = {
  env: {
    // NODE_TLS_REJECT_UNAUTHORIZED: 0,
    name: 'Demo Create Next App',
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
      '/first': { page: '/first' },
    }
  },
}

module.exports = nextConfig;