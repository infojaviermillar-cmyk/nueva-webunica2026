import type { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import {
  Sparkles, Layers, Crown, ArrowRight, Check, X,
  AlertTriangle, TrendingDown, ShoppingCart, Clock,
  Smartphone, Search, BarChart3, Zap, Star, Shield,
  ChevronDown,
} from 'lucide-react';
import { redesignPlans, redesignFeatures, type RedesignPlan } from '@/data/redesign-plans';

export const metadata: Metadata = {
  title: 'Rediseño de Tienda Shopify en Chile | Webunica',
  description:
    'Tu tienda Shopify ya existe, nosotros la hacemos vender mejor. Rediseño completo de tema, UX y conversión. Planes desde $290.000. Expertos Shopify Partner en Chile.',
  keywords: [
    'rediseño tienda shopify',
    'mejorar tienda shopify chile',
    'actualizar tema shopify',
    'shopify ux conversion',
    'rediseño ecommerce chile',
    'shopify partner chile',
    'optimizar shopify',
    'cambiar tema shopify',
    'shopify cro chile',
    'renovar tienda shopify',
  ],
  alternates: {
    canonical: 'https://webunica.cl/rediseno-tienda-shopify',
  },
  openGraph: {
    title: 'Rediseño de Tienda Shopify | Webunica Chile',
    description:
      'Transforma tu tienda Shopify existente en una máquina de ventas. Nuevo diseño, mejor UX, mayor conversión. Planes desde $290.000.',
    url: 'https://webunica.cl/rediseno-tienda-shopify',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/og-rediseno-shopify.jpg',
        width: 1200,
        height: 630,
        alt: 'Rediseño de Tienda Shopify en Chile - Webunica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rediseño de Tienda Shopify | Webunica Chile',
    description:
      'Tu tienda Shopify ya existe, nosotros la hacemos vender mejor. Planes desde $290.000.',
    images: ['https://webunica.cl/og-rediseno-shopify.jpg'],
  },
};

const alertas = [
  { icon: TrendingDown,   title: 'Tasa de conversión baja',        desc: 'Muchas visitas pero pocas compras. El problema casi siempre es el diseño o la UX.' },
  { icon: ShoppingCart,   title: 'Carrito abandonado frecuente',    desc: 'Los clientes agregan productos pero no completan la compra por fricción en el flujo.' },
  { icon: Clock,          title: 'Diseño desactualizado',           desc: 'Tu tienda se ve igual que hace 3 años. La competencia ya renovó su imagen.' },
  { icon: Smartphone,     title: 'Mala experiencia mobile',         desc: 'Más del 70% de tus visitas son desde celular. Si no está optimizado, pierdes ventas.' },
  { icon: Search,         title: 'Sin visibilidad en Google',       desc: 'Un rediseño bien ejecutado mejora la velocidad y el SEO técnico de tu tienda.' },
  { icon: BarChart3,      title: 'Sin datos de comportamiento',     desc: 'No sabes qué hacen tus usuarios. Sin analytics, no puedes mejorar.' },
];

const proceso = [
  { step: '01', title: 'Auditoría',           desc: 'Revisamos tu tienda actual: velocidad, UX, diseño, analytics y puntos de fuga.' },
  { step: '02', title: 'Propuesta Visual',    desc: 'Te mostramos la dirección de diseño: paleta, tipografía, wireframes clave.' },
  { step: '03', title: 'Desarrollo',          desc: 'Instalamos el nuevo tema, personalizamos secciones y migramos tu catálogo.' },
  { step: '04', title: 'Lanzamiento',         desc: 'Pruebas en staging, ajustes finales y activación. Tu tienda renovada online.' },
];

const faqs = [
  {
    q: '¿Pierdo mis productos y datos con el rediseño?',
    a: 'No. El rediseño actúa solo sobre el tema y la presentación visual. Tu catálogo, pedidos, clientes y configuración de medios de pago permanecen intactos.',
  },
  {
    q: '¿Puedo ver cómo quedará antes de publicar?',
    a: 'Sí. Trabajamos en un tema secundario (staging) para que puedas ver y aprobar el nuevo diseño completo antes de activarlo en tu tienda real.',
  },
  {
    q: '¿Cuánto tiempo tarda el rediseño?',
    a: 'Depende del plan: Plan REFRESH 5-7 días hábiles, Plan TRANSFORM 10-14 días, Plan ELITE 3-4 semanas. Los tiempos comienzan desde que apruebas la propuesta visual.',
  },
  {
    q: '¿El precio incluye el tema (theme) de Shopify?',
    a: 'Sí, todos los planes incluyen la instalación de un tema premium. Para el Plan ELITE, el tema puede ser seleccionado en conjunto contigo según las necesidades de tu marca.',
  },
  {
    q: '¿Qué pasa si necesito algo que no está en el plan?',
    a: 'El Plan ELITE es el más flexible. Si tienes requerimientos específicos (integraciones, secciones a medida, flujos personalizados), lo evaluamos y cotizamos sin compromiso.',
  },
];

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Layers':   return <Layers   className={className} />;
    case 'Crown':    return <Crown    className={className} />;
    default:         return <Sparkles className={className} />;
  }
};

const planColors: Record<string, { accent: string; bg: string; border: string; btn: string }> = {
  blue:   { accent: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-200',   btn: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20' },
  violet: { accent: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-300', btn: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/20' },
  amber:  { accent: 'text-amber-600',  bg: 'bg-amber-50',  border: 'border-amber-200',  btn: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20' },
};

function PlanCard({ plan }: { plan: RedesignPlan }) {
  const c = planColors[plan.color] ?? planColors.violet;
  return (
    <div className={`relative bg-white rounded-[2.5rem] border-2 p-8 flex flex-col ${plan.recommended ? `${c.border} shadow-2xl shadow-violet-100 scale-[1.02]` : 'border-zinc-100 shadow-lg'}`}>
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full">
          Más Elegido
        </div>
      )}
      <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mb-5 border ${c.border}`}>
        {getIcon(plan.iconName, `w-7 h-7 ${c.accent}`)}
      </div>
      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${c.accent}`}>Plan</p>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-950 mb-2">{plan.name}</h3>
      <p className="text-sm text-zinc-500 font-light mb-5 leading-relaxed">{plan.desc}</p>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-black tracking-tighter text-zinc-900">{plan.price}</span>
        <span className="text-sm text-zinc-400 pb-1">+iva</span>
      </div>
      <p className="text-[11px] text-zinc-400 mb-2">⏱ {plan.deliveryTime}</p>
      <div className="bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg border border-emerald-100 flex items-center gap-1.5 mb-7">
        <Star className="w-3.5 h-3.5" /> {plan.bonus}
      </div>
      <div className="mt-auto">
        <Link href={`/rediseno/${plan.id}`} className={`w-full py-4 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${c.btn}`}>
          Ver detalles <ArrowRight className="w-4 h-4" />
        </Link>
        <LeadButton className="w-full mt-3 py-3.5 border border-zinc-200 text-zinc-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
          Solicitar este plan
        </LeadButton>
      </div>
    </div>
  );
}

const featureVal = (val: boolean | string, accent: string) => {
  if (val === false)  return <X className="w-4 h-4 text-zinc-300" />;
  if (val === true)   return <Check className={`w-4 h-4 ${accent}`} />;
  return <span className="text-[11px] font-semibold text-zinc-600">{val}</span>;
};

export default function RedesignShopifyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://webunica.cl/rediseno-tienda-shopify#service',
        'name': 'Rediseño de Tienda Shopify en Chile',
        'description':
          'Servicio especializado de rediseño de tiendas Shopify para mejorar la conversión, UX y diseño visual.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Webunica',
          'url': 'https://webunica.cl',
          'image': 'https://webunica.cl/logo-webunica.png.webp',
          'telephone': '+56984410379',
          'address': { '@type': 'PostalAddress', 'addressLocality': 'Santiago', 'addressCountry': 'CL' },
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Chile'
        },
        'offers': redesignPlans.map((p) => ({
          '@type': 'Offer',
          'name': `Rediseño Shopify Plan ${p.name}`,
          'price': p.price.replace(/\D/g, ''),
          'priceCurrency': 'CLP',
          'url': `https://webunica.cl/rediseno/${p.id}`
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://webunica.cl/rediseno-tienda-shopify#faq',
        'mainEntity': faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="pt-[18vh] pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">Expertos Shopify Partner Chile</span>
          </div>
          <h1 className="text-[2.8rem] lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase text-zinc-950">
            Tu tienda ya existe.<br />
            <span className="text-violet-600">Nosotros la hacemos</span><br />
            vender mejor.
          </h1>
          <p className="text-xl text-zinc-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Si tu tienda Shopify no está convirtiendo como debería, el problema casi siempre es el diseño y la experiencia del usuario. Nosotros lo solucionamos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planes" className="bg-zinc-950 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4 rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-950/10 flex items-center gap-2">
              Ver Planes de Rediseño <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/56984410379"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-200 text-zinc-700 font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-2xl hover:bg-zinc-50 transition-all"
            >
              Consultar gratis →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SEÑALES DE ALERTA ═══════════════════════ */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-red-900/30 border border-red-800/40 rounded-full">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-[10px] font-black tracking-[0.2em] text-red-400 uppercase">¿Reconoces estos síntomas?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              Tu tienda necesita un rediseño si...
            </h2>
            <p className="text-zinc-400 font-light max-w-xl mx-auto">
              Estas son las señales más comunes que indican que tu tienda está perdiendo ventas por problemas de diseño o UX.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alertas.map((alerta, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 transition-colors">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-5">
                  <alerta.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{alerta.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{alerta.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PLANES ═══════════════════════ */}
      <section id="planes" className="py-28 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-950 mb-4">
              Elige tu plan de rediseño
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">
              Tres niveles de intervención según el estado actual de tu tienda y tus objetivos de venta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {redesignPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TABLA COMPARATIVA ═══════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-zinc-950 mb-4 text-center">
            Comparativa detallada
          </h2>
          <p className="text-zinc-500 font-light text-center mb-14 max-w-xl mx-auto">
            Transparencia total. Esto es exactamente lo que incluye cada plan.
          </p>

          <div className="overflow-x-auto rounded-3xl border border-zinc-100 shadow-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-950 text-white">
                  <th className="text-left font-black uppercase tracking-wider text-[11px] px-6 py-5 rounded-tl-3xl w-1/2">Funcionalidad</th>
                  {redesignPlans.map((p, i) => (
                    <th key={p.id} className={`text-center font-black uppercase tracking-wider text-[11px] px-4 py-5 ${i === redesignPlans.length - 1 ? 'rounded-tr-3xl' : ''} ${p.recommended ? 'text-violet-300' : ''}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {redesignFeatures.map((feat, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/70'}>
                    <td className="px-6 py-4 font-medium text-zinc-800 text-[13px]">{feat.name}</td>
                    {redesignPlans.map((p) => (
                      <td key={p.id} className="text-center px-4 py-4">
                        {featureVal(feat[p.id as keyof typeof feat], planColors[p.color]?.accent ?? 'text-violet-600')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESO ═══════════════════════ */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-950 mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-zinc-500 font-light max-w-lg mx-auto">
              Un proceso claro, en 4 pasos, para que sepas en todo momento en qué etapa está tu proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-zinc-100 shadow-lg relative overflow-hidden">
                <span className="absolute top-4 right-5 text-[64px] font-black text-zinc-100 leading-none select-none">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <p className="text-violet-600 font-black text-[10px] uppercase tracking-widest mb-3">Paso {step.step}</p>
                  <h3 className="font-black text-zinc-900 uppercase tracking-tight text-lg mb-3">{step.title}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-zinc-950 mb-14 text-center">
            Preguntas frecuentes
          </h2>
          <div className="divide-y divide-zinc-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7">
                <h3 className="font-bold text-zinc-900 text-base mb-3 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-violet-500/10 border border-violet-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-violet-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Revisamos tu tienda<br />
            <span className="text-violet-400">sin costo ni compromiso</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Antes de elegir un plan, agendemos una videollamada de 30 minutos. Revisamos tu tienda actual y te decimos exactamente qué mejorar y cuánto costará.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LeadButton className="bg-violet-600 hover:bg-violet-700 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4 rounded-2xl shadow-xl shadow-violet-600/20 transition-all active:scale-95 flex items-center gap-2 cursor-pointer">
              Agendar Revisión Gratis <ArrowRight className="w-4 h-4" />
            </LeadButton>
            <a
              href="https://wa.me/56984410379"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-2xl transition-all"
            >
              WhatsApp directo →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
