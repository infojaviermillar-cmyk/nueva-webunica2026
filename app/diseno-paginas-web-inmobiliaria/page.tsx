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
      question: "@Como funciona la publicación automática en Facebook e Instagram?",
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

  const planFeatures = [
    "Carga ilimitada de propiedades (sin límites)",
    "CRM Ligero de Leads integrado (/admin/leads)",
    "Marca Blanca 100% (Nombre, colores, logo y dominio)",
    "Conector Meta Graph API (Publicación en 1 click a FB/IG)",
    "Buscador dinámico en UF & Pesos CLP en tiempo real",
    "Calculadora de Rentabilidad Cap Rate para Inversores",
    "Mapshowcase interactivo (Leaflet / OpenStreetMap)",
    "Embudo de captación 'Vender mi Propiedad'",
    "Módulo de simulación de Créditos Hipotecarios",
    "WhatsApp Directo & Flotante con mensaje estructurado",
    "Gestión de Roles (Admin General y Agentes)",
    "Envío de correos automáticos con API de Resend",
    "Soporte prioritario y garantía 6 meses"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48 pb-20">
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-36 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 border border-blue-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">Propuesta de Valor Comercial</span>
              </div>
              
              <h1 className="text-5xl lg:text-[80px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-slate-900">
                PORTAL INMOBILIARIO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  & CRM PRO
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Una plataforma 100% independiente, moderna y personalizable que reemplaza el pago de mensualidades a portales de terceros, otorgándole a tu corredora su propia marca blanca con herramientas avanzadas para captación en Chile.
              </p>

              {/* Pitch tags */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-10 text-left">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Marca Blanca Total</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Meta API Autoposting</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Manejo UF / CLP</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sin Comisiones</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/10 uppercase tracking-widest text-xs">
                    Cotizar mi Plataforma
                 </LeadButton>
                 <Link href="/portafolio" className="px-12 py-5 border border-slate-200 text-slate-700 font-black rounded-full hover:bg-slate-100 transition-all uppercase tracking-widest text-xs text-center">
                    Ver Proyectos
                 </Link>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-white border border-slate-100 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/real_estate_hero_new.png"
                    alt="CRM Inmobiliario de Marca Blanca Next.js"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] group-hover:scale-[1.01] transition-all duration-700"
                  />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl border border-slate-200 w-max shadow-lg">
                     <div className="flex items-center gap-6">
                        <div className="text-center">
                           <div className="text-2xl font-black text-slate-900">0%</div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Comisiones</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div className="text-center">
                           <div className="text-2xl font-black text-blue-600">100%</div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Marca Propia</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Highlights */}
        <section className="py-24 bg-white text-slate-900 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3 block">Ventajas Clave del Pitch</span>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900">
                EL CONTROL VOLVIÓ <br/>A LA <span className="text-blue-600">CORREDORA</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
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
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:bg-white transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 border border-slate-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black mb-3 uppercase tracking-tight text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Details & Modules Section */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 block">Ficha Técnica del Sistema</span>
            <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-slate-900">
              Componentes del <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistema Pro</span>
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Una suite de tres capas tecnológicas robustas diseñada para optimizar tu conversión comercial.
            </p>
          </div>

          <div className="space-y-16">
            {/* Layer 1: Portal Web Público */}
            <div className="bg-white border border-slate-200/60 rounded-[3.5rem] p-10 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900">1. Portal Web Público (Cliente Final)</h3>
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
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-500/20 hover:bg-white transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-2">{mod.t}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 2: Panel de Admin */}
            <div className="bg-white border border-slate-200/60 rounded-[3.5rem] p-10 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900">2. Panel de Administración Interno</h3>
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
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-indigo-500/20 hover:bg-white transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-2">{mod.t}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 3: Infraestructura */}
            <div className="bg-white border border-slate-200/60 rounded-[3.5rem] p-10 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900">3. Tecnología & Infraestructura</h3>
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
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-500/20 hover:bg-white transition-colors">
                    <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-2">{mod.t}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{mod.d}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Pricing Plans - Centered Single Premium Card */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 block">Inversión y Retorno</span>
            <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-slate-900">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Planes Inmo</span></h2>
            <p className="text-lg text-slate-500 font-light">Adquiere tu propia oficina digital sin mensualidades recurrentes.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[3.5rem] p-10 lg:p-14 shadow-xl shadow-slate-100 relative overflow-hidden">
            {/* 10% discount badge */}
            <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest animate-pulse shadow-sm">
              10% DESCUENTO
            </div>
            
            <div className="mb-8">
              <span className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black rounded-full uppercase tracking-widest">
                CRM & Marca Blanca Total
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">
              Inmo PRO (Next.js & Supabase)
            </h3>
            
            <p className="text-sm text-slate-500 mb-10 font-light leading-relaxed max-w-xl">
              Un verdadero sistema independiente y automatizado sin comisiones ni mensualidades. Configurado con Next.js, Supabase, Meta Graph API y CRM completo.
            </p>
            
            <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="text-xs line-through text-slate-400 font-bold mb-1 uppercase tracking-wider">$1.100.000 + iva</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-black text-slate-900">$800.000</span>
                  <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">+ iva</span>
                </div>
              </div>
              <LeadButton className="px-10 py-5 bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/10 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shrink-0">
                 Cotizar este Plan
              </LeadButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {planFeatures.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white border-y border-slate-100 mx-4 overflow-hidden mt-20">
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
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85] text-slate-900">
              TU PROPIO <br/><span className="text-blue-600 italic font-serif lowercase font-light">portal inmobiliario.</span>
           </h2>
           <p className="text-slate-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu competencia se lleve las captaciones. Posiciona tu corredora con la mejor solución del mercado chileno sin mensualidades.
           </p>
           <LeadButton className="px-16 py-8 bg-slate-900 text-white font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-slate-900/10 uppercase tracking-[0.2em] text-xs">
              Configurar mi Plataforma
           </LeadButton>
        </section>

      </div>
    </div>
  );
}
