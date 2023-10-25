const withExportImages = require("next-export-optimize-images");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProduction ? "export" : "standalone",
};

module.exports = withExportImages(nextConfig);
