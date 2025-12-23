import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "http",
        hostname: "192.168.1.88",
        port: "3001",
      },
      {
        protocol: "http",
        hostname: "rndlive.ap-south-1.elasticbeanstalk.com",
      },
    ],
  },
};

export default nextConfig;
