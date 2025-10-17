import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // root: 'D:/koderlabs/lama-ecommerce/client',
    root: __dirname
  },
};

export default nextConfig;
