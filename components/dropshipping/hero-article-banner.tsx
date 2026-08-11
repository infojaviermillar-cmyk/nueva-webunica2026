"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, X, Zap, CheckCircle2, ArrowRight, Sparkles, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export function HeroArticleBanner() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Featured Callout Banner in Hero */}
      <div className="w-full my-6 p-4 md:p-5 bg-gradient-to-r from-purple-900/90 via-slate-900 to-purple-950 text-white rounded-3xl border border-purple-500/30 shadow-xl shadow-purple-950/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 bg-brand-purple text-white text-[10px] font-black uppercase tracking-wider rounded-md">
                  Guía Estratégica
                </span>
                <span className="text-purple-300 text-xs font-mono font-medium">Recomendado para Emprendedores</span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                Por qué Shopify + Dropi no Garantizan Ventas: La Guía Real para Chile
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-white/10 hover:bg-white/20 text-purple-200 border border-purple-400/20 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4 text-purple-300" />
              <span>Ver Resumen (Modal)</span>
            </button>

            <Link
              href="/blog/shopify-dropi-chile-estrategia-ecommerce-rentable"
              className="flex-1 sm:flex-none px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Leer Artículo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-6 md:p-8 bg-slate-900 text-white relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-extrabold rounded-full uppercase tracking-wider">
                  Resumen Ejecutivo
                </span>
                <span className="text-slate-400 text-xs font-medium">Lectura rápida: 2 min</span>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-white leading-snug tracking-tight pr-8">
                Por qué Shopify + Dropi no Garantizan Ventas: La Guía Estratégica para Crear un Ecommerce Rentable en Chile
              </h2>
            </div>

            {/* Formula Banner inside Modal */}
            <div className="bg-purple-950 px-6 py-3 border-b border-purple-800 flex items-center justify-between text-xs text-purple-200 font-mono overflow-x-auto">
              <span className="font-bold shrink-0">Ecuación Real:</span>
              <span className="text-purple-300 font-bold shrink-0">
                Éxito = Producto × Oferta × Creatividad × Tráfico × CRO × Operación
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-600 text-sm leading-relaxed">
              <p className="text-base text-slate-800 font-medium leading-normal">
                Crear una tienda Shopify conectada a Dropi no significa tener un negocio exitoso. La tecnología es solo la infraestructura; el resultado comercial depende de la propuesta, la confianza y la estrategia publicitaria.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>1. La tienda es solo infraestructura</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Tener Shopify + Dropi es equivalente a alquilar un local y pintar las paredes. El verdadero negocio comienza al definir a quién le resuelves un problema y cuánto cuesta adquirir cada cliente.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2. Validación del producto</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Importar a ciegas falla. Debes responder: ¿por qué te comprarían a ti en lugar de Mercado Libre (entrega 24h Full), Temu o AliExpress?
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <Zap className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>3. Construcción de una Oferta</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    No vendas solo un producto suelto. Combina problema, solución, demostración visual en video, prueba social, garantía y anclaje de precios.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>4. Confianza local en Chile</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Pasarelas de pago conocidas (Webpay Plus, Mercado Pago, CuentaRUT) e información transparente de envíos por Blue Express, Starken y Chilexpress.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl">
                <h4 className="font-bold text-purple-900 text-xs uppercase tracking-wider mb-2">
                  El Método de Validación de 6 Fases de Webunica:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-700">
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">1. Validación</span>
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">2. Marca</span>
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">3. Tienda CRO</span>
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">4. Contenido UGC</span>
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">5. Pauta Test</span>
                  <span className="p-2 bg-white rounded-lg border border-purple-100 text-center">6. Escalado</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog/shopify-dropi-chile-estrategia-ecommerce-rentable"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-purple hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Leer Artículo Completo (2.450 Palabras)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <LeadButton
                service="Dropshipping Shopify & Dropi"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer"
              >
                Cotizar Mi Proyecto
              </LeadButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
