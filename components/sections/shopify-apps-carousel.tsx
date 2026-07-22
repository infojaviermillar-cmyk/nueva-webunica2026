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
  Zap,
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
  { id: "wasabil", name: "Wasabil", icon: <MessageSquare className="w-7 h-7 text-[#752afc]" /> },
  { id: "mercadopago", name: "Mercado Pago", icon: <CreditCard className="w-7 h-7 text-[#752afc]" /> },
  { id: "fintoc", name: "Fintoc", icon: <DollarSign className="w-7 h-7 text-[#752afc]" /> },
  { id: "ventipay", name: "VentiPay", icon: <CreditCard className="w-7 h-7 text-[#752afc]" /> },
  { id: "klaviyo", name: "Klaviyo", icon: <Mail className="w-7 h-7 text-[#752afc]" /> },
  { id: "blueexpress", name: "Blue Express", icon: <Truck className="w-7 h-7 text-[#752afc]" /> },
  { id: "starken", name: "Starken", icon: <Package className="w-7 h-7 text-[#752afc]" /> },
  { id: "correoschile", name: "Correos de Chile", icon: <Globe className="w-7 h-7 text-[#752afc]" /> },
  { id: "shipit", name: "Shipit.cl", icon: <Truck className="w-7 h-7 text-[#752afc]" /> },
  { id: "metaads", name: "Meta Ads", icon: <Share2 className="w-7 h-7 text-[#752afc]" /> },
  { id: "googleads", name: "Google Ads", icon: <Megaphone className="w-7 h-7 text-[#752afc]" /> },
  { id: "ga4", name: "Google Analytics 4", icon: <BarChart2 className="w-7 h-7 text-[#752afc]" /> }
];

export default function ShopifyAppsCarousel() {
  const marqueeItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="py-8 bg-[#d9c0fe] overflow-hidden relative border-y-2 border-[#752afc]/30">
      <div className="overflow-hidden relative w-full py-2">
        {/* Fade gradients at edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#d9c0fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#d9c0fe] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-apps-marquee items-center gap-6 md:gap-8">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center bg-white border-2 border-[#752afc] px-6 py-4 rounded-2xl shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 group"
              title={item.name}
            >
              <div className="group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
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
          animation: apps-marquee 30s linear infinite;
        }
        .animate-apps-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
