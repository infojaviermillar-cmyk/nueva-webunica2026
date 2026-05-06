import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuentanos Sobre Tu Proyecto Web | Webunica',
  description: 'Descubre todo sobre Cuentanos Sobre Tu Proyecto Web con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Cuentanos Sobre Tu Proyecto Web | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/cuentanos-sobre-tu-proyecto-web',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/cuentanos-sobre-tu-proyecto-web',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">CUENTANOS SOBRE TU PROYECTO WEB</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
