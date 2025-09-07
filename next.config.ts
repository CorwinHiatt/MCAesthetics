import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      // Add this for local images (optional but helps in some edge cases)
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002', // Your dev port
        pathname: '/images/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/aesthetic-services/coolpeel-co2-laser', // Adjust if your dynamic path is different
        destination: '/coolpeel',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;