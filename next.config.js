/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "https://cristianismofeliz-backend-40a73ff0bb26.herokuapp.com",
    ],
  },
};

module.exports = nextConfig
