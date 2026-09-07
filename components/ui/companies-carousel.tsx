"use client";

import React from 'react';

const COMPANIES = [
  { name: "IPSDatax", type: "WordPress" },
  { name: "Reaprende", type: "WordPress" },
  { name: "Porta Francés", type: "WordPress" },
  { name: "Nutrasur", type: "WordPress" },
  { name: "Smarthing", type: "WordPress" },
  { name: "Radio Viaducto", type: "WordPress" },
  { name: "PPI Seguridad", type: "WordPress" },
  { name: "Librería Heros", type: "WordPress" },
  { name: "Compass Security", type: "WordPress" },
  { name: "Coding Dojo Latam", type: "WordPress" },
  { name: "Urbatec", type: "WordPress" },
  { name: "Delivery Temuco", type: "WordPress" },
  { name: "Bramanic", type: "WordPress" },
  { name: "Grupo Kefren", type: "WordPress" },
  { name: "Grúas Acer", type: "WordPress" },
  { name: "Eros Consultora", type: "WordPress" },
  { name: "Dripco", type: "WordPress" },
  { name: "Preutem", type: "WordPress" },
  { name: "SoloCasasChile", type: "Full Next.js" },
  { name: "Kinelawen", type: "Shopify" },
  { name: "SpinMedical", type: "Shopify" },
  { name: "Librería Bazarte", type: "Shopify" },
  { name: "Altavista Chile", type: "Shopify" },
  { name: "Recovery Zone", type: "Shopify" },
  { name: "Only Jeep", type: "Shopify" },
  { name: "EvertSport", type: "Shopify" },
  { name: "AntarctiCare", type: "Shopify" },
  { name: "Divan Tienda", type: "Shopify" },
  { name: "Chiletronics", type: "Shopify" },
  { name: "PHY Waters", type: "Shopify" },
  { name: "Tecno-Mobile", type: "Shopify" },
  { name: "Tuupos", type: "Shopify" },
  { name: "Anteros", type: "Shopify" },
  { name: "Terra Andes", type: "Shopify" },
  { name: "Serch", type: "Shopify" },
  { name: "Sonnda", type: "Shopify" },
  { name: "Fcastro.cl", type: "Shopify" }
];

export default function CompaniesCarousel() {
  const marqueeItems = [...COMPANIES, ...COMPANIES, ...COMPANIES];

  return (
    <div className="bg-[#f8f9fb] py-10 border-t border-zinc-200">
      {/* H2 semántico visible para Google — texto secundario para lectores de pantalla */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-[#8ba2bf] text-[10px] uppercase font-bold tracking-[0.15em]">
          Empresas que confían en nuestra agencia de desarrollo web y Shopify en Chile
        </h2>
      </div>
      {/* Lista indexable para crawlers (invisible en pantalla) */}
      <noscript>
        <ul aria-label="Clientes de Webunica Chile">
          {COMPANIES.map((c) => (
            <li key={c.name}>{c.name} — {c.type}</li>
          ))}
        </ul>
      </noscript>
      <div className="overflow-hidden relative max-w-[1400px] mx-auto">
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee-horizontal items-center">
          {marqueeItems.map((company, idx) => (
            <div key={idx} className="flex px-10 items-center justify-center min-w-max gap-3">
              <span className="text-[#848484] font-black text-[22px] tracking-tighter">
                {company.name}
              </span>
              {company.type === 'Shopify' ? (
                <span className="bg-[#95bf47]/10 text-[#95bf47] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-[#95bf47]/20">Shopify</span>
              ) : company.type === 'Full Next.js' ? (
                <span className="bg-violet-600/10 text-violet-600 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-violet-600/20">Full Next.js</span>
              ) : (
                <span className="bg-[#21759b]/10 text-[#21759b] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-[#21759b]/20">WordPress</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal 80s linear infinite;
        }
        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
