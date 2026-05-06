import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checklist CRO Básica para Shopify | Webunica',
  description: 'Auditoría gratuita de conversión para tu tienda Shopify. Evalúa 11 dimensiones clave y obtén recomendaciones para vender más.',
  openGraph: {
    title: 'Checklist CRO Básica para Shopify',
    description: 'Evalúa la conversión de tu e-commerce y descubre dónde estás perdiendo ventas.',
    url: 'https://webunica.cl/listas-de-verificacion-shopify-cro-basica',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
