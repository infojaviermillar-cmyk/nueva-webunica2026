import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/desarrollo-diseno-paginas-web-pymes',
        destination: '/desarrollo-paginas-web-pymes-chile',
        permanent: true,
      },
      {
        source: '/tienda-dropshipping-shopify-dropi',
        destination: '/tienda-dropshipping-shopify-y-dropi',
        permanent: true,
      },
      {
        source: '/blog/como-crear-tienda-shopify-chile',
        destination: '/blog/crear-tienda-shopify-chile-paso-a-paso',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        // Supabase Storage
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        // Unsplash fallback
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        // DALL-E 3 generated images (Azure CDN)
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        pathname: '/**',
      },
      {
        // DALL-E images via OpenAI CDN
        protocol: 'https',
        hostname: '*.openai.com',
        pathname: '/**',
      },
      {
        // Webunica WordPress assets
        protocol: 'https',
        hostname: 'webunica.cl',
        pathname: '/**',
      },
      {
        // Pravatar for avatars
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
} as any;

export default nextConfig;
