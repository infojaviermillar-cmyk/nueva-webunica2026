"use client";

import React from 'react';
import { 
  CreditCard, 
  Truck, 
  Mail, 
  MessageSquare, 
  BarChart2, 
  Megaphone, 
  ShoppingBag,
  Zap
} from 'lucide-react';

interface ShopifyApp {
  name: string;
  category: 'Pagos' | 'Logística' | 'Marketing' | 'Analítica' | 'WhatsApp';
  badgeColor: string;
  description: string;
  icon: React.ReactNode;
}

const SHOPIFY_APPS: ShopifyApp[] = [
  {
    name: "Wasabil",
    category: "WhatsApp",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    description: "Marketing y Carritos por WhatsApp",
    icon: <MessageSquare className="w-4 h-4 text-emerald-500" />
  },
  {
    name: "Mercado Pago",
    category: "Pagos",
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    description: "Tarjetas y Dinero en Cuenta",
    icon: <CreditCard className="w-4 h-4 text-sky-500" />
  },
  {
    name: "Fintoc",
    category: "Pagos",
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    description: "Transferencias Banco a Banco",
    icon: <CreditCard className="w-4 h-4 text-indigo-500" />
  },
  {
    name: "VentiPay",
    category: "Pagos",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    description: "Cuotas en Débito & Crédito",
    icon: <CreditCard className="w-4 h-4 text-violet-500" />
  },
  {
    name: "Klaviyo",
    category: "Marketing",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
    description: "Email & SMS Automations",
    icon: <Mail className="w-4 h-4 text-fuchsia-500" />
  },
  {
    name: "Blue Express",
    category: "Logística",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    description: "Envíos en Tiempo Real (CCS)",
    icon: <Truck className="w-4 h-4 text-blue-500" />
  },
  {
    name: "Starken",
    category: "Logística",
    badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
    description: "Despacho a todo Chile",
    icon: <Truck className="w-4 h-4 text-red-500" />
  },
  {
    name: "Correos de Chile",
    category: "Logística",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    description: "Cobertura Nacional",
    icon: <Truck className="w-4 h-4 text-amber-500" />
  },
  {
    name: "Shipit.cl",
    category: "Logística",
    badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    description: "Multi-courier Automatizado",
    icon: <Truck className="w-4 h-4 text-cyan-500" />
  },
  {
    name: "Meta Ads",
    category: "Marketing",
    badgeColor: "bg-blue-600/10 text-blue-700 border-blue-600/20",
    description: "Pixel & Conversion API",
    icon: <Megaphone className="w-4 h-4 text-blue-600" />
  },
  {
    name: "Google Ads",
    category: "Marketing",
    badgeColor: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
    description: "Google Shopping & Search",
    icon: <Megaphone className="w-4 h-4 text-yellow-600" />
  },
  {
    name: "Google Analytics 4",
    category: "Analítica",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    description: "Medición E-commerce Pro",
    icon: <BarChart2 className="w-4 h-4 text-orange-500" />
  }
];

export default function ShopifyAppsCarousel() {
  const marqueeItems = [...SHOPIFY_APPS, ...SHOPIFY_APPS, ...SHOPIFY_APPS];

  return (
    <section className="py-20 bg-zinc-950 text-white overflow-hidden relative border-y border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-white/5 border border-white/10 rounded-full">
          <Zap className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.2em] text-violet-400 uppercase">Integraciones Locales & Globales</span>
        </div>

        <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
          Apps & Ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Shopify Chile</span>
        </h3>
        
        <p className="text-zinc-400 text-sm lg:text-base font-light max-w-2xl mx-auto">
          Conectamos tu tienda con las herramientas de pasarelas de pago, envíos, marketing y analítica líderes en Chile.
        </p>
      </div>

      <div className="overflow-hidden relative max-w-[1600px] mx-auto py-4">
        {/* Fade gradients at edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-apps-marquee items-center gap-6">
          {marqueeItems.map((app, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300 px-6 py-4 rounded-3xl shrink-0 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base font-black text-white group-hover:text-violet-300 transition-colors">
                    {app.name}
                  </span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border uppercase tracking-wider ${app.badgeColor}`}>
                    {app.category}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-tight">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes apps-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-apps-marquee {
          animation: apps-marquee 45s linear infinite;
        }
        .animate-apps-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
