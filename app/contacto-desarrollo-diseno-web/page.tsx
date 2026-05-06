import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto Desarrollo Diseno Web | Webunica',
  description: 'Descubre todo sobre Contacto Desarrollo Diseno Web con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Contacto Desarrollo Diseno Web | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/contacto-desarrollo-diseno-web',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/contacto-desarrollo-diseno-web',
  }
};

export default function Page() {
  return (
    <div className="min-h-screen py-24 bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">CONTACTO DESARROLLO DISENO WEB</h1>
        <p className="text-zinc-400">Esta página está en proceso de rediseño.</p>
      </div>
    </div>
  );
}
