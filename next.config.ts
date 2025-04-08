import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/video',
        destination: 'https://youtu.be/QPx52UNhkRc', 
        permanent: false,
      },
    ];
  },

};

export default nextConfig;
