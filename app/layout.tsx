import type { Metadata } from 'next';
import { Questrial, Plus_Jakarta_Sans, JetBrains_Mono, Caveat, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DisenoShopifyHeader from '@/components/layout/diseno-shopify-header';
import DisenoShopifyFooter from '@/components/layout/diseno-shopify-footer';
import DesarrolloShopifyFooter from '@/components/layout/desarrollo-shopify-footer';
import FloatingWhatsApp from '@/components/layout/floating-whatsapp';
import { ContactModalProvider } from '@/context/contact-modal-context';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
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
        alt: 'Webunica — Expertos Digitales y Shopify Partners en Chile',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

// ── Global Structured Data (Schema.org JSON-LD) ──────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://webunica.cl/#organization',
  name: 'Webunica Chile E.I.R.L.',
  alternateName: 'Webunica',
  url: 'https://webunica.cl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://webunica.cl/logo-webunica.png.webp',
    width: 200,
    height: 60,
  },
  image: 'https://webunica.cl/og-image.jpg',
  description: 'Agencia digital chilena especializada en desarrollo de tiendas Shopify, diseño web, e-commerce, Next.js SaaS y posicionamiento en inteligencia artificial (GEO) en Chile.',
  foundingDate: '2014',
  founder: {
    '@type': 'Person',
    name: 'Javier Millar',
    url: 'https://webunica.cl/sobre-nosotros',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  knowsAbout: [
    'Shopify Development',
    'E-commerce Chile',
    'Web Design',
    'WooCommerce',
    'Next.js',
    'Generative Engine Optimization (GEO)',
    'SEO Chile',
    'E-learning Moodle',
    'SaaS Development',
  ],
  sameAs: [
    'https://www.instagram.com/webunicachile',
    'https://www.linkedin.com/company/webunica',
    'https://www.facebook.com/webunica',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://webunica.cl/contacto',
    availableLanguage: 'Spanish',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://webunica.cl/#localbusiness',
  name: 'Webunica Chile E.I.R.L.',
  image: 'https://webunica.cl/logo-webunica.png.webp',
  url: 'https://webunica.cl',
  description: 'Agencia de desarrollo web Shopify, diseño web y GEO en Chile. Shopify Partners certificados.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressRegion: 'Región Metropolitana',
    addressLocality: 'Santiago',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4489,
    longitude: -70.6693,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  currenciesAccepted: 'CLP',
  paymentAccepted: 'Transferencia bancaria, Tarjeta de crédito',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://webunica.cl/#website',
  name: 'Webunica',
  url: 'https://webunica.cl',
  description: 'Expertos en desarrollo Shopify, diseño web, e-commerce y GEO en Chile.',
  inLanguage: 'es-CL',
  publisher: {
    '@id': 'https://webunica.cl/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://webunica.cl/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

import NavigationProgressBar from '@/components/ui/navigation-progress-bar';
import { Suspense } from 'react';
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
  const isIntelligence = headersList.get('x-is-intelligence') === 'true' || domain.includes('intelligence');

  return (
    <html
      lang="es-CL"
      className={`${questrial.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${caveat.variable} ${inter.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-TLZXRQCG" />
      {/* ── Global Schema.org JSON-LD ─────────────────────────────────────── */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-LXMLKX5Y7G'} />
      {(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'xpx6ltmpx6') && (
        <Script id="clarity-tracking" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'xpx6ltmpx6'}");
          `}
        </Script>
      )}
      <body className="font-sans min-h-full flex flex-col bg-white text-zinc-900 overflow-x-hidden">
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>
        {isIntelligence ? (
          children
        ) : (
          <ContactModalProvider>
            {isDisenoShopify ? <DisenoShopifyHeader /> : <Header domain={domain} />}
            <main className="flex-grow">
              {children}
            </main>
            {isDisenoShopify ? <DisenoShopifyFooter /> : isDesarrolloShopify ? <DesarrolloShopifyFooter /> : <Footer />}
          </ContactModalProvider>
        )}
      </body>
    </html>
  );
}
