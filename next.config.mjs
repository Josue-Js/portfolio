/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: '**'
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false, canvas: false };

    return config;
  },
};

export default nextConfig;
