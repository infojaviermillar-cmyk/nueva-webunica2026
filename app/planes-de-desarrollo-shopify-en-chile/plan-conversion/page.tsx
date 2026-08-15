import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CheckCircle2, Rocket, ShieldCheck, Clock, ArrowRight, Award, Flame, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Plan Conversión Shopify Chile | Theme Propio & Optimización CRO $1.200.000',
  description: 'Plan Conversión de desarrollo Shopify en Chile. Theme propio optimizado para ventas, fichas CRO avanzadas, integración ERP (Bsale, Obuma) e Email Marketing con Klaviyo.',
  keywords: 'plan conversion shopify chile, cro shopify chile, optimizacion tasa de conversion shopify, integracion erp bsale shopify, klaviyo shopify chile',
};

export default function PlanConversionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plan Conversión Shopify Chile",
    "description": "Desarrollo de tienda Shopify con Theme Propio enfocado en conversión, mejoras CRO en ficha de producto, integración ERP (Bsale/Obuma) y Klaviyo.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/logo-webunica.png.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressCountry": "CL"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "1200000",
      "priceCurrency": "CLP",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": "CL"
  };

  const faqs = [
    {
      question: "¿En qué se diferencia el Plan Conversión de los planes tradicionales?",
      answer: "A diferencia de un diseño web convencional, el Plan Conversión se enfoca 100% en maximizar la tasa de conversión (CRO), reduciendo carritos abandonados con un Theme propio y fichas de producto hiper-optimizadas."
    },
    {
      question: "¿Qué integraciones ERP incluye?",
      answer: "Configuramos la sincronización de stock y facturación con sistemas como Bsale, Obuma, Defontana o Rex ERP según la factibilidad técnica del proveedor."
    },
    {
      question: "¿Cómo se implementa Email Marketing con Klaviyo?",
      answer: "Instalamos Klaviyo y dejamos creados los flujos automatizados principales: Formulario de bienvenida con incentivo, flujo de carrito abandonado y secuencia post-compra."
    },
    {
      question: "¿Cuántos productos incluye la migración o carga?",
      answer: "Incluye la migración o carga de hasta 300 productos organizados con variantes, descripciones optimizadas y metacampos."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[18vh] pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/planes-de-desarrollo-shopify-en-chile" className="hover:text-zinc-900 transition-colors">Planes Shopify</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">Plan Conversión</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-black uppercase tracking-widest">
              <Rocket className="w-4 h-4" />
              Theme Propio & CRO Avanzado
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-950 font-neue-haas">
              Plan <span className="text-blue-600 font-neue-haas">Conversión</span> Shopify
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed mb-8">
              Diseñado para marcas que invierten en pauta publicitaria y exigen convertir más visitas en compras. Theme propio de velocidad extrema, optimización CRO de fichas de producto e integración ERP.
            </p>

            <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100 mb-8 flex items-baseline gap-4">
              <span className="text-4xl font-black text-blue-950">$1.200.000</span>
              <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">+ IVA</span>
              <span className="text-xs text-blue-700 font-extrabold bg-blue-200/70 px-3 py-1 rounded-full">Entrega en 8 semanas</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadButton className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-center">
                Solicitar Plan Conversión
              </LeadButton>
              <WhatsAppButton className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all text-center">
                Hablar con un Especialista
              </WhatsAppButton>
            </div>
          </div>

          <div className="bg-zinc-950 text-white p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Ecosistema Plan Conversión</h3>
            <ul className="space-y-4">
              {[
                "Personalización completa de Theme Propio enfocado en conversión",
                "Fichas de Producto avanzadas con metacampos, badges y ofertas CRO",
                "Carta Gantt en línea & seguimiento transparente por hitos (6 semanas)",
                "Migración o carga masiva de hasta 300 productos",
                "Integración con ERP (Bsale, Obuma, Defontana u otro)",
                "Email Marketing automatizado con Klaviyo (Bienvenida + Carrito)",
                "Optimización de velocidad de carga extrema para móviles",
                "Meta Pixel + Conversion API & Google Ads Conversion Tracking",
                "Consultoría estratégica 1 a 1 para maximizar rentabilidad"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-zinc-50 py-24 rounded-[4rem] mx-4 mb-20">
          <FAQSection faqs={faqs} title="Preguntas sobre el Plan Conversión" description="Aprende cómo la arquitectura CRO multiplica la rentabilidad de tu inversión en Ads." />
        </div>

        {/* CTA */}
        <section className="text-center max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 font-neue-haas">Maximiza las ventas de tu tienda online</h2>
          <p className="text-zinc-500 text-lg mb-8 font-light">Transforma tu tráfico en clientes recurrentes con el Plan Conversión Shopify.</p>
          <LeadButton className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
            Solicitar Plan Conversión
          </LeadButton>
        </section>
      </div>
    </div>
  );
}
