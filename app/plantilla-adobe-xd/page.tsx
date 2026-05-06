import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantilla Adobe Xd | Webunica',
  description: 'Descubre todo sobre Plantilla Adobe Xd con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Plantilla Adobe Xd | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/plantilla-adobe-xd',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/plantilla-adobe-xd',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">PLANTILLA ADOBE XD</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
