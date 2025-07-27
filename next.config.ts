import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '4004',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
