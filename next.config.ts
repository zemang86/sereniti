import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/umt-proposal26",
        destination: "/umt-proposal26.html",
      },
    ];
  },
};

export default nextConfig;
