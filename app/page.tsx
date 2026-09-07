import { Metadata } from 'next';
import HomeDesign from './home-design';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Diseño Web en Chile & Shopify Partners | Webunica E-commerce',
  description: 'Agencia de diseño y desarrollo web en Chile especializada en tiendas Shopify, Next.js y portales SaaS. Shopify Partners certificados con +10 años de experiencia. Presupuesto sin costo.',
  keywords: [
    'diseño web chile',
    'diseño web en chile',
    'desarrollo shopify chile',
    'shopify partner chile',
    'agencia ecommerce chile',
    'desarrollo nextjs chile',
    'diseño paginas web chile',
    'embudos de venta chile',
    'tienda online chile',
    'desarrollo web santiago',
  ],
  openGraph: {
    title: 'Diseño Web en Chile & Shopify Partners | Webunica',
    description: 'Agencia chilena especializada en tiendas Shopify, sitios web de alto rendimiento y portales SaaS. Shopify Partners certificados con +10 años en el mercado.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
    images: [
      {
        url: 'https://webunica.cl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Webunica — Agencia de Diseño Web y Shopify Partners en Chile',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web en Chile & Shopify Partners | Webunica',
    description: 'Agencia chilena especializada en tiendas Shopify, sitios web y portales SaaS con +10 años de experiencia.',
    images: ['https://webunica.cl/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://webunica.cl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': 160,
      'max-image-preview': 'large',
    },
  },
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeDesign posts={posts} />;
}
