import { Metadata } from 'next';
import HomeClient from '@/app/home-client';
import { getPublishedPosts } from '@/lib/blog';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Agencia de Embudos de Venta y Captación de Leads en Chile | Webunica',
  description: 'Expertos en embudos de venta de alto rendimiento, automatización comercial y sistemas de captación de clientes potenciales para empresas en Chile.',
  keywords: 'embudos de venta chile, captacion de leads, agencia embudos de venta, automatizacion comercial, landing pages conversion',
};

export default async function EmbudosPage() {
  const posts = await getPublishedPosts();
  return <HomeClient posts={posts} />;
}
