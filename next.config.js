const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turbopack — bundler default Next.js 16 (dev + build)
  turbopack: {
    // Batasi scan hanya ke folder project (hindari parent lockfile)
    root: path.join(__dirname),
  },

  images: {
    formats: ['image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/kursus',
        destination: '/photoshoot',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
