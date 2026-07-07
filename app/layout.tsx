import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DisenoShopifyHeader from '@/components/layout/diseno-shopify-header';
import DisenoShopifyFooter from '@/components/layout/diseno-shopify-footer';
import DesarrolloShopifyFooter from '@/components/layout/desarrollo-shopify-footer';
import FloatingWhatsApp from '@/components/layout/floating-whatsapp';
import { ContactModalProvider } from '@/context/contact-modal-context';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Webunica | Expertos Digitales y Shopify Partners en Chile',
  description: 'Desarrollamos soluciones web de alto impacto orientadas a ventas. Sitios ultra-rápidos, embudos de conversión, portales SaaS y ecosistemas Shopify rentables.',
  keywords: 'expertos digitales, shopify partners chile, embudos de venta chile, captacion de leads, desarrollo nextjs chile, expertos shopify chile, saas development, automatizacion comercial',
  openGraph: {
    title: 'Webunica | Expertos Digitales y Shopify Partners',
    description: 'Ingeniería Web orientada a resultados. Convertimos tráfico en clientes a través de tecnología, velocidad y conversión comercial en Chile.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
    images: [
      {
        url: 'https://webunica.cl/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl',
  },
  icons: {
    icon: '/favicon.webp',
  },
};

import { headers } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const domain = headersList.get('host') || '';
  const isDisenoShopify = domain.includes('diseñoshopify') || domain.includes('xn--diseoshopify-dhb');
  const isDesarrolloShopify = domain.includes('desarrolloshopify.cl');

  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-TLZXRQCG" />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-LXMLKX5Y7G'} />
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-900 overflow-x-hidden">
        <ContactModalProvider>
          {isDisenoShopify ? <DisenoShopifyHeader /> : <Header domain={domain} />}
          <main className="flex-grow">
            {children}
          </main>
          {isDisenoShopify ? <DisenoShopifyFooter /> : isDesarrolloShopify ? <DesarrolloShopifyFooter /> : <Footer />}
          {/* Botón unificado en ContactModalProvider */}
        </ContactModalProvider>
      </body>
    </html>
  );
}
