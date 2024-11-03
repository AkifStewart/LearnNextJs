import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    apiHost: process.env.HOST_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
