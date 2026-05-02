import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  PlusSquare, 
  Search, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone,
  Calendar,
  Users,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño Web para Odontólogos | Páginas Web para Clínicas Dentales Chile',
  description: 'Desarrollo y diseño pagina odontologia. Creamos la mejor pagina web dentista con sistemas de reserva, SEO local y embudos de venta para captar pacientes.',
  keywords: 'diseño pagina odontologia, desarrollo pagina odontologia, pagina web dentista, marketing dental chile, diseño web clinicas dentales',
};

export default function DentistryPage() {
  const dentistryFaqs = [
    {
      question: "¿Cómo ayuda un embudo de ventas a mi clínica dental?",
      answer: "Un embudo de ventas no es solo una web informativa. Es un sistema diseñado para captar pacientes que buscan servicios específicos (implantes, ortodoncia, estética) y guiarlos hasta que agenden su primera evaluación. Esto aumenta drásticamente tu tasa de conversión comparado con una web tradicional."
    },
    {
      question: "¿Es importante el SEO Local para un dentista?",
      answer: "Es vital. La mayoría de los pacientes buscan 'dentista cerca de mí' o 'clínica dental en [comuna]'. Optimizamos tu sitio para que Google te priorice en los resultados locales, asegurando que los pacientes de tu zona te encuentren primero."
    },
    {
      question: "¿Se puede integrar un sistema de reserva de citas?",
      answer: "Sí, todos nuestros planes permiten integrar botones de reserva directa o conectar con softwares de gestión dental. Esto facilita que el paciente tome la decisión de agendar en el momento de mayor interés."
    },
    {
      question: "¿El diseño es compatible con celulares?",
      answer: "Totalmente. El 90% de las búsquedas de servicios de salud se realizan desde móviles. Tu sitio será rápido, fluido y fácil de navegar desde cualquier smartphone."
    }
  ];

  const plans = [
    {
      name: "Plan Dental Lite",
      price: "$580.000",
      original: "$650.000",
      highlight: "Tu Clínica en Google",
      desc: "Presencia profesional diseñada para mostrar tus servicios y facilitar el contacto directo.",
      features: [
        "Diseño Web Moderno & Clínico",
        "Sección de Servicios (Limpieza, Caries, etc.)",
        "Botón de WhatsApp y Llamada Directa",
        "Formulario de Contacto optimizado",
        "SEO Local Básico (Google Maps)",
        "Hosting y Dominio .cl (1 año)",
        "Certificado SSL de Seguridad",
        "Soporte 3 meses"
      ]
    },
    {
      name: "Plan Dental Pro",
      price: "$780.000",
      original: "$880.000",
      highlight: "Captación de Pacientes",
      desc: "Estructura avanzada con enfoque en especialidades y autoridad de marca.",
      features: [
        "Todo lo del Plan Lite +",
        "Páginas de Especialidades Detalladas",
        "Blog de Salud Dental (Estrategia SEO)",
        "Integración de Reseñas de Pacientes",
        "Galería de Casos Clínicos (Antes/Después)",
        "SEO Técnico y Palabras Clave Avanzado",
        "Velocidad de Carga Ultra-Rápida",
        "Capacitación para Gestión de Leads"
      ],
      recommended: true
    },
    {
      name: "Plan Dental Elite / Funnel",
      price: "$980.000",
      original: "$1.200.000",
      highlight: "Máximo Retorno 2026",
      desc: "El sistema definitivo para dominar el mercado local y automatizar la entrada de pacientes.",
      features: [
        "Todo lo del Plan Pro +",
        "Embudo de Venta por Especialidad",
        "Landing Pages de Alta Conversión",
        "Integración con Software de Reserva",
        "Automatización de Emails de Seguimiento",
        "Dashboard de Analítica de Pacientes",
        "SEO Local Premium (Geofencing)",
        "Soporte Prioritario 6 meses"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <main className="pt-[22vh] lg:pt-[12vh] pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase">Tecnología para la Salud</span>
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 uppercase text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-600 italic font-serif lowercase font-light">Diseño</span> <br/>PÁGINA ODONTOLOGÍA.
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Expertos en el <strong className="text-white">desarrollo pagina odontologia</strong> con enfoque en la confianza y la agendación de pacientes. Creamos la mejor <strong className="text-white">pagina web dentista</strong> para tu clínica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-xs">
                    Cotizar mi Clínica Dental
                 </LeadButton>
                 <Link href="/portafolio" className="px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs text-center">
                    Ver Portafolio
                 </Link>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-emerald-800/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-900 border border-white/10 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/pymes_hero_new.png" 
                    alt="Diseño Pagina Odontologia Premium"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                     <div className="flex items-center gap-3 text-emerald-400">
                        <Calendar className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Citas Online</span>
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
                    Arquitectura para <br/><span className="text-emerald-600 italic lowercase font-serif font-light">captar pacientes</span>
                 </h2>
                 <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto">
                    Una <strong className="text-zinc-950">pagina web dentista</strong> exitosa debe combinar la estética clínica con un <strong className="text-zinc-950">embudo de venta</strong> agresivo que convierta visitantes en pacientes recurrentes.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: 'SEO Local Dental', d: 'Dominio de búsquedas locales por comuna para aparecer ante pacientes cercanos.', i: <MapPin className="w-8 h-8" /> },
                   { t: 'Palabras Clave', d: 'Uso estratégico de términos como "dentista", "ortodoncia" e "implantes".', i: <Search className="w-8 h-8" /> },
                   { t: 'Embudo de Venta', d: 'Guía al paciente desde el problema hasta la agendación de su evaluación.', i: <Zap className="w-8 h-8" /> },
                   { t: 'Confianza & CRO', d: 'Diseño optimizado para generar credibilidad y facilitar el contacto rápido.', i: <ShieldCheck className="w-8 h-8" /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-sm mb-8">
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
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4 block">Resultados para tu Clínica</span>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-600">Desarrollo Dental</span></h2>
              <p className="text-xl text-zinc-500 font-light">Tecnología de vanguardia diseñada para llenar tu agenda.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((p, i) => (
                <div key={i} className={`relative p-10 flex flex-col rounded-[4rem] border transition-all duration-500 ${p.recommended ? 'bg-white text-zinc-950 border-emerald-500 shadow-2xl scale-105 z-10' : 'bg-zinc-900 text-white border-white/5 hover:border-emerald-500/30'}`}>
                   <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                      10% DESCUENTO
                   </div>
                   <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                   <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-emerald-600' : 'text-emerald-400'}`}>{p.highlight}</p>
                   
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

                   <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-600/20' : 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/5'}`}>
                      Obtener 10% Descuento
                   </LeadButton>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={dentistryFaqs}
            title="Dudas sobre Webs Dentales"
            description="Información clave para digitalizar tu práctica odontológica."
            ctaTitle="¿Agendamos una consultoría para tu clínica?"
            ctaDescription="Obtén hoy un 10% de descuento al contratar tu nuevo sitio web odontológico."
            ctaLabel="Quiero mi 10% Descuento"
          />
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
              DOMINA EL <br/><span className="text-emerald-500 italic font-serif lowercase font-light">mercado dental.</span>
           </h2>
           <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu clínica se quede atrás. Posiciona tu marca y atrae pacientes con la mejor <strong className="text-white">pagina web odontologia</strong> de Chile.
           </p>
           <LeadButton className="px-16 py-8 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 uppercase tracking-[0.2em] text-xs">
              Cotizar Proyecto Dental
           </LeadButton>
        </section>
      </main>
    </div>
  );
}
