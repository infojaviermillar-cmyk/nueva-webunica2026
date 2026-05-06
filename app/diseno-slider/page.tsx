import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseno Slider | Webunica',
  description: 'Descubre todo sobre Diseno Slider con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Diseno Slider | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/diseno-slider',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/diseno-slider',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">DISENO SLIDER</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
