/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  serverExternalPackages: [],
};
// Next.js 15+ config for custom IP hostnames
nextConfig.allowedDevOrigins = ['10.114.114.39', 'localhost'];

export default nextConfig;
