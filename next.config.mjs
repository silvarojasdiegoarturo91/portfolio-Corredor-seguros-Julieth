/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@prisma/client', 'prisma'],
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icon',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
