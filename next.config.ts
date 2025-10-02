import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/artigos/:path*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/artigos",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contato",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
