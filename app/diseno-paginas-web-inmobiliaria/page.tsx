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
  Database,
  Calculator,
  Share2,
  Users,
  Settings,
  Flame,
  LayoutGrid
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portal Inmobiliario & CRM Pro | Diseño Web Inmobiliaria Chile',
  description: 'Desarrollamos páginas web inmobiliarias con CRM Pro integrado y Marca Blanca. Conector de Meta Graph API para autopublicación, calculadora Cap Rate, y UF/CLP.',
  keywords: 'portal inmobiliario marca blanca, software inmobiliario chile, crm inmobiliario, pagina web corredora de propiedades, autopublicacion redes sociales inmobiliaria',
};

export default function RealEstatePage() {
  const realEstateFaqs = [
    {
      question: "¿El sistema es de mi propiedad o se paga mensualidad?",
      answer: "Es 100% tuyo e independiente. Lo instalamos bajo tu propio dominio corporativo. No pagas comisiones por ventas ni mensualidades por subir propiedades. Solo mantienes tu dominio y hosting."
    },
    {
      question: "¿Cómo funciona la publicación automática en Facebook e Instagram?",
      answer: "El panel de administración se conecta con Meta Graph API. Cuando ingresas una propiedad en tu sitio, con un solo clic se publica de forma automática en la FanPage de Facebook y en el Instagram comercial de tu corredora, ahorrando horas de trabajo."
    },
    {
      question: "¿Se manejan valores en UF y Pesos Chilenos?",
      answer: "Sí, el sistema está adaptado al mercado chileno. Permite ingresar valores tanto en UF como en CLP, realizando conversiones visuales automáticas para facilitarle la búsqueda al usuario final."
    },
    {
      question: "¿Qué es la calculadora Cap Rate y para qué sirve?",
      answer: "Es una herramienta de atracción de inversores. Permite calcular el retorno de inversión anual estimado (Cap Rate) según el precio y valor de arriendo proyectado, simulando dividendos y rentabilidad al instante."
    },
    {
      question: "¿Es seguro el sistema? ¿Cómo manejan los leads?",
      answer: "Utilizamos Supabase con políticas RLS (Row Level Security) para proteger tus datos de clientes e inventario. Los leads se guardan en el CRM interno y te notifican por correo (vía Resend) y WhatsApp Directo."
    }
  ];

  const plans = [
    {
      name: "Inmo BASE (WordPress)",
      price: "$580.000",
      original: "$650.000",
      highlight: "Ideal para iniciar",
      desc: "Plataforma robusta autogestionable con todas las herramientas para mostrar tu catálogo de propiedades.",
      features: [
        "Desarrollo en WordPress",
        "Plugin Inmobiliario Premium",
        "Filtros de búsqueda estándar",
        "Carga ilimitada de propiedades",
        "Galería de fotos y videos",
        "Formulario de contacto básico",
        "Botón de WhatsApp directo",
        "SEO local configurado",
        "Soporte técnico por 3 meses"
      ]
    },
    {
      name: "Inmo CRM PRO (Next.js & Supabase)",
      price: "$1.200.000",
      original: "$1.500.000",
      highlight: "Plataforma Independiente & CRM Pro",
      desc: "Portal premium a medida de marca blanca total sin mensualidades. Next.js 14, Supabase, Meta API y CRM completo.",
      features: [
        "Todo lo de Inmo BASE +",
        "CRM Ligero de Leads integrado (/admin/leads)",
        "Marca Blanca 100% (Colores, logos, dominio)",
        "Conector Meta Graph API (Publicación en 1 click)",
        "Buscador dinámico avanzado (UF & CLP)",
        "Calculadora Cap Rate para Inversionistas",
        "Mapa interactivo (OpenStreetMap / Leaflet)",
        "Embudo de captación 'Vender mi Propiedad'",
        "Módulo de Simulación de Créditos",
        "Roles de Usuario (Admin General y Agentes)",
        "Notificaciones instantáneas vía Resend API",
        "Garantía y Soporte Prioritario por 6 meses"
      ],
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48 pb-20">
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-36 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">Propuesta de Valor Comercial</span>
              </div>
              
              <h1 className="text-5xl lg:text-[80px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-white">
                PORTAL INMOBILIARIO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  & CRM PRO
                </span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Una plataforma 100% independiente, moderna y personalizable que reemplaza el pago de mensualidades a portales de terceros, otorgándole a tu corredora su propia marca blanca con herramientas avanzadas para captación en Chile.
              </p>

              {/* Pitch tags */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-10 text-left">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Marca Blanca Total</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Meta API Autoposting</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Manejo UF / CLP</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sin Comisiones</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-xs">
                    Cotizar mi Plataforma
                 </LeadButton>
                 <Link href="/portafolio" className="px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs text-center">
                    Ver Proyectos
                 </Link>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-900 border border-white/10 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/real_estate_hero_new.png"
                    alt="CRM Inmobiliario de Marca Blanca Next.js"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 w-max">
                     <div className="flex items-center gap-6">
                        <div className="text-center">
                           <div className="text-2xl font-black text-white">0%</div>
                           <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Comisiones</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                           <div className="text-2xl font-black text-blue-500">100%</div>
                           <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Marca Propia</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Highlights */}
        <section className="py-24 bg-white text-zinc-950 rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3 block">Ventajas Clave del Pitch</span>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
                EL CONTROL VOLVIÓ <br/>A LA <span className="text-blue-600">CORREDORA</span>
              </h2>
              <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">
                No envíes tus clientes a portales de terceros donde ven a tu competencia. Fidelízalos en tu propio ecosistema independiente y automatizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Sin Mensualidades", 
                  desc: "La corredora es dueña absoluta del sitio. Sube propiedades y agentes ilimitados sin cobros extras.", 
                  icon: <Database className="w-8 h-8" /> 
                },
                { 
                  title: "Marca Blanca Total", 
                  desc: "Logotipos, isotipos, tipografías, colores institucionales y tu propio dominio web (www.tuweb.cl).", 
                  icon: <Globe className="w-8 h-8" /> 
                },
                { 
                  title: "Meta Graph API", 
                  desc: "Ingresa la propiedad en tu admin y publícala automáticamente en Facebook e Instagram en 1 clic.", 
                  icon: <Share2 className="w-8 h-8" /> 
                },
                { 
                  title: "WhatsApp Directo", 
                  desc: "Recibe consultas en el móvil de tus agentes con un mensaje estructurado y el código de propiedad exacto.", 
                  icon: <Smartphone className="w-8 h-8" /> 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 border border-zinc-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black mb-3 uppercase tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Details & Modules Section */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4 block">Ficha Técnica del Sistema</span>
            <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
              Componentes del <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Sistema Pro</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Una suite integral dividida en tres capas tecnológicas robustas para la máxima conversión y gestión.
            </p>
          </div>

          <div className="space-y-20">
            {/* Layer 1: Portal Web Público */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">1. Portal Web Público (Cliente Final)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    t: "Buscador Dinámico & Filtros",
                    d: "Búsqueda en tiempo real por Venta/Arriendo, tipo de inmueble, comunas/regiones y precio en UF o Pesos CLP."
                  },
                  {
                    t: "Ficha de Propiedad Premium",
                    d: "Optimizado para SEO con galería HD, ficha técnica de características, mapa interactivo y badges de estado."
                  },
                  {
                    t: "Calculadora Cap Rate",
                    d: "Simulador financiero para inversores: calcula automáticamente el retorno de renta anual y dividendos proyectados."
                  },
                  {
                    t: "Geolocalización Mapshowcase",
                    d: "Posicionamiento visual del inventario en un mapa interactivo basado en Leaflet / OpenStreetMap."
                  },
                  {
                    t: "Embudo 'Vender mi Propiedad'",
                    d: "Formulario de captación intuitivo de 2 pasos para que propietarios ingresen su propiedad de manera simple."
                  },
                  {
                    t: "Módulo de Financiamiento",
                    d: "Guía informativa de simulación de créditos hipotecarios en instituciones financieras de Chile."
                  }
                ].map((mod, idx) => (
                  <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-white mb-2">{mod.t}</h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 2: Panel de Admin */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-400">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">2. Panel de Administración Interno</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    t: "Dashboard Analítico",
                    d: "Gráficos de métricas comerciales en tiempo real: propiedades activas, borradores, leads mensuales y vistas."
                  },
                  {
                    t: "Gestor CRUD Avanzado",
                    d: "Formulario avanzado para crear e ingresar inmuebles con carga múltiple de imágenes, agentes y coordenadas."
                  },
                  {
                    t: "CRM de Leads Ligero",
                    d: "Embudo de prospección comercial. Clasifica leads en Nuevo, Contactado, Calificado, Convertido o Perdido."
                  },
                  {
                    t: "Publicador Meta Graph API",
                    d: "Conexión directa con Facebook e Instagram para realizar publicaciones masivas de tus inmuebles con 1 click."
                  },
                  {
                    t: "Visual Configurator",
                    d: "Personaliza logotipos, colores principales, datos de contacto y SEO del sitio sin escribir una sola línea de código."
                  },
                  {
                    t: "Gestión de Roles y Usuarios",
                    d: "Permite asignar permisos diferenciados entre Administrador General (acceso total) y Agentes Inmobiliarios."
                  }
                ].map((mod, idx) => (
                  <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-white mb-2">{mod.t}</h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 3: Infraestructura */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">3. Tecnología & Infraestructura</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    t: "Next.js 14 & SSR",
                    d: "Server-Side Rendering de Next.js para una velocidad de carga extrema (< 1s) y posicionamiento SEO óptimo en Google."
                  },
                  {
                    t: "Supabase & RLS",
                    d: "Base de datos relacional PostgreSQL de Supabase con seguridad a nivel de filas (RLS) para proteger los datos de tus clientes."
                  },
                  {
                    t: "API de Resend & OpenGraph",
                    d: "Ruteo de correos instantáneo y metadatos dinámicos para que las propiedades se compartan de forma atractiva en redes sociales."
                  }
                ].map((mod, idx) => (
                  <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-white mb-2">{mod.t}</h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Pricing Plans */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
          
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4 block">Inversión y Retorno</span>
            <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Planes Inmo</span></h2>
            <p className="text-lg text-zinc-500 font-light">Elige la tecnología que impulsará tu corretaje este 2026.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`relative p-10 lg:p-14 rounded-[4rem] border transition-all duration-500 flex flex-col justify-between ${p.recommended ? 'bg-white text-zinc-950 border-blue-500 shadow-2xl scale-105 z-10' : 'bg-zinc-900 text-white border-white/5 hover:border-blue-500/30'}`}>
                {p.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    Recomendado
                  </div>
                )}
                <div>
                  <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                  <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-blue-600' : 'text-blue-400'}`}>{p.highlight}</p>
                  
                  <div className="mb-10">
                    <div className="text-sm line-through font-medium mb-1 opacity-50">{p.original} + iva</div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black">{p.price}</span>
                       <span className="text-sm opacity-50 font-medium">+ iva</span>
                    </div>
                  </div>

                  <p className={`text-sm mb-10 font-light ${p.recommended ? 'text-zinc-500' : 'text-zinc-400'}`}>{p.desc}</p>

                  <ul className="space-y-4 mb-12">
                    {p.features.map((f, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${p.recommended ? 'text-zinc-600' : 'text-zinc-400'}`}>
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                         {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' : 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/5'}`}>
                   Cotizar este Plan
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
            ctaTitle="¿Iniciamos tu proyecto hoy?"
            ctaDescription="Obtén una asesoría y cotización a medida para tu marca."
            ctaLabel="Quiero mi Asesoría Gratuita"
          />
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
              TU PROPIO <br/><span className="text-blue-500 italic font-serif lowercase font-light">portal inmobiliario.</span>
           </h2>
           <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu competencia se lleve las captaciones. Posiciona tu corredora con la mejor solución del mercado chileno sin mensualidades.
           </p>
           <LeadButton className="px-16 py-8 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 uppercase tracking-[0.2em] text-xs">
              Configurar mi Plataforma
           </LeadButton>
        </section>

      </div>
    </div>
  );
}
