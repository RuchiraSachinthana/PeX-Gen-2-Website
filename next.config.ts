import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Domain configuration for pexsoftwaresolutions.com
  images: {
    domains: ['pexsoftwaresolutions.com', 'pex-sooty.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pexsoftwaresolutions.com',
      },
      {
        protocol: "https",
        hostname: "pex-sooty.vercel.app",
      },
      {
        protocol: "http",
        hostname: "pex-sooty.vercel.app",
      },
    ],
  },
  // Ensure proper domain handling
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Domain',
            value: 'pexsoftwaresolutions.com',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
