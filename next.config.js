/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        //protocol: "i.ibb.co",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "http://localhost:3000/(https://avatars.githubusercontent.com/u/82019131?v=4)",
      },
    ],
  },
};

module.exports = nextConfig;
