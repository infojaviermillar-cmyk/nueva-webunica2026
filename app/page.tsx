import { Metadata } from 'next';
import HomeDesign from './home-design';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Webunica | Agencia de Diseño y Desarrollo Web de Élite en Chile',
  description: 'Especialistas en diseño de páginas web, desarrollo de sitios ecommerce con Shopify y aplicaciones SaaS con Next.js. Alta ingeniería web para marcas que buscan resultados reales en Chile.',
  keywords: ['diseño web chile', 'desarrollo shopify chile', 'agencia diseño web', 'desarrollo nextjs chile', 'diseño paginas web', 'experto shopify chile', 'embudos de venta'],
  openGraph: {
    title: 'Webunica | Ingeniería Web de Élite',
    description: 'Transformamos marcas con sitios web de alto rendimiento y estrategias de conversión probadas.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webunica | Agencia de Desarrollo Web Pro',
    description: 'Sitios web ultra-rápidos con Next.js y Shopify para empresas que quieren escalar.',
  },
  alternates: {
    canonical: 'https://webunica.cl',
  }
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeDesign posts={posts} />;
}
