"use client";

import { Check, X, Info } from 'lucide-react';

export default function PlatformComparison() {
  const features = [
    { name: "Facilidad de Uso", shopify: true, woo: false, jump: true, desc: "Shopify no requiere conocimientos técnicos para administrar." },
    { name: "Velocidad y Servidores", shopify: true, woo: false, jump: true, desc: "Shopify incluye hosting ilimitado y servidores globales." },
    { name: "Diseño Personalizable", shopify: true, woo: true, jump: false, desc: "Mayor control visual en Shopify y Woo." },
    { name: "Ecosistema de Apps", shopify: true, woo: true, jump: false, desc: "Shopify tiene el App Store más robusto del mundo e-commerce." },
    { name: "Escalabilidad Global", shopify: true, woo: false, jump: false, desc: "Shopify Plus soporta millones de transacciones por minuto." },
    { name: "Integraciones Locales (CL)", shopify: true, woo: true, jump: true, desc: "Todas tienen pasarelas chilenas, pero Shopify ofrece mejor estabilidad." },
    { name: "Mantenimiento Técnico", shopify: "Automático", woo: "Manual", jump: "Automático", desc: "En WooCommerce debes actualizar plugins constantemente." },
    { name: "Costo Inicial", shopify: "Medio", woo: "Bajo", jump: "Bajo", desc: "El costo se compensa con el tiempo ahorrado y el aumento de conversión." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase mb-4 text-zinc-950">
            ¿Por qué <span className="text-emerald-600">Shopify</span> y no otra?
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Muchos clientes llegan con esta duda. Aquí tienes una comparativa directa y honesta.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-zinc-200 font-bold text-zinc-400 uppercase tracking-widest text-xs w-1/3">Característica</th>
                <th className="p-4 border-b border-zinc-200 text-center w-1/5">
                  <div className="bg-emerald-600 text-white font-black py-2 rounded-lg text-sm uppercase tracking-wider">Shopify</div>
                </th>
                <th className="p-4 border-b border-zinc-200 text-center w-1/5 font-bold text-zinc-600">WooCommerce</th>
                <th className="p-4 border-b border-zinc-200 text-center w-1/5 font-bold text-zinc-600">Jumpseller</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <tr key={idx} className="group hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-900">{feat.name}</span>
                      <div className="relative cursor-help group/tooltip">
                        <Info className="w-4 h-4 text-zinc-400" />
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-zinc-900 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
                    {typeof feat.shopify === 'boolean' ? (
                      feat.shopify ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-sm font-bold text-emerald-700">{feat.shopify}</span>
                    )}
                  </td>
                  <td className="p-4 text-center opacity-70 group-hover:opacity-100 transition-opacity">
                    {typeof feat.woo === 'boolean' ? (
                      feat.woo ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-sm font-medium text-zinc-600">{feat.woo}</span>
                    )}
                  </td>
                  <td className="p-4 text-center opacity-70 group-hover:opacity-100 transition-opacity">
                    {typeof feat.jump === 'boolean' ? (
                      feat.jump ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-sm font-medium text-zinc-600">{feat.jump}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
