import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '4004',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4004',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // اجازه بده بیلد حتی اگر import بدون استفاده یا warning وجود داشته باشد
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
