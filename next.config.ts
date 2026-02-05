import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/en-us/artigos/:path*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/en-us/artigos",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/en-us/contact",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/en-us/contato",
        permanent: true,
      },
      {
        source: "/artigos",
        destination: "/pt-br/artigos",
        permanent: true,
      },
      {
        source: "/contato",
        destination: "/pt-br/contato",
        permanent: true,
      },
      {
        source: "/projetos",
        destination: "/pt-br/projetos",
        permanent: true,
      },
      {
        source: "/sobre",
        destination: "/pt-br/sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
