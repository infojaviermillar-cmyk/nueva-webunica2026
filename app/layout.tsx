import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AnnouncementBar from '@/components/layout/announcement-bar';
import { ContactModalProvider } from '@/context/contact-modal-context';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Webunica | Agencia de Embudos de Venta y Alta Ingeniería Web',
  description: 'Expertos en embudos de venta de alto rendimiento, captación de leads y automatización comercial en Chile. Desarrollamos sistemas digitales que convierten para marcas escala global.',
  keywords: 'embudos de venta chile, captacion de leads, agencia embudos de venta, desarrollo nextjs chile, expertos shopify chile, saas development, automatizacion comercial',
  openGraph: {
    title: 'Webunica | Agencia de Embudos de Venta de Élite',
    description: 'Convertimos tráfico en clientes. Embudos de venta, SaaS y E-commerce de alto rendimiento en Chile.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
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

  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-900 overflow-x-hidden">
        <ContactModalProvider>
          <AnnouncementBar />
          <Header domain={domain} />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
