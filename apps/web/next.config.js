/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
