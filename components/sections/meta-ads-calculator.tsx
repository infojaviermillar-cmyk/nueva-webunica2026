"use client";

import { useState, useEffect } from 'react';

export default function MetaAdsCalculator() {
  const [budget, setBudget] = useState(100000);
  const [cpm, setCpm] = useState(2500);
  const [ctr, setCtr] = useState(1.5);
  const [cr, setCr] = useState(2.0);
  const [avgTicket, setAvgTicket] = useState(25000);

  const [results, setResults] = useState({
    impressions: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    cpa: 0,
    roas: 0
  });

  useEffect(() => {
    const impressions = (budget / cpm) * 1000;
    const clicks = impressions * (ctr / 100);
    const conversions = clicks * (cr / 100);
    const revenue = conversions * avgTicket;
    const cpa = conversions > 0 ? budget / conversions : 0;
    const roas = budget > 0 ? revenue / budget : 0;

    setResults({
      impressions: Math.round(impressions),
      clicks: Math.round(clicks),
      conversions: Math.round(conversions),
      revenue: Math.round(revenue),
      cpa: Math.round(cpa),
      roas: Number(roas.toFixed(2))
    });
  }, [budget, cpm, ctr, cr, avgTicket]);

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-8 lg:p-12 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Controls */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-8">Variables de Campaña</h3>
          
          <div className="space-y-4">
            <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest">Presupuesto Mensual (CLP)</label>
            <input 
              type="range" min="50000" max="5000000" step="50000"
              value={budget} onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="text-3xl font-black text-white">${budget.toLocaleString()}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-zinc-400">CPM Promedio ($)</label>
              <input 
                type="number" value={cpm} onChange={(e) => setCpm(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-zinc-400">CTR Esperado (%)</label>
              <input 
                type="number" step="0.1" value={ctr} onChange={(e) => setCtr(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-zinc-400">Tasa Conversión (%)</label>
              <input 
                type="number" step="0.1" value={cr} onChange={(e) => setCr(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-zinc-400">Ticket Promedio ($)</label>
              <input 
                type="number" value={avgTicket} onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white/5 rounded-[2rem] p-8 lg:p-12 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-10 text-center uppercase tracking-tighter">Proyección de Resultados</h3>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Impresiones</div>
              <div className="text-2xl font-black text-white">{results.impressions.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Clicks</div>
              <div className="text-2xl font-black text-white">{results.clicks.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Ventas Est.</div>
              <div className="text-2xl font-black text-emerald-400">{results.conversions.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">CPA (Costo/Venta)</div>
              <div className="text-2xl font-black text-white">${results.cpa.toLocaleString()}</div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <div className="text-sm text-zinc-400 font-bold uppercase tracking-[0.2em] mb-4">Retorno de Inversión (ROAS)</div>
            <div className={`text-7xl lg:text-8xl font-black ${results.roas >= 3 ? 'text-emerald-400' : 'text-orange-400'}`}>
              {results.roas}x
            </div>
            <p className="mt-4 text-zinc-500 italic text-sm">
              {results.roas >= 3 ? '¡Felicidades! Esta campaña es altamente rentable.' : 'Ojo: Revisa tus costos o mejora tu tasa de conversión.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
