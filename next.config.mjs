import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "i.scdn.co",
    ],
  },
};

export default createMDX()(nextConfig);
