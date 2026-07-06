"use client";

import LeadButton from '@/components/ui/lead-button';
import { Check, X, Star, Zap, Shield, ArrowRight } from 'lucide-react';

export default function ShopifyPlans() {
  const plans = [
    {
      name: "AJUSTE",
      price: "$320.000",
      bonus: "Auditoría CRO Gratis",
      desc: "Para tiendas ya creadas.",
      icon: <Zap className="w-5 h-5 text-pink-600" />,
      recommended: false
    },
    {
      name: "PRENDE",
      price: "$580.000",
      bonus: "Theme Premium Incluido",
      desc: "Emprendedores que inician.",
      icon: <Star className="w-5 h-5 text-pink-600" />,
      recommended: false
    },
    {
      name: "FULL",
      price: "$780.000",
      bonus: "Setup GA4 Sin Costo",
      desc: "Negocios en crecimiento.",
      icon: <Shield className="w-5 h-5 text-pink-600" />,
      recommended: true
    },
    {
      name: "PRO",
      price: "$1.200.000",
      bonus: "Consultoría SEO Inicial",
      desc: "Marcas que desean escalar.",
      icon: <ArrowRight className="w-5 h-5 text-pink-600" />,
      recommended: false
    }
  ];

  const features = [
    { name: "Plantilla Envato Premium", ajuste: true, prende: true, full: true, pro: true },
    { name: "Configuración tienda Shopify", ajuste: "Revisión general", prende: true, full: true, pro: true },
    { name: "Carga de productos", ajuste: false, prende: "Hasta 70", full: "Hasta 70", pro: "Hasta 300" },
    { name: "Dominio y validación correo", ajuste: false, prende: true, full: true, pro: true },
    { name: "Medios de pago locales", ajuste: false, prende: "1 Medio", full: "1 Medio", pro: "Todos" },
    { name: "Integración Multicourier", ajuste: false, prende: true, full: true, pro: true },
    { name: "Redes Sociales y WhatsApp", ajuste: true, prende: true, full: true, pro: true },
    { name: "Notificaciones automáticas", ajuste: true, prende: true, full: true, pro: true },
    { name: "Carritos abandonados", ajuste: "Básico", prende: "Básico", full: "Avanzado", pro: "Avanzado" },
    { name: "Integración Analytics y Pixel", ajuste: false, prende: false, full: true, pro: "Avanzado (GA4)" },
    { name: "Optimización SEO Básica", ajuste: false, prende: false, full: true, pro: true },
    { name: "Newsletter / Suscripción", ajuste: false, prende: false, full: true, pro: true },
    { name: "Chat en vivo (Tawk.to)", ajuste: false, prende: false, full: true, pro: true },
    { name: "Integración ERP/Bsale", ajuste: false, prende: false, full: false, pro: "Previa evaluación" },
    { name: "Marketing automatizado", ajuste: false, prende: false, full: false, pro: "Mailchimp/Klaviyo" },
    { name: "Google Ads y Meta Ads", ajuste: false, prende: false, full: false, pro: true },
    { name: "Soporte técnico", ajuste: "1 Videollamada", prende: "3 meses (3 cambios)", full: "Capacitación", pro: "Preferente + Auditoría" },
    { name: "Tiempo de entrega", ajuste: "5-10 días", prende: "Hasta 4 sem.", full: "Hasta 4 sem.", pro: "Hasta 8 sem." },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-zinc-300 mx-auto" />;
    return <span className="text-xs font-medium text-zinc-700">{value}</span>;
  };

  return (
    <section id="planes" className="py-32 scroll-mt-32 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Inversión Transparente</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
            Compara nuestros Planes
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Encuentra el plan perfecto para la etapa en la que se encuentra tu negocio.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto rounded-[2rem] border border-zinc-200 shadow-xl bg-white relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-8 border-b border-zinc-200 w-[24%] align-bottom">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Características</span>
                </th>
                {plans.map((p, i) => (
                  <th key={i} className={`p-8 border-b border-zinc-200 text-center w-[19%] ${p.recommended ? 'bg-pink-50/50' : ''}`}>
                    {p.recommended && (
                      <div className="bg-pink-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mx-auto w-fit mb-4">
                        Recomendado
                      </div>
                    )}
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
                        {p.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-1 uppercase text-zinc-900">{p.name}</h3>
                    <p className="text-[10px] text-zinc-500 font-medium mb-4 h-8">{p.desc}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-black text-zinc-900">{p.price}</span>
                      <span className="text-xs text-zinc-500 font-medium">+iva</span>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-2 py-1 rounded flex items-center justify-center gap-1 mx-auto w-fit mb-6 border border-emerald-100">
                      + {p.bonus}
                    </div>
                    <LeadButton className={`w-full py-3 rounded-lg font-black uppercase tracking-widest text-[10px] text-center transition-all shadow-sm flex items-center justify-center gap-2 ${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                      Elegir Plan
                    </LeadButton>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/80 transition-colors border-b border-zinc-100 last:border-0">
                  <td className="p-5 pl-8 font-medium text-sm text-zinc-800">{feat.name}</td>
                  <td className="p-5 text-center border-l border-zinc-100">{renderValue(feat.ajuste)}</td>
                  <td className="p-5 text-center border-l border-zinc-100">{renderValue(feat.prende)}</td>
                  <td className="p-5 text-center border-l border-zinc-100 bg-pink-50/30">{renderValue(feat.full)}</td>
                  <td className="p-5 text-center border-l border-zinc-100">{renderValue(feat.pro)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6">
           {plans.map((p, i) => (
             <div key={i} className={`bg-white rounded-[2rem] p-8 flex flex-col ${p.recommended ? 'border-2 border-pink-500 shadow-xl shadow-pink-500/10' : 'border border-zinc-200'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center">
                    {p.icon}
                  </div>
                  {p.recommended && (
                    <div className="bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Recomendado
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase text-zinc-900">{p.name}</h3>
                <p className="text-sm text-zinc-500 font-light mb-6">{p.desc}</p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-zinc-900">{p.price}</span>
                  <span className="text-sm text-zinc-500 font-medium">+iva</span>
                </div>
                <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1.5 rounded-lg border border-emerald-100 mb-8 w-fit">
                  + {p.bonus}
                </div>
                
                <div className="flex-grow mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">Características</h4>
                  <ul className="space-y-3">
                    {features.filter(f => f[p.name.toLowerCase() as keyof typeof f] !== false).map((feat, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-600">
                          <span className="font-medium">{feat.name}</span>
                          {feat[p.name.toLowerCase() as keyof typeof feat] !== true && (
                            <span className="block text-xs text-zinc-400">{String(feat[p.name.toLowerCase() as keyof typeof feat])}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <LeadButton className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 ${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                  Elegir Plan <ArrowRight className="w-4 h-4" />
                </LeadButton>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
