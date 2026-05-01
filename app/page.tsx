import { Metadata } from 'next';
import HomeDesign from './home-design';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Webunica | Agencia de Diseño y Desarrollo Web de Élite',
  description: 'Especialistas en diseño de páginas web, desarrollo de sitios ecommerce con Shopify y aplicaciones SaaS con Next.js. Alta ingeniería web para marcas que buscan resultados.',
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeDesign posts={posts} />;
}
