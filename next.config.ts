import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "misquince.es",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/catalogo",
        destination: "/catalogo-hola-eventos.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

