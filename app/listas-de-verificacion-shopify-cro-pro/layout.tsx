import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checklist CRO Avanzado para Shopify | Webunica',
  description: 'Lista de verificación premium con estrategias avanzadas de conversión y psicología de ventas para tiendas Shopify de alto rendimiento.',
  openGraph: {
    title: 'Checklist CRO Avanzado para Shopify',
    description: 'Estrategias premium para maximizar la tasa de conversión en tu e-commerce.',
    url: 'https://webunica.cl/listas-de-verificacion-shopify-cro-pro',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
