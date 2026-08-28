import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      { protocol: "https", hostname: "ieeebracu.com" },
    ],
  },
};

export default nextConfig;
