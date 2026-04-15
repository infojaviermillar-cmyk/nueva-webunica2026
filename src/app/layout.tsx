import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Desarrollo Diseño Páginas Web Empresas',
  description: 'Desarrollo Diseño Páginas Sitios Web Empresas, Tiendas en Línea, Ecommerce, Info +56984410379, Puerto Montt, Temuco, Concepción, Santiago',
  openGraph: {
    title: 'Desarrollo Diseño Páginas Web Empresas',
    description: 'Desarrollo Diseño Páginas Sitios Web Empresas, Tiendas en Línea, Ecommerce, Info +56984410379, Puerto Montt, Temuco, Concepción, Santiago',
    url: 'https://webunica.cl',
    siteName: 'WebUnica',
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
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-900">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
