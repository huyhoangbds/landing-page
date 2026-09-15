import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true, formats: ["image/avif", "image/webp"], qualities: [75, 90] },
};

export default nextConfig;
