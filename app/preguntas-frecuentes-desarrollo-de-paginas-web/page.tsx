import { Metadata } from 'next';
import Script from 'next/script';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Desarrollo de Páginas Web | Webunica Chile',
  description: 'Respuestas claras a las preguntas más comunes sobre desarrollo web en Chile: costos, plazos, tecnologías, SEO y más. Resolvemos tus dudas antes de contratar.',
  openGraph: {
    title: 'Preguntas Frecuentes sobre Desarrollo de Páginas Web | Webunica Chile',
    description: 'Guía completa de preguntas frecuentes sobre desarrollo web en Chile.',
    url: 'https://webunica.cl/preguntas-frecuentes-desarrollo-de-paginas-web',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/preguntas-frecuentes-desarrollo-de-paginas-web',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta desarrollar una página web en Chile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo varía según el tipo de proyecto. Una landing page básica parte desde $300.000 CLP, un sitio corporativo entre $500.000 y $1.500.000 CLP, y una tienda e-commerce completa desde $1.200.000 CLP. En Webunica ofrecemos presupuestos personalizados sin costo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo demora desarrollar una página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una landing page puede estar lista en 5-7 días hábiles. Un sitio corporativo toma entre 3 y 6 semanas. Una tienda e-commerce compleja puede tomar entre 4 y 10 semanas, dependiendo del número de productos y funcionalidades requeridas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tecnología usan para desarrollar páginas web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usamos Next.js para sitios corporativos y SaaS de alto rendimiento, Shopify para tiendas e-commerce escalables, WordPress/WooCommerce para negocios con requerimientos específicos de contenido, y Moodle/Tutor LMS para plataformas educativas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El sitio web será optimizado para Google (SEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todos nuestros proyectos incluyen SEO técnico básico: velocidad optimizada, metadatos correctos, estructura de encabezados, sitemap XML y schema.org. Para campañas de posicionamiento orgánico avanzado ofrecemos servicios SEO continuos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito hosting para mi página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de la plataforma. Shopify incluye el hosting en su suscripción mensual. Para sitios WordPress o Next.js, recomendamos Hostinger o Vercel, que tienen planes accesibles para el mercado chileno. Te asesoramos en la mejor opción según tu presupuesto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el mantenimiento mensual de una página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El mantenimiento mensual incluye actualizaciones de seguridad, respaldo de datos, monitoreo de disponibilidad, corrección de errores menores y soporte técnico. El costo parte desde $80.000 CLP/mes según el tipo de sitio.',
      },
    },
  ],
};

const faqs = [
  {
    q: '¿Cuánto cuesta desarrollar una página web en Chile?',
    a: 'El costo varía según el tipo de proyecto. Una landing page básica parte desde $300.000 CLP, un sitio corporativo entre $500.000 y $1.500.000 CLP, y una tienda e-commerce completa desde $1.200.000 CLP. En Webunica ofrecemos presupuestos personalizados sin costo.',
  },
  {
    q: '¿Cuánto tiempo demora desarrollar una página web?',
    a: 'Una landing page puede estar lista en 5-7 días hábiles. Un sitio corporativo toma entre 3 y 6 semanas. Una tienda e-commerce compleja puede tomar entre 4 y 10 semanas, dependiendo del número de productos y funcionalidades requeridas.',
  },
  {
    q: '¿Qué tecnología usan para desarrollar páginas web?',
    a: 'Usamos Next.js para sitios corporativos y SaaS de alto rendimiento, Shopify para tiendas e-commerce escalables, WordPress/WooCommerce para negocios con requerimientos específicos de contenido, y Moodle/Tutor LMS para plataformas educativas.',
  },
  {
    q: '¿El sitio web será optimizado para Google (SEO)?',
    a: 'Sí. Todos nuestros proyectos incluyen SEO técnico básico: velocidad optimizada, metadatos correctos, estructura de encabezados, sitemap XML y schema.org. Para campañas de posicionamiento orgánico avanzado ofrecemos servicios SEO continuos.',
  },
  {
    q: '¿Necesito hosting para mi página web?',
    a: 'Depende de la plataforma. Shopify incluye el hosting en su suscripción mensual. Para sitios WordPress o Next.js, recomendamos Hostinger o Vercel, que tienen planes accesibles para el mercado chileno. Te asesoramos en la mejor opción según tu presupuesto.',
  },
  {
    q: '¿Qué incluye el mantenimiento mensual de una página web?',
    a: 'El mantenimiento mensual incluye actualizaciones de seguridad, respaldo de datos, monitoreo de disponibilidad, corrección de errores menores y soporte técnico. El costo parte desde $80.000 CLP/mes según el tipo de sitio.',
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-[18vh] pb-24">
      <Script
        id="schema-faq-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Guía de Desarrollo Web Chile 2026
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.9] mb-8">
          Preguntas Frecuentes<br />
          <span className="text-violet-600 italic font-serif lowercase font-light text-5xl lg:text-8xl">
            desarrollo web
          </span>
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
          Resolvemos las dudas más comunes sobre costos, plazos y tecnologías antes de que contrates tu proyecto web.
        </p>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-8 hover:border-violet-200 transition-colors">
              <h2 className="text-lg font-bold text-zinc-900 mb-3 leading-snug">
                {item.q}
              </h2>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-zinc-950 rounded-3xl p-10">
          <h2 className="text-2xl font-black text-white mb-4">¿Tienes más preguntas?</h2>
          <p className="text-zinc-400 mb-8">Conversemos sobre tu proyecto. Primera asesoría sin costo.</p>
          <LeadButton className="inline-block px-8 py-4 bg-white text-zinc-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors">
            Solicitar Asesoría Gratuita
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
