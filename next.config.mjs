// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.assets.so", "via.placeholder.com"],
  },
};

export default withPlaiceholder(nextConfig);
