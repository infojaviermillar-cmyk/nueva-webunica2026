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
  Globe
} from 'lucide-react';

export const metadata = {
  title: 'Crear Academia en Línea con Tutor LMS | Sistema E-Learning Profesional Chile',
  description: 'Desarrollo de plataformas e-learning con Tutor LMS Pro. Instalación en VPS (AWS/DigitalOcean), streaming con Bunny.net y pagos locales (Webpay, Flow). ¡Crea tu curso en línea hoy!',
  keywords: 'crear academia en linea, crear curso en linea, sistema elearning, tutor lms chile, plataforma cursos online, lms wordpress chile, webpay tutor lms',
};

export default function TutorLMSPage() {
  const lmsFaqs = [
    {
      question: "¿Por qué usar Tutor LMS en lugar de Moodle?",
      answer: "Tutor LMS ofrece una experiencia de usuario (UX) moderna y amigable tanto para instructores como para alumnos, similar a Udemy o Coursera. Moodle es una herramienta robusta pero su interfaz es anticuada, compleja de administrar y requiere servidores muy potentes para funcionar con fluidez."
    },
    {
      question: "¿Es necesario un VPS para mi academia online?",
      answer: "Sí, para una experiencia profesional recomendamos servidores VPS en DigitalOcean o AWS. A diferencia del hosting compartido, un VPS garantiza que los videos y la plataforma carguen instantáneamente, incluso con muchos alumnos conectados al mismo tiempo."
    },
    {
      question: "¿Cómo funciona el streaming de video con Bunny.net?",
      answer: "Integramos Bunny.net para que tus videos se reproduzcan sin interrupciones y estén protegidos contra descargas no autorizadas. Es mucho más económico y profesional que usar Vimeo o YouTube, asegurando que tu contenido sea exclusivo de tu academia."
    },
    {
      question: "¿Puedo vender mis cursos con Webpay o Mercado Pago?",
      answer: "Totalmente. Configuramos pasarelas de pago chilenas como Webpay (vía Flow o Transbank) y Mercado Pago para que tus alumnos paguen en cuotas y tú recibas el dinero directamente en tu cuenta bancaria."
    },
    {
      question: "¿Cuentan con soporte para el plugin Sence?",
      answer: "Sí, integramos plugins compatibles con la normativa Sence para que tu plataforma cumpla con los requisitos de asistencia, declaración jurada y log de actividades necesarios para la capacitación corporativa en Chile."
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
      name: "LMS ACADEMIA",
      price: "$580.000",
      originalPrice: "$680.000",
      highlight: "🎓 Para marcas personales y expertos",
      desc: "Todo lo necesario para lanzar tu primer curso con una imagen profesional y pagos automáticos.",
      features: [
        "Instalación de WordPress + Tutor LMS",
        "Diseño de Landing Page de Venta",
        "Configuración de hasta 3 cursos iniciales",
        "Integración Webpay (Flow o Mercado Pago)",
        "Configuración Bunny.net (Video Seguro)",
        "Certificados automáticos para alumnos",
        "Optimización de velocidad (LCP < 2s)",
        "Hosting VPS básico (DigitalOcean/Vultr)",
        "Soporte por 3 meses"
      ],
      cta: "Empezar Academia"
    },
    {
      name: "LMS BUSINESS",
      price: "$780.000",
      originalPrice: "$920.000",
      highlight: "🚀 Para escuelas en crecimiento",
      recommended: true,
      desc: "La solución completa para academias que necesitan múltiples instructores y herramientas de marketing.",
      features: [
        "Todo lo del Plan Academia, más:",
        "Sistema Multi-instructor (Marketplace)",
        "Cuestionarios avanzados y tareas",
        "Integración con Sence (Opcional)",
        "Email Marketing automatizado",
        "App móvil básica (Web-view optimizada)",
        "VPS de alto rendimiento",
        "Capacitación de administración total"
      ],
      cta: "Escalar mi Negocio"
    },
    {
      name: "LMS ENTERPRISE",
      price: "$1.200.000",
      highlight: "🏢 Corporativo y Medida",
      desc: "Plataformas robustas para empresas que requieren integraciones complejas y miles de alumnos.",
      features: [
        "Todo lo del Plan Business, más:",
        "Infraestructura en AWS (Escalable)",
        "Integración con CRM / ERP",
        "Desarrollo de funciones a medida",
        "Soporte 24/7 y mantenimiento preventivo",
        "Diseño UX/UI exclusivo desde cero",
        "Consultoría estratégica de E-Learning",
        "Auditoría de seguridad y penetración"
      ],
      cta: "Contactar Consultor"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white overflow-x-hidden">
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 border border-rose-500/20 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-rose-400 uppercase">Expertos en E-Learning Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Crear tu <br/> <span className="text-rose-500 italic font-serif lowercase font-light">academia en línea</span> <br/> nunca fue tan fácil.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Olvídate de sistemas lentos y complicados. Implementamos tu <strong className="text-white">sistema e-learning</strong> con Tutor LMS Pro sobre servidores VPS de alta velocidad. El Netflix de tus cursos está a un click.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-10 py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 active:scale-95 text-center">
                  Comenzar con 10% Dto
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Hablar con un experto
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-orange-400 rounded-full blur-[80px] opacity-10 animate-pulse" />
              <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-zinc-800 border border-white/5">
                   {/* Placeholder for an actual image or graphic */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <PlayCircle className="w-20 h-20 text-rose-500 mx-auto mb-4 opacity-50" />
                        <div className="space-y-2">
                           <div className="h-2 w-32 bg-white/10 rounded-full mx-auto" />
                           <div className="h-2 w-24 bg-white/5 rounded-full mx-auto" />
                        </div>
                      </div>
                   </div>
                   <Image 
                     src="/tutor_lms_hero_new.png" 
                     alt="Interfaz de Academia Online Tutor LMS" 
                     width={800} 
                     height={450} 
                     className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moodle vs Tutor LMS */}
        <section className="py-32 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-6">Tutor LMS <span className="text-rose-500">vs</span> Moodle</h2>
              <p className="text-zinc-400 font-light max-w-2xl mx-auto">La educación online cambió. No sigas usando herramientas del siglo pasado.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] border border-white/5 bg-zinc-950/50">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-zinc-500 uppercase tracking-widest">
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">✕</span> El Problema de Moodle
                </h3>
                <ul className="space-y-6">
                  {[
                    "Interfaz anticuada que ahuyenta a los alumnos.",
                    "Administración extremadamente compleja y lenta.",
                    "Consumo excesivo de recursos de servidor.",
                    "Personalización visual muy limitada y costosa.",
                    "Curva de aprendizaje frustrante para instructores."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-zinc-500 font-light text-sm">
                      <span className="text-rose-500 font-bold mt-1">―</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-[3rem] border border-rose-500/20 bg-rose-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white uppercase tracking-widest">
                  <span className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-sm">✓</span> La Ventaja Tutor LMS
                </h3>
                <ul className="space-y-6">
                  {[
                    "Diseño moderno estilo Netflix (UX de alto nivel).",
                    "Constructor de cursos 'Drag & Drop' intuitivo.",
                    "Carga ultra rápida optimizada para móviles.",
                    "Certificados dinámicos y gamificación nativa.",
                    "Fácil integración con marketing y pagos locales."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-zinc-300 font-light text-sm">
                      <span className="text-rose-500 font-bold mt-1">⚡</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Tech Stack */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                  Tecnología de <br/><span className="text-rose-500">Vanguardia</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12 font-light leading-relaxed">
                  Para <strong className="text-white">crear un curso en línea</strong> exitoso, la tecnología debe ser invisible. Nos encargamos de que todo funcione perfecto.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {features.map((f, i) => (
                    <div key={i} className="group">
                      <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-rose-500/20 transition-colors">
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
                           <h4 className="font-bold text-white uppercase text-sm mb-1">Streaming Bunny.net</h4>
                           <p className="text-zinc-500 text-xs font-light">Video seguro y ultra rápido en todo Chile.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                           <Globe className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white uppercase text-sm mb-1">VPS DigitalOcean / AWS</h4>
                           <p className="text-zinc-500 text-xs font-light">Servidores dedicados para tu academia.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                           <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white uppercase text-sm mb-1">Certificación Sence</h4>
                           <p className="text-zinc-500 text-xs font-light">Cumplimiento total para capacitación empresas.</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/20 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Qué está incluido section */}
        <section className="py-32 bg-zinc-950 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase">Qué está incluido</h2>
              <p className="text-zinc-500 font-light max-w-2xl mx-auto">
                Obtén más de 100 funciones listas para usar con la suscripción a Tutor LMS Pro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Creación de cursos */}
              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Creación de cursos</h3>
                <ul className="space-y-3">
                  {[
                    "Creador de cursos intuitivo", "Estudio de IA", "Cursos ilimitados", "Banco de contenidos",
                    "Curso de regalo", "Protección del contenido del curso", "Compatibilidad con video nativo, YouTube y Vimeo",
                    "Paquete de cursos", "Filtrado de cursos", "Curso público", "Curso protegido con contraseña",
                    "Exportación/importación de cursos", "Contenido del curso de goteo", "Vista previa del curso",
                    "Requisitos previos del curso", "Anexo del curso"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                      <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cuestionarios y Monetización */}
              <div className="space-y-6">
                <div className="space-y-6 mb-12">
                   <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Cuestionarios poderosos</h3>
                   <ul className="space-y-3">
                     {[
                       "Creador de cuestionarios avanzado", "Múltiples tipos de cuestionarios", "Informe detallado del cuestionario",
                       "Exportación/importación de cuestionarios"
                     ].map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                         <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                         {f}
                       </li>
                     ))}
                   </ul>
                </div>
                
                <div className="space-y-6 mb-12">
                  <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Monetización</h3>
                  <ul className="space-y-3">
                    {[
                      "Asignación de ganancias y comisiones", "Opción de venta de un solo curso", "Membresía para todo el sitio",
                      "Inscripciones manuales"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                        <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">E-Commerce Nativo</h3>
                  <ul className="space-y-3">
                    {[
                      "Compra única", "Suscripciones integradas", "Afiliación", "Gestión de cupones",
                      "Gestión de impuestos", "Gestión de pedidos", "Proceso de pago optimizado", "Salida como invitado"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                        <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Estudiantes e Instructores */}
              <div className="space-y-6">
                <div className="space-y-6 mb-12">
                   <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Estudiantes e instructores</h3>
                   <ul className="space-y-3">
                     {[
                       "Estudiantes e instructores ilimitados", "Paneles de control personalizados", "Comunicación directa",
                       "Preparado para múltiples instructores", "Calificación automatizada", "Cuaderno para instructores"
                     ].map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                         <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                         {f}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="space-y-6 mb-12">
                  <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Certificados personalizados</h3>
                  <ul className="space-y-3">
                    {[
                      "Creador de certificados drag & drop", "Certificados con marca blanca", "Certificados ilimitados"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                        <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Análisis avanzado</h3>
                  <ul className="space-y-3">
                    {[
                      "Informes y análisis detallados", "Análisis de ganancias", "Informe detallado del curso",
                      "Opción de exportación de análisis"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                        <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Second row of grid */}
              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Aprendizaje en tiempo real</h3>
                <ul className="space-y-3">
                  {[
                    "Integración con Zoom", "Integración con Google Meet", "Integración con Google Classroom"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                      <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Comunicaciones</h3>
                <ul className="space-y-3">
                  {[
                    "Preguntas y respuestas (Q&A)", "Comentarios sobre la lección", "Notificaciones push",
                    "Opción de anuncio", "Notificaciones en todo el sitio", "Correos electrónicos personalizables",
                    "Plantillas de correo prediseñadas", "Calendario de eventos"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                      <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-rose-500 font-bold uppercase tracking-widest text-sm border-l-2 border-rose-500 pl-4">Autenticación</h3>
                <ul className="space-y-3">
                  {[
                    "Autenticación de dos factores (2FA)", "Protección contra el fraude", "Gestionar sesiones activas",
                    "Verificación de correo electrónico"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-light">
                      <span className="w-4 h-4 rounded-full bg-rose-500/10 flex items-center justify-center text-[8px] text-rose-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white rounded-[4rem] mx-4 text-zinc-900">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6">Planes Academia</h2>
                 <p className="text-xl text-zinc-500 font-light">Inversión transparente para un negocio escalable.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-zinc-50 rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] ${p.recommended ? 'border-rose-500 shadow-2xl shadow-rose-500/10' : 'border-transparent'}`}>
                      {p.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                          Más Popular
                        </div>
                      )}
                      <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                      <p className="text-xs font-bold text-rose-500 uppercase mb-6">{p.highlight}</p>
                      
                      <div className="mb-8">
                        {p.originalPrice && (
                          <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                        )}
                        <span className="text-4xl font-black text-zinc-950">{p.price}</span>
                        <span className="text-sm text-zinc-500 font-medium ml-1">+ iva</span>
                      </div>

                      <p className="text-sm text-zinc-500 font-light mb-10 min-h-[40px]">{p.desc}</p>
                      
                      <ul className="space-y-4 mb-12">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-sm text-zinc-600 flex gap-3">
                              <span className="text-rose-500 font-bold">✓</span>
                              {f}
                           </li>
                         ))}
                      </ul>
                      
                      <LeadButton className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                        {p.cta} - 10% Dto
                      </LeadButton>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Stats Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '100%', lab: 'Control de Contenido' },
              { val: '0%', lab: 'Comisiones por Venta' },
              { val: '24/7', lab: 'Acceso Alumnos' },
              { val: '∞', lab: 'Escalabilidad' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-6xl font-black text-rose-500 mb-2 tracking-tighter">{s.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{s.lab}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-600 to-orange-500 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
                  ¿Listo para lanzar tu <br/> <span className="italic font-serif lowercase font-light text-rose-100">primera academia?</span>
                </h2>
                <p className="text-rose-100/80 text-lg mb-12 max-w-xl mx-auto font-light">
                  No dejes que la tecnología te detenga. Nosotros construimos la plataforma, tú pones el conocimiento.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-12 py-6 bg-white text-rose-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Solicitar con 10% Dto
                  </LeadButton>
                  <WhatsAppButton className="px-12 py-6 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Consultar por WhatsApp
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
             description="Resolvemos las dudas técnicas más comunes para que lances con confianza."
           />
        </div>
      </main>
    </div>
  );
}
