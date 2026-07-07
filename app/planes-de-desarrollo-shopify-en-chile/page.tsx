import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import ShopifyPlansComparison from '@/components/sections/shopify-plans-comparison';
import { ShieldCheck, Globe, Smartphone, CheckCircle2, Award, Clock, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Planes de Desarrollo Shopify en Chile | Precios 2026',
  description: 'Compara nuestros planes de desarrollo Shopify en Chile. Desde optimización básica hasta escalamiento Pro con integraciones ERP, SII y Webpay.',
  keywords: 'planes shopify chile, precios desarrollo shopify, cuanto cuesta shopify chile, tarifas shopify partner, crear tienda shopify santiago, planes ecommerce chile',
};

export default function PlanesShopifyChilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Planes de Desarrollo Shopify en Chile",
    "description": "Lista de precios y servicios para el desarrollo de tiendas Shopify en el mercado chileno.",
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

  const shopifyFaqs = [
    {
      question: "¿Qué plan me recomiendan si estoy empezando?",
      answer: "Si es tu primera tienda, el Plan PRENDE es el punto de partida ideal. Te entrega una tienda 100% operativa y profesional. Si ya tienes ventas y quieres escalar, el Plan FULL es nuestra recomendación más popular."
    },
    {
      question: "¿Incluyen el costo de la plantilla en el precio?",
      answer: "Sí, en nuestros planes incluimos la licencia de una plantilla premium seleccionada por nuestro equipo técnico para garantizar el máximo rendimiento y estética de tu tienda."
    },
    {
      question: "¿Puedo subir los precios después si mi negocio crece?",
      answer: "Shopify permite escalar sin problemas. Puedes empezar con un plan básico y luego subir a Shopify Pro o Plus a medida que tu volumen de ventas lo requiera. Nosotros te asesoramos en cada paso."
    },
    {
      question: "¿Qué pasa si necesito algo distinto o un desarrollo a medida?",
      answer: "El Plan PRO está diseñado para ser completamente flexible. Si tienes requerimientos especiales como integraciones con sistemas internos o diseño 100% a medida desde cero, podemos evaluar tu proyecto y crear una cotización ajustada a tus necesidades."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-violet-100 selection:text-violet-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[15vh] pb-20">
        {/* Clear Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-50 border border-zinc-100 rounded-full">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">Tarifas Transparentes 2026</span>
          </div>
          <h1 className="text-[2.5rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-10 uppercase text-zinc-900">
            Nuestros <span className="text-violet-600">Planes</span> Shopify
          </h1>
          <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Inversiones claras para resultados reales. Compara nuestras soluciones y elige el motor que impulsará tu marca al siguiente nivel.
          </p>
        </section>

        {/* Trust Indicators - Reduces Uncertainty before the pricing */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-zinc-950 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0 border border-violet-500/30">
                <Award className="w-8 h-8 text-violet-400" />
              </div>
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Shopify Partners Oficiales</h3>
                <p className="text-zinc-400 text-sm font-light">Desarrollamos siguiendo las mejores prácticas.</p>
              </div>
            </div>
            
            <div className="h-px w-full md:w-px md:h-16 bg-zinc-800"></div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Clock className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Tiempos Claros</h3>
                <p className="text-zinc-400 text-sm font-light">Desde 4 semanas para tener tu tienda lista.</p>
              </div>
            </div>

            <div className="h-px w-full md:w-px md:h-16 bg-zinc-800"></div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Soporte Real</h3>
                <p className="text-zinc-400 text-sm font-light">Acompañamiento post-lanzamiento incluido.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-10">
          <ShopifyPlansComparison />
        </section>

        {/* Portfolio CTA */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex flex-col items-center justify-center gap-4 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 w-full">
            <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight">¿Quieres ver tiendas reales que hemos desarrollado?</h3>
            <p className="text-sm text-zinc-500 font-light max-w-lg mb-2">Explora nuestro portafolio de clientes y descubre la calidad visual y técnica de nuestras tiendas Shopify.</p>
            <Link href="/portafolio" className="inline-flex items-center gap-2 text-violet-600 font-bold uppercase text-xs tracking-widest hover:text-violet-800 transition-colors">
              Ver Portafolio de Proyectos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Benefits Summary Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-100">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                  <ShieldCheck className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-black uppercase mb-4">Garantía de Calidad</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Todos nuestros desarrollos pasan por un riguroso proceso de testing antes de salir a producción.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                  <Smartphone className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-black uppercase mb-4">Mobile Experience</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Optimizamos cada pixel para asegurar una compra fluida en dispositivos móviles.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                  <Globe className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-black uppercase mb-4">Escalabilidad</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Tus planes pueden crecer junto a tu negocio, integrando nuevas funciones cuando lo necesites.</p>
              </div>
           </div>
        </section>

        {/* Clear FAQ */}
        <div className="bg-zinc-50 py-32 rounded-[5rem] mx-4">
          <FAQSection 
            faqs={shopifyFaqs}
            title="Dudas sobre los Planes"
            description="Transparencia total en precios y servicios. Sin sorpresas al final del proyecto."
          />
        </div>

        {/* Final CTA */}
        <section className="py-32 text-center px-6">
           <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">Inicia tu <span className="text-violet-600">Transformación</span></h2>
           <p className="text-lg text-zinc-500 mb-12 max-w-xl mx-auto italic font-serif">Tu marca merece una vitrina de clase mundial. Hagámoslo realidad.</p>
           <LeadButton 
            className="inline-block px-12 py-6 bg-zinc-950 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Reservar mi Plan de Desarrollo
           </LeadButton>
        </section>
      </div>
    </div>
  );
}