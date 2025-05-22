/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignore ts errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // ignore eslint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;