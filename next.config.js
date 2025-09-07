/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ disable Next.js Image Optimization
  },
};

module.exports = nextConfig;
