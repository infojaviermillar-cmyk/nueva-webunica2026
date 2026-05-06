import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Heart, 
  MapPin, 
  Search, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Users,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño y Desarrollo de Páginas Web para Funerarias | Webunica Chile',
  description: 'Especialistas en diseño pagina funeraria y desarrollo pagina funeraria. Creamos obituarios digitales, sistemas de condolencias y embudos de venta para funerarias.',
  keywords: 'diseño pagina funeraria, desarrollo pagina funeraria, obituarios digitales chile, sitios web para funerarias, marketing para funerarias',
};

export default function FuneralPage() {
  const funeralFaqs = [
    {
      question: "¿Por qué es importante el posicionamiento local para una funeraria?",
      answer: "Cuando una familia necesita servicios funerarios, lo primero que hace es buscar en Google 'funeraria cerca de mí' o 'funeraria en [mi ciudad]'. Un desarrollo enfocado en SEO local asegura que tu empresa aparezca en el mapa y en los primeros resultados justo cuando más te necesitan."
    },
    {
      question: "¿Qué es un embudo de venta para una funeraria?",
      answer: "No es solo una web informativa. Es un sistema que guía al usuario desde la búsqueda de información (previsión, trámites) hasta el contacto directo para la contratación del servicio. Optimizamos cada paso para generar confianza y facilitar la decisión en momentos difíciles."
    },
    {
      question: "¿Cómo funcionan los obituarios digitales?",
      answer: "Es un espacio de homenaje eterno en tu web. Permite a los familiares compartir fotos, encender velas virtuales y dejar mensajes de condolencia moderados, lo que genera tráfico recurrente a tu sitio y fortalece tu marca."
    },
    {
      question: "¿Se puede integrar el velorio con Google Maps?",
      answer: "Sí, todos nuestros planes incluyen la integración con mapas dinámicos para que los familiares puedan llegar a la capilla o parque sin confusiones, directamente desde su móvil."
    }
  ];

  const plans = [
    {
      name: "Plan Esencial",
      price: "$580.000",
      original: "$650.000",
      highlight: "Presencia con Respeto",
      desc: "Ideal para funerarias locales que buscan una imagen profesional y digna.",
      features: [
        "Diseño Web Professional & Elegante",
        "Sección de Servicios y Previsión",
        "Obituario Digital Básico",
        "Botón de WhatsApp 24/7",
        "Optimización para móviles",
        "SEO Local Inicial (Google Maps)",
        "Hosting y Dominio .cl (1 año)",
        "Soporte 3 meses"
      ]
    },
    {
      name: "Plan Profesional",
      price: "$780.000",
      original: "$880.000",
      highlight: "Mayor Alcance Digital",
      desc: "Estructura avanzada con sistema de condolencias interactivo y mayor SEO.",
      features: [
        "Todo lo del Plan Esencial +",
        "Sistema de Condolencias Moderado",
        "Galerías de Homenaje (Fotos/Videos)",
        "Blog de Apoyo al Duelo",
        "Estrategia de Palabras Clave Avanzada",
        "Integración con Redes Sociales",
        "Velocidad de carga optimizada",
        "Capacitación de uso del sistema"
      ],
      recommended: true
    },
    {
      name: "Plan Elite / Funnel",
      price: "$980.000",
      original: "$1.200.000",
      highlight: "Máxima Conversión 2026",
      desc: "Un verdadero embudo de ventas digital diseñado para captar leads de previsión y urgencia.",
      features: [
        "Todo lo del Plan Profesional +",
        "Embudo de Venta Estratégico",
        "Landing Pages para Servicios Específicos",
        "Sistema de Cotización en Línea",
        "Automatización de correos informativos",
        "Dashboard de Analítica de Leads",
        "SEO Técnico Profundo (Schema Obituarios)",
        "Soporte Prioritario 6 meses"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-zinc-500/10 blur-[150px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">Dignidad y Tecnología</span>
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 uppercase text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600 italic font-serif lowercase font-light">Diseño</span> <br/>PÁGINA FUNERARIA.
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Expertos en el <strong className="text-white">desarrollo pagina funeraria</strong> con enfoque en la solemnidad y la captación. Creamos refugios digitales de memoria y consuelo optimizados para Google.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-xs">
                    Cotizar mi Sitio Funerario
                 </LeadButton>
                 <Link href="/portafolio" className="px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs text-center">
                    Ver Proyectos
                 </Link>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-zinc-800/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-900 border border-white/10 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/digital_obituary_platform_premium_1776302696121.png"
                    alt="Diseño Pagina Funeraria Premium"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                     <div className="flex items-center gap-3 text-zinc-400">
                        <Heart className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Obituario Digital</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* SEO & Strategy Section */}
        <section className="py-32 bg-white text-zinc-950 rounded-[4rem] mx-4 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight">
                    Posicionamiento y <br/><span className="text-zinc-400 italic lowercase font-serif font-light">Estrategia Comercial</span>
                 </h2>
                 <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto">
                    No basta con tener una web; necesitas que las familias te encuentren en el momento crítico. Aplicamos un <strong className="text-zinc-950">embudo de venta</strong> funerario para convertir búsquedas en servicios.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: 'SEO Local Local', d: 'Dominio de Google Maps y búsquedas por ciudad para estar cerca del cliente.', i: <MapPin className="w-8 h-8" /> },
                   { t: 'Palabras Clave', d: 'Uso estratégico de términos como "funeraria", "velorios" y "previsión".', i: <Search className="w-8 h-8" /> },
                   { t: 'Embudo de Venta', d: 'Arquitectura diseñada para guiar al usuario hacia la consulta inmediata.', i: <Zap className="w-8 h-8" /> },
                   { t: 'Confianza Digital', d: 'Diseño solemne y profesional que proyecta seguridad en momentos difíciles.', i: <ShieldCheck className="w-8 h-8" /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-zinc-500 shadow-sm mb-8">
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
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Dignidad para cada Necesidad</span>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Desarrollo Funerario</span></h2>
              <p className="text-xl text-zinc-500 font-light">Estructuras tecnológicas pensadas para el acompañamiento y el prestigio.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((p, i) => (
                <div key={i} className={`relative p-10 flex flex-col rounded-[4rem] border transition-all duration-500 ${p.recommended ? 'bg-white text-zinc-950 border-zinc-500 shadow-2xl scale-105 z-10' : 'bg-zinc-900 text-white border-white/5 hover:border-zinc-500/30'}`}>
                   <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                      10% DESCUENTO
                   </div>
                   <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                   <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-zinc-600' : 'text-zinc-400'}`}>{p.highlight}</p>
                   
                   <div className="mb-10">
                      <div className={`text-sm line-through font-medium mb-1 opacity-50`}>{p.original} + iva</div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-4xl font-black">{p.price}</span>
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

                   <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-xl' : 'bg-white text-black hover:bg-zinc-200'}`}>
                      Obtener 10% Descuento
                   </LeadButton>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={funeralFaqs}
            title="Dudas sobre Tecnología Funeraria"
            description="Información clave para modernizar su servicio con respeto."
            ctaTitle="¿Agendamos una consultoría técnica?"
            ctaDescription="Obtenga hoy un 10% de descuento al contratar su nuevo sitio web funerario."
            ctaLabel="Quiero mi 10% Descuento"
          />
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
              TECNOLOGÍA AL <br/><span className="text-zinc-500 italic font-serif lowercase font-light">servicio de la memoria.</span>
           </h2>
           <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu funeraria pierda vigencia en el mundo digital. Construye hoy la mejor <strong className="text-white">pagina funeraria</strong> de tu región.
           </p>
           <LeadButton className="px-16 py-8 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 uppercase tracking-[0.2em] text-xs">
              Cotizar Proyecto Funerario
           </LeadButton>
        </section>
      </div>
    </div>
  );
}

