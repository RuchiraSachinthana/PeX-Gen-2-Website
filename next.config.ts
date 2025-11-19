import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "pex-sooty.vercel.app",
      },
      {
        protocol: "https",
        hostname: "pex-sooty.vercel.app",
      },
    ],
  },
};

export default nextConfig;
