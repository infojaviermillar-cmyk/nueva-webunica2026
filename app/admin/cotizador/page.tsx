"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Download, 
  Trash2, 
  Mail, 
  Phone, 
  User, 
  Building2, 
  CheckCircle2, 
  Plus, 
  FileText, 
  Tag,
  Copy,
  Check,
  CreditCard,
  Percent,
  Sliders,
  DollarSign,
  Briefcase,
  HelpCircle,
  Sparkles,
  Calendar
} from 'lucide-react';
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

  // --- Core States ---
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

  // --- Custom Service Inputs ---
  const [customName, setCustomName] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customPrice, setCustomPrice] = useState<number | ''>('');
  const [customDelivery, setCustomDelivery] = useState('');
  const [customFeaturesText, setCustomFeaturesText] = useState('');

  // --- Financial & Options ---
  const [discountPercent, setDiscountPercent] = useState(0);
  const [taxType, setTaxType] = useState<'factura' | 'boleta' | 'exento'>('factura');
  const [showBankDetails, setShowBankDetails] = useState(true);
  const [notes, setNotes] = useState('');
  
  const [quoteNumber] = useState(
    () => `WU-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
  );

  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // --- Calculations ---
  const subtotal = selectedPlans.reduce((acc, p) => acc + p.price, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const subtotalWithDiscount = subtotal - discountAmount;

  let taxAmount = 0;
  let total = 0;
  let taxLabel = 'IVA (19%)';
  let totalLabel = 'TOTAL A PAGAR';

  if (taxType === 'factura') {
    taxAmount = Math.round(subtotalWithDiscount * 0.19);
    total = subtotalWithDiscount + taxAmount;
    taxLabel = 'IVA (19%)';
    totalLabel = 'TOTAL A PAGAR';
  } else if (taxType === 'boleta') {
    // Tasa oficial chilena de Retención de Honorarios (Año 2026: 14.25%)
    taxAmount = Math.round(subtotalWithDiscount * 0.1425);
    total = subtotalWithDiscount - taxAmount; // Total líquido
    taxLabel = 'Retención S.I.I. (14.25%)';
    totalLabel = 'TOTAL LÍQUIDO';
  } else {
    // Exento
    taxAmount = 0;
    total = subtotalWithDiscount;
    taxLabel = 'Impuestos (Exento)';
    totalLabel = 'TOTAL NETO';
  }

  // --- Handlers ---
  const handleAddPlan = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planId = e.target.value;
    if (!planId) return;
    const plan = ALL_PLANS.find(p => p.id === planId);
    if (plan && !selectedPlans.find(p => p.id === planId)) {
      setSelectedPlans([...selectedPlans, plan]);
    }
    e.target.value = '';
  };

  const handleAddCustomPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName || !customPrice) return;

    const newCustomPlan: Plan = {
      id: `custom-${Date.now()}`,
      name: customName,
      highlight: 'Servicio Personalizado',
      desc: customDesc || 'Desarrollo y soporte a medida según requerimientos del proyecto.',
      price: Number(customPrice),
      deliveryDays: customDelivery || undefined,
      features: customFeaturesText
        ? customFeaturesText.split('\n').map(f => f.trim()).filter(Boolean)
        : ['Desarrollo a medida', 'Garantía técnica de código', 'Configuración profesional'],
      category: '✨ Servicios a Medida',
    };

    setSelectedPlans([...selectedPlans, newCustomPlan]);

    // Reset fields
    setCustomName('');
    setCustomDesc('');
    setCustomPrice('');
    setCustomDelivery('');
    setCustomFeaturesText('');
  };

  const handleRemovePlan = (id: string) => {
    setSelectedPlans(selectedPlans.filter(p => p.id !== id));
  };

  const handleCopyToWhatsApp = () => {
    if (selectedPlans.length === 0) return;

    let text = `⚡ *PROPUESTA COMERCIAL - WEBUNICA CHILE* ⚡\n`;
    text += `--------------------------------------------\n`;
    text += `*Cotización:* ${quoteNumber}\n`;
    text += `*Cliente:* ${clientInfo.name || 'Cliente Distinguido'}\n`;
    if (clientInfo.company) text += `*Empresa:* ${clientInfo.company}\n`;
    if (clientInfo.rut) text += `*RUT:* ${clientInfo.rut}\n`;
    text += `*Fecha:* ${new Date().toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' })}\n\n`;
    
    text += `*Detalle de Servicios Cotizados:*\n`;
    selectedPlans.forEach((p, idx) => {
      text += `${idx + 1}. *${p.name}* - ${formatCLP(p.price)} neto\n`;
      text += `   _${p.desc}_\n`;
      if (p.deliveryDays) text += `   ⏱ _Plazo: ${p.deliveryDays}_\n`;
      if (p.features && p.features.length > 0) {
        text += `   _Incluye:_\n`;
        p.features.slice(0, 4).forEach(f => {
          text += `   • ${f}\n`;
        });
        if (p.features.length > 4) text += `   • y otros detalles adicionales...\n`;
      }
      text += `\n`;
    });

    text += `--------------------------------------------\n`;
    text += `*Resumen Financiero:*\n`;
    text += `• Subtotal Neto: ${formatCLP(subtotal)}\n`;
    if (discountPercent > 0) {
      text += `• Descuento (${discountPercent}%): -${formatCLP(discountAmount)}\n`;
    }
    
    if (taxType === 'factura') {
      text += `• Neto a Pagar: ${formatCLP(subtotalWithDiscount)}\n`;
      text += `• IVA (19%): ${formatCLP(taxAmount)}\n`;
      text += `• *TOTAL A PAGAR:* ${formatCLP(total)}\n\n`;
    } else if (taxType === 'boleta') {
      text += `• Monto Bruto: ${formatCLP(subtotalWithDiscount)}\n`;
      text += `• Retención S.I.I. (14.25%): -${formatCLP(taxAmount)}\n`;
      text += `• *TOTAL LÍQUIDO A PAGAR:* ${formatCLP(total)}\n\n`;
    } else {
      text += `• *TOTAL (EXENTO):* ${formatCLP(total)}\n\n`;
    }

    text += `*Condiciones Comerciales:*\n`;
    text += `• 50% para dar inicio al proyecto y 50% contra entrega conforme.\n`;
    text += `• Precios en pesos chilenos (CLP).\n`;
    text += `• Soporte y garantía técnica incluidos por 30 días.\n`;
    text += `• Validez de cotización: 15 días corridos.\n\n`;
    
    if (showBankDetails) {
      text += `*Datos de Transferencia Bancaria:*\n`;
      text += `• Banco Estado de Chile | Cuenta Vista o Chequera Electrónica\n`;
      text += `• Cuenta: 62900224166 | Webunica Chile EIRL\n`;
      text += `• RUT: 76.371.864-6 | pagos@webunica.cl\n\n`;
    }

    text += `🚀 ¡Quedamos a su total disposición para dar inicio al desarrollo!`;

    navigator.clipboard.writeText(text);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50/50 pt-[22vh] lg:pt-36 pb-20 print:bg-white print:pt-0 print:pb-0 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* --- Top Header Admin Bar (hidden in print) --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-200 print:hidden gap-6">
          <div>
            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-violet-600 uppercase tracking-widest mb-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Leads
            </Link>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">
              Cotizador{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">
                Interno
              </span>
            </h1>
            <p className="text-sm text-slate-500 font-medium mt-1.5">
              Genera y optimiza cotizaciones corporativas con exportación instantánea.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyToWhatsApp}
              disabled={selectedPlans.length === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
                copiedWhatsApp 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              {copiedWhatsApp ? (
                <>
                  <Check className="w-4 h-4" />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar para WhatsApp
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              disabled={selectedPlans.length === 0}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-violet-600 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
          </div>
        </div>

        {/* --- Grid Layout: Admin Controls (Left) | live PDF Preview (Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================= */}
          {/* CONTROLES ADMINISTRATIVOS (LEFT) - HIDDEN ON PRINT        */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6 print:hidden">
            
            {/* Tarjeta 1: Información del Cliente */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-violet-500" /> Información del Cliente
                </span>
                {searchParams.get('leadId') && (
                  <span className="px-2.5 py-0.5 bg-violet-50 border border-violet-100 text-violet-600 rounded-full text-[8px] font-black uppercase tracking-widest">
                    ✓ Lead Vinculado
                  </span>
                )}
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: <User className="w-4 h-4" />, key: 'name', placeholder: 'Nombre Completo del Cliente *', type: 'text' },
                  { icon: <Building2 className="w-4 h-4" />, key: 'company', placeholder: 'Empresa o Razón Social (opcional)', type: 'text' },
                  { icon: <Tag className="w-4 h-4" />, key: 'rut', placeholder: 'RUT Comercial (ej: 76.371.864-6)', type: 'text' },
                  { icon: <Mail className="w-4 h-4" />, key: 'email', placeholder: 'correo@empresa.cl', type: 'email' },
                  { icon: <Phone className="w-4 h-4" />, key: 'phone', placeholder: '+56 9 XXXX XXXX', type: 'tel' },
                ].map(({ icon, key, placeholder, type }) => (
                  <div key={key} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-400 shrink-0">{icon}</span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="bg-transparent outline-none w-full font-medium text-slate-800 placeholder:text-slate-300 text-sm focus:placeholder:text-slate-400 transition-colors"
                      value={clientInfo[key as keyof typeof clientInfo]}
                      onChange={e => setClientInfo({ ...clientInfo, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta 2: Agregar Catálogo Standard */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Plus className="w-4 h-4 text-violet-500" /> Añadir Planes del Catálogo
              </h3>
              
              <select
                onChange={handleAddPlan}
                defaultValue=""
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-violet-500 focus:bg-white font-medium text-slate-700 text-xs cursor-pointer transition-all"
              >
                <option value="" disabled>Seleccionar plan o add-on del sitio...</option>
                {Object.entries(PLANS_BY_CATEGORY).map(([cat, plans]) => (
                  <optgroup key={cat} label={cat} className="font-bold text-slate-900 text-[11px]">
                    {plans.map(p => (
                      <option key={p.id} value={p.id} className="font-medium text-slate-700">
                        {p.name} — {formatCLP(p.price)} neto
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <p className="text-[10px] text-slate-400 font-medium mt-2 px-1">
                💡 Los planes y add-ons se sincronizan automáticamente con el catálogo web.
              </p>
            </div>

            {/* Tarjeta 3: Formulario de Servicio Personalizado */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-500" /> Crear Servicio Personalizado
              </h3>
              
              <form onSubmit={handleAddCustomPlan} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nombre del Servicio Especial *"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:bg-white outline-none focus:border-violet-500 transition-all"
                    value={customName}
                    onChange={e => setCustomName(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Descripción detallada de la propuesta..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:bg-white outline-none focus:border-violet-500 transition-all resize-none"
                    value={customDesc}
                    onChange={e => setCustomDesc(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-xs">$</span>
                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="Monto Neto *"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-7 pr-3 py-2.5 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white outline-none focus:border-violet-500 transition-all"
                      value={customPrice}
                      onChange={e => setCustomPrice(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Plazo (ej: 5 días)"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:bg-white outline-none focus:border-violet-500 transition-all"
                      value={customDelivery}
                      onChange={e => setCustomDelivery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Características incluidas (una por línea, opcional)..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-medium text-slate-600 placeholder:text-slate-400 focus:bg-white outline-none focus:border-violet-500 transition-all resize-none"
                    value={customFeaturesText}
                    onChange={e => setCustomFeaturesText(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-violet-200 transition-all active:scale-95"
                >
                  Agregar Ítem Especial
                </button>
              </form>
            </div>

            {/* Tarjeta 4: Configuración Financiera y Tributos */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6 space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-violet-500" /> Configuración Comercial
              </h3>

              {/* Toggles Tributarios */}
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                  Régimen Tributario / Documento
                </label>
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200">
                  {[
                    { id: 'factura', label: 'Factura (19%)' },
                    { id: 'boleta', label: 'Honorarios' },
                    { id: 'exento', label: 'Sin IVA' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTaxType(t.id as any)}
                      className={`py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                        taxType === t.id 
                          ? 'bg-zinc-900 text-white shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider de Descuento */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Descuento Comercial
                  </label>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {discountPercent}% OFF
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={discountPercent}
                    onChange={e => setDiscountPercent(Number(e.target.value))}
                    className="flex-1 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={discountPercent}
                      onChange={e =>
                        setDiscountPercent(Math.min(100, Math.max(0, Number(e.target.value))))
                      }
                      className="w-8 text-center font-black text-xs text-slate-700 bg-transparent outline-none"
                    />
                    <span className="font-bold text-xs text-slate-400">%</span>
                  </div>
                </div>
              </div>

              {/* Toggle Datos Bancarios */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-700">Incluir Datos de Pago</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showBankDetails}
                    onChange={() => setShowBankDetails(!showBankDetails)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
                </label>
              </div>

              {/* Notas Internas */}
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Notas Internas (no se imprimen)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: Cliente solicitó urgencia, referido de Javier..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 placeholder:text-slate-300 focus:bg-white focus:border-violet-500 outline-none transition-all resize-none"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* HOJA DE COTIZACIÓN PREVIEW (RIGHT) - PRINTABLE AREA       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:w-full print:mx-0 print:my-0">
            
            {/* Encabezado Corporativo Premium */}
            <div className="bg-zinc-950 px-8 py-7 flex flex-col sm:flex-row justify-between items-start gap-6 border-b print:bg-white print:border-b-2 print:border-zinc-900 print:px-0">
              <div>
                <img
                  src="/logo-webunica.png.webp"
                  alt="Webunica"
                  className="h-7 brightness-0 invert print:brightness-0 print:invert-0 mb-3"
                />
                <div className="text-zinc-400 print:text-zinc-600 space-y-0.5 text-xs font-medium">
                  <p className="text-white print:text-zinc-900 font-extrabold uppercase tracking-wide">Webunica Chile EIRL</p>
                  <p>RUT: 76.371.864-6</p>
                  <p>Providencia, Santiago, Chile</p>
                  <p>consultas@webunica.cl · +56 9 8441 0379</p>
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <h2 className="text-3xl font-black uppercase tracking-widest text-white print:text-zinc-950 mb-1.5 leading-none">
                  Cotización
                </h2>
                <div className="text-zinc-400 print:text-zinc-500 space-y-0.5 text-xs font-medium">
                  <p>
                    <span className="font-extrabold text-zinc-300 print:text-zinc-700">N°:</span>{' '}
                    {quoteNumber}
                  </p>
                  <p>
                    <span className="font-extrabold text-zinc-300 print:text-zinc-700">Fecha:</span>{' '}
                    {new Date().toLocaleDateString('es-CL', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p>
                    <span className="font-extrabold text-zinc-300 print:text-zinc-700">Validez:</span>{' '}
                    15 días corridos
                  </p>
                </div>
              </div>
            </div>

            {/* Cuerpo del Documento */}
            <div className="p-8 space-y-8 print:px-0">
              
              {/* Información del Destinatario */}
              <div className="border-b border-slate-100 pb-5 print:pb-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 print:text-zinc-500">
                  Preparado para
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium text-slate-600 print:text-zinc-800">
                  <div className="space-y-1">
                    <p className="text-sm font-black text-slate-900 print:text-zinc-950">
                      {clientInfo.name || 'Cliente Distinguido'}
                    </p>
                    {clientInfo.company && (
                      <p className="text-slate-500 print:text-zinc-600">{clientInfo.company}</p>
                    )}
                    {clientInfo.rut && (
                      <p className="text-slate-400 print:text-zinc-500">RUT: {clientInfo.rut}</p>
                    )}
                  </div>
                  <div className="space-y-1 sm:text-right print:text-left sm:justify-end">
                    {clientInfo.email && <p>Mail: {clientInfo.email}</p>}
                    {clientInfo.phone && <p>Fono: {clientInfo.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Tabla de Detalles de Servicios */}
              <div className="space-y-3">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 print:text-zinc-500">
                  Detalle del Proyecto
                </h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden print:border-zinc-300">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-400 print:bg-zinc-100 print:border-zinc-300 print:text-zinc-600">
                        <th className="px-5 py-3">Plan / Servicio</th>
                        <th className="px-5 py-3 hidden md:table-cell print:table-cell">Incluye / Entregables</th>
                        <th className="px-5 py-3 text-right whitespace-nowrap">Monto Neto</th>
                        <th className="px-3 py-3 w-10 print:hidden" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 print:divide-zinc-200">
                      {selectedPlans.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-5 py-8 text-center text-slate-400 font-medium italic text-xs"
                          >
                            No hay servicios agregados. Selecciona planes de la izquierda o crea uno personalizado.
                          </td>
                        </tr>
                      ) : (
                        selectedPlans.map(plan => (
                          <tr key={plan.id} className="group align-top">
                            <td className="px-5 py-4">
                              <div className="font-extrabold text-slate-900 print:text-zinc-950 text-xs">
                                {plan.name}
                              </div>
                              <div className="text-[8px] font-black text-violet-600 print:text-zinc-700 uppercase tracking-widest mt-0.5">
                                {plan.highlight}
                              </div>
                              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed max-w-[200px]">
                                {plan.desc}
                              </p>
                              {plan.deliveryDays && (
                                <div className="mt-1.5 inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[8px] font-extrabold uppercase tracking-widest print:bg-zinc-100 print:text-zinc-600">
                                  ⏱ Plazo: {plan.deliveryDays}
                                </div>
                              )}
                            </td>
                            <td className="px-5 py-4 hidden md:table-cell print:table-cell">
                              <ul className="space-y-1">
                                {plan.features.slice(0, 6).map((f, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-1.5 text-[10px] text-slate-600 font-medium print:text-zinc-700"
                                  >
                                    <span className="text-emerald-500 shrink-0 font-bold print:text-zinc-800">✓</span>
                                    {f}
                                  </li>
                                ))}
                                {plan.features.length > 6 && (
                                  <li className="text-[9px] text-slate-400 italic">
                                    + {plan.features.length - 6} características adicionales
                                  </li>
                                )}
                              </ul>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <div className="font-extrabold text-slate-900 print:text-zinc-950">
                                {formatCLP(plan.price)}
                              </div>
                              {plan.originalPrice && (
                                <div className="text-[10px] text-slate-400 line-through font-semibold">
                                  {formatCLP(plan.originalPrice)}
                                </div>
                              )}
                            </td>
                            <td className="px-3 py-4 print:hidden text-center">
                              <button
                                onClick={() => handleRemovePlan(plan.id)}
                                className="p-1 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Totales y Cálculos */}
              <div className="flex justify-end pt-3">
                <div className="w-full max-w-xs space-y-2 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 print:bg-white print:border-none print:p-0">
                  <div className="flex justify-between text-xs font-semibold text-slate-500 print:text-zinc-600">
                    <span>Subtotal Neto:</span>
                    <span className="font-bold">{formatCLP(subtotal)}</span>
                  </div>
                  
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-xs font-black text-emerald-600">
                      <span>Descuento ({discountPercent}%):</span>
                      <span>− {formatCLP(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 print:border-zinc-200">
                    <span>Monto Base:</span>
                    <span className="font-bold">{formatCLP(subtotalWithDiscount)}</span>
                  </div>

                  {taxType !== 'exento' && (
                    <div className="flex justify-between text-xs font-semibold text-slate-500">
                      <span>{taxLabel}:</span>
                      <span className="font-bold">
                        {taxType === 'boleta' ? '− ' : ''}{formatCLP(taxAmount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm font-black text-slate-900 pt-3 border-t-2 border-zinc-900 print:text-zinc-950">
                    <span className="uppercase tracking-widest">{totalLabel}:</span>
                    <span>{formatCLP(total)}</span>
                  </div>
                </div>
              </div>

              {/* Datos de Transferencia (Imprimible) */}
              {showBankDetails && (
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 print:bg-white print:border-t-2 print:border-zinc-900 print:border-x-0 print:border-b-0 print:rounded-none">
                  <h4 className="font-extrabold text-slate-900 mb-2.5 flex items-center gap-2 text-xs uppercase tracking-widest print:text-zinc-950">
                    <CreditCard className="w-4 h-4 text-violet-600 print:hidden" /> Datos para Transferencia Bancaria
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600 print:text-zinc-800 font-medium">
                    <div className="space-y-1">
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">Banco:</span> Banco Estado de Chile</p>
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">Tipo Cuenta:</span> Cuenta Vista / Chequera Electrónica</p>
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">N° Cuenta:</span> 629-00224-166</p>
                    </div>
                    <div className="space-y-1">
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">Titular:</span> Webunica Chile EIRL</p>
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">RUT:</span> 76.371.864-6</p>
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">Contacto:</span> pagos@webunica.cl</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Términos y Condiciones */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 print:bg-white print:border-t-2 print:border-zinc-900 print:border-x-0 print:border-b-0 print:rounded-none print:pt-4">
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest print:text-zinc-950">
                  Condiciones Comerciales
                </h4>
                <ul className="text-[11px] text-slate-500 space-y-1.5 font-medium list-disc list-inside print:text-zinc-700">
                  <li>
                    Forma de pago:{' '}
                    <strong className="text-slate-900 print:text-zinc-900">50% para inicio del proyecto</strong>, y 50% contra entrega conforme y despliegue final en producción.
                  </li>
                  {taxType === 'factura' ? (
                    <li>Valores netos expresados en pesos chilenos (CLP). Sujetos a IVA (19%) por ley.</li>
                  ) : taxType === 'boleta' ? (
                    <li>Valores expresados en pesos chilenos (CLP). Emisión de Boleta de Honorarios con retención legal vigente.</li>
                  ) : (
                    <li>Valores expresados en pesos chilenos (CLP) - Régimen Exento de Impuestos.</li>
                  )}
                  <li>El tiempo de desarrollo estimado se acordará formalmente en la reunión técnica de Kick-off.</li>
                  <li>
                    Garantía técnica de código y soporte prioritario incluido por{' '}
                    <strong className="text-slate-900 print:text-zinc-900">30 días continuos</strong> tras la entrega del proyecto.
                  </li>
                  <li>Esta propuesta tiene una validez de 15 días corridos a partir de su emisión.</li>
                </ul>
              </div>

            </div>

            {/* Footer Corporativo */}
            <div className="bg-slate-50 text-center py-5 border-t border-slate-100 text-[10px] text-slate-400 font-semibold print:bg-white print:text-zinc-500 print:border-t-2 print:border-zinc-200">
              <p>Webunica Chile EIRL · RUT 76.371.864-6 · consultas@webunica.cl · +56 9 8441 0379</p>
            </div>
            
          </div>

        </div>
      </div>

      {/* Global CSS overrides for perfect clean PDF printing */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          header, footer, nav, aside {
            display: none !important;
          }
          .container {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function CotizadorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 pt-40 text-center font-bold text-slate-400">
          Cargando cotizador de Webunica...
        </div>
      }
    >
      <CotizadorContent />
    </Suspense>
  );
}
