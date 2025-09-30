/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/spark',
  assetPrefix: '/spark',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig