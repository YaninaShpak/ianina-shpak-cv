/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: "dist",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
}
 
module.exports = nextConfig