"use client";

import React from "react";

export default function FunnelAnimation() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center lg:pl-10">
      <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 lg:p-12 border border-white/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
        
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xl font-black text-zinc-900 tracking-tight">SISTEMA WEBUNICA</h3>
          <div className="text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Automático
          </div>
        </div>

        <div className="relative pb-8">
          {/* Track Line Background */}
          <div className="absolute top-8 left-[10%] right-[10%] h-1.5 bg-zinc-100 rounded-full" />
          
          {/* Track Line Gradient (progressing) */}
          <div className="absolute top-8 left-[10%] w-[80%] h-1.5 bg-gradient-to-r from-zinc-200 via-violet-500 to-emerald-500 rounded-full opacity-60 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-[flowEnergy_2s_linear_infinite]" />
          </div>

          <style>{`
            @keyframes flowEnergy {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            @keyframes slideParticle {
              0% { left: 0%; opacity: 0; transform: scale(0.5); }
              5% { opacity: 1; transform: scale(1); }
              28% { left: 30%; opacity: 1; transform: scale(1); }
              32% { left: 36%; opacity: 0; transform: scale(0); } /* Morph */
              100% { left: 36%; opacity: 0; }
            }
            @keyframes slideParticle2 {
              0% { left: 30%; opacity: 0; transform: scale(0.5); }
              38% { opacity: 0; transform: scale(0.5); left: 38%; }
              40% { opacity: 1; transform: scale(1); }
              60% { left: 63%; opacity: 1; transform: scale(1); }
              63% { left: 68%; opacity: 0; transform: scale(0); }
              100% { left: 68%; opacity: 0; }
            }
            @keyframes slideParticle3 {
              0% { left: 60%; opacity: 0; transform: scale(0.5); }
              68% { opacity: 0; transform: scale(0.5); left: 68%; }
              70% { opacity: 1; transform: scale(1); }
              90% { left: 95%; opacity: 1; transform: scale(1); }
              98% { left: 100%; opacity: 0; transform: scale(1.5); }
              100% { left: 100%; opacity: 0; }
            }
            @keyframes popIcon {
              0%, 90%, 100% { transform: scale(1); }
              10% { transform: scale(1.2); }
            }
            .node-icon-1 { animation: popIcon 4s infinite 0.2s; }
            .node-icon-2 { animation: popIcon 4s infinite 1.4s; }
            .node-icon-3 { animation: popIcon 4s infinite 2.6s; }
            .node-icon-4 { animation: popIcon 4s infinite 3.8s; }

            .p-lead { animation: slideParticle 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
            .p-meet { animation: slideParticle2 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
            .p-client { animation: slideParticle3 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
          `}</style>

          {/* Particles / Entities flowing */}
          {/* Visitor to Lead */}
          <div className="absolute top-[30px] p-lead w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] flex items-center justify-center -translate-y-1/2 z-20">
             <span className="w-1.5 h-1.5 bg-white rounded-full block"></span>
          </div>
          
          {/* Lead to Meeting */}
          <div className="absolute top-[30px] p-meet w-5 h-5 rounded-lg bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] flex items-center justify-center -translate-y-1/2 z-20">
             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </div>

          {/* Meeting to Client */}
          <div className="absolute top-[30px] p-client w-6 h-6 rounded-md bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] flex items-center justify-center -translate-y-1/2 z-20">
             <span className="text-[10px]">⭐</span>
          </div>

          {/* 4 Nodes */}
          <div className="flex justify-between items-start relative z-10">
            
            {/* Node 1: Visitas */}
            <div className="flex flex-col items-center gap-4 w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center node-icon-1 z-10 transition-colors">
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-xs font-black text-zinc-800 uppercase block mb-1">Visitas</span>
                <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">Tráfico frío</span>
              </div>
            </div>

            {/* Node 2: Leads */}
            <div className="flex flex-col items-center gap-4 w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center node-icon-2 z-10">
                <svg className="w-7 h-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-xs font-black text-zinc-800 uppercase block mb-1">Leads</span>
                <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">Formularios</span>
              </div>
            </div>

            {/* Node 3: Reuniones */}
            <div className="flex flex-col items-center gap-4 w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center node-icon-3 z-10">
                <svg className="w-7 h-7 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-xs font-black text-zinc-800 uppercase block mb-1">Reuniones</span>
                <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">Agendadas</span>
              </div>
            </div>

            {/* Node 4: Clientes */}
            <div className="flex flex-col items-center gap-4 w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 flex items-center justify-center node-icon-4 z-10">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-xs font-black text-emerald-600 uppercase block mb-1">Clientes</span>
                <span className="text-[10px] font-bold text-zinc-900 bg-emerald-50 px-2 py-0.5 rounded-full whitespace-nowrap">Cerrado ✓</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
