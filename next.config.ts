import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Damaura has no screening tool; the page that sold one now lives at /damaura.
      {
        source: "/services/screening",
        destination: "/damaura",
        permanent: true,
      },
    ];
  },
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
