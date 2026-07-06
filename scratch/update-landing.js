const fs = require('fs');
const file = 'app/landing-shopify-emd/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add imports
content = content.replace(
  "import WorkProcess from '@/components/sections/work-process';",
  "import WorkProcess from '@/components/sections/work-process';\nimport ShopifyPlans from '@/components/sections/shopify-plans';\nimport Script from 'next/script';"
);

// 2. Update metadata
content = content.replace(
  /export const metadata = \{[\s\S]*?\};/,
  `export const metadata = {
  title: 'Desarrollo de Tiendas Shopify Chile | Expertos, Planes y Costos',
  description: 'Somos expertos en desarrollo de tiendas Shopify en Chile. Diseño profesional, configuración de ventas, integraciones locales y optimización comercial (CRO) para tu negocio.',
  keywords: 'desarrollo shopify chile, tiendas shopify, diseño shopify, partners shopify, ecommerce chile, crear tienda shopify chile',
  alternates: {
    canonical: 'https://desarrolloshopify.cl/',
  },
  openGraph: {
    title: 'Desarrollo de Tiendas Shopify en Chile | Webunica',
    description: 'Expertos en desarrollo y diseño Shopify en Chile. Construimos y optimizamos tu e-commerce para maximizar ventas.',
    url: 'https://desarrolloshopify.cl',
    type: 'website',
  }
};`
);

// 3. Remove plans array
content = content.replace(/  const plans = \[[\s\S]*?    \}\n  \];\n/, '');

// 4. Add JSON-LD
const jsonLd = `  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo de Tiendas Shopify",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CL",
        "addressLocality": "Santiago"
      }
    },
    "areaServed": "CL",
    "description": "Servicio experto de diseño, desarrollo y configuración técnica de tiendas Shopify en Chile.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CLP",
      "lowPrice": "320000",
      "highPrice": "1200000",
      "offerCount": "4"
    }
  };

  return (`;

content = content.replace('  return (', jsonLd);

// 5. Inject JSON LD Script
content = content.replace(
  '<div className="pt-[22vh] lg:pt-48">',
  `<Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-[22vh] lg:pt-48">`
);

// 6. Replace plans rendering
const oldPlansRegex = /\{\/\* 7\. Planes de Desarrollo \*\/\}\s*<section id="planes"[\s\S]*?\{\/\* Proceso de Trabajo \*\/\}/;
content = content.replace(oldPlansRegex, `{/* 7. Planes de Desarrollo */}
        <ShopifyPlans />

        {/* Proceso de Trabajo */}`);

fs.writeFileSync(file, content);
console.log('Done!');
