/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // real speaker photos are hosted on belegends.club / lumacdn.com — allow them
    // through next/image if you switch <img> tags over to it later.
    remotePatterns: [
      { protocol: 'https', hostname: 'belegends.club' },
      { protocol: 'https', hostname: 'images.lumacdn.com' }
    ]
  }
};

module.exports = nextConfig;
