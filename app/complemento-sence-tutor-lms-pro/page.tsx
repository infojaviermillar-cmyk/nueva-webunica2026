import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { 
  ShieldCheck, 
  FileCheck, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle2,
  Lock,
  Download,
  MousePointer2,
  CreditCard,
  Zap,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Complemento Sence para Tutor LMS Pro | WordPress Chile 2026',
  description: 'El único plugin para Tutor LMS Pro que cumple con los requisitos Sence: Declaración Jurada, Asistencia, Encuestas y Reportes LCE. Optimizado para OTECs en Chile.',
  keywords: 'complemento sence tutor lms, plugin sence wordpress, cumplimiento sence elearning, libro de clases electronico tutor lms, declaracion jurada sence wordpress, otec elearning chile',
};

export default function SenceAddonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Complemento Sence para Tutor LMS Pro",
    "description": "Solución técnica para plataformas Tutor LMS Pro que requieren cumplimiento normativo Sence en Chile.",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "WordPress",
    "provider": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "24"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Educontable" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "El complemento Sence es vital para nuestras operaciones. Generamos el LCE en segundos."
      }
    ]
  };


  const senceFaqs = [
    {
      question: "¿Es compatible con cualquier versión de Tutor LMS?",
      answer: "Nuestro complemento está diseñado específicamente para funcionar con Tutor LMS Pro y las versiones más recientes de WordPress, asegurando estabilidad y seguridad en los datos de asistencia."
    },
    {
      question: "¿Qué reportes genera para Sence?",
      answer: "Genera reportes de asistencia por alumno (Log de actividades detallado), resultados de encuestas de satisfacción obligatorias, y registros de intentos en evaluaciones, todo exportable para facilitar la gestión ante Sence."
    },
    {
      question: "¿Cómo se implementa la Declaración Jurada?",
      answer: "El plugin añade un paso obligatorio (Check-in/Check-out) donde el alumno debe aceptar la declaración jurada antes de acceder al contenido o recibir su certificado, registrando IP, fecha y hora exacta."
    },
    {
      question: "¿Ofrecen personalización para necesidades específicas de OTECs?",
      answer: "Sí, entendemos que cada OTEC puede tener flujos distintos. Ofrecemos consultoría para adaptar los reportes o campos de la declaración jurada según los requerimientos de tu proyecto de capacitación."
    }
  ];

  const plans = [
    {
      name: "Licencia Sence Lite",
      price: "$180.000",
      originalPrice: "$240.000",
      highlight: "✓ Ideal para 1 Academia",
      desc: "Funciones esenciales para cumplir con la normativa básica en un solo dominio.",
      features: [
        "Módulo de Declaración Jurada",
        "Registro de Asistencia (Log)",
        "Encuesta de Satisfacción Sence",
        "Reportes PDF Básicos",
        "Actualizaciones por 1 año",
        "Soporte vía Ticket"
      ],
      cta: "Comprar Lite"
    },
    {
      name: "Licencia Sence Pro",
      price: "$340.000",
      originalPrice: "$450.000",
      highlight: "🚀 Reportes Avanzados LCE",
      recommended: true,
      desc: "La solución definitiva para OTECs que necesitan automatización total y reportes LCE.",
      features: [
        "Todo lo del Plan Lite, más:",
        "Generador de Reportes LCE Excel/CSV",
        "Control de Tiempo por Lección",
        "Firma Digital Avanzada (Check)",
        "Instalación y Configuración inicial",
        "Soporte prioritario 1 a 1"
      ],
      cta: "Comprar Pro"
    },
    {
      name: "Multi-Licencia OTEC",
      price: "$680.000",
      highlight: "🏢 Para Agencias y OTECs",
      desc: "Licencia para múltiples dominios con desarrollo de funciones a medida.",
      features: [
        "Hasta 5 Dominios simultáneos",
        "Integración con API Sence (Opcional)",
        "Diseño de Reportes Personalizados",
        "Capacitación para equipo OTEC",
        "Soporte 24/7 Crítico",
        "Mantenimiento anual incluido"
      ],
      cta: "Contactar Ventas"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <main className="pt-[22vh] lg:pt-[12vh]">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10 -translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">Cumplimiento Normativo Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Complemento <br/> <span className="text-blue-500 italic font-serif lowercase font-light">Sence Pro</span> <br/> para Tutor LMS.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light text-pretty">
                Cumple con el <strong className="text-white">Libro de Clases Electrónico</strong> y las exigencias de Sence sin complicaciones. Firma digital, declaración jurada y encuestas integradas nativamente en tu <strong className="text-white">Academia WordPress</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-center">
                  Adquirir Complemento
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Consultoría Técnica
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="bg-zinc-900 border border-white/10 rounded-[4rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                <div className="space-y-6">
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
                      <FileCheck className="w-12 h-12 text-blue-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">Declaración Jurada</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Firma digital obligatoria por curso.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all translate-x-8">
                      <Clock className="w-12 h-12 text-blue-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">Control de Asistencia</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Log detallado de actividades LCE.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
                      <BarChart3 className="w-12 h-12 text-blue-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">Reportes Automáticos</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Exportación directa para fiscalización.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients / Social Proof */}
        <section className="py-16 border-y border-white/5 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 text-center mb-10">Confían en nuestra tecnología Sence</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Skillnest.la</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Reaprende.cl</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">IpsDatax</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Educontable</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">MeCapacito</span>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white rounded-[4rem] mx-4 text-zinc-900 relative overflow-hidden">
           {/* Cuotas Highlight Badge */}
           <div className="absolute top-10 right-10 rotate-12 z-20 hidden md:block">
              <div className="bg-blue-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 border-4 border-white">
                 <span className="text-[10px] font-black uppercase tracking-tighter">Paga hasta</span>
                 <span className="text-3xl font-black">6</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-blue-200">Cuotas sin interés</span>
              </div>
           </div>

           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Oferta Lanzamiento 2026</span>
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Inversión en <br/> <span className="text-blue-600 italic font-serif lowercase font-light">Cumplimiento Sence</span></h2>
                 <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-8">Evita multas y agiliza tus procesos de capacitación corporativa.</p>
                 <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Aprovecha hasta 6 cuotas sin interés con todas las tarjetas Bancarias</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-zinc-50 rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] flex flex-col h-full ${p.recommended ? 'border-blue-500 shadow-3xl shadow-blue-500/10' : 'border-transparent hover:border-blue-100'}`}>
                      {p.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                          Recomendado OTECs
                        </div>
                      )}
                      
                      <div className="mb-8">
                        <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-zinc-950">{p.name}</h3>
                        <p className="text-[10px] font-bold text-blue-600 uppercase mb-8 tracking-widest">{p.highlight}</p>
                        
                        <div className="mb-6">
                          {p.originalPrice && (
                            <div className="text-xs text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + IVA</div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-zinc-950">{p.price}</span>
                            <span className="text-[10px] text-zinc-500 font-bold uppercase ml-1">+ IVA</span>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-500 font-light leading-relaxed">{p.desc}</p>
                      </div>

                      <ul className="space-y-4 mb-12 flex-grow">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-xs text-zinc-600 flex gap-3 font-medium">
                              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                              {f}
                           </li>
                         ))}
                      </ul>
                      
                      <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${p.recommended ? 'bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                        {p.cta}
                      </LeadButton>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Technical Features Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full" />
                 <div className="bg-zinc-900/50 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative z-10">
                    <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Arquitectura de Cumplimiento</h3>
                    <div className="space-y-8">
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                             <Award className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-black text-sm uppercase mb-1">Encuestas de Satisfacción</h4>
                             <p className="text-xs text-zinc-500 font-light">Módulo nativo que bloquea la certificación hasta completar la encuesta obligatoria.</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                             <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-black text-sm uppercase mb-1">Firma con Geolocalización</h4>
                             <p className="text-xs text-zinc-500 font-light">Registro de IP y geolocalización aproximada en cada declaración jurada.</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                             <Download className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-black text-sm uppercase mb-1">Exportación LCE</h4>
                             <p className="text-xs text-zinc-500 font-light">Formatos listos para subir a la plataforma Sence o entregar en auditorías.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4 block">Seguridad & Normativa</span>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Tecnología <br/><span className="text-blue-500 italic">Auditada</span></h2>
                 <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                    <p>
                      Nuestro <strong className="text-white">Complemento Sence para Tutor LMS</strong> ha sido desarrollado bajo los estándares más estrictos de cumplimiento exigidos por el Servicio Nacional de Capacitación y Empleo en Chile.
                    </p>
                    <p>
                      Sabemos que la <strong className="text-white">liquidación de cursos</strong> depende de la precisión de los datos. Por eso, el plugin automatiza el registro de cada segundo que el alumno pasa en la plataforma, generando logs inalterables.
                    </p>
                    <p>
                      Ya sea que gestiones una <strong className="text-white">OTEC</strong> o capacitación interna para empresas, esta herramienta es el puente necesario entre la tecnología moderna de Tutor LMS Pro y las exigencias legales chilenas.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-6xl font-black text-white mb-10 tracking-tight uppercase leading-[0.85]">
                   ¿Tu academia cumple con <br/> <span className="italic font-serif lowercase font-light text-blue-100">la normativa Sence?</span>
                </h2>
                <p className="text-blue-100/80 text-xl mb-14 max-w-xl mx-auto font-light leading-relaxed">
                  Evita rechazos en tus liquidaciones. Obtén el complemento definitivo para <strong className="text-white">Tutor LMS Pro</strong> hoy mismo.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-14 py-7 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                    Solicitar Licencia -10% Dto
                  </LeadButton>
                  <WhatsAppButton className="px-14 py-7 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                    Hablar con un Experto
                  </WhatsAppButton>
                </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32">
           <FAQSection 
             faqs={senceFaqs} 
             title="Dudas sobre el Plugin Sence"
             description="Información técnica y normativa sobre nuestra solución de cumplimiento."
           />
        </div>
      </main>
    </div>
  );
}
