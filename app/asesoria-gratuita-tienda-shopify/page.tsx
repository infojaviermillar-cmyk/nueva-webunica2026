import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Asesoría Gratuita Tienda Shopify Chile | Auditoría E-commerce Webunica',
  description: 'Agenda tu asesoría gratuita de 30 minutos. Expertos en Shopify Chile evalúan tu tienda, velocidad, conversión (CRO) y configuración de pagos. Escala sin errores.',
  openGraph: {
    title: 'Asesoría Gratuita Tienda Shopify Chile | Webunica',
    description: 'Diagnóstico experto para escalar tu tienda Shopify. Descubre por qué pierdes ventas y cómo optimizar tu e-commerce.',
    url: 'https://webunica.cl/asesoria-gratuita-tienda-shopify',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/asesoria-gratuita-tienda-shopify',
  }
};

export default function AsesoriaShopifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Asesoría Gratuita Shopify Chile",
    "provider": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl"
    },
    "description": "Sesión estratégica de 30 minutos sin costo para analizar tiendas Shopify en Chile, mejorar conversión (CRO), configurar pagos locales y optimizar rendimiento.",
    "areaServed": "CL",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CLP"
    }
  };

  const faqs = [
    {
      question: "¿La asesoría es realmente gratuita?",
      answer: "Sí, es 100% gratuita y sin compromiso de contratación. Es una sesión de diagnóstico de 30 minutos donde aportamos valor real analizando la arquitectura y conversión de tu tienda. Si después decides que quieres nuestra ayuda para implementar las mejoras, te presentaremos un plan."
    },
    {
      question: "¿Trabajan con tiendas nuevas o solo con e-commerce funcionando?",
      answer: "Asesoramos ambos perfiles. Si estás empezando, te orientamos sobre el mejor theme y configuración de pagos/envíos para Chile. Si ya facturas, nos centramos en auditoría de velocidad (Core Web Vitals), optimización del embudo de conversión (CRO) y reducción de costos en aplicaciones de terceros."
    },
    {
      question: "¿Qué revisarán durante la llamada?",
      answer: "Revisaremos tu portada (Home), estructura de colecciones, ficha de producto y checkout. Analizaremos tiempos de carga, claridad de la propuesta de valor, configuración de pasarelas de pago (Transbank, Mercado Pago) y logística local (Shipit, Starken)."
    },
    {
      question: "¿Me intentarán vender algo durante los 30 minutos?",
      answer: "No. Nuestro enfoque es puramente técnico y estratégico. El objetivo es que termines la videollamada con al menos 3 accionables claros que puedas aplicar tú mismo para mejorar tu tienda. La venta solo ocurre si tú solicitas formalmente un presupuesto."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased overflow-hidden pt-[20vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-violet-600 uppercase bg-violet-50 rounded-full border border-violet-100">
              Evaluación Técnica Sin Costo
            </span>
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
              Auditoría Experta <br/>
              <span className="text-violet-600 font-serif italic lowercase font-light">Para tu Shopify</span>
            </h1>
            <p className="text-lg lg:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed font-light">
              ¿Tu tienda tiene tráfico pero no vende? ¿Te ahogan las mensualidades de apps? 
              <strong> Agenda una sesión estratégica de 30 minutos</strong> con nuestro equipo técnico y descubre los cuellos de botella de tu e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 text-center hover:scale-105 active:scale-95"
              >
                Agendar Asesoría Gratis en Calendly
              </a>
              <WhatsAppButton className="px-8 py-5 bg-zinc-100 text-zinc-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-all text-center flex items-center justify-center gap-3">
                <span className="text-lg text-[#25d366]">📱</span> Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          
          <div className="relative group" data-aos="zoom-in">
             <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-emerald-50 rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
             <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-3xl">🎯</div>
                  <div>
                    <h3 className="font-black text-xl text-zinc-900">Diagnóstico de 30 Min</h3>
                    <p className="text-sm text-zinc-500">Videollamada vía Google Meet / Zoom</p>
                  </div>
                </div>
                
                <ul className="space-y-5">
                  {[
                    "Revisión de velocidad de carga y Core Web Vitals.",
                    "Análisis de arquitectura y navegación móvil.",
                    "Optimización de pasarelas de pago (Webpay, Flow, VentiPay).",
                    "Estrategia para eliminar apps costosas y optimizar Liquid.",
                    "Feedback sincero sobre el diseño UI/UX de tu Checkout."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-zinc-600 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Más de 7 años optimizando e-commerce en Chile</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">150+</span>
              <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Tiendas Auditadas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">0%</span>
              <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Costo Inicial</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">100%</span>
              <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Foco Técnico</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">24h</span>
              <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Para Agendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-6">
            ¿Reconoces estos <span className="text-red-500 italic font-serif lowercase font-light">síntomas</span>?
          </h2>
          <p className="text-lg text-zinc-600 font-light max-w-2xl mx-auto">
            Muchas tiendas Shopify mueren por problemas técnicos invisibles para el dueño, pero evidentes para el usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Tráfico sin Ventas', d: 'Inviertes en Meta Ads y Google, recibes clics, pero nadie termina la compra. Tienes un cuello de botella de conversión.', e: '📉' },
            { t: 'Costos Descontrolados', d: 'Instalaste 15 aplicaciones diferentes para hacer cosas simples y ahora tu factura de Shopify supera los $100 USD mensuales.', e: '💸' },
            { t: 'Carga Lenta', d: 'Tu página tarda más de 4 segundos en abrir en celular. Un 40% de los usuarios abandona tu tienda antes de ver el primer producto.', e: '⏳' }
          ].map((pain, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">{pain.e}</div>
              <h3 className="text-xl font-black text-zinc-900 mb-3">{pain.t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{pain.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Consultas Frecuentes sobre la Auditoría"
        description="Claridad total antes de nuestra videollamada."
      />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center pb-32 pt-16">
        <div className="bg-zinc-950 p-12 md:p-20 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase relative z-10">
            Deja de adivinar. <br/>
            <span className="text-violet-400 italic font-serif lowercase font-light">Mide y optimiza.</span>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light leading-relaxed relative z-10">
            Reserva tu espacio en nuestra agenda. Analizamos tu tienda en vivo y te entregamos un plan de acción concreto. Cero compromiso.
          </p>
          <div className="relative z-10">
            <a 
              href="https://calendly.com/javiermillar/reunion-webunica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-zinc-950 rounded-full font-black uppercase tracking-[0.15em] text-[11px] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
            >
              Reservar mi espacio ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
