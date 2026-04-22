"use client";

import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import LeadButton from '@/components/ui/lead-button';

// Note: Metadata cannot be exported from client components. 
// Handled by layout or parent for title/description if needed.

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-[20vh] pb-20 overflow-hidden bg-zinc-950 text-white rounded-b-[4rem]">
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full -z-10" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
               <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
               <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Respuesta en menos de 2 horas</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
               Hablemos de <br/>tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">crecimiento.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-xl font-light leading-relaxed">
               Diseñamos estrategias de software web para marcas que buscan escalar de verdad. No importa dónde estés, trabajamos para todo Chile e internacional.
             </p>
           </div>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black tracking-tighter text-zinc-900 mb-8 uppercase">Contacto Directo</h2>
                <div className="space-y-6">
                  <a href="mailto:consultas@webunica.cl" className="flex items-start gap-5 group p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Email Principal</h3>
                      <p className="text-lg font-bold text-zinc-900 group-hover:text-violet-600 transition-colors">consultas@webunica.cl</p>
                    </div>
                  </a>
                  
                  <WhatsAppButton className="flex items-start gap-5 group p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors w-full text-left">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">WhatsApp & Teléfono</h3>
                      <p className="text-lg font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">+56 9 8441 0379</p>
                    </div>
                  </WhatsAppButton>
 
                  <div className="flex items-start gap-5 p-4 -ml-4">
                    <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Disponibilidad</h3>
                      <p className="text-lg font-bold text-zinc-900">Operación Nacional (Todo Chile)</p>
                      <p className="text-sm font-medium text-slate-500 mt-1">Lunes a Viernes: 09:00 - 18:00 hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h3 className="text-xl font-black tracking-tight text-zinc-900 mb-4">¿Prefieres escribirnos?</h3>
                <p className="text-slate-500 font-light mb-6">
                  Mándanos un mensaje directamente a nuestro WhatsApp y serás contactado por uno de nuestros consultores de ingeniería web en minutos.
                </p>
                <WhatsAppButton 
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-violet-600 transition-all shadow-lg active:scale-95"
                >
                  Abrir chat en WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </WhatsAppButton>
              </div>
            </div>

            {/* Right: Calendly Meeting Form Widget */}
            <div className="lg:col-span-7">
               <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100 h-full relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-[80px] -z-10" />
                 
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                     <Calendar className="w-6 h-6" />
                   </div>
                   <div>
                     <h2 className="text-2xl font-black tracking-tight text-zinc-900 uppercase">Consultoría Técnica VIP</h2>
                     <p className="text-sm font-medium text-slate-500">Video-Reunión de 30 minutos sin costo.</p>
                   </div>
                 </div>

                 <p className="text-slate-600 font-light leading-relaxed mb-10 text-pretty">
                   Agenda una sesión de exploración estratégica con nuestro director de proyectos. Revisaremos tus objetivos de negocio, auditaremos tu tecnología actual y delinearemos la estructura de la plataforma web que te llevará a escalar.
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
                     <Clock className="w-6 h-6 text-slate-400 shrink-0" />
                     <div>
                       <h4 className="font-bold text-zinc-900 mb-1 leading-none">Rápido y al grano</h4>
                       <p className="text-xs text-slate-500">Tu tiempo es oro. Rescatamos el máximo valor en 30 minutos.</p>
                     </div>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
                     <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                       $0
                     </div>
                     <div>
                       <h4 className="font-bold text-zinc-900 mb-1 leading-none">Totalmente gratuita</h4>
                       <p className="text-xs text-slate-500">Diagnóstico de software y arquitectura web de cortesía.</p>
                     </div>
                   </div>
                 </div>

                 <a 
                   href="https://calendly.com/javiermillar/reunion-webunica" 
                   target="_blank" 
                   rel="noreferrer"
                   className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-violet-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-violet-700 transition-all shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 active:translate-y-0"
                 >
                   Ver fechas disponibles en Calendly
                   <Calendar className="w-5 h-5" />
                 </a>

                 <LeadButton
                   className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-zinc-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-violet-600 transition-all mt-4 active:scale-95"
                 >
                   Cotizar mi proyecto
                   <ArrowRight className="w-5 h-5" />
                 </LeadButton>

                 <p className="text-center text-[11px] text-slate-400 mt-6 font-medium">Reuniones realizadas por Google Meet / Zoom</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-slate-100 py-12 bg-slate-50 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Empresas que confiaron en nuestra ingeniería</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Replace with actual partner logos if available, using text fallbacks for now */}
             <span className="text-xl font-black text-slate-900 tracking-tighter">SoloCasasChile</span>
             <span className="text-xl font-black text-slate-900 tracking-tighter">Shopify Partners</span>
             <span className="text-xl font-black text-slate-900 tracking-tighter">Vercel Next.js</span>
             <span className="text-xl font-black text-slate-900 tracking-tighter">Kinelawen</span>
             <span className="text-xl font-black text-slate-900 tracking-tighter">TerraAndes</span>
          </div>
        </div>
      </section>
    </div>
  );
}
