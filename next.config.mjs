/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.GITHUB_ACTIONS === "true" ? { output: "export" } : {}),
  trailingSlash: true,
  turbopack: {
    root: process.cwd()
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
