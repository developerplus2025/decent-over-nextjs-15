const { withNextVideo } = require("next-video/process");
const { createMDX } = require("fumadocs-mdx/next");
const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  turbopack: {
    // Example: adding an alias and custom file extension
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  experimental: {
    viewTransition: true,
  },
  images: {
    formats: ["image/avif"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      type: "asset/resource",
    });
    return config;
  },
};
export default withMDX(config);
// Gộp với next-video & MDX
module.exports = withNextVideo(createMDX()(nextConfig));
