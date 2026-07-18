import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export optimisation — all routes are SSG
  output: undefined, // deploy to Vercel, use default `next start`

  images: {
    // Remote patterns reserved for future portfolio images
    // Add specific hostnames when real images are hosted
    remotePatterns: [],
    // Prevent CLS — always require explicit width/height
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
