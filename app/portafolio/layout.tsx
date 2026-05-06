import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio | Webunica',
  description: 'Descubre todo sobre Portafolio con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: 'Portafolio | Webunica',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: 'https://webunica.cl/portafolio',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/portafolio',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
