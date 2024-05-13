/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/playground",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
