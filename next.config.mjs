/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;