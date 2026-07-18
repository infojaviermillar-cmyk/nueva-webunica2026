import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { redesignPlans, redesignFeatures } from '@/data/redesign-plans';
import { Check, X, ArrowRight, Sparkles, Layers, Crown, HelpCircle, Minus } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = redesignPlans.find((p) => p.id === slug);

  if (!plan) return { title: 'Plan no encontrado' };

  return {
    title: `Rediseño Shopify Plan ${plan.name} | Webunica`,
    description: `${plan.desc} ${plan.shortDesc} Entrega en ${plan.deliveryTime}. Bonus: ${plan.bonus}.`,
    keywords: [
      `plan ${plan.name.toLowerCase()} rediseño shopify`,
      `rediseño shopify ${plan.id}`,
      'mejorar ecommerce shopify',
      'actualizar tema shopify chile',
      'cro shopify chile'
    ],
    alternates: {
      canonical: `https://webunica.cl/rediseno/${plan.id}`,
    },
    openGraph: {
      title: `Rediseño Shopify Plan ${plan.name} | Webunica`,
      description: `${plan.desc} ${plan.shortDesc} Entrega en ${plan.deliveryTime}.`,
      url: `https://webunica.cl/rediseno/${plan.id}`,
      siteName: 'Webunica',
      locale: 'es_CL',
      type: 'website',
      images: [
        {
          url: 'https://webunica.cl/og-rediseno-shopify.jpg',
          width: 1200,
          height: 630,
          alt: `Rediseño Shopify Plan ${plan.name} - Webunica`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rediseño Shopify Plan ${plan.name} | Webunica`,
      description: `${plan.desc} ${plan.shortDesc}`,
      images: ['https://webunica.cl/og-rediseno-shopify.jpg'],
    },
  };
}

export function generateStaticParams() {
  return redesignPlans.map((plan) => ({ slug: plan.id }));
}

const getIcon = (iconName: string, className: string = 'w-10 h-10 text-violet-600') => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Layers':   return <Layers   className={className} />;
    case 'Crown':    return <Crown    className={className} />;
    default:         return <Sparkles className={className} />;
  }
};

const accentColor: Record<string, string> = {
  blue:   'text-blue-600',
  violet: 'text-violet-600',
  amber:  'text-amber-600',
};
const accentBg: Record<string, string> = {
  blue:   'bg-blue-50 border-blue-100',
  violet: 'bg-violet-50 border-violet-100',
  amber:  'bg-amber-50 border-amber-100',
};
const accentBtn: Record<string, string> = {
  blue:   'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20',
  violet: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/20',
  amber:  'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20',
};

export default async function RedesignPlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = redesignPlans.find((p) => p.id === slug);

  if (!plan) notFound();

  const included = redesignFeatures.filter((f) => {
    const val = f[plan.id as keyof typeof f];
    return val === true || (typeof val === 'string' && val.length > 0);
  });

  const color  = accentColor[plan.color]  ?? 'text-violet-600';
  const bg     = accentBg[plan.color]     ?? 'bg-violet-50 border-violet-100';
  const btn    = accentBtn[plan.color]    ?? 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/20';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://webunica.cl/rediseno/${plan.id}#product`,
        'name': `Rediseño Shopify Plan ${plan.name}`,
        'image': 'https://webunica.cl/og-rediseno-shopify.jpg',
        'description': `${plan.desc} ${plan.shortDesc} Tiempo de entrega estimado: ${plan.deliveryTime}.`,
        'brand': {
          '@type': 'Brand',
          'name': 'Webunica'
        },
        'offers': {
          '@type': 'Offer',
          'price': plan.price.replace(/\D/g, ''),
          'priceCurrency': 'CLP',
          'availability': 'https://schema.org/InStock',
          'url': `https://webunica.cl/rediseno/${plan.id}`
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://webunica.cl/rediseno/${plan.id}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://webunica.cl'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Rediseño Shopify',
            'item': 'https://webunica.cl/rediseno-tienda-shopify'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': plan.name,
            'item': `https://webunica.cl/rediseno/${plan.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-[20vh] pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-zinc-500">
          <Link href="/rediseno-tienda-shopify" className="hover:text-violet-600 transition-colors">
            Rediseño Shopify
          </Link>
          <span>/</span>
          <span className="text-zinc-900 font-bold uppercase">{plan.name}</span>
        </div>

        {/* Hero card */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-zinc-200 shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-inner border ${bg}`}>
                  {getIcon(plan.iconName, `w-10 h-10 ${color}`)}
                </div>
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-widest mb-1 block ${color}`}>
                    Plan de Rediseño Shopify
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-950">
                    {plan.name}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-zinc-600 font-light mb-2 max-w-lg">{plan.desc}</p>
              <p className="text-sm text-zinc-400 font-medium mb-8">⏱ Entrega en {plan.deliveryTime}</p>

              <div className="inline-flex flex-col">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black tracking-tighter text-zinc-900">{plan.price}</span>
                  <span className="text-lg text-zinc-500 font-medium pb-1">+iva</span>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-emerald-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Bonus: {plan.bonus}
                </div>
              </div>
            </div>

            <div className="w-full md:w-72 shrink-0">
              <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100 shadow-sm text-center">
                <h3 className="font-bold text-zinc-900 mb-2">¿Lista para el cambio?</h3>
                <p className="text-xs text-zinc-500 font-light mb-6">
                  Coordinamos una videollamada para revisar tu tienda actual y afinar el alcance.
                </p>
                <LeadButton
                  className={`w-full py-4 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${btn}`}
                >
                  Solicitar este plan <ArrowRight className="w-4 h-4" />
                </LeadButton>
              </div>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-zinc-200 shadow-xl mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-950 mb-2">
            Lo que incluye este plan
          </h2>
          <p className="text-sm text-zinc-500 font-light mb-10 pb-6 border-b border-zinc-100">
            Todo lo que rediseñaremos, configuraremos y optimizaremos en tu tienda Shopify.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {included.map((feat, idx) => {
              const val = feat[plan.id as keyof typeof feat];
              return (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm">{feat.name}</h4>
                    {typeof val === 'string' && val !== 'true' && (
                      <p className="text-xs text-zinc-500 mt-1">{val}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-6">
            <HelpCircle className="w-8 h-8 text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Tienes dudas sobre el alcance?</h3>
          <p className="text-zinc-500 font-light max-w-lg mx-auto mb-8">
            Revisamos tu tienda actual sin costo y te decimos exactamente qué mejorar y qué plan se adapta mejor a tus objetivos de venta.
          </p>
          <a
            href="https://wa.me/56984410379"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-6 py-3 rounded-full"
          >
            Consultar por WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
