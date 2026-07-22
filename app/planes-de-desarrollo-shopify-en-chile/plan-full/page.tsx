import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CheckCircle2, Zap, ShieldCheck, Clock, ArrowRight, Award, FileText, Truck } from 'lucide-react';

export const metadata = {
  title: 'Plan Full Shopify Chile | CyberDay Ready & Boleta SII $780.000',
  description: 'Plan Full de desarrollo Shopify en Chile. El más vendido: Boleta electrónica SII automatizada, Carrier Calculated Shipping (CCS) y CyberDay Ready.',
  keywords: 'plan full shopify chile, shopify boleta sii chile, carrier calculated shipping shopify, desarrollo shopify $780000, shopify cyberday ready',
};

export default function PlanFullPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plan Full Shopify Chile",
    "description": "Desarrollo de tienda Shopify CyberDay Ready con Boleta electrónica SII, Carrier Calculated Shipping y carga de 120 productos.",
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
      "price": "780000",
      "priceCurrency": "CLP",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": "CL"
  };

  const faqs = [
    {
      question: "¿Por qué el Plan FULL es el más vendido?",
      answer: "Porque resuelve de raíz las dos principales fricciones de operar e-commerce en Chile: la emisión automatizada de boleta electrónica ante el SII y el cálculo exacto de envíos por transportistas (Starken, BlueExpress)."
    },
    {
      question: "¿Qué significa que la tienda esté 'CyberDay Ready'?",
      answer: "Optimizamos la velocidad de carga, cache, imágenes y estructura de checkout para soportar peaks masivos de tráfico durante eventos como CyberDay o Black Friday sin caídas."
    },
    {
      question: "¿Cómo funciona la Boleta Electrónica SII?",
      answer: "Integración con sistema de emisión automática de boletas o facturas conectado directamente con la API del SII o con tu proveedor de facturación chileno."
    },
    {
      question: "¿Qué es Carrier Calculated Shipping (CCS)?",
      answer: "Es la funcionalidad oficial de Shopify que consulta en tiempo real a las empresas de transporte el costo exacto del despacho según peso y comuna de destino."
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
            <span className="text-violet-600 font-bold">Plan Full</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-violet-100 border border-violet-200 rounded-full text-violet-700 text-xs font-black uppercase tracking-widest">
              <Zap className="w-4 h-4 fill-current" />
              El Plan Más Vendido • CyberDay Ready
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-950 font-neue-haas">
              Plan <span className="text-violet-600">Full</span> Shopify Chile
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed mb-8">
              La solución completa e-commerce para empresas en Chile. Incluye boleta electrónica SII, cálculo dinámico de envíos CCS y carga de hasta 120 productos.
            </p>

            <div className="bg-violet-50/70 p-6 rounded-2xl border border-violet-100 mb-8 flex items-baseline gap-4">
              <span className="text-4xl font-black text-violet-900">$780.000</span>
              <span className="text-sm font-bold text-violet-500 uppercase tracking-widest">+ IVA</span>
              <span className="text-xs text-violet-700 font-extrabold bg-violet-200/70 px-3 py-1 rounded-full">Entrega en 6 semanas</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 text-center">
                Elegir Plan Full (Más Vendido)
              </LeadButton>
              <WhatsAppButton className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all text-center">
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="bg-zinc-950 text-white p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Funcionalidades Destacadas Plan Full</h3>
            <ul className="space-y-4">
              {[
                "Emisión Automática de Boleta Electrónica SII",
                "Carrier Calculated Shipping (CCS) con transportistas chilenos",
                "Optimización de arquitectura CyberDay & Black Friday Ready",
                "Secciones personalizadas avanzadas para potenciar conversión",
                "Carga y organización de hasta 120 productos y colecciones",
                "Integración con Google Analytics 4 y Meta Pixel",
                "Configuración de pasarelas de pago Webpay, Mercado Pago o Fintoc",
                "Soporte prioritario post-lanzamiento por 60 días"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-zinc-50 py-24 rounded-[4rem] mx-4 mb-20">
          <FAQSection faqs={faqs} title="Preguntas sobre el Plan Full" description="Resolvemos todas tus dudas sobre integraciones tributarias y de transporte." />
        </div>

        {/* CTA */}
        <section className="text-center max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 font-neue-haas">Prepara tu negocio para vender sin límites</h2>
          <p className="text-zinc-500 text-lg mb-8 font-light">El Plan Full es la inversión perfecta para escalar tus ventas en Chile con tranquilidad operativa.</p>
          <LeadButton className="px-10 py-5 bg-violet-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20">
            Reservar Plan Full
          </LeadButton>
        </section>
      </div>
    </div>
  );
}
