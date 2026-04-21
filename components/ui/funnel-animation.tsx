"use client";

import React from "react";

export default function FunnelAnimation() {
  return (
    <div className="relative w-full flex flex-col justify-center lg:pl-10">
      <div className="relative group flex flex-col gap-10 lg:gap-14">
        
        {/* =========================================
            FUNNEL 1: LEAD GENERATION
        ========================================= */}
        <div>


          <div className="relative">
            {/* Track Line Background */}
            <div className="absolute top-6 lg:top-8 left-[10%] right-[10%] h-1 bg-zinc-200/50 rounded-full" />
            
            {/* Track Line Gradient (progressing) */}
            <div className="absolute top-6 lg:top-8 left-[10%] w-[80%] h-1 bg-gradient-to-r from-zinc-300 via-violet-500 to-emerald-500 rounded-full opacity-80 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-[flowEnergy_2.5s_linear_infinite]" />
            </div>

            <style>{`
              @keyframes flowEnergy {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              @keyframes slideA {
                0% { left: 0%; opacity: 0; transform: scale(0.5); }
                5% { opacity: 1; transform: scale(1); }
                28% { left: 30%; opacity: 1; transform: scale(1); }
                32% { left: 36%; opacity: 0; transform: scale(0); }
                100% { left: 36%; opacity: 0; }
              }
              @keyframes slideB {
                0% { left: 30%; opacity: 0; transform: scale(0.5); }
                38% { opacity: 0; transform: scale(0.5); left: 38%; }
                40% { opacity: 1; transform: scale(1); }
                60% { left: 63%; opacity: 1; transform: scale(1); }
                63% { left: 68%; opacity: 0; transform: scale(0); }
                100% { left: 68%; opacity: 0; }
              }
              @keyframes slideC {
                0% { left: 60%; opacity: 0; transform: scale(0.5); }
                68% { opacity: 0; transform: scale(0.5); left: 68%; }
                70% { opacity: 1; transform: scale(1); }
                90% { left: 95%; opacity: 1; transform: scale(1); }
                98% { left: 100%; opacity: 0; transform: scale(1.5); }
                100% { left: 100%; opacity: 0; }
              }
              @keyframes pulseIcon {
                0%, 90%, 100% { transform: scale(1); }
                10% { transform: scale(1.15); }
              }
              .ni-1 { animation: pulseIcon 4s infinite 0.2s; }
              .ni-2 { animation: pulseIcon 4s infinite 1.4s; }
              .ni-3 { animation: pulseIcon 4s infinite 2.6s; }
              .ni-4 { animation: pulseIcon 4s infinite 3.8s; }

              .p-a { animation: slideA 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
              .p-b { animation: slideB 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
              .p-c { animation: slideC 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
            `}</style>

            {/* Path Particles for Leads Funnel */}
            <div className="absolute top-[24px] lg:top-[32px] p-a w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white rounded-full block"></span>
            </div>
            <div className="absolute top-[24px] lg:top-[32px] p-b w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-sm block"></span>
            </div>
            <div className="absolute top-[24px] lg:top-[32px] p-c w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>

            {/* 4 Nodes */}
            <div className="flex justify-between items-start relative z-10 px-2 lg:px-6">
              
              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-1 z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Visitas</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Tráfico frío</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-2 z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Leads</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Formularios</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-3 z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Reuniones</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Agendadas</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-gradient-to-br from-emerald-400 to-emerald-500 border border-emerald-400 shadow-[0_10px_20px_rgba(16,185,129,0.3)] flex items-center justify-center ni-4 z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-emerald-600 uppercase block mb-0.5 lg:mb-1">Clientes</span>
                  <span className="text-[8px] lg:text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">Cerrado ✓</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================
            FUNNEL 2: E-COMMERCE (SHOPIFY)
        ========================================= */}
        <div>


          <div className="relative pb-2">
            {/* Track Line Background */}
            <div className="absolute top-6 lg:top-8 left-[10%] right-[10%] h-1 bg-zinc-200/50 rounded-full" />
            
            {/* Track Line Gradient (progressing) */}
            <div className="absolute top-6 lg:top-8 left-[10%] w-[80%] h-1 bg-gradient-to-r from-zinc-300 via-rose-500 to-amber-500 rounded-full opacity-80 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-[flowEnergy_2.2s_linear_infinite]" />
            </div>

            <style>{`
              .p-a2 { animation: slideA 4s infinite cubic-bezier(0.4, 0, 0.2, 1) 1s; }
              .p-b2 { animation: slideB 4s infinite cubic-bezier(0.4, 0, 0.2, 1) 1s; }
              .p-c2 { animation: slideC 4s infinite cubic-bezier(0.4, 0, 0.2, 1) 1s; }
              
              .ni-1b { animation: pulseIcon 4s infinite 1.2s; }
              .ni-2b { animation: pulseIcon 4s infinite 2.4s; }
              .ni-3b { animation: pulseIcon 4s infinite 3.6s; }
              .ni-4b { animation: pulseIcon 4s infinite 4.8s; }
            `}</style>

            {/* Path Particles for E-Commerce Funnel */}
            <div className="absolute top-[24px] lg:top-[32px] p-a2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white rounded-full block"></span>
            </div>
            <div className="absolute top-[24px] lg:top-[32px] p-b2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <svg className="w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="absolute top-[24px] lg:top-[32px] p-c2 w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] flex items-center justify-center -translate-y-1/2 z-20">
               <span className="text-[6px] lg:text-[8px]">💰</span>
            </div>

            {/* 4 Nodes */}
            <div className="flex justify-between items-start relative z-10 px-2 lg:px-6">
              
              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-1b z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Tráfico</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Meta / Google Ads</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-2b z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Catálogo</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Ficha de Producto</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-white border border-zinc-200 shadow-md flex items-center justify-center ni-3b z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-zinc-900 uppercase block mb-0.5 lg:mb-1">Carrito</span>
                  <span className="text-[8px] lg:text-[10px] text-zinc-500 font-medium whitespace-nowrap hidden sm:block">Checkout</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 lg:gap-3 w-1/4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-400 shadow-[0_10px_20px_rgba(245,158,11,0.3)] flex items-center justify-center ni-4b z-10">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[9px] lg:text-xs font-black text-amber-600 uppercase block mb-0.5 lg:mb-1">Ventas</span>
                  <span className="text-[8px] lg:text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block">Retorno Total</span>
                </div>
              </div>

            </div>
          </div>
          
          {/* Attractive E-Commerce Pitch Text */}
          <div className="mt-8 border-t border-zinc-200/80 pt-6 px-4 text-center pb-4">
            <p className="text-xs lg:text-sm text-zinc-600 font-medium leading-relaxed max-w-sm mx-auto">
              Multiplica la rentabilidad de las campañas online de tu tienda Shopify minimizando la fuga de carritos con un <strong className="font-bold text-zinc-900 border-b-2 border-rose-200">checkout sin fricciones</strong> hecho para escalar.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
