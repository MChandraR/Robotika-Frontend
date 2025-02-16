import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['127.0.0.1', 'localhost', 'robotika.s3.ap-southeast-2.amazonaws.com'], // Tambahkan domain yang diizinkan
  },
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
