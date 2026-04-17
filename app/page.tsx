import { Metadata } from 'next';
import HomeClient from './home-client';
import { getPublishedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Agencia de Embudos de Venta y Desarrollo Web High-Performance | Webunica',
  description: 'Transformamos tu tráfico en ventas reales. Especialistas en embudos de venta de alto rendimiento, automatización comercial y diseño web estratégico en Chile.',
  keywords: 'embudos de venta chile, captacion de leads, agencia embudos de venta, desarrollo web nextjs, automatizacion comercial, landing pages conversion',
  openGraph: {
    title: 'Webunica | Embudos de Venta de Alto Rendimiento',
    description: 'Sistema digital para atraer prospectos y convertir visitas en oportunidades reales de negocio.',
    images: ['/og-home.png'],
  },
};

export default async function Home() {
  const posts = await getPublishedPosts();
  return <HomeClient posts={posts} />;
}
