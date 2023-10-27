const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProduction ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
