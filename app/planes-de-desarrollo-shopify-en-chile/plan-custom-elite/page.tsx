import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CheckCircle2, Crown, ShieldCheck, Clock, ArrowRight, Award, Compass, Layers } from 'lucide-react';

export const metadata = {
  title: 'Plan Custom Elite Shopify Chile | Desarrollo a Medida en Figma',
  description: 'Plan Custom Elite de desarrollo Shopify en Chile. Diseño UX/UI desde cero en Figma sin plantillas, migración avanzada e integraciones ERP enterprise.',
  keywords: 'plan custom elite shopify chile, desarrollo shopify a medida figma, disenador shopify partner chile, ecommerce enterprise shopify chile',
};

export default function PlanCustomElitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plan Custom Elite Shopify Chile",
    "description": "Desarrollo a medida de tienda Shopify con diseño UX/UI exclusivo desde cero en Figma, migración masiva de catálogo e integraciones a medida.",
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
    "areaServed": "CL"
  };

  const faqs = [
    {
      question: "¿Qué diferencia al Plan Custom Elite de utilizar plantillas?",
      answer: "Diseñamos la experiencia de usuario (UX/UI) completamente a medida en Figma respetando la identidad única de tu marca, prototipando interacciones exclusivas antes de programar una sola línea de código."
    },
    {
      question: "¿Cómo se define la cotización del proyecto?",
      answer: "Evaluamos el volumen del catálogo, la complejidad de las maquetas en Figma, las integraciones con sistemas ERP o legados y requerimientos internacionales para entregar una propuesta a medida."
    },
    {
      question: "¿Incluye migración masiva de clientes e historial de pedidos?",
      answer: "Sí, realizamos migración completa de productos, colecciones, clientes e historial de compras desde WooCommerce, Magento, PrestaShop o sistemas propios."
    },
    {
      question: "¿Qué garantía y soporte incluye?",
      answer: "El Plan Custom Elite incluye 3 meses de garantía directa en funcionamiento y soporte prioritario VIP post-lanzamiento."
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
            <span className="text-emerald-600 font-bold">Custom Elite</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest">
              <Crown className="w-4 h-4" />
              Diseño UX/UI 100% a Medida (Figma)
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-950 font-neue-haas">
              Shopify <span className="text-emerald-600 font-neue-haas">Custom Elite</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed mb-8">
              La solución e-commerce más avanzada. Diseño desde cero en Figma sin plantillas, prototipado interactivo, migración masiva e integraciones ERP enterprise.
            </p>

            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 mb-8 flex items-baseline gap-4">
              <span className="text-4xl font-black text-emerald-950">A Cotizar</span>
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Proyecto a Medida</span>
              <span className="text-xs text-emerald-800 font-extrabold bg-emerald-200/70 px-3 py-1 rounded-full">Plazo a Convenir</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadButton className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 text-center">
                Cotizar Proyecto Custom Elite
              </LeadButton>
              <WhatsAppButton className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all text-center">
                Agendar Reunión Técnica
              </WhatsAppButton>
            </div>
          </div>

          <div className="bg-zinc-950 text-white p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Propuesta Custom Elite Enterprise</h3>
            <ul className="space-y-4">
              {[
                "Diseño UX/UI desde cero en Figma (Sin uso de plantillas)",
                "Prototipado interactivo y refinamiento estético de marca",
                "Carta Gantt en línea & seguimiento por hitos de cumplimiento (8 semanas)",
                "Migración avanzada de productos, clientes y contenido de la empresa",
                "Optimización para conversión CRO en todos los puntos del embudo",
                "Integración con ERP u otros sistemas internos a medida",
                "Configuración de GA4, Google Tag Manager y Meta Pixel + Conversion API",
                "Medición de eventos avanzados para optimizar campañas publicitarias",
                "Garantía de 3 meses en funcionamiento y soporte VIP"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-zinc-50 py-24 rounded-[4rem] mx-4 mb-20">
          <FAQSection faqs={faqs} title="Preguntas sobre el Plan Custom Elite" description="Entiende nuestro proceso de diseño exclusivo en Figma y desarrollo en Shopify." />
        </div>

        {/* CTA */}
        <section className="text-center max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 font-neue-haas">Construyamos la tienda insignia de tu industria</h2>
          <p className="text-zinc-500 text-lg mb-8 font-light">Diseño a medida en Figma, código limpio en Liquid y máximo rendimiento comercial.</p>
          <LeadButton className="px-10 py-5 bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
            Cotizar Custom Elite
          </LeadButton>
        </section>
      </div>
    </div>
  );
}
