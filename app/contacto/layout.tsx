import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Webunica',
  description: 'Descubre todo sobre Contacto con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Contacto | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/contacto',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/contacto',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
