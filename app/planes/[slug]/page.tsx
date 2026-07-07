import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { plans, features } from '@/data/shopify-plans';
import { Check, ArrowRight, Star, Zap, Shield, HelpCircle } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const plan = plans.find(p => p.id === slug);
  
  if (!plan) {
    return { title: 'Plan no encontrado' };
  }

  return {
    title: `Plan Shopify ${plan.name} | Webunica`,
    description: `Descubre todo lo que incluye el Plan ${plan.name} para tu tienda Shopify. ${plan.desc}`,
  };
}

export function generateStaticParams() {
  return plans.map((plan) => ({
    slug: plan.id,
  }));
}

export default async function PlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = plans.find(p => p.id === slug);

  if (!plan) {
    notFound();
  }

  // Filter features that are included in this plan
  const includedFeatures = features.filter(f => {
    const val = f[plan.id as keyof typeof f];
    return val === true || (typeof val === 'string' && val.length > 0 && val !== 'false');
  });

  const getIcon = (iconName: string, className: string = "w-12 h-12 text-pink-600") => {
    switch (iconName) {
      case 'Zap': return <Zap className={className} />;
      case 'Star': return <Star className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'ArrowRight': return <ArrowRight className={className} />;
      default: return <Star className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-[20vh] pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-zinc-500">
          <Link href="/landing-shopify-emd" className="hover:text-pink-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/landing-shopify-emd#planes" className="hover:text-pink-600 transition-colors">Planes</Link>
          <span>/</span>
          <span className="text-zinc-900 font-bold uppercase">{plan.name}</span>
        </div>

        {/* Header / Hero */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-zinc-200 shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-3xl bg-pink-50 flex items-center justify-center shadow-inner border border-pink-100">
                  {getIcon(plan.iconName, "w-10 h-10 text-pink-600")}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-1 block">Plan de Desarrollo</span>
                  <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-950">
                    {plan.name}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-zinc-600 font-light mb-8 max-w-lg">
                {plan.desc} Este plan está diseñado meticulosamente para maximizar el rendimiento y la conversión de tu e-commerce.
              </p>
              
              <div className="inline-flex flex-col">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black tracking-tighter text-zinc-900">{plan.price}</span>
                  <span className="text-lg text-zinc-500 font-medium pb-1">+iva</span>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-emerald-100 flex items-center gap-2">
                  <Star className="w-4 h-4" /> Bonus: {plan.bonus}
                </div>
              </div>
            </div>

            <div className="w-full md:w-72 shrink-0">
              <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100 shadow-sm text-center">
                <h3 className="font-bold text-zinc-900 mb-2">¿Estás listo para vender?</h3>
                <p className="text-xs text-zinc-500 font-light mb-6">Agenda una videollamada para afinar los detalles de tu tienda.</p>
                <LeadButton className="w-full py-4 bg-pink-600 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-pink-600/20 hover:bg-pink-700 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  Solicitar este plan <ArrowRight className="w-4 h-4" />
                </LeadButton>
              </div>
            </div>
          </div>
        </div>

        {/* Entregables */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-zinc-200 shadow-xl mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-950 mb-2">Lo que incluye tu plan</h2>
          <p className="text-sm text-zinc-500 font-light mb-10 pb-6 border-b border-zinc-100">Transparencia total. Esto es todo lo que configuraremos y diseñaremos para tu tienda Shopify.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {includedFeatures.map((feat, idx) => {
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
              )
            })}
          </div>
        </div>

        {/* Garantía */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-6">
            <HelpCircle className="w-8 h-8 text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Tienes dudas sobre qué plan elegir?</h3>
          <p className="text-zinc-500 font-light max-w-lg mx-auto mb-8">
            No te preocupes. Nuestro equipo de expertos puede evaluar tu modelo de negocio y recomendarte la estructura exacta que necesitas sin que gastes de más.
          </p>
          <a 
            href="https://wa.me/56984410379" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-6 py-3 rounded-full"
          >
            Pregúntanos por WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
