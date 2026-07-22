"use client";

import React from 'react';
import { 
  CreditCard, 
  Truck, 
  Mail, 
  MessageSquare, 
  BarChart2, 
  Megaphone, 
  Globe, 
  Share2, 
  DollarSign, 
  Package 
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const ITEMS: AppItem[] = [
  { id: "wasabil", name: "Wasabil", icon: <MessageSquare className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "mercadopago", name: "Mercado Pago", icon: <CreditCard className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "fintoc", name: "Fintoc", icon: <DollarSign className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "ventipay", name: "VentiPay", icon: <CreditCard className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "klaviyo", name: "Klaviyo", icon: <Mail className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "blueexpress", name: "Blue Express", icon: <Truck className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "starken", name: "Starken", icon: <Package className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "correoschile", name: "Correos de Chile", icon: <Globe className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "shipit", name: "Shipit.cl", icon: <Truck className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "metaads", name: "Meta Ads", icon: <Share2 className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "googleads", name: "Google Ads", icon: <Megaphone className="w-3.5 h-3.5 text-[#752afc]" /> },
  { id: "ga4", name: "Google Analytics 4", icon: <BarChart2 className="w-3.5 h-3.5 text-[#752afc]" /> }
];

export default function ShopifyAppsCarousel() {
  const marqueeItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="py-5 bg-[#d9c0fe] overflow-hidden relative border-y border-[#752afc]/20">
      <div className="overflow-hidden relative w-full">
        {/* Fade gradients at edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#d9c0fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#d9c0fe] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-apps-marquee items-center gap-3 md:gap-4">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 bg-white/90 border border-[#752afc] px-4 py-2 rounded-full shadow-sm hover:bg-white hover:scale-105 transition-all duration-300 shrink-0 group"
            >
              <div className="shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-zinc-900 tracking-tight whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes apps-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-apps-marquee {
          animation: apps-marquee 35s linear infinite;
        }
        .animate-apps-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
