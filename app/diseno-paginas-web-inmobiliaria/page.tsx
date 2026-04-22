import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Home, 
  Search, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  Globe,
  Database
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página Web Inmobiliaria | Software Inmobiliaria y Plugin Inmobiliario Chile',
  description: 'Desarrollamos la mejor página web inmobiliaria para tu corretaje. Expertos en software inmobiliaria, integración de plugin inmobiliario y embudos de venta de alto rendimiento.',
  keywords: 'software inmobiliaria, plugin inmobiliario, pagina web inmobiliaria, diseño web corredores propiedades, desarrollo inmobiliario digital chile',
};

export default function RealEstatePage() {
  const realEstateFaqs = [
    {
      question: "¿Qué es mejor, WordPress con plugin inmobiliario o un desarrollo a medida?",
      answer: "Depende de tu etapa. El Plan WordPress con plugin inmobiliario es ideal para iniciar con un catálogo robusto y filtros potentes. El Plan Pro con Next.js es para corretajes que buscan máxima velocidad (SEO), personalización total y un sistema de captación de leads que funcione como un embudo de ventas."
    },
    {
      question: "¿Se pueden integrar filtros de búsqueda por zona y precio?",
      answer: "Sí. Desarrollamos filtros dinámicos que permiten a tus clientes encontrar la propiedad ideal por comuna, rango de precio, número de habitaciones, m² y más, todo con una velocidad de carga instantánea."
    },
    {
      question: "¿Cómo recibo los avisos de nuevos leads?",
      answer: "Configuramos ruteo inteligente: cada vez que alguien consulta por una propiedad, recibes un correo o un mensaje de WhatsApp con el link exacto de la propiedad interesada, facilitando el cierre de la venta."
    },
    {
      question: "¿Cómo funciona la integración con OpenAI y Redes Sociales?",
      answer: "En nuestro Plan Pro, utilizamos la API de OpenAI para generar automáticamente descripciones persuasivas y fichas técnicas de tus propiedades. Además, conectamos tu sistema con Facebook e Instagram para que cada nueva propiedad se publique automáticamente en tus perfiles, ahorrándote horas de trabajo manual."
    },
    {
      question: "¿El sitio se ve bien en celulares?",
      answer: "Absolutamente. El 80% de las búsquedas de propiedades comienzan en un móvil. Nuestros diseños son 'Mobile-First', garantizando una navegación fluida y rápida desde cualquier smartphone."
    }
  ];

  const plans = [
    {
      name: "Inmo BASE (WordPress)",
      price: "$580.000",
      original: "$650.000",
      highlight: "Ideal para Corredores",
      desc: "Plataforma robusta autogestionable con todas las herramientas para mostrar tu catálogo.",
      features: [
        "Desarrollo en WordPress",
        "Plugin Inmobiliario Premium incluido",
        "Filtros de búsqueda avanzada (Zona, Precio, Tipo)",
        "Carga ilimitada de propiedades",
        "Galería de fotos y videos",
        "Formulario de contacto por propiedad",
        "Botón de WhatsApp directo",
        "SEO local básico configurado",
        "Soporte 3 meses"
      ]
    },
    {
      name: "Inmo PRO (Next.js & React)",
      price: "$1.200.000",
      original: "$1.500.000",
      highlight: "Máximo Rendimiento & SEO",
      desc: "Un verdadero embudo de ventas inmobiliario. Velocidad de carga < 1s y arquitectura SEO superior.",
      features: [
        "Todo lo de Inmo BASE +",
        "Generación de descripciones con IA (OpenAI)",
        "Conexión automatizada con Facebook e Instagram",
        "Publicación automática de nuevas propiedades",
        "Velocidad de carga instantánea (SEO Edge)",
        "Embudos de captación de propiedades",
        "Integración con CRM (Hubspot/Salesforce)",
        "SEO técnico avanzado (Estructura Schema)",
        "Soporte Prioritario 6 meses"
      ],
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-zinc-950">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">Especialistas en Inmobiliarias</span>
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 uppercase text-white">
                TU <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">PÁGINA WEB</span> <br/>INMOBILIARIA.
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                No arriesgues tus captaciones con un sitio genérico. Creamos tu <strong className="text-white">página web inmobiliaria</strong> con el mejor <strong className="text-white">software inmobiliaria</strong> y <strong className="text-white">plugin inmobiliario</strong> del mercado chileno.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-xs">
                    Cotizar mi Plataforma
                 </LeadButton>
                 <Link href="/portafolio" className="px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs text-center">
                    Ver Portafolio
                 </Link>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-900 border border-white/10 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/real_estate_hero_new.png"
                    alt="Página Web Inmobiliaria Premium"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 w-max">
                     <div className="flex items-center gap-6">
                        <div className="text-center">
                           <div className="text-2xl font-black text-white">100%</div>
                           <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Optimizado</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                           <div className="text-2xl font-black text-blue-500">Fast</div>
                           <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Performance</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-32 bg-white text-zinc-950 rounded-[4rem] mx-4 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight">
                    ¿Por qué necesitas un <br/><span className="text-blue-600">Software Inmobiliaria</span> especializado?
                 </h2>
                 <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto">
                    Una <strong className="text-zinc-950">página web inmobiliaria</strong> exitosa requiere más que fotos bonitas. Necesitas un <strong className="text-zinc-950">plugin inmobiliario</strong> potente que gestione búsquedas complejas y convierta visitas en captaciones.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: 'Filtros Pro', d: 'Búsqueda por geolocalización, precio dinámico y m² al instante.', i: <Search className="w-8 h-8" /> },
                   { t: 'Gestión de Leads', d: 'Cada consulta llega directo al WhatsApp del agente con la ficha del inmueble.', i: <ShieldCheck className="w-8 h-8" /> },
                   { t: 'Velocidad SEO', d: 'Tiempos de carga mínimos para rankear en Google sobre la competencia.', i: <Zap className="w-8 h-8" /> },
                   { t: 'Software Propio', d: 'Centraliza tu catálogo y saca el máximo provecho a tu inventario.', i: <Database className="w-8 h-8" /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-sm mb-8">
                         {item.i}
                      </div>
                      <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing Plans */}
        <section id="planes" className="py-32 max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4 block">Inversión y Retorno</span>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Planes Inmo</span></h2>
              <p className="text-xl text-zinc-500 font-light">Elige la tecnología que impulsará tu corretaje este 2026.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((p, i) => (
                <div key={i} className={`relative p-10 lg:p-14 rounded-[4rem] border transition-all duration-500 ${p.recommended ? 'bg-white text-zinc-950 border-blue-500 shadow-2xl scale-105 z-10' : 'bg-zinc-900 text-white border-white/5 hover:border-blue-500/30'}`}>
                   <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                      10% DESCUENTO
                   </div>
                   <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                   <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-blue-600' : 'text-blue-400'}`}>{p.highlight}</p>
                   
                   <div className="mb-10">
                      <div className={`text-sm line-through font-medium mb-1 opacity-50`}>{p.original} + iva</div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-5xl font-black">{p.price}</span>
                         <span className="text-sm opacity-50 font-medium">+ iva</span>
                      </div>
                   </div>

                   <p className={`text-sm mb-10 font-light ${p.recommended ? 'text-zinc-500' : 'text-zinc-400'}`}>{p.desc}</p>

                   <ul className="space-y-4 mb-12 flex-grow">
                      {p.features.map((f, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${p.recommended ? 'text-zinc-600' : 'text-zinc-400'}`}>
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                           {f}
                        </li>
                      ))}
                   </ul>

                   <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' : 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/5'}`}>
                      Obtener 10% Descuento
                   </LeadButton>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={realEstateFaqs}
            title="Dudas sobre Software Inmobiliario"
            description="Todo lo que necesitas saber sobre tecnología para corretaje."
            ctaTitle="¿Obtén un 10% de Descuento?"
            ctaDescription="Inicia tu proyecto inmobiliario hoy y recibe un descuento especial."
            ctaLabel="Quiero mi 10% Descuento"
          />
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
              LA MEJOR <br/><span className="text-blue-500 italic font-serif lowercase font-light">oficina digital.</span>
           </h2>
           <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu competencia se lleve las captaciones. Posiciona tu corredora con la mejor <strong className="text-white">página web inmobiliaria</strong> de Chile.
           </p>
           <LeadButton className="px-16 py-8 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 uppercase tracking-[0.2em] text-xs">
              Configurar mi Plataforma
           </LeadButton>
        </section>
      </main>
    </div>
  );
}
