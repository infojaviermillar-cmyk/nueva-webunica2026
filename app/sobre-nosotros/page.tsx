import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Webunica — Agencia Digital Chile',
  description: 'Conoce a Webunica Chile, la agencia digital especializada en Shopify, desarrollo web y GEO en Chile. Fundada por Javier Millar, con más de 10 años de experiencia en el mercado chileno.',
  keywords: 'Webunica Chile, agencia digital Chile, Javier Millar, Shopify Partners Chile, quien es Webunica, equipo Webunica',
  openGraph: {
    title: 'Sobre Nosotros | Webunica — Agencia Digital Chile',
    description: 'Agencia digital chilena pionera en Shopify, desarrollo web y GEO. Conoce quiénes somos.',
    url: 'https://webunica.cl/sobre-nosotros',
    type: 'profile',
    images: [{ url: 'https://webunica.cl/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://webunica.cl/sobre-nosotros',
  },
};

// ── EEAT Schemas ─────────────────────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://webunica.cl/sobre-nosotros#founder',
  name: 'Javier Millar',
  jobTitle: 'Fundador & Director Digital',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://webunica.cl/#organization',
    name: 'Webunica Chile E.I.R.L.',
  },
  url: 'https://webunica.cl/sobre-nosotros',
  image: 'https://webunica.cl/javier-avatar.jpg',
  knowsAbout: [
    'Shopify Development',
    'E-commerce en Chile',
    'Generative Engine Optimization (GEO)',
    'Next.js',
    'WooCommerce',
    'SEO Chile',
    'Diseño Web',
    'Automatización Web',
  ],
  sameAs: [
    'https://www.linkedin.com/in/javiermillar',
    'https://www.instagram.com/webunicachile',
  ],
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://webunica.cl/sobre-nosotros#page',
  name: 'Sobre Webunica Chile',
  url: 'https://webunica.cl/sobre-nosotros',
  description: 'Página oficial de información sobre Webunica Chile E.I.R.L., su fundador Javier Millar, historia, valores y servicios de desarrollo digital.',
  mainEntity: {
    '@id': 'https://webunica.cl/#organization',
  },
  author: {
    '@id': 'https://webunica.cl/sobre-nosotros#founder',
  },
};

const credentials = [
  { label: 'Shopify Partners', value: 'Certificados', icon: '🟢' },
  { label: 'Años de experiencia', value: '10+', icon: '📅' },
  { label: 'Proyectos entregados', value: '200+', icon: '🚀' },
  { label: 'Ciudades con clientes', value: '12+', icon: '📍' },
];

const services = [
  { name: 'Desarrollo Shopify', desc: 'Tiendas e-commerce Shopify desde cero con integraciones locales chilenas.' },
  { name: 'Diseño Web', desc: 'Sitios corporativos, landing pages y portales web de alto rendimiento.' },
  { name: 'WooCommerce', desc: 'Desarrollo, personalización y mantenimiento de tiendas WooCommerce.' },
  { name: 'Next.js & SaaS', desc: 'Aplicaciones web modernas, portales SaaS y sistemas custom.' },
  { name: 'E-learning', desc: 'Plataformas Moodle y Tutor LMS para educación online.' },
  { name: 'GEO & AI Visibility', desc: 'Posicionamiento de marcas en ChatGPT, Gemini y Perplexity.' },
];

const values = [
  {
    title: 'Resultados sobre promesas',
    desc: 'Medimos cada proyecto en ventas, conversiones y crecimiento real. No en visitas o palabras clave vacías.',
  },
  {
    title: 'Tecnología de vanguardia',
    desc: 'Usamos las tecnologías más modernas del mercado: Next.js 16, Shopify, y ahora GEO para posicionamiento en IA.',
  },
  {
    title: 'Expertos en el mercado chileno',
    desc: 'Conocemos las pasarelas de pago locales, el SII, los operadores logísticos y los hábitos de compra chilenos.',
  },
  {
    title: 'Transparencia total',
    desc: 'Propiedad de tu código, dominio y contenido. Sin dependencias ocultas ni contratos de candado.',
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-about-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://webunica.cl' },
        { name: 'Sobre Nosotros', url: 'https://webunica.cl/sobre-nosotros' },
      ]} />

      {/* HERO */}
      <section className="pt-[18vh] pb-20 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Agencia Digital Chile
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-8 uppercase">
              Somos<br />
              <span className="italic font-serif font-light lowercase text-6xl lg:text-8xl text-violet-600">
                Webunica
              </span>
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-6 font-light">
              Agencia digital chilena fundada por <strong className="text-zinc-800 font-semibold">Javier Millar</strong>, 
              especializada en desarrollo Shopify, diseño web de alto rendimiento y GEO — 
              el nuevo posicionamiento en inteligencia artificial.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
              Operamos desde Chile con clientes en todo el país: Santiago, Concepción, Temuco, 
              Valdivia, Puerto Montt y más de 12 ciudades. Somos <strong className="text-zinc-800">Shopify Partners certificados</strong> 
              {' '}y pioneros en GEO en Latinoamérica.
            </p>
            <LeadButton className="inline-flex items-center gap-2 px-7 py-4 bg-zinc-950 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-violet-700 transition-colors">
              Trabajar con Webunica
            </LeadButton>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-violet-200 transition-colors">
                <div className="text-3xl mb-3">{c.icon}</div>
                <div className="text-3xl font-black text-zinc-950 mb-1">{c.value}</div>
                <div className="text-xs text-zinc-500 font-semibold uppercase tracking-widest">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/javier-avatar.jpg"
                alt="Javier Millar — Fundador de Webunica Chile"
                className="w-48 h-48 rounded-full object-cover border-4 border-violet-500/30 shadow-2xl"
                width={192}
                height={192}
              />
              <div className="text-center lg:text-left">
                <p className="text-white font-black text-xl">Javier Millar</p>
                <p className="text-violet-400 text-sm font-semibold">Fundador & Director Digital</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500 mb-6">El Fundador</p>
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                10+ años convirtiendo tecnología en ventas reales
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Desde 2014 he trabajado con pymes chilenas, startups y marcas en crecimiento, 
                ayudándoles a construir su presencia digital con foco en resultados de negocio, 
                no solo en estética.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Especialista en el ecosistema chileno de e-commerce: pasarelas de pago locales 
                (Webpay, Mercado Pago, Flow, Fintoc), logística nacional (Starken, Chilexpress, 
                BlueExpress), integración con el SII y personalización profunda de Shopify.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Hoy lidero también la estrategia GEO de Webunica — la primera metodología en Chile 
                para posicionar marcas en las respuestas de ChatGPT, Gemini y Perplexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-4">Lo que hacemos</p>
          <h2 className="text-4xl lg:text-6xl font-black text-zinc-950 tracking-tighter uppercase">
            Nuestros Servicios
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="p-7 rounded-2xl border border-zinc-100 hover:border-violet-200 hover:shadow-md transition-all group">
              <h3 className="text-lg font-black text-zinc-950 mb-3 group-hover:text-violet-700 transition-colors">{s.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-4">Nuestra filosofía</p>
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-950 tracking-tighter uppercase">
              Cómo trabajamos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-white border border-zinc-100">
                <h3 className="text-xl font-black text-zinc-950 mb-3">{v.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-6">Cobertura nacional</p>
        <h2 className="text-4xl font-black text-zinc-950 tracking-tighter mb-6 uppercase">
          Atendemos a toda Chile
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Trabajamos con empresas en Santiago, Concepción, Temuco, Valdivia, Puerto Montt, 
          La Serena, Antofagasta, Iquique, Osorno, Rancagua, Ancud y Punta Arenas.
          100% remoto con reuniones periódicas vía Zoom.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Santiago', 'Concepción', 'Temuco', 'Valdivia', 'Puerto Montt', 'La Serena', 'Antofagasta', 'Iquique', 'Osorno', 'Rancagua', 'Ancud', 'Punta Arenas'].map((city) => (
            <span key={city} className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-semibold">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-zinc-950 to-violet-950 rounded-3xl p-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-zinc-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto. Primera consulta gratuita y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadButton className="px-8 py-4 bg-white text-zinc-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-zinc-100 transition-colors">
              Hablar con Webunica
            </LeadButton>
            <Link
              href="/portafolio"
              className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
