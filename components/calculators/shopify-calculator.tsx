'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Percent, ChevronRight } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export default function ShopifyCalculator() {
  const [salesVolume, setSalesVolume] = useState<number>(5000000);
  const [averageTicket, setAverageTicket] = useState<number>(45000);
  const [plan, setPlan] = useState<string>('profesional');

  // Constantes
  const USD_TO_CLP = 950;
  const SHOPIFY_BASIC_USD = 25;
  const SHOPIFY_TRANSACTION_FEE = 0.02; // 2%
  const PAYMENT_GATEWAY_FEE = 0.035; // ~3.5% (ej: Webpay/Flow con IVA)

  const developmentCosts: Record<string, number> = {
    none: 0,
    profesional: 580000,
    full: 1200000,
    enterprise: 1450000
  };

  const calculateCosts = () => {
    const devCost = developmentCosts[plan];
    const shopifyMonthlyFixed = SHOPIFY_BASIC_USD * USD_TO_CLP;
    
    // Variables
    const shopifyFeeAmount = salesVolume * SHOPIFY_TRANSACTION_FEE;
    const gatewayFeeAmount = salesVolume * PAYMENT_GATEWAY_FEE;
    
    const totalVariableCosts = shopifyFeeAmount + gatewayFeeAmount;
    const netRevenue = salesVolume - totalVariableCosts - shopifyMonthlyFixed;
    
    const profitMargin = (netRevenue / salesVolume) * 100;

    return {
      devCost,
      shopifyMonthlyFixed,
      shopifyFeeAmount,
      gatewayFeeAmount,
      totalVariableCosts,
      netRevenue,
      profitMargin
    };
  };

  const results = calculateCosts();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-zinc-950 rounded-[2.5rem] border border-zinc-800 p-6 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Decors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Inputs */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <Calculator className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Proyección de <br/><span className="text-emerald-500">Rentabilidad</span></h3>
          </div>

          {/* Sales Volume */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Volumen de Venta Mensual</label>
              <span className="text-xl font-black text-white">{formatCurrency(salesVolume)}</span>
            </div>
            <input 
              type="range" 
              min="1000000" 
              max="50000000" 
              step="500000" 
              value={salesVolume}
              onChange={(e) => setSalesVolume(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-medium mt-2">
              <span>$1M</span>
              <span>$50M+</span>
            </div>
          </div>

          {/* Average Ticket */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Ticket Promedio</label>
              <span className="text-xl font-black text-white">{formatCurrency(averageTicket)}</span>
            </div>
            <input 
              type="range" 
              min="15000" 
              max="200000" 
              step="5000" 
              value={averageTicket}
              onChange={(e) => setAverageTicket(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-medium mt-2">
              <span>$15k</span>
              <span>$200k</span>
            </div>
          </div>

          {/* Plan Selection */}
          <div>
            <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest block mb-4">Plan de Desarrollo Inicial</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'none', name: 'Ya tengo tienda' },
                { id: 'profesional', name: 'Profesional' },
                { id: 'full', name: 'Full' },
                { id: 'enterprise', name: 'Enterprise' }
              ].map(p => (
                <button
                  key={p.id}
                  onClick={() => setPlan(p.id)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    plan === p.id 
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Results Dashboard */}
        <div className="bg-zinc-900/50 rounded-[2rem] border border-zinc-800 p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Desglose Financiero</h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400 font-medium">Desarrollo (Pago Único)</span>
                </div>
                <span className="text-sm font-black text-white">{formatCurrency(results.devCost)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-400 font-medium">Shopify Basic (Fijo Mensual)</span>
                </div>
                <span className="text-sm font-black text-white">{formatCurrency(results.shopifyMonthlyFixed)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-rose-400" />
                  <span className="text-sm text-zinc-400 font-medium">Comisión Shopify (2%)</span>
                </div>
                <span className="text-sm font-black text-rose-400">-{formatCurrency(results.shopifyFeeAmount)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-rose-400" />
                  <span className="text-sm text-zinc-400 font-medium">Pasarela (~3.5%)</span>
                </div>
                <span className="text-sm font-black text-rose-400">-{formatCurrency(results.gatewayFeeAmount)}</span>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Margen Bruto Estimado
              </div>
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-1">
                {formatCurrency(results.netRevenue)}
              </div>
              <div className="text-sm text-emerald-400/80 font-medium">
                Retienes el {results.profitMargin.toFixed(1)}% de tus ventas
              </div>
            </div>
          </div>

          <LeadButton className="w-full py-5 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2">
            Iniciar Proyecto Ahora <ChevronRight className="w-4 h-4" />
          </LeadButton>
        </div>
      </div>
    </div>
  );
}
