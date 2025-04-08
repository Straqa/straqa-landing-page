import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/demo',
        destination: 'https://youtu.be/QPx52UNhkRc', 
        permanent: false,
      },
    ];
  },

};

export default nextConfig;
