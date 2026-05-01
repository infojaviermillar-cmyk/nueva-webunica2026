import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { CheckCircle2, ShoppingBag, Zap, ShieldCheck, Globe, Smartphone, Code, TrendingUp, Settings, Rocket } from 'lucide-react';

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

  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      originalPrice: "$337.000",
      highlight: "Optimización de Tiendas",
      desc: "Para marcas activas que necesitan mejorar su tasa de conversión y estética visual.",
      icon: <Settings className="w-8 h-8 text-zinc-400" />,
      features: [
        "🎁 Plantilla Premium de regalo",
        "Auditoría Visual y de UX",
        "Mejora de navegación y menú",
        "Optimización de Ficha de Producto",
        "Configuración de Apps esenciales",
        "Mejora de velocidad de carga",
        "Recuperación de carritos",
        "Entrega en 10 días hábiles"
      ],
      cta: "Cotizar Ajuste",
      recommended: false
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "Lanzamiento Profesional",
      desc: "Perfecto para emprendimientos que inician con una base sólida y escalable.",
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      features: [
        "Setup completo de Shopify",
        "Diseño basado en Plantilla Premium",
        "Carga inicial de 70 productos",
        "Configuración Webpay/Flow",
        "Integración de Logística básica",
        "Diseño Mobile-First 100%",
        "Capacitación de uso inicial",
        "Entrega en 4 semanas"
      ],
      cta: "Iniciar mi Tienda",
      recommended: false
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "Automatización & Ventas",
      desc: "La solución preferida para negocios que necesitan automatizar sus procesos.",
      icon: <Zap className="w-8 h-8 text-violet-500" />,
      recommended: true,
      features: [
        "Todo lo del Plan Prende, más:",
        "Carga de hasta 120 productos",
        "SEO Técnico: Títulos y Metas",
        "Integración Google Analytics 4",
        "Diseño personalizado por secciones",
        "Sistema de Reviews de clientes",
        "Soporte prioritario 3 meses",
        "Entrega en 6 semanas"
      ],
      cta: "Cotizar Plan Full"
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      originalPrice: "$1.400.000",
      highlight: "Escalamiento Total",
      desc: "Solución de alto nivel para marcas con integraciones complejas ERP/CRM.",
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      features: [
        "Todo lo del Plan FULL, más:",
        "Migración de hasta 300 productos",
        "Integración ERP (Bsale/Obuma/Rex)",
        "Email Marketing (Klaviyo)",
        "Páginas de aterrizaje a medida",
        "Optimización de velocidad avanzada",
        "Configuración Meta Pixel & API",
        "Consultoría estratégica 1 a 1"
      ],
      cta: "Hablar con Experto",
      recommended: false
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-violet-100 selection:text-violet-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-[15vh] pb-20">
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

        {/* Clear Pricing Cards */}
        <section className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-10 bg-white rounded-[3rem] border transition-all duration-500 hover:translate-y-[-10px] flex flex-col h-full ${plan.recommended ? 'border-violet-500 shadow-2xl shadow-violet-600/10' : 'border-zinc-100 shadow-sm hover:shadow-xl'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-violet-600/20">
                    Recomendado
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="mb-6">{plan.icon}</div>
                  <h3 className="text-2xl font-black mb-1 uppercase text-zinc-900 tracking-tight">{plan.name}</h3>
                  <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-6">{plan.highlight}</p>
                  
                  <div className="mb-6">
                    {plan.originalPrice && (
                      <div className="text-xs text-zinc-400 line-through font-medium mb-1">{plan.originalPrice} + IVA</div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-zinc-950">{plan.price}</span>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase ml-1">+ IVA</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="text-xs text-zinc-500 flex gap-3 font-medium items-start leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${plan.recommended ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-xl shadow-violet-600/20' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                  {plan.cta}
                </LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Summary Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 mt-20 border-t border-zinc-100">
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
      </main>
    </div>
  );
}