'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  CheckCircle2, 
  Cookie, 
  UserCheck, 
  FileText, 
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export default function Ley21719ShowcaseSection() {
  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden border-y border-slate-200/80">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Normativa Obligatoria Chile 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-950 tracking-tight font-heading leading-tight mb-4">
            Cumplimiento Web <br className="hidden sm:inline" />
            <span className="text-blue-600">Ley N° 21.719</span> Datos Personales
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Adapta tu sitio web o e-commerce a la nueva ley de privacidad en Chile. Evita multas de hasta <strong className="text-slate-900 font-semibold">20.000 UTM</strong> implementando consentimientos informados, derechos ARCOP y ciberseguridad.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Consentimiento Expreso</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Checkboxes en formularios y checkout desmarcados por defecto con leyenda legal informada.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
              <span>Auditable y trazable</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Cookie className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Cookies Consent Mode v2</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Banner interactivo con bloqueo previo de scripts publicitarios y analíticos antes de la aceptación.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] font-semibold text-purple-600 flex items-center gap-1">
              <span>Google & Meta Compliant</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Portal de Derechos ARCOP</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formulario digital para que tus usuarios ejercen su derecho a Rectificación, Supresión y Portabilidad.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
              <span>Acceso, Supresión, Oposición</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Protección ante Multas</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Evita sanciones severas de la nueva Agencia de Protección de Datos Personales en Chile.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] font-semibold text-rose-600 flex items-center gap-1">
              <span>Hasta 20.000 UTM</span>
            </div>
          </div>

        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-white/10">
              Servicio de Ingeniería Legal-Tech
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading leading-tight mb-2">
              ¿Tu sitio web cumple con la Ley 21.719?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Auditamos tu plataforma actual o desarrollamos tu nueva web 100% preparada con los estándares exigidos por la legislación chilena.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <Link 
              href="/ley-21719-proteccion-de-datos-personales"
              className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 text-center flex items-center justify-center gap-2 group"
            >
              <span>Ver Solución Ley 21.719</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <LeadButton 
              service="Evaluación Ley 21.719" 
              className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-wider transition-all text-center cursor-pointer"
            >
              Cotizar Evaluación
            </LeadButton>
          </div>
        </div>

      </div>
    </section>
  );
}
