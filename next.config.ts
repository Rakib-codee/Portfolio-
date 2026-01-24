import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Disable telemetry for faster builds
  telemetry: {
    disabled: true,
  },
  // Optimize compilation
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
  // Disable source maps in development for faster builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;