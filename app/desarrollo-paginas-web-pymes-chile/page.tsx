import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Monitor, 
  Search, 
  Smartphone, 
  Code2, 
  Layout, 
  Settings, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño y Desarrollo de Páginas Web para PYMES en Chile | Webunica',
  description: 'Expertos en diseño paginas web, desarrollo paginas web, diseño sitio web y desarrollo sitio web. Creamos tu pagina web optimizada para Google con SEO avanzado.',
  keywords: 'diseño paginas web, desarrollo paginas web, diseño sitio web, desarrollo sitio web, pagina web optimizada, SEO paginas web, paginas web pymes chile',
};

export default function PymesPage() {
  const plans = [
    {
      name: "Landing Express SEO",
      price: "$340.000 + IVA",
      desc: "Ideal para campañas específicas o servicios únicos que necesitan conversión rápida y visibilidad inmediata.",
      features: [
        "Diseño de una sola sección (One Page)",
        "Optimización SEO avanzada con Keywords",
        "Configuración Google Analytics 4 & Meta Pixel",
        "Análisis SEO de palabras claves inicial",
        "Contenido optimizado con IA (Hasta 2.500 palabras)",
        "4 Imágenes Full HD generadas con IA",
        "Botón de WhatsApp directo y Formulario",
        "Pago en 6 cuotas sin interés",
        "Entrega en 5 días"
      ],
      cta: "Empezar Landing",
      popular: false
    },
    {
      name: "Web Corporativa SEO",
      price: "$360.000 + IVA",
      desc: "La mejor opción para PYMES que buscan profesionalizar su imagen completa con SEO técnico.",
      features: [
        "Hasta 5 secciones internas",
        "Diseño de sitio web a medida",
        "Google Analytics 4 & Meta Pixel PRO",
        "Optimización SEO por página avanzada",
        "Análisis SEO y Contenido optimizado con IA",
        "8 Imágenes Full HD generadas con IA",
        "Correos corporativos",
        "Pago en 6 cuotas sin interés",
        "Entrega en 10-15 días"
      ],
      cta: "Elegir Corporativa",
      popular: true
    },
    {
      name: "Pyme WordPress Pro SEO",
      price: "$580.000 + IVA",
      desc: "Sitio web avanzado con gestión de contenido y estrategia SEO Full de dominio orgánico.",
      features: [
        "Pagina WordPress autogestionable",
        "Estrategia SEO Full (Arquitectura & Contenido)",
        "Configuración GA4, Meta Pixel & API Conversiones",
        "Contenido optimizado con IA (Blog inicial)",
        "15 Imágenes Full HD generadas con IA",
        "Capacitación de uso avanzada",
        "Pago en 6 cuotas sin interés",
        "Soporte prioritario"
      ],
      cta: "Elegir WordPress Pro",
      popular: false
    }
  ];

  const pymesFaqs = [
    {
      question: "¿Qué incluye el pack de diseño para PYMES?",
      answer: "Incluye el diseño de tu sitio web profesional (Home, Servicios, Nosotros, Contacto), optimización para celulares, botones de WhatsApp, configuración de correos corporativos y una estructura SEO básica para que empieces a aparecer en Google."
    },
    {
      question: "¿Cuánto tiempo demora en estar lista mi web?",
      answer: "Entendemos que el tiempo es dinero para una PYME. Por eso, una vez que tenemos todo tu material (textos y fotos), podemos tener tu sitio operativo en un plazo de entre 5 y 15 días hábiles dependiendo del plan."
    },
    {
      question: "¿Podré cambiar yo mismo los textos o fotos después?",
      answer: "Sí. Entregamos sitios autogestionables (especialmente en nuestra opción de pagina wordpress) fáciles de usar. Te daremos una capacitación para que puedas actualizar tus servicios sin depender de nosotros."
    },
    {
      question: "¿Cuáles son las opciones de pago?",
      answer: "Ofrecemos flexibilidad. Puedes pagar el 50% al inicio y el 50% al finalizar, o usar tarjetas de crédito vía Mercado Pago para pagar en cuotas."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48 pb-20">
        {/* Pymes Hero */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-50 border border-zinc-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">Expertos en Desarrollo Web</span>
              </div>
              
              <h1 className="text-[2.2rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                DISEÑO DE <br/><span className="text-blue-600">PÁGINAS WEB</span> <br/>PARA PYMES.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                No necesitas solo una web, necesitas una herramienta que venda. Somos especialistas en <strong className="text-zinc-950">desarrollo de paginas web</strong> enfocadas en resultados reales para el mercado chileno.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                 <LeadButton className="px-12 py-5 bg-zinc-950 text-white font-black rounded-2xl hover:bg-zinc-800 transition-all shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                    Cotizar mi Sitio Web <ArrowRight className="w-4 h-4" />
                 </LeadButton>
                 <a 
                   href="#precios"
                   className="px-12 py-5 border border-zinc-200 text-zinc-900 font-black rounded-2xl hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                 >
                    Ver Planes
                 </a>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute -inset-10 bg-blue-50 rounded-full blur-[100px] -z-10" />
               <div className="rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
                 <Image 
                   src="/pymes_hero_new.png"
                   alt="Desarrollo de paginas web Chile"
                   width={1000}
                   height={1000}
                   priority
                   className="w-full h-auto"
                 />
                 <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl hidden md:block">
                    <div className="flex items-center gap-4 mb-2">
                       <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                       <span className="font-bold text-zinc-900 uppercase text-sm">Mejora sitio web hoy</span>
                    </div>
                    <p className="text-zinc-500 text-xs font-light">Optimizado para SEO y conversión móvil en todo Chile.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* SEO Importance Section */}
        <section className="py-32 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full" />
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center">
                          <Search className="w-8 h-8 text-blue-600 mb-4" />
                          <h4 className="font-black text-zinc-950 uppercase text-xs mb-2">Visibilidad</h4>
                          <p className="text-[10px] text-zinc-500 font-light">Aparece cuando busquen tus servicios.</p>
                       </div>
                       <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center transform translate-y-8">
                          <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
                          <h4 className="font-black text-zinc-950 uppercase text-xs mb-2">Conversión</h4>
                          <p className="text-[10px] text-zinc-500 font-light">Convierte visitas en llamadas reales.</p>
                       </div>
                       <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center">
                          <Globe className="w-8 h-8 text-purple-600 mb-4" />
                          <h4 className="font-black text-zinc-950 uppercase text-xs mb-2">Autoridad</h4>
                          <p className="text-[10px] text-zinc-500 font-light">Una web pro genera confianza inmediata.</p>
                       </div>
                       <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center transform translate-y-8">
                          <Monitor className="w-8 h-8 text-amber-500 mb-4" />
                          <h4 className="font-black text-zinc-950 uppercase text-xs mb-2">Multi-dispositivo</h4>
                          <p className="text-[10px] text-zinc-500 font-light">Perfecto en PC, Tablet y Smartphones.</p>
                       </div>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 block">Estrategia SEO</span>
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 text-zinc-950">
                      ¿Por qué es vital aparecer <br/><span className="text-blue-600 italic">en Google?</span>
                    </h2>
                    <div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed">
                      <p>
                        Aparecer en los primeros resultados de búsqueda no es un lujo, es una necesidad. Cuando alguien busca <strong className="text-zinc-950">diseño paginas web</strong> o <strong className="text-zinc-950">desarrollo paginas web</strong> en Chile, el 90% de los usuarios no pasa de la primera página. 
                      </p>
                      <p>
                        Un <strong className="text-zinc-950">diseño sitio web</strong> o un <strong className="text-zinc-950">desarrollo sitio web</strong> sin SEO es como un cartel publicitario en medio del desierto. En Webunica creamos cada <strong className="text-zinc-950">pagina web optimizada</strong> para que los algoritmos te favorezcan.
                      </p>
                      <p>
                        Nuestra estrategia de <strong className="text-zinc-950">SEO paginas web</strong> garantiza que tu inversión se traduzca en tráfico calificado. Ya sea que necesites una plataforma autogestionable o un desarrollo a medida, garantizamos velocidad y autoridad.
                      </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-32 max-w-7xl mx-auto px-6" id="precios">
           <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">Planes de <span className="text-blue-600">Diseño y Desarrollo Sitio Web</span></h2>
              <p className="text-xl text-zinc-500 font-light mb-2">Inversiones inteligentes para negocios que no paran de crecer.</p>
              <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Valores + IVA | Pago en 6 cuotas con tarjeta sin interés</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((p, i) => (
                <div key={i} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${p.popular ? 'bg-zinc-950 text-white border-zinc-800 scale-105 shadow-2xl' : 'bg-white text-zinc-900 border-zinc-100 hover:border-blue-500'}`}>
                   {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-[10px] font-black uppercase rounded-full tracking-widest">El más elegido</span>}
                   <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                   <div className="text-3xl font-black mb-6 text-blue-500">{p.price}</div>
                   <p className={`text-sm mb-8 font-light ${p.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>{p.desc}</p>
                   <ul className="space-y-4 mb-12">
                      {p.features.map((f, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide">
                            <CheckCircle2 className={`w-4 h-4 ${p.popular ? 'text-blue-400' : 'text-emerald-500'}`} />
                            {f}
                         </li>
                      ))}
                   </ul>
                   
                   <LeadButton className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all ${p.popular ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'}`}>
                      Obtener 10% de Descuento
                   </LeadButton>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-zinc-50 rounded-[4rem] mx-4 py-20">
          <FAQSection 
            faqs={pymesFaqs}
            title="Preguntas Frecuentes"
            description="Todo lo que necesitas saber antes de empezar el desarrollo de tu sitio web."
            ctaTitle="¿Profesionalizamos tu marca?"
            ctaDescription="Obtén un 10% de descuento en cualquiera de nuestros planes contratando hoy mismo."
            ctaLabel="Obtener 10% Descuento"
          />
        </div>

        {/* CTA Banner */}
        <section className="py-32 px-6">
           <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tight uppercase leading-[0.9]">
                   ¿Listo para ser el <br/><span className="italic font-serif lowercase font-light text-blue-100">líder de tu nicho?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                   No dejes que tu competencia se lleve a tus clientes por tener un mejor <strong className="text-white">diseño de paginas web</strong>. Toma acción ahora.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-12 py-6 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Cotizar Desarrollo Web
                  </LeadButton>
                  <Link href="/contacto" className="px-12 py-6 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Ver Portafolio
                  </Link>
                </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}