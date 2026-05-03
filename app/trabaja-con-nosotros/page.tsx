import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Trabaja con Nosotros | Expertos Freelance y Desarrolladores | Webunica',
  description: 'Buscamos talento freelance en Chile y Latam. Únete a nuestro equipo de desarrolladores Fullstack (Next.js), diseñadores UX/UI y expertos Shopify.',
  openGraph: {
    title: 'Únete a Webunica como Experto Freelance',
    description: 'Postula a nuestra red de talentos. Proyectos desafiantes, trabajo remoto y flexibilidad total.',
    url: 'https://webunica.cl/trabaja-con-nosotros',
    type: 'website',
  }
};

export default function WorkWithUsPage() {
  const roles = [
    {
      title: "Fullstack Developer (Next.js / Node)",
      icon: "💻",
      description: "Buscamos devs capaces de construir aplicaciones web escalables. Dominio profundo de React, Next.js (App Router), TypeScript y bases de datos (Supabase/PostgreSQL).",
      tags: ["TypeScript", "Next.js", "Tailwind", "Supabase"]
    },
    {
      title: "Shopify Liquid Expert",
      icon: "🛍️",
      description: "Desarrolladores con experiencia comprobable manipulando themes de Shopify desde cero, integrando APIs (Storefront API) y desarrollando extensiones.",
      tags: ["Liquid", "Shopify CLI", "JavaScript", "E-commerce"]
    },
    {
      title: "UX/UI Web Designer",
      icon: "✨",
      description: "Mentes creativas que dominen Figma y Adobe XD. Pasión por la tipografía, el whitespace, diseño oscuro (dark-mode) y micro-interacciones (Framer Motion).",
      tags: ["Figma", "Design Systems", "Prototyping"]
    },
    {
      title: "SEO Técnico & Content Specialist",
      icon: "📈",
      description: "Analistas capaces de auditar Core Web Vitals, estructurar arquitecturas web, crear Schema Markups avanzados y redactar copys de alta conversión.",
      tags: ["Ahrefs/Semrush", "Schema.org", "Copywriting"]
    }
  ];

  const benefits = [
    {
      title: "100% Remoto y Asíncrono",
      desc: "No medimos horas calienta-asientos. Medimos resultados. Trabaja desde donde quieras y cuando seas más productivo."
    },
    {
      title: "Proyectos de Alto Vuelo",
      desc: "Construirás SaaS, e-commerces complejos e interfaces inmersivas. Adiós a las plantillas aburridas."
    },
    {
      title: "Tarifas Competitivas",
      desc: "Pagamos por hito cumplido o proyecto. Valoramos tu expertise técnico y cumplimos religiosamente con los pagos."
    },
    {
      title: "Cultura de Excelencia",
      desc: "Trabajarás rodeado de código limpio, buenas prácticas (CI/CD) y un equipo que respeta las interfaces pixel-perfect."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-[22vh] lg:pt-48 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Talento Independiente
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Construye el futuro del <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light text-5xl lg:text-8xl">Software web</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          En Webunica no tenemos oficinas rígidas. Somos un colectivo de expertos técnicos y creativos trabajando en modalidad <strong className="text-white">freelance y por proyectos</strong>. Si eres senior en lo que haces, perteneces aquí.
        </p>
        <LeadButton className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform">
          Postular a la Red
        </LeadButton>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="bg-zinc-900/50 p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full -z-10" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Nuestra Filosofía</h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
            Buscamos talento independiente. Eso significa que debes ser <strong className="text-white">autodidacta, responsable y tener excelentes habilidades de comunicación escrita</strong>.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            No te diremos cómo hacer tu trabajo; te entregaremos requerimientos claros, diseños precisos y fechas de entrega objetivas. Si valoras tu libertad pero disfrutas de los desafíos técnicos corporativos, haremos un gran equipo.
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black text-white text-center mb-16 uppercase tracking-tight">¿Qué perfiles buscamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <div key={idx} className="p-8 md:p-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2.5rem] transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{role.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{role.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light mb-8">
                {role.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black text-white text-center mb-16 uppercase tracking-tight">Beneficios de la Red Webunica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 border-l border-violet-500/30">
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.title}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="p-12 md:p-20 bg-gradient-to-br from-violet-600/20 to-transparent border border-violet-500/20 rounded-[3rem]">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Muéstranos tu código</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            No nos importan tus títulos universitarios. Nos importa tu portafolio, tus repositorios en GitHub o los diseños que tienes en Figma/Dribbble.
          </p>
          <a href="mailto:consultas@webunica.cl?subject=Postulación%20Talento%20Freelance" className="inline-flex items-center justify-center px-10 py-5 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/20 active:scale-95">
            Enviar Portafolio por Correo
          </a>
          <p className="text-zinc-500 text-xs mt-6">Incluye links a proyectos vivos. Prometemos revisar cada postulación.</p>
        </div>
      </section>

    </main>
  );
}

