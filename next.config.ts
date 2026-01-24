import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Configure external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  // Optimize compilation
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
  // Disable source maps in development for faster builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;