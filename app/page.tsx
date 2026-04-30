import { Metadata } from 'next';
import HomeDesignClient from './home-design-client';
import { getPublishedPosts } from '@/lib/blog';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Diseño de Páginas Web y Desarrollo de Sitios Web en Chile | Webunica',
  description: 'Agencia de diseño web y desarrollo de sitios web de alto rendimiento. Especialistas en Next.js y Shopify para empresas que buscan resultados reales.',
  keywords: 'diseño de paginas web, desarrollo de sitios web, agencia de diseño web, paginas web chile, diseño web profesional, desarrollo web nextjs',
  openGraph: {
    title: 'Webunica | Diseño y Desarrollo de Sitios Web de Élite',
    description: 'Creamos experiencias digitales de alto rendimiento. Diseño web premium y desarrollo tecnológico para escalar tu negocio.',
    images: ['/og-home.png'],
  },
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeDesignClient posts={posts} />;
}
