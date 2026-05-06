import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo Web Webunica Chile | Webunica',
  description: 'Descubre todo sobre Desarrollo Web Webunica Chile con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Desarrollo Web Webunica Chile | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/desarrollo-web-webunica-chile',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-web-webunica-chile',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">DESARROLLO WEB WEBUNICA CHILE</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
