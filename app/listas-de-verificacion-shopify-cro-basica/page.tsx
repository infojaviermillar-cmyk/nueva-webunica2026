'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Circle, CheckCircle2, Loader2 } from 'lucide-react';

export default function ChecklistBasicaPage() {
  const [loading, setLoading] = useState(true);
  const [rawText, setRawText] = useState<string>('');

  useEffect(() => {
    async function fetchChecklist() {
      try {
        const response = await fetch('/listas-de-verificacion-shopify-cro-basica.txt');
        const text = await response.text();
        setRawText(text);
      } catch (e) {
        console.error("Error fetching checklist text", e);
      } finally {
        setLoading(false);
      }
    }
    
    fetchChecklist();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-violet-600 animate-spin mb-4" />
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Cargando guía informativa...</p>
        </div>
      </div>
    );
  }

  const lines = rawText.split('\n');

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <Link href="/desarrollo-tiendas-shopify-en-chile" className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mb-10 hover:underline group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Tiendas Shopify
        </Link>
        
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden">
           
           {/* Decorational Background */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />

           <div className="relative z-10 mb-14">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/50 border border-violet-200 text-violet-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
               Guía Informativa
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">Lista de Verificación<br/><span className="text-violet-600">CRO Básica</span></h1>
             <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
               Optimiza los elementos fundamentales de tu tienda para empezar a convertir visitas en ventas. Te compartimos nuestra lista de chequeo de <strong>solo lectura</strong> para que compruebes si tu tienda cumple con las mejores prácticas.
             </p>
           </div>
           
           <div className="relative z-10 text-slate-700">
             {lines.map((line, i) => {
               // Remove horizontal rule lines from text since we render visual borders
               if (line.startsWith('========')) return null;
               
               // Headings
               if (line.match(/^\d+\./) || line === 'RESULTADO RÁPIDO' || line === 'CIERRE COMERCIAL SUGERIDO') {
                   return <h2 key={i} className="text-2xl pt-4 font-black text-slate-900 mt-14 mb-6 border-b border-slate-100 pb-4">{line.replace(/=/g,'')}</h2>;
               }
               
               // Checklist item (readonly)
               if (line.startsWith('[ ]')) {
                   return (
                     <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 my-3 shadow-sm hover:shadow-md hover:border-violet-200 transition-all">
                       <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                       <span className="font-semibold text-slate-700 leading-snug">{line.replace('[ ] ', '')}</span>
                     </div>
                   );
               }
               
               // Empty space
               if (line.trim() === '') return <br key={i} className="hidden md:block" />;
               
               // Standard Paragraph
               return <p key={i} className="leading-relaxed font-medium text-slate-500 my-1">{line}</p>;
             })}
           </div>

           <div className="mt-16 p-8 bg-violet-600 text-white rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
              <h3 className="text-2xl font-black mb-4 relative z-10">¿Tu tienda falló en varios puntos?</h3>
              <p className="text-violet-100 mb-8 relative z-10">Agenda una sesión de diagnóstico para optimizar estructuralmente tu Shopify y escalar al siguiente nivel.</p>
              <Link href="/desarrollo-tiendas-shopify-en-chile" className="inline-block px-8 py-4 bg-white text-violet-900 font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform relative z-10 shadow-xl">
                 Agendar Asesoría
              </Link>
           </div>

        </div>
      </div>
    </main>
  );
}
