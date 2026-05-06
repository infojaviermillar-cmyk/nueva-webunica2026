import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software De Pedidos En Linea | Webunica',
  description: 'Descubre todo sobre Software De Pedidos En Linea con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Software De Pedidos En Linea | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/software-de-pedidos-en-linea',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/software-de-pedidos-en-linea',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">SOFTWARE DE PEDIDOS EN LINEA</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
