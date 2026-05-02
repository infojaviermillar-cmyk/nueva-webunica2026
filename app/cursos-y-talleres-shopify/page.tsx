import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Cursos y Talleres de Shopify en Chile | Básico, Avanzado e IA | Webunica',
  description: 'Capacita a tu equipo con nuestros talleres de Shopify. Ofrecemos formación en administración básica, desarrollo avanzado (Liquid) y automatización con Inteligencia Artificial.',
  openGraph: {
    title: 'Academia Webunica: Talleres Corporativos de Shopify',
    description: 'Aprende a dominar tu e-commerce. Talleres 1 a 1 y para equipos sobre Shopify Básico, Avanzado y uso de IA.',
    url: 'https://webunica.cl/cursos-y-talleres-shopify',
    type: 'website',
  }
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Shopify Básico: Operación y Gestión",
      badge: "Para Dueños y Equipos",
      duration: "1 Hora y Media (Sesión Única)",
      icon: "🛍️",
      description: "El taller perfecto para quienes acaban de lanzar su tienda o tienen personal nuevo. Aprenderás a operar el día a día sin depender de una agencia técnica.",
      modules: [
        "Carga y gestión eficiente de Productos y Variantes",
        "Creación de Colecciones Manuales y Automatizadas",
        "Gestión de Pedidos, reembolsos y estados de envío",
        "Creación de Cupones y Descuentos Automáticos",
        "Análisis de reportes nativos de Shopify"
      ],
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400"
    },
    {
      title: "Shopify Avanzado: Arquitectura & Datos",
      badge: "Para Managers y Devs",
      duration: "45 Minutos por Lección",
      icon: "💻",
      description: "Lleva tu tienda al siguiente nivel técnico. Aprende a modificar la estructura interna y personalizar la experiencia del usuario con datos dinámicos.",
      modules: [
        "Entendiendo la arquitectura del Theme (Secciones vs Bloques)",
        "Creación y uso estratégico de Metafields y Metaobjects",
        "Modificaciones básicas en código Liquid (sin romper nada)",
        "Configuración de Mercados (Shopify Markets) para exportar",
        "Optimización de velocidad y SEO Técnico interno"
      ],
      color: "from-violet-500/20 to-transparent",
      borderColor: "border-violet-500/30",
      textColor: "text-violet-400"
    },
    {
      title: "Shopify con Inteligencia Artificial",
      badge: "Vanguardia 2026",
      duration: "A Cotizar (Workshop Intensivo)",
      icon: "🧠",
      description: "Multiplica la productividad de tu equipo utilizando IA generativa para automatizar el marketing, el soporte y la creación de catálogos.",
      modules: [
        "Creación masiva de descripciones persuasivas con ChatGPT",
        "Generación de imágenes de lifestyle para productos (Midjourney/DALL-E)",
        "Implementación de Chatbots de IA para atención 24/7",
        "Análisis predictivo de inventario con herramientas de IA",
        "Automatización de flujos de trabajo (Flow + IA)"
      ],
      color: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-40 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Formación Corporativa In-Company
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9] mb-8">
          Domina tu <br/>
          <span className="text-amber-500 italic font-serif lowercase font-light text-5xl lg:text-8xl">E-commerce</span>
        </h1>
        <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          No dependas de terceros para lo básico. Capacita a tu equipo con nuestros talleres en vivo por Zoom, impartidos por expertos técnicos en Shopify.
        </p>
        <LeadButton className="px-10 py-5 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform">
          Solicitar Cotización de Taller
        </LeadButton>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className={`p-8 md:p-10 bg-gradient-to-br ${course.color} bg-white/40 border ${course.borderColor} rounded-[2.5rem] relative flex flex-col`}>
              
              <div className={`absolute top-0 right-0 px-4 py-2 bg-slate-50/50 backdrop-blur-md border-b border-l ${course.borderColor} ${course.textColor} text-[9px] font-black uppercase tracking-widest rounded-bl-3xl rounded-tr-[2.5rem]`}>
                {course.badge}
              </div>

              <div className="text-5xl mb-6">{course.icon}</div>
              <h3 className="text-2xl font-black text-zinc-900 tracking-tight leading-none mb-3">{course.title}</h3>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-6 w-fit">
                ⏱️ {course.duration}
              </div>

              <p className="text-zinc-600 leading-relaxed font-light text-sm mb-8 flex-grow">
                {course.description}
              </p>

              <div className="mt-auto">
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-4">Temario Principal</div>
                <ul className="space-y-3 mb-8">
                  {course.modules.map((mod, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-700 font-light leading-snug">
                      <span className={course.textColor}>✓</span> {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadButton className={`w-full py-4 text-center border ${course.borderColor} ${course.textColor} hover:bg-slate-100 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors`}>
                Cotizar este Programa
              </LeadButton>

            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-[3rem] text-center">
          <h2 className="text-3xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Metodología de Enseñanza</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Nuestros talleres no son videos pregrabados genéricos. Son <strong>sesiones en vivo uno a uno (o para tu equipo completo)</strong> utilizando la misma tienda de tu empresa como entorno de pruebas real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center text-xl mb-4">🎥</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Sesiones Grabadas</h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">Cada clase queda grabada en la nube y te la entregamos para que quede como material de inducción para futuros empleados.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center text-xl mb-4">🛠️</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Hands-on (Práctico)</h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">Compartimos pantalla y te hacemos hacer clic. Aprendes haciendo sobre tu propio catálogo y tus propios clientes reales.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center text-xl mb-4">🙋‍♂️</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Preguntas y Respuestas</h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">A diferencia de un curso en Udemy, aquí puedes interrumpir al instructor para resolver los problemas específicos de tu rubro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.9]">
          El conocimiento es <br/>
          <span className="text-amber-500 italic font-serif lowercase font-light">Poder Comercial</span>
        </h2>
        <p className="text-zinc-600 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Todos nuestros programas son <strong>A Cotizar</strong> dependiendo de la cantidad de personas en tu equipo y el nivel de profundidad que requieras.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-100 text-zinc-950 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-white transition-all hover:scale-105 active:scale-95">
          Agendar Lllamada de Evaluación
        </LeadButton>
      </section>

    </main>
  );
}
