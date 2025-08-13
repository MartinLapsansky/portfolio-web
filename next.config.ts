import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-web",      // repo name
  assetPrefix: "/portfolio-web/",  // <-- trailing slash is important!
  images: {
    unoptimized: true,             // if using next/image
  },
};

export default nextConfig;