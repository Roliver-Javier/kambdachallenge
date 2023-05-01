/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/home' },
      ...defaultPathMap
    };
  },
  experimental: {
    appDir: true,
  },
  

}

module.exports = nextConfig
