import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crea Tu Sistema De Agenda Online | Webunica',
  description: 'Descubre todo sobre Crea Tu Sistema De Agenda Online con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Crea Tu Sistema De Agenda Online | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/crea-tu-sistema-de-agenda-online',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/crea-tu-sistema-de-agenda-online',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">CREA TU SISTEMA DE AGENDA ONLINE</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
