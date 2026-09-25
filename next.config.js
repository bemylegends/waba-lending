/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old routes from earlier prototypes -> new pages (safe even if old folders are still in the repo)
  async redirects() {
    return [
      { source: '/rooms', destination: '/events', permanent: false },
      { source: '/rooms/:path*', destination: '/events', permanent: false },
      { source: '/insights', destination: '/knowledge', permanent: false },
      { source: '/deals', destination: '/membership', permanent: false },
    ];
  },
};

module.exports = nextConfig;
