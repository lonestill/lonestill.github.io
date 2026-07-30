/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: process.cwd()
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
