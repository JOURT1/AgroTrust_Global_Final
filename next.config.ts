import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['static.usernames.app-backend.toolsforhumanity.com'],
  },
  allowedDevOrigins: ['https://648c-190-9-183-30.ngrok-free.app'], // Add your dev origin here
  reactStrictMode: false,
};

export default nextConfig;
