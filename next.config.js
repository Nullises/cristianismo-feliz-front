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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/crisfeliz-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig
