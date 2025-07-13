import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "i.scdn.co",
      ["workoscdn.com"],
    ],
  },
};
const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};
export default withMDX(config);
