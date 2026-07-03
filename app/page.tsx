import { Metadata } from 'next';
import HomeDesign from './home-design';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Webunica | Expertos en E-commerce, Embudos de Venta y Shopify Partners',
  description: 'Expertos en desarrollo web, integraciones y e-commerce. Construimos tiendas Shopify, aplicaciones Next.js y portales SaaS desde Chile para el mundo.',
  keywords: ['diseño web chile', 'desarrollo shopify chile', 'expertos ecommerce', 'desarrollo nextjs chile', 'diseño paginas web', 'shopify partner chile', 'embudos de venta'],
  openGraph: {
    title: 'Webunica | Expertos en E-commerce y Desarrollo',
    description: 'Ingeniería Web orientada a resultados comerciales. Expertos Shopify Partner y Desarrollo SaaS en Chile.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
    images: [
      {
        url: 'https://webunica.cl/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webunica | Expertos en E-commerce y Desarrollo',
    description: 'Expertos Shopify Partner, aplicaciones Next.js y portales SaaS.',
    images: ['https://webunica.cl/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://webunica.cl',
  }
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeDesign posts={posts} />;
}
