/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost", "https://cristianismo-feliz-backend.up.railway.app"],
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
