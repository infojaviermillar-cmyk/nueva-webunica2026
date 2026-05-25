"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Trash2, Mail, Phone, User, Building2, CheckCircle2, Plus, FileText, Tag } from 'lucide-react';
import { ALL_PLANS, PLANS_BY_CATEGORY, formatCLP, type Plan } from '@/lib/plans-catalog';

// Helper function to map lead's raw service interest keyword to recommended catalog plans
function mapServiceInterestToPlan(serviceParam: string): Plan | undefined {
  const service = serviceParam.toLowerCase();
  
  if (service.includes('shopify')) {
    return ALL_PLANS.find(p => p.id === 'sh-full');
  }
  if (service.includes('woocommerce') || service.includes('woo')) {
    return ALL_PLANS.find(p => p.id === 'woo-empresa');
  }
  if (service.includes('next.js') || service.includes('saas') || service.includes('nextjs')) {
    return ALL_PLANS.find(p => p.id === 'saas-mvp');
  }
  if (service.includes('odontología') || service.includes('dental') || service.includes('odontologia')) {
    return ALL_PLANS.find(p => p.id === 'dental-pro');
  }
  if (service.includes('inmobiliaria') || service.includes('inmo')) {
    return ALL_PLANS.find(p => p.id === 'inmo-base');
  }
  if (service.includes('lms') || service.includes('elearning') || service.includes('aula') || service.includes('tutor')) {
    return ALL_PLANS.find(p => p.id === 'lms-business-pro');
  }
  if (service.includes('sence')) {
    return ALL_PLANS.find(p => p.id === 'sence-pro');
  }
  if (service.includes('diseño') || service.includes('diseño web') || service.includes('seo') || service.includes('corporativa')) {
    return ALL_PLANS.find(p => p.id === 'web-corporativa-seo');
  }

  // Fallback fuzzy match
  return ALL_PLANS.find(p =>
    p.name.toLowerCase().includes(service.slice(0, 10)) ||
    p.category.toLowerCase().includes(service.slice(0, 10))
  );
}

function CotizadorContent() {
  const searchParams = useSearchParams();

  const [clientInfo, setClientInfo] = useState({
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    company: '',
    rut: '',
  });

  const [selectedPlans, setSelectedPlans] = useState<Plan[]>(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const found = mapServiceInterestToPlan(serviceParam);
      return found ? [found] : [];
    }
    return [];
  });

  const [discountPercent, setDiscountPercent] = useState(0);
  const [quoteNumber] = useState(
    () => `WU-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
  );
  const [notes, setNotes] = useState('');

  // ── Facto Integration States ──
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncSuccessMessage, setSyncSuccessMessage] = useState<string | null>(null);
  const [factoDocNumber, setFactoDocNumber] = useState<string | null>(null);
  const [factoDocUrl, setFactoDocUrl] = useState<string | null>(null);

  // ── Calculations ──
  const subtotal = selectedPlans.reduce((acc, p) => acc + p.price, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const subtotalWithDiscount = subtotal - discountAmount;
  const iva = Math.round(subtotalWithDiscount * 0.19);
  const total = subtotalWithDiscount + iva;

  const handleSyncWithFacto = async () => {
    if (selectedPlans.length === 0) return;
    setIsSyncing(true);
    setSyncError(null);
    setSyncSuccessMessage(null);

    try {
      const response = await fetch('/api/facto/crear-cotizacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientInfo,
          selectedPlans,
          discountPercent,
          quoteNumber,
          total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error al intentar crear el documento en Facto.cl');
      }

      setSyncSuccessMessage(data.message);
      setFactoDocNumber(data.docNumber);
      setFactoDocUrl(data.docUrl);
    } catch (err: any) {
      setSyncError(err.message || 'Error al conectar con la API de sincronización.');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleAddPlan = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planId = e.target.value;
    if (!planId) return;
    const plan = ALL_PLANS.find(p => p.id === planId);
    if (plan && !selectedPlans.find(p => p.id === planId)) {
      setSelectedPlans([...selectedPlans, plan]);
    }
    e.target.value = '';
  };

  const handleRemovePlan = (id: string) =>
    setSelectedPlans(selectedPlans.filter(p => p.id !== id));

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-100 pt-[22vh] lg:pt-40 pb-20 print:bg-white print:pt-0 print:pb-0">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Top Bar (hidden in print) ── */}
        <div className="flex items-center justify-between mb-10 print:hidden">
          <div>
            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Leads
            </Link>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">
              Cotizador{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">
                Interno
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleSyncWithFacto}
              disabled={isSyncing || selectedPlans.length === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9cce4a] to-[#88bc36] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:from-[#a8dc56] hover:to-[#96cd3d] transition-all shadow-lg active:scale-95 disabled:opacity-60 disabled:pointer-events-none hover:scale-105 hover:shadow-[0_8px_20px_rgba(156,206,74,0.2)] relative overflow-hidden"
            >
              {isSyncing ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sincronizando...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Crear en Facto.cl
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-violet-600 transition-all shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
          </div>
        </div>

        {/* ── Facto Integration Status Alert ── */}
        {(syncSuccessMessage || syncError) && (
          <div className={`mb-6 p-6 rounded-[2rem] border transition-all ${syncError ? 'bg-red-50 border-red-200 text-red-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800'} print:hidden`}>
            {syncError ? (
              <div className="flex items-start gap-3">
                <span className="p-1 bg-red-100 rounded-full text-red-600 font-bold shrink-0 mt-0.5">⚠️</span>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs mb-1">Error de Sincronización</h4>
                  <p className="text-sm font-medium text-red-700">{syncError}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="p-1 bg-emerald-100 rounded-full text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <div className="flex-1">
                  <h4 className="font-black uppercase tracking-widest text-xs mb-1 text-emerald-700">¡Cotización Sincronizada con Éxito!</h4>
                  <p className="text-sm font-medium text-emerald-800 mb-4">{syncSuccessMessage}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    {factoDocNumber && (
                      <div className="px-4 py-1.5 bg-white border border-emerald-200 rounded-xl text-xs font-bold text-emerald-700">
                        Nº Documento: <span className="font-black">{factoDocNumber}</span>
                      </div>
                    )}
                    {factoDocUrl && (
                      <a
                        href={factoDocUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                      >
                        Abrir Documento Oficial ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Document ── */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none">

          {/* Header */}
          <div className="bg-zinc-950 px-10 py-8 flex flex-col sm:flex-row justify-between items-start gap-8 print:bg-white print:border-b-2 print:border-zinc-900">
            <div>
              <img
                src="/logo-webunica.png.webp"
                alt="Webunica"
                className="h-8 brightness-0 invert print:invert-0 mb-4"
              />
              <div className="text-zinc-400 print:text-zinc-600 space-y-0.5 text-sm font-medium">
                <p className="text-white print:text-zinc-900 font-bold">Webunica Chile EIRL</p>
                <p>RUT: 76.371.864-6</p>
                <p>Providencia, Santiago, Chile</p>
                <p>consultas@webunica.cl · +56 9 8441 0379</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-4xl font-black uppercase tracking-widest text-white print:text-zinc-900 mb-2">
                Cotización
              </h2>
              <div className="text-zinc-400 print:text-zinc-500 space-y-1 text-sm font-medium">
                <p>
                  <span className="font-bold text-zinc-300 print:text-zinc-700">N°:</span>{' '}
                  {quoteNumber}
                </p>
                <p>
                  <span className="font-bold text-zinc-300 print:text-zinc-700">Fecha:</span>{' '}
                  {new Date().toLocaleDateString('es-CL', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <p>
                  <span className="font-bold text-zinc-300 print:text-zinc-700">Validez:</span>{' '}
                  15 días corridos
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10 space-y-10">

            {/* ── Client Info + Plan Selector ── */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Client Fields */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-between gap-2 flex-wrap">
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" /> Preparado para
                  </span>
                  {searchParams.get('leadId') && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-violet-100 border border-violet-200 text-violet-700 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">
                      ✓ Lead Vinculado
                    </span>
                  )}
                </h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4 print:bg-white print:border-none print:p-0">
                  {[
                    { icon: <User className="w-4 h-4" />, key: 'name', placeholder: 'Nombre Completo *', type: 'text' },
                    { icon: <Building2 className="w-4 h-4" />, key: 'company', placeholder: 'Empresa (opcional)', type: 'text' },
                    { icon: <Tag className="w-4 h-4" />, key: 'rut', placeholder: 'RUT cliente (opcional)', type: 'text' },
                    { icon: <Mail className="w-4 h-4" />, key: 'email', placeholder: 'correo@empresa.cl', type: 'email' },
                    { icon: <Phone className="w-4 h-4" />, key: 'phone', placeholder: '+56 9 XXXX XXXX', type: 'tel' },
                  ].map(({ icon, key, placeholder, type }) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-400 shrink-0 print:hidden">{icon}</span>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="bg-transparent outline-none w-full font-medium text-slate-900 placeholder:text-slate-300 text-sm"
                        value={clientInfo[key as keyof typeof clientInfo]}
                        onChange={e => setClientInfo({ ...clientInfo, [key]: e.target.value })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Selector + Discount (hidden in print) */}
              <div className="print:hidden space-y-5">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    <Plus className="w-3.5 h-3.5" /> Agregar Planes / Servicios
                  </h3>
                  <select
                    onChange={handleAddPlan}
                    defaultValue=""
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 font-medium text-slate-700 text-sm cursor-pointer hover:border-violet-400 transition-colors"
                  >
                    <option value="" disabled>Seleccionar plan o servicio...</option>
                    {Object.entries(PLANS_BY_CATEGORY).map(([cat, plans]) => (
                      <optgroup key={cat} label={cat}>
                        {plans.map(p => (
                          <option key={p.id} value={p.id}>
                            {p.name} — {formatCLP(p.price)} neto
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <p className="text-xs text-slate-400 font-medium mt-2 px-1">
                    💡 Los planes son exactamente los mismos que aparecen en el sitio web.
                  </p>
                </div>

                {/* Discount */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-3 block">
                    Descuento Comercial
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="5"
                      value={discountPercent}
                      onChange={e => setDiscountPercent(Number(e.target.value))}
                      className="flex-1 accent-emerald-600"
                    />
                    <div className="flex items-center gap-1 bg-white border border-emerald-200 rounded-xl px-3 py-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={discountPercent}
                        onChange={e =>
                          setDiscountPercent(Math.min(100, Math.max(0, Number(e.target.value))))
                        }
                        className="w-10 text-center font-black text-emerald-700 bg-transparent outline-none text-sm"
                      />
                      <span className="font-black text-emerald-700">%</span>
                    </div>
                  </div>
                  {discountPercent > 0 && (
                    <p className="text-sm font-bold text-emerald-700 mt-2">
                      Ahorro cliente: {formatCLP(discountAmount)}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                    Notas internas (no se imprime)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej: Cliente referido, plazo urgente, reunión el viernes..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm font-medium text-slate-600 resize-none focus:border-violet-400 placeholder:text-slate-300"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* ── Line Items ── */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                Detalle de Planes y Servicios
              </h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <th className="px-6 py-4">Plan / Servicio</th>
                      <th className="px-6 py-4 hidden md:table-cell">Incluye</th>
                      <th className="px-6 py-4 text-right whitespace-nowrap">Monto Neto</th>
                      <th className="px-4 py-4 w-12 print:hidden" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedPlans.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-10 text-center text-slate-300 font-medium italic text-sm print:hidden"
                        >
                          Selecciona planes del listado para agregarlos aquí.
                        </td>
                      </tr>
                    ) : (
                      selectedPlans.map(plan => (
                        <tr key={plan.id} className="group align-top">
                          <td className="px-6 py-5">
                            <div className="font-black text-slate-900 text-sm leading-snug">
                              {plan.name}
                            </div>
                            <div className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mt-1">
                              {plan.highlight}
                            </div>
                            <div className="text-xs text-slate-500 font-light mt-1 leading-relaxed max-w-xs">
                              {plan.desc}
                            </div>
                            {plan.deliveryDays && (
                              <div className="mt-2 inline-block px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-bold uppercase tracking-widest">
                                ⏱ {plan.deliveryDays}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-5 hidden md:table-cell">
                            <ul className="space-y-1.5">
                              {plan.features.map((f, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-tight"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <div className="font-black text-slate-900 text-sm whitespace-nowrap">
                              {formatCLP(plan.price)}
                            </div>
                            {plan.originalPrice && (
                              <div className="text-xs text-slate-400 line-through font-medium">
                                {formatCLP(plan.originalPrice)}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-5 print:hidden">
                            <button
                              onClick={() => handleRemovePlan(plan.id)}
                              className="p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Totals ── */}
            <div className="flex justify-end">
              <div className="w-full max-w-sm space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Subtotal Neto:</span>
                  <span className="font-bold">{formatCLP(subtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-sm font-bold text-emerald-600">
                    <span>Descuento ({discountPercent}%):</span>
                    <span>− {formatCLP(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-medium text-slate-600 pt-3 border-t border-slate-200">
                  <span>Neto a pagar:</span>
                  <span className="font-bold">{formatCLP(subtotalWithDiscount)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>IVA (19%):</span>
                  <span className="font-bold">{formatCLP(iva)}</span>
                </div>
                <div className="flex justify-between text-xl font-black text-slate-900 pt-4 border-t-2 border-zinc-900">
                  <span>TOTAL:</span>
                  <span>{formatCLP(total)}</span>
                </div>
              </div>
            </div>

            {/* ── Conditions ── */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 print:bg-white print:border-t-2 print:border-zinc-900 print:border-x-0 print:border-b-0 print:rounded-none">
              <h4 className="font-black text-slate-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-violet-600" /> Condiciones Comerciales
              </h4>
              <ul className="text-sm text-slate-600 space-y-2 font-medium list-disc list-inside">
                <li>
                  Forma de pago:{' '}
                  <strong>50% al inicio del proyecto</strong>, 50% a la entrega en producción.
                </li>
                <li>
                  Los valores están expresados en pesos chilenos (CLP). Los precios netos están
                  sujetos a IVA (19%) según ley.
                </li>
                <li>
                  Tiempo de entrega estimado según complejidad del proyecto (definido en reunión de
                  Kick-off).
                </li>
                <li>
                  Garantía de código y soporte técnico por{' '}
                  <strong>30 días</strong> desde la entrega en producción.
                </li>
                <li>Cotización válida por 15 días corridos desde su emisión.</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-400 font-medium">
                <p>
                  Webunica Chile EIRL · RUT 76.371.864-6 · consultas@webunica.cl · +56 9 8441 0379
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function CotizadorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-100 pt-40 text-center font-bold text-slate-400">
          Cargando cotizador...
        </div>
      }
    >
      <CotizadorContent />
    </Suspense>
  );
}
