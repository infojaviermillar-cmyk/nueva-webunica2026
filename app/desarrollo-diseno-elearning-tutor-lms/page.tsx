import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { 
  BookOpen, 
  Video, 
  CreditCard, 
  Server, 
  Award, 
  Users, 
  Layout, 
  ShieldCheck, 
  Zap, 
  MonitorPlay,
  PlayCircle,
  BarChart3,
  Globe,
  CheckCircle2,
  Lock,
  MousePointer2,
  TrendingUp
} from 'lucide-react';

export const metadata = {
  title: 'Crear Academia Online con Tutor LMS Pro | Plataforma E-learning Chile 2026',
  description: 'Desarrollamos tu academia online con Tutor LMS Pro. Integración con Webpay, streaming seguro Bunny.net y SEO avanzado para vender tus cursos en Chile y el mundo.',
  keywords: 'crear academia en linea, crear curso en linea, sistema elearning chile, tutor lms pro beneficios, plataforma cursos online wordpress, lms wordpress chile, webpay tutor lms, academia online santiago',
};

export default function TutorLMSPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Desarrollo de Academias Online con Tutor LMS Pro",
    "description": "Servicio profesional de creación y configuración de plataformas e-learning utilizando Tutor LMS Pro, con pagos locales e infraestructura VPS.",
    "brand": {
      "@type": "Brand",
      "name": "Webunica"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Skillnest" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Excelente migración desde Coding Dojo, la plataforma es mucho más rápida y estable."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Educontable" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "La integración con Webpay y la automatización de certificados nos ahorra horas de trabajo."
      }
    ]
  };


  const lmsFaqs = [
    {
      question: "¿Qué beneficios reales ofrece Tutor LMS Pro para mi negocio?",
      answer: "Tutor LMS Pro transforma tu WordPress en una academia de clase mundial. Sus principales beneficios incluyen: Interfaz de usuario (UX) intuitiva que aumenta la retención de alumnos, sistema multi-instructor para crear un marketplace de cursos, reportes avanzados para toma de decisiones basadas en datos, y total compatibilidad con herramientas de marketing para escalar tus ventas."
    },
    {
      question: "¿Cómo protege Tutor LMS Pro mi contenido?",
      answer: "Junto con Tutor LMS Pro, integramos Bunny.net para ofrecer streaming con seguridad DRM. Esto significa que tus cursos están protegidos contra descargas no autorizadas y copias ilegales, asegurando que tu propiedad intelectual esté siempre a salvo."
    },
    {
      question: "¿Es escalable si tengo miles de alumnos?",
      answer: "Absolutamente. Al instalar Tutor LMS Pro sobre infraestructura VPS dedicada (AWS o DigitalOcean), tu academia puede soportar miles de usuarios simultáneos sin perder velocidad, algo imposible de lograr en un hosting tradicional compartido."
    },
    {
      question: "¿Por qué Tutor LMS es mejor para el SEO que otras plataformas?",
      answer: "A diferencia de plataformas cerradas como Teachable o Kajabi, Tutor LMS corre sobre WordPress, dándote control total sobre el SEO. Cada curso y lección puede ser optimizado semánticamente, permitiéndote posicionar tu academia de forma orgánica en los primeros resultados de Google."
    },
    {
      question: "¿Puedo vender mis cursos con Webpay o Mercado Pago?",
      answer: "Totalmente. Configuramos pasarelas de pago chilenas como Webpay (vía Flow o Transbank) y Mercado Pago para que tus alumnos paguen en cuotas y tú recibas el dinero directamente en tu cuenta bancaria."
    }
  ];

  const features = [
    {
      title: "Tutor LMS Pro",
      desc: "Certificados personalizados, cuestionarios avanzados, informes detallados y soporte multi-instructor.",
      icon: <Award className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Streaming Bunny.net",
      desc: "Video de alta calidad sin buffering y con seguridad DRM para evitar piratería de tus cursos.",
      icon: <Video className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Pagos Locales",
      desc: "Integración nativa con Webpay, Mercado Pago y Flow para vender en pesos chilenos.",
      icon: <CreditCard className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Infraestructura VPS",
      desc: "Instalación optimizada en AWS o DigitalOcean para máxima velocidad y escalabilidad.",
      icon: <Server className="w-6 h-6 text-rose-500" />
    }
  ];

  const plans = [
    {
      name: "LMS ACADEMIA INICIO",
      price: "$580.000",
      originalPrice: "$680.000",
      highlight: "🎓 Para marcas personales",
      desc: "La base perfecta para lanzar tu primer curso online con una infraestructura profesional y pagos locales.",
      features: [
        "Instalación de WordPress + Tutor LMS Pro",
        "Diseño Kit de Elementor pro Envato",
        "Landing Page de Venta SEO",
        "Google Analytics 4 & Meta Pixel",
        "Integración Webpay, Mercado Pago o Flow + Fintoc o VentiPay",
        "Configuración Bunny.net (Básico)",
        "Optimización de velocidad",
        "Web adaptable a mobile",
        "Creación de VPS Hostinger KVM 2",
        "Creación de curso hasta 5 lecciones",
        "Soporte por 3 meses"
      ],
      cta: "Empezar Academia"
    },
    {
      name: "LMS BUSINESS PRO",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "🚀 El Plan más Solicitado",
      recommended: true,
      desc: "La solución definitiva para academias que buscan dominar su nicho con automatización y diseño de alto nivel.",
      features: [
        "Desarrollo Web Academia Tutor LMS",
        "Instalación WordPress + Tutor LMS Pro",
        "Diseño Kit Elementor Pro Envato",
        "Landing Page de Venta SEO",
        "Carro de compra e Inicio automatizado",
        "Configuración de Correo SMTP",
        "Webpay, Mercado Pago o Flow",
        "Configuración Bunny.net (Seguro)",
        "Certificados automáticos",
        "Optimización de velocidad",
        "Configuración Hosting VPS",
        "Cuestionarios avanzados y tareas",
        "Email Marketing automatizado",
        "Web adaptable a mobile",
        "Capacitación administración total",
        "Configuración de 1 curso completo"
      ],
      cta: "Escalar mi Negocio"
    },
    {
      name: "LMS ENTERPRISE SEO",
      price: "$1.100.000",
      originalPrice: "$1.450.000",
      highlight: "🏢 Corporativo y Escalable",
      desc: "Ecosistema e-learning robusto con multi-instructores, infraestructura de alto tráfico e integraciones personalizadas.",
      features: [
        "Todo lo del Plan Business, más:",
        "Infraestructura Digital Ocean o AWS",
        "Sistema Multi-instructor (Marketplace)",
        "Google Analytics 4 & Meta Pixel",
        "Pago Multimoneda",
        "Plugin Asistencia SENCE",
        "Estrategia SEO Full (Silos de Contenido)",
        "App Móvil (Web-view optimizada)",
        "Google Meet / Zoom",
        "Google Classroom",
        "Calendario de Eventos",
        "Soporte 24/7 y Mantenimiento",
        "Auditoría de Seguridad Mensual"
      ],
      cta: "Contactar Consultor"
    }
  ];

  const detailedBreakdown = [
    { item: "Desarrollo Web Academia en Linea Tutor LMS", qty: 1, unit: "$250.000" },
    { item: "Instalación de WordPress + Tutor LMS Pro", qty: 1, unit: "$80.000" },
    { item: "Incluye diseño Kit de Elementor pro Envato.", qty: 1, unit: "$60.000" },
    { item: "Diseño de Landing Page de Venta SEO", qty: 1, unit: "$70.000" },
    { item: "Inegración Carro de compra, inicio automatizado del alumno.", qty: 1, unit: "$50.000" },
    { item: "Configuracion de sistema de correo SMTP", qty: 1, unit: "$20.000" },
    { item: "Integración Webpay, mercado pago o Flow", qty: 1, unit: "$40.000" },
    { item: "Configuración Bunny.net (Video Seguro)", qty: 1, unit: "$40.000" },
    { item: "Certificados automáticos para alumnos", qty: 1, unit: "$20.000" },
    { item: "Optimización de velocidad", qty: 1, unit: "$30.000" },
    { item: "Conguración Hosting VPS", qty: 1, unit: "$60.000" },
    { item: "Cuestionarios avanzados y tareas", qty: 1, unit: "$30.000" },
    { item: "Email Marketing automatizado", qty: 1, unit: "$30.000" },
    { item: "Web adaptable a mobile y a distintas pantallas", qty: 1, unit: "$0 (Incl.)" },
    { item: "Capacitación de administración total", qty: 1, unit: "$0 (Incl.)" },
    { item: "Incluye la configuracion de 1 curso con lecciones, tareas y cuestionarios.", qty: 1, unit: "$0 (Incl.)" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <main className="pt-[22vh] lg:pt-48">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 border border-rose-500/20 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-[14px] font-black tracking-[0.2em] text-rose-400 uppercase">Expertos en E-Learning Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Crear tu <br/> <span className="text-rose-500 italic font-serif lowercase font-light">academia en línea</span> <br/> con Tutor LMS Pro.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light text-pretty">
                Desarrollamos tu <strong className="text-white">plataforma e-learning</strong> definitiva. Integración fluida de <strong className="text-white">Tutor LMS Pro</strong> sobre infraestructura VPS de élite. Velocidad, seguridad y posicionamiento SEO garantizados.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <LeadButton className="px-10 py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 active:scale-95 text-center">
                    Lanzar Academia - Obtén -10%
                  </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Consultoría vía WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-orange-400 rounded-full blur-[80px] opacity-10 animate-pulse" />
              <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-zinc-800 border border-white/5">
                   <Image 
                     src="/tutor_lms_hero_new.png" 
                     alt="Interfaz de Academia Online Tutor LMS Pro - Webunica" 
                     width={800} 
                     height={450} 
                     className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-16 h-16 text-rose-500" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients / Social Proof */}
        <section className="py-16 border-y border-white/5 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[14px] font-black uppercase tracking-[0.3em] text-zinc-500 text-center mb-10">Confían en nuestra ingeniería E-Learning</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Skillnest.la</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Reaprende.cl</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">IpsDatax</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Educontable</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">MeCapacito</span>
            </div>
          </div>
        </section>

        {/* Pricing Section - Moved here as requested */}
        <section id="pricing" className="py-32 bg-white rounded-[4rem] mx-4 text-zinc-900 relative overflow-hidden">
           {/* Cuotas Highlight Badge */}
           <div className="absolute top-10 right-10 rotate-12 z-20 hidden md:block">
              <div className="bg-rose-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 border-4 border-white">
                 <span className="text-[14px] font-black uppercase tracking-tighter">Paga hasta</span>
                 <span className="text-3xl font-black">6</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-rose-200">Cuotas sin interés</span>
              </div>
           </div>

           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full mb-6">
                    <CreditCard className="w-4 h-4 text-rose-500" />
                    <span className="text-[14px] font-black uppercase tracking-widest text-rose-600">Financiamiento Flexible</span>
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Planes <br/> <span className="text-rose-600 italic font-serif lowercase font-light">Academia Pro</span></h2>
                 <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-8">Estructura tecnológica escalable para vender tus conocimientos sin límites geográficos.</p>
                 <p className="text-xs font-black text-rose-500 uppercase tracking-widest">Aprovecha hasta 6 cuotas sin interés con todas las tarjetas Bancarias</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-zinc-50 rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] flex flex-col h-full ${p.recommended ? 'border-rose-500 shadow-3xl shadow-rose-500/10' : 'border-transparent hover:border-rose-100'}`}>
                      {p.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[14px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                          Más vendido
                        </div>
                      )}
                      
                      <div className="mb-8">
                        <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-zinc-950">{p.name}</h3>
                        <p className="text-[14px] font-bold text-rose-600 uppercase mb-8 tracking-widest">{p.highlight}</p>
                        
                        <div className="mb-6">
                          {p.originalPrice && (
                            <div className="text-xs text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + IVA</div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-zinc-950">{p.price}</span>
                            <span className="text-[14px] text-zinc-500 font-bold uppercase ml-1">+ IVA</span>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-500 font-light leading-relaxed">{p.desc}</p>
                      </div>

                      <ul className="space-y-4 mb-12 flex-grow">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-xs text-zinc-600 flex gap-3 font-medium">
                              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                              {f}
                           </li>
                         ))}
                      </ul>
                      
                      <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[14px] transition-all shadow-xl ${p.recommended ? 'bg-rose-600 text-white shadow-rose-600/20 hover:bg-rose-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                        {p.cta} - Obtén -10%
                      </LeadButton>
                    </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Detailed Breakdown Section */}
         <section className="py-24 bg-zinc-900 mx-4 rounded-[4rem] relative overflow-hidden border border-white/5">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
                     <BarChart3 className="w-4 h-4 text-rose-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">Transparencia de Ingeniería</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-4 text-white">Desglose de <span className="text-rose-500 italic">Inversión Business</span></h2>
                  <p className="text-zinc-400 font-light max-w-2xl">Especificaciones técnicas y valorización detallada para tu plataforma e-learning profesional.</p>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="py-6 px-4 text-[11px] font-black uppercase tracking-[0.2em] text-rose-500">Detalle</th>
                           <th className="py-6 px-4 text-[11px] font-black uppercase tracking-[0.2em] text-rose-500">Cantidad</th>
                           <th className="py-6 px-4 text-[11px] font-black uppercase tracking-[0.2em] text-rose-500">Valor unit</th>
                           <th className="py-6 px-4 text-[11px] font-black uppercase tracking-[0.2em] text-rose-500 text-right">Acciones</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {detailedBreakdown.map((row, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors group">
                              <td className="py-4 px-4 text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">{row.item}</td>
                              <td className="py-4 px-4 text-xs font-medium text-zinc-500">{row.qty}</td>
                              <td className="py-4 px-4 text-xs font-bold text-white">{row.unit}</td>
                              <td className="py-4 px-4 text-right">
                                 <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto" />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="mt-12 p-8 bg-zinc-950/50 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block mb-2">Total Inversión Neta</span>
                     <span className="text-4xl font-black text-white">$780.000 <span className="text-xl text-rose-500">+ IVA</span></span>
                  </div>
                  <div className="flex gap-4">
                     <LeadButton className="px-10 py-5 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 active:scale-95">
                        Solicitar Cotización Formal
                     </LeadButton>
                  </div>
               </div>
            </div>
         </section>

        {/* Benefits Focus: Why Tutor LMS Pro? */}
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-rose-500/5 blur-[100px] rounded-full -z-10" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 p-8 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all">
                    <MousePointer2 className="w-10 h-10 text-rose-500 mb-4" />
                    <h4 className="text-xs font-black uppercase mb-2">UX Netflix Style</h4>
                    <p className="text-[14px] text-zinc-500 font-light">Tus alumnos amarán navegar en tus cursos.</p>
                  </div>
                  <div className="bg-zinc-900/50 p-8 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all translate-y-8">
                    <Lock className="w-10 h-10 text-rose-500 mb-4" />
                    <h4 className="text-xs font-black uppercase mb-2">Anti-Piratería</h4>
                    <p className="text-[14px] text-zinc-500 font-light">Streaming blindado con seguridad DRM.</p>
                  </div>
                  <div className="bg-zinc-900/50 p-8 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all">
                    <TrendingUp className="w-10 h-10 text-rose-500 mb-4" />
                    <h4 className="text-xs font-black uppercase mb-2">SEO Nativo</h4>
                    <p className="text-[14px] text-zinc-500 font-light">Posiciona tu academia en Google rápidamente.</p>
                  </div>
                  <div className="bg-zinc-900/50 p-8 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all translate-y-8">
                    <CreditCard className="w-10 h-10 text-rose-500 mb-4" />
                    <h4 className="text-xs font-black uppercase mb-2">Venta Automática</h4>
                    <p className="text-[14px] text-zinc-500 font-light">Recibe pagos 24/7 en tu cuenta bancaria.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                 <span className="text-[14px] font-black uppercase tracking-widest text-rose-500 mb-4 block">Potencial Tutor LMS Pro</span>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Beneficios de <br/><span className="text-rose-500 italic">Ingeniería Pro</span></h2>
                 <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                    <p>
                      <strong className="text-white">Tutor LMS Pro</strong> no es solo un plugin; es un motor de crecimiento educativo. Diseñado para ofrecer una experiencia fluida, permite que el foco sea el aprendizaje y no los problemas técnicos.
                    </p>
                    <p>
                      Al implementar <strong className="text-white">plataformas e-learning</strong> con este sistema, garantizamos una arquitectura escalable. Podrás gestionar múltiples instructores, emitir certificados con marca blanca y analizar el progreso de tus alumnos con datos en tiempo real.
                    </p>
                    <p>
                      Nuestra especialidad en <strong className="text-white">SEO para academias online</strong> asegura que cada curso sea una puerta de entrada para nuevos clientes orgánicos desde Google Chile.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Technical Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">
                  Stack Tecnológico <br/><span className="text-rose-500 italic">E-Learning 2026</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12 font-light leading-relaxed">
                  Utilizamos las herramientas más potentes del mercado para que tu academia sea invencible.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {features.map((f, i) => (
                    <div key={i} className="group">
                      <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-rose-500/20 transition-all">
                        {f.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">{f.title}</h4>
                      <p className="text-zinc-500 text-xs leading-relaxed font-light">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative z-10">
                   <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                           <MonitorPlay className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white uppercase text-sm mb-1">Bunny.net High-Speed</h4>
                           <p className="text-zinc-500 text-xs font-light">Streaming sin buffering en todo el territorio nacional.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                           <Globe className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white uppercase text-sm mb-1">VPS Dedicado AWS</h4>
                           <p className="text-zinc-500 text-xs font-light">Infraestructura robusta para miles de alumnos simultáneos.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                           <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white uppercase text-sm mb-1">Seguridad Avanzada</h4>
                           <p className="text-zinc-500 text-xs font-light">Protección contra ataques DDoS y backups diarios.</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/10 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features section */}
        <section className="py-32 bg-zinc-950 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Funciones de <br/><span className="text-rose-500 italic">Clase Mundial</span></h2>
              <p className="text-zinc-500 font-light max-w-2xl mx-auto">
                Implementamos más de 100 herramientas nativas para que tu única preocupación sea crear contenido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Column 1 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Gestión Educativa</h3>
                  <ul className="space-y-4">
                    {["Creador Drag & Drop", "IA Content Studio", "Streaming Bunny.net", "Protección DRM", "Certificados Pro"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Interacción</h3>
                  <ul className="space-y-4">
                    {["Foros de Debate", "Q&A en Vivo", "Anuncios Globales", "Notificaciones Push", "Emails Automatizados"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Evaluación</h3>
                  <ul className="space-y-4">
                    {["Quizzes Avanzados", "Sistema de Tareas", "Calificación Automática", "Reporte de Progreso", "Gamificación"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Monetización</h3>
                  <ul className="space-y-4">
                    {["Pagos en 6 Cuotas", "Suscripciones Recurrentes", "Membresías VIP", "Códigos de Descuento", "Sistema de Afiliados"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Administración</h3>
                  <ul className="space-y-4">
                    {["Panel Multi-instructor", "Dashboard de Ganancias", "Exportación de Datos", "Seguridad 2FA", "Backups Automáticos"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-rose-500 font-black uppercase tracking-[0.2em] text-xs border-l-4 border-rose-600 pl-4">Sincronización</h3>
                  <ul className="space-y-4">
                    {["Google Meet / Zoom", "Google Classroom", "Calendario de Eventos", "Integración CRM", "API de Conversiones"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '100%', lab: 'Control Total' },
              { val: '0%', lab: 'Comisiones Externas' },
              { val: '24/7', lab: 'Venta Automática' },
              { val: '6', lab: 'Cuotas sin Interés' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-7xl font-black text-rose-500 mb-2 tracking-tighter uppercase">{s.val}</div>
                <div className="text-[14px] font-black uppercase tracking-[0.25em] text-zinc-500">{s.lab}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-600 to-orange-500 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-6xl font-black text-white mb-10 tracking-tight uppercase leading-[0.85]">
                   ¿Transformamos tu <br/> <span className="italic font-serif lowercase font-light text-rose-100">conocimiento en ingresos?</span>
                </h2>
                <p className="text-rose-100/80 text-xl mb-14 max-w-xl mx-auto font-light leading-relaxed">
                  Obtén tu academia online profesional con <strong className="text-white">Tutor LMS Pro</strong> y paga en cuotas. Tu libertad financiera comienza con tu primer curso.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-14 py-7 bg-white text-rose-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                    Solicitar mi Academia - Obtén -10%
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
             faqs={lmsFaqs} 
             title="Dudas sobre E-Learning"
             description="Resolvemos tus inquietudes sobre Tutor LMS Pro, pagos y tecnología educativa."
           />
        </div>
      </main>
    </div>
  );
}

