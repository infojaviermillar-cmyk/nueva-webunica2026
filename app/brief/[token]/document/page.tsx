"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Printer, 
  Share2, 
  Edit3, 
  Sparkles, 
  CheckCircle2, 
  ShieldAlert, 
  FileText, 
  ExternalLink,
  Layers,
  Award,
  Globe,
  Building2,
  Copy,
  Check
} from 'lucide-react';
import { getBriefByToken } from '@/lib/brief';
import { generateAIAnalysis } from '@/lib/brief-ai';
import { BriefProject } from '@/types/brief';

export default function BriefDocumentPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;
  const router = useRouter();

  const [brief, setBrief] = useState<BriefProject | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    async function loadData() {
      const loaded = await getBriefByToken(token);
      if (loaded) {
        if (!loaded.aiAnalysis) {
          loaded.aiAnalysis = generateAIAnalysis(loaded);
        }
        setBrief(loaded);
      }
    }
    loadData();
  }, [token]);

  if (!brief) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
        <div className="flex items-center gap-3 text-zinc-600 font-mono text-xs">
          <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
          <span>Cargando documento Brief UX/UI...</span>
        </div>
      </div>
    );
  }

  const company = brief.projectInfo.companyName || 'Proyecto Ecommerce';
  const ai = brief.aiAnalysis || generateAIAnalysis(brief);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/brief/${token}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 font-sans antialiased pb-20 print:bg-white print:p-0">
      {/* Top Action Bar (Hidden when Printing) */}
      <header className="bg-slate-950 text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800 print:hidden sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={`/brief/${token}`} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Wizard</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer font-bold"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-300" />}
              <span>{copiedLink ? '¡Enlace Copiado!' : 'Compartir Token'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-extrabold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>

            <Link
              href="/briefs"
              className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl transition-all font-mono"
            >
              Dashboard /briefs
            </Link>
          </div>
        </div>
      </header>

      {/* Main Printable Document Card */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 print:p-0 print:max-w-none">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-lg print:border-none print:shadow-none print:p-0 space-y-10">
          
          {/* Document Header */}
          <div className="border-b border-zinc-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-900 font-mono font-black text-xs rounded-full uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Brief UX/UI Oficial — Webunica</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                Brief UX/UI — {company}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                Documento de especificaciones de diseño y arquitectura de e-commerce
              </p>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs font-mono space-y-1 text-right sm:text-right shrink-0">
              <div><span className="text-zinc-400">Fecha:</span> <strong className="text-zinc-900">{new Date(brief.updatedAt).toLocaleDateString('es-CL')}</strong></div>
              <div><span className="text-zinc-400">Estado:</span> <span className="text-purple-700 font-bold">{brief.status}</span></div>
              <div><span className="text-zinc-400">Token ID:</span> <code className="text-zinc-800">{brief.token}</code></div>
            </div>
          </div>

          {/* CONCLUSIONES GENERADAS POR IA */}
          <div className="p-6 bg-slate-950 text-white rounded-3xl space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-black uppercase tracking-wider text-purple-300">
                Dirección Recomendada UX/UI (Análisis IA)
              </h2>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {ai.executiveSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  5 Principios de Diseño
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 font-light">
                  {ai.designPrinciples.map((dp, i) => (
                    <li key={i} className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">{dp}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Riesgos a Evitar
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 font-light">
                  {ai.risksToAvoid.map((r, i) => (
                    <li key={i} className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">⚠️ {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 1. INFORMACIÓN DEL PROYECTO */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-tight border-b border-zinc-100 pb-2">
              1. Información del Proyecto
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Empresa:</span><strong className="text-zinc-900 font-bold">{brief.projectInfo.companyName || 'N/A'}</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Sitio Actual:</span><strong className="text-zinc-900 font-bold font-mono">{brief.projectInfo.currentWebsite || 'N/A'}</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Nuevo Dominio:</span><strong className="text-zinc-900 font-bold font-mono">{brief.projectInfo.newStoreDomain || 'N/A'}</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Responsable:</span><strong className="text-zinc-900 font-bold">{brief.projectInfo.projectLeadName} ({brief.projectInfo.projectLeadRole})</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Contacto:</span><strong className="text-zinc-900 font-bold font-mono">{brief.projectInfo.email} | {brief.projectInfo.phone}</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-400 block font-mono">Tipo Proyecto:</span><strong className="text-purple-700 font-bold">{brief.projectInfo.projectType}</strong></div>
            </div>
            {brief.projectInfo.projectDescription && (
              <p className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-700 leading-relaxed font-light">
                <strong>Descripción:</strong> {brief.projectInfo.projectDescription}
              </p>
            )}
          </section>

          {/* 2. PERSONALIDAD E IDENTIDAD VISUAL */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-tight border-b border-zinc-100 pb-2">
              2. Identidad & Personalidad de Marca
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <span className="font-bold text-zinc-900 block">Atributos Seleccionados:</span>
                <div className="flex flex-wrap gap-1.5">
                  {brief.brandPersonality.attributes.map(a => (
                    <span key={a} className="px-2.5 py-1 bg-purple-600 text-white font-bold rounded-lg text-xs">{a}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <span className="font-bold text-zinc-900 block">Tres palabras clave:</span>
                <p className="font-mono font-bold text-purple-900 text-sm">
                  "{brief.brandPersonality.threeWords.filter(Boolean).join(' • ') || 'Sin especificar'}"
                </p>
              </div>
            </div>

            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-xs space-y-2">
              <span className="font-bold text-zinc-900 block">Colores Corporativos:</span>
              <div className="flex flex-wrap gap-3">
                {brief.brandIdentity.colors.map(c => (
                  <div key={c.hex} className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-zinc-200">
                    <div className="w-5 h-5 rounded-md border border-zinc-300" style={{ backgroundColor: c.hex }} />
                    <span className="font-mono font-bold">{c.hex}</span>
                    {c.name && <span className="text-zinc-500">({c.name})</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. DIRECCIÓN GRÁFICA (LAS 9 ESCALAS) */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-tight border-b border-zinc-100 pb-2">
              3. Balances de Dirección Gráfica (Escalas 1-5)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Diseño general:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.generalDesign}/5 (Minimalista ↔ Visual)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Personalidad:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.personality}/5 (Corporativo ↔ Cercano)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Posicionamiento:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.positioning}/5 (Masivo ↔ Premium)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Fotografías:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.photoUsage}/5 (Producto ↔ Lifestyle)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Uso del Color:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.colorUsage}/5 (Sobrio ↔ Colorido)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Información:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.informationDensity}/5 (Limpia ↔ Informativa)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Promociones:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.promotionsProminence}/5 (Discretas ↔ Protagonistas)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Experiencia:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.shoppingExperience}/5 (Marketplace ↔ Boutique)</strong></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200"><span className="text-zinc-500 block">Navegación:</span><strong className="text-purple-900 font-bold">{brief.visualDirection.navigationStyle}/5 (Inspiracional ↔ Búsqueda)</strong></div>
            </div>
          </section>

          {/* 4. ARQUITECTURA DEL HOME & PRODUCTO */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-tight border-b border-zinc-100 pb-2">
              4. Prioridades de Arquitectura (Home & Ficha Producto)
            </h2>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-purple-950 block">Top 5 Módulos del Home:</span>
              <div className="flex flex-wrap gap-2">
                {brief.homepagePriorities.topFiveModules.map((m, i) => (
                  <span key={m} className="px-3 py-1 bg-purple-600 text-white font-mono font-bold rounded-lg">{i + 1}. {m}</span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-zinc-900 block">Elementos Above-the-Fold en Ficha de Producto:</span>
              <div className="flex flex-wrap gap-1.5">
                {brief.productPagePriorities.aboveTheFoldElements.map(e => (
                  <span key={e} className="px-2.5 py-1 bg-white border border-zinc-200 text-zinc-800 font-semibold rounded-lg">{e}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 5. FACTORES DE CONFIANZA & MOBILE */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-tight border-b border-zinc-100 pb-2">
              5. Conversión, Confianza & Pantallas Prioritarias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <span className="font-bold text-zinc-900 block">Elementos de Confianza:</span>
                <div className="flex flex-wrap gap-1">
                  {brief.clientDoubts.trustElements.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <span className="font-bold text-zinc-900 block">Pantallas a Diseñar en 1ra Propuesta:</span>
                <div className="flex flex-wrap gap-1">
                  {brief.contentAndScope.priorityScreens.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-purple-100 text-purple-900 font-bold rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer del Documento */}
          <div className="pt-8 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Webunica.cl — Ingeniería & Diseño UX/UI E-commerce</span>
            <span>Generado automáticamente</span>
          </div>

        </div>
      </main>
    </div>
  );
}
