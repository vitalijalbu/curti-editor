/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '/',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  trailingSlash: false
}

module.exports = nextConfig
