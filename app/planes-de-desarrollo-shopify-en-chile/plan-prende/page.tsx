import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CheckCircle2, TrendingUp, ShieldCheck, Clock, ArrowRight, Zap, ShoppingBag, CreditCard, Truck } from 'lucide-react';

export const metadata = {
  title: 'Plan Prende Shopify Chile | Desarrollo E-commerce $580.000',
  description: 'Plan Prende de desarrollo Shopify en Chile. Tu tienda online profesional en 4 semanas con Webpay, envíos, boleta y hasta 70 productos incluidos.',
  keywords: 'plan prende shopify chile, desarrollo shopify $580000, crear tienda shopify chile, ecommerce profesional pymes chile',
};

export default function PlanPrendePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plan Prende Shopify Chile",
    "description": "Desarrollo de tienda Shopify profesional con setup completo, pasarelas de pago y carga de hasta 70 productos.",
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
      "price": "580000",
      "priceCurrency": "CLP",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": "CL"
  };

  const faqs = [
    {
      question: "¿Para quién es ideal el Plan Prende?",
      answer: "Es perfecto para emprendedores y marcas que están lanzando su primer e-commerce profesional en Chile o desean migrar desde plataformas básicas sin complicaciones técnicas."
    },
    {
      question: "¿Qué incluye la carga de 70 productos?",
      answer: "Cargamos imágenes, títulos, descripciones comerciales, variantes (tallas, colores), precios y asignación a colecciones estratégicas."
    },
    {
      question: "¿Qué pasarelas de pago quedan configuradas?",
      answer: "Dejamos lista tu tienda con Mercado Pago, Webpay Plus o Flow para que recibas pagos inmediatos con tarjetas de débito y crédito."
    },
    {
      question: "¿Cuánto tiempo toma el desarrollo?",
      answer: "El Plan Prende se entrega completamente listo y funcional en un plazo de 4 semanas hábiles."
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
            <span className="text-violet-600 font-bold">Plan Prende</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              Lanzamiento Profesional
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-950 font-neue-haas">
              Plan <span className="text-emerald-600">Prende</span> Shopify Chile
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed mb-8">
              Tu vitrina digital lista para vender en Chile. Configuración completa desde cero con pasarelas de pago, logística inicial y carga de tus primeros 70 productos.
            </p>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8 flex items-baseline gap-4">
              <span className="text-4xl font-black text-zinc-950">$580.000</span>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">+ IVA</span>
              <span className="text-xs text-emerald-600 font-extrabold bg-emerald-100 px-3 py-1 rounded-full">Entrega en 4 semanas</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadButton className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 text-center">
                Iniciar mi Tienda Prende
              </LeadButton>
              <WhatsAppButton className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all text-center">
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="bg-zinc-950 text-white p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">¿Qué incluye el Plan Prende?</h3>
            <ul className="space-y-4">
              {[
                "Setup inicial completo de Shopify (Dominio, SSL, Moneda CLP)",
                "Diseño basado en Plantilla Premium adaptada a tu marca",
                "Carga de hasta 70 productos con imágenes y variantes",
                "Configuración de Webpay Plus, Mercado Pago o Flow",
                "Integración de envíos con tarifas básicas y retiro en tienda",
                "Diseño 100% Mobile-First optimizado para celulares",
                "Capacitación de uso básica para gestionar ventas y productos",
                "Garantía de funcionamiento y soporte post-lanzamiento"
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
          <FAQSection faqs={faqs} title="Preguntas sobre el Plan Prende" description="Todo lo que necesitas saber antes de contratar tu plan de inicio." />
        </div>

        {/* CTA */}
        <section className="text-center max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 font-neue-haas">¿Listo para lanzar tu tienda Shopify?</h2>
          <p className="text-zinc-500 text-lg mb-8 font-light">Comienza hoy con el Plan Prende y ten tu e-commerce listo para vender en 4 semanas.</p>
          <LeadButton className="px-10 py-5 bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
            Solicitar Plan Prende
          </LeadButton>
        </section>
      </div>
    </div>
  );
}
