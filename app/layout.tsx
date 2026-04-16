import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingShapes from '@/components/ui/floating-shapes';
import { ContactModalProvider } from '@/context/contact-modal-context';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Webunica | Agencia de Ingeniería Web y Expertos Shopify en Chile',
  description: 'Agencia boutique de ingeniería web en Chile. Especialistas en desarrollo Next.js, plataformas SaaS escalables y optimización avanzada de tiendas Shopify para maximizar el ROI.',
  keywords: 'agencia diseño web chile, desarrollo nextjs chile, expertos shopify chile, saas development, seo tecnico avanzado, webunica',
  openGraph: {
    title: 'Webunica | Agencia de Ingeniería Web de Élite',
    description: 'Expertos en desarrollo Next.js, SaaS y E-commerce Shopify de alto rendimiento en Chile.',
    url: 'https://webunica.cl',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-900 overflow-x-hidden">
        <ContactModalProvider>
          <FloatingShapes />
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
