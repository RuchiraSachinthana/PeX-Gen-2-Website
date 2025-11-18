import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Domain configuration for pexsoftwaresolutions.com
  images: {
    domains: ['pexsoftwaresolutions.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pexsoftwaresolutions.com',
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
