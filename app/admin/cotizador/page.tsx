"use client";

import { useState, Suspense, useEffect } from 'react';
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
  Calendar,
  UserPlus,
  Loader2,
  History,
  Search,
  Save,
  X,
  RefreshCw,
  BookmarkCheck
} from 'lucide-react';
import { ALL_PLANS, PLANS_BY_CATEGORY, formatCLP, type Plan } from '@/lib/plans-catalog';
import { createClientUserAccount } from '@/lib/user-actions';

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
  if (service.includes('funeraria') || service.includes('funeral')) {
    return ALL_PLANS.find(p => p.id === 'funeral-profesional');
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

// --- Shopify & Third Party Operational Costs ---
interface OpCostItem {
  id: string;
  name: string;
  category: 'Shopify' | 'Logística' | 'Apps';
  frequency: 'Mensual' | 'Transaccional' | 'Única vez' | 'Anual';
  costLabel: string;
  desc: string;
}

const OPERATIONAL_COSTS: OpCostItem[] = [
  {
    id: 'sh-plan-basic',
    name: 'Plan Shopify Basic',
    category: 'Shopify',
    frequency: 'Mensual',
    costLabel: 'USD 39/mes (~CLP 36.000)',
    desc: 'Ideal para tiendas nuevas. Comisión por venta de 2.0% (usando Flow/Webpay) + tarifa de pasarela.',
  },
  {
    id: 'sh-plan-shopify',
    name: 'Plan Shopify Standard',
    category: 'Shopify',
    frequency: 'Mensual',
    costLabel: 'USD 105/mes (~CLP 97.000)',
    desc: 'Para negocios en crecimiento. Comisión por venta de 1.0% + mejores reportes profesionales.',
  },
  {
    id: 'sh-plan-advanced',
    name: 'Plan Shopify Advanced',
    category: 'Shopify',
    frequency: 'Mensual',
    costLabel: 'USD 399/mes (~CLP 370.000)',
    desc: 'Para grandes volúmenes. Comisión por venta reducida a 0.6% y analítica de conversión avanzada.',
  },
  {
    id: 'sh-ccs-monthly',
    name: 'Shopify CCS (Carrier Calculated Shipping)',
    category: 'Shopify',
    frequency: 'Mensual',
    costLabel: 'USD 20/mes (~CLP 18.500)',
    desc: 'Necesario para mostrar tarifas automáticas de Starken/Shipit en el checkout en plan mensual.',
  },
  {
    id: 'sh-ccs-annual',
    name: 'Shopify CCS Gratis (Plan Anual)',
    category: 'Shopify',
    frequency: 'Anual',
    costLabel: 'Gratis (Ahorro Anual de 10% en plan)',
    desc: 'Recomendado. Al pagar Shopify de forma anual, habilitan el CCS gratis y ahorras 10% en tu suscripción.',
  },
  {
    id: 'log-shipit-free',
    name: 'Shipit.cl / Sendu.cl (Plan Base)',
    category: 'Logística',
    frequency: 'Transaccional',
    costLabel: 'CLP 0/mes (Solo pagas lo enviado)',
    desc: 'Habilita Starken, Chilexpress, Correos en tu checkout. El plugin es gratis, solo pagas la etiqueta del despacho.',
  },
  {
    id: 'log-shipit-pro',
    name: 'Shipit.cl / Sendu.cl Plan PRO',
    category: 'Logística',
    frequency: 'Mensual',
    costLabel: 'Desde CLP 15.000/mes',
    desc: 'Tarifas de despacho preferenciales (hasta 20% descuento) y soporte de envíos VIP.',
  },
  {
    id: 'app-reviews-free',
    name: 'Reseñas de Clientes (Judge.me)',
    category: 'Apps',
    frequency: 'Mensual',
    costLabel: 'CLP 0/mes (Plan Gratis)',
    desc: 'Muestra fotos de clientes e insignias de reviews en tu ficha. Altamente recomendado para generar confianza.',
  },
  {
    id: 'app-reviews-pro',
    name: 'Reseñas Avanzadas (Loox)',
    category: 'Apps',
    frequency: 'Mensual',
    costLabel: 'Desde USD 9.99/mes (~CLP 9.200)',
    desc: 'Solicita reviews por correo de forma automatizada ofreciendo cupones de descuento.',
  },
  {
    id: 'app-bundles',
    name: 'Ofertas por Volumen & Bundles',
    category: 'Apps',
    frequency: 'Mensual',
    costLabel: 'Desde USD 14.99/mes (~CLP 13.900)',
    desc: 'Eleva tu ticket promedio vendiendo combos de productos (ej: Lleva 2 con 15% OFF).',
  },
  {
    id: 'app-translate',
    name: 'Traductor y Multimoneda',
    category: 'Apps',
    frequency: 'Mensual',
    costLabel: 'Desde USD 9.90/mes (~CLP 9.200)',
    desc: 'Traduce automáticamente tu sitio y convierte precios a monedas locales para vender fuera de Chile.',
  },
  {
    id: 'app-klaviyo-free',
    name: 'Klaviyo Email Marketing (Básico)',
    category: 'Apps',
    frequency: 'Mensual',
    costLabel: 'CLP 0/mes (Hasta 250 contactos)',
    desc: 'CRM de email marketing líder. Envía tus flujos automatizados de forma gratuita al inicio.',
  },
];

export interface SavedQuote {
  id: string;
  quoteNumber: string;
  createdAt: string;
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
    rut: string;
  };
  selectedPlans: Plan[];
  selectedOpCosts: string[];
  subtotal: number;
  tax: number;
  total: number;
  showSecondPage: boolean;
  notes?: string;
  taxType?: 'factura' | 'boleta' | 'exento';
  discountPercent?: number;
  installments?: number;
  showBankDetails?: boolean;
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

  // --- Shopify & Third Party Operational Costs ---
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [selectedOpCosts, setSelectedOpCosts] = useState<string[]>([
    'sh-plan-basic',
    'sh-ccs-annual',
    'log-shipit-free',
    'app-reviews-free'
  ]);

  // --- Auto-complete / Search Leads States ---
  const [dbLeads, setDbLeads] = useState<any[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // --- User Creation State ---
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [userCreationResult, setUserCreationResult] = useState<{success: boolean, msg: string} | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/leads/list');
        if (response.ok) {
          const data = await response.json();
          setDbLeads(data.leads || []);
        }
      } catch (err) {
        console.error('Error loading leads for autocomplete:', err);
      }
    };
    fetchLeads();
  }, []);

  const handleNameChange = (val: string) => {
    setClientInfo(prev => ({ ...prev, name: val }));
    if (val.length >= 3) {
      const query = val.toLowerCase();
      const filtered = dbLeads.filter(lead => 
        (lead.name && lead.name.toLowerCase().includes(query)) ||
        (lead.company && lead.company.toLowerCase().includes(query)) ||
        (lead.email && lead.email.toLowerCase().includes(query))
      );
      setFilteredLeads(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredLeads([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectLead = (lead: any) => {
    setClientInfo({
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      company: lead.company || '',
      rut: lead.rut || '',
    });

    const targetService = lead.service || lead.service_interest;
    if (targetService) {
      const plan = mapServiceInterestToPlan(targetService);
      if (plan && !selectedPlans.find(p => p.id === plan.id)) {
        setSelectedPlans(prev => [...prev, plan]);
      }
      if (targetService.toLowerCase().includes('shopify')) {
        setShowSecondPage(true);
      }
    }

    setShowSuggestions(false);
    setFilteredLeads([]);
  };

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
  const [installments, setInstallments] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  
  const [quoteNumber, setQuoteNumber] = useState<string>(
    () => `WU-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
  );

  // --- Quote History & Registry States ---
  const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [historySearch, setHistorySearch] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Load quote history from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('webunica_quotes_history');
      if (raw) {
        setSavedQuotes(JSON.parse(raw));
      }
    } catch (err) {
      console.error('Error reading saved quotes:', err);
    }
  }, []);

  const handleSaveQuoteRecord = (customData?: Partial<SavedQuote>) => {
    if (selectedPlans.length === 0) return;

    const quoteId = customData?.id || `quote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const qNum = customData?.quoteNumber || quoteNumber;

    const newQuote: SavedQuote = {
      id: quoteId,
      quoteNumber: qNum,
      createdAt: customData?.createdAt || new Date().toISOString(),
      clientInfo: customData?.clientInfo || { ...clientInfo },
      selectedPlans: customData?.selectedPlans || [...selectedPlans],
      selectedOpCosts: customData?.selectedOpCosts || [...selectedOpCosts],
      subtotal: customData?.subtotal ?? subtotal,
      tax: customData?.tax ?? tax,
      total: customData?.total ?? total,
      showSecondPage: customData?.showSecondPage ?? showSecondPage,
      notes: customData?.notes ?? notes,
      taxType: customData?.taxType ?? taxType,
      discountPercent: customData?.discountPercent ?? discountPercent,
      installments: customData?.installments ?? installments,
      showBankDetails: customData?.showBankDetails ?? showBankDetails,
    };

    setSavedQuotes(prev => {
      const filtered = prev.filter(q => q.quoteNumber !== qNum && q.id !== quoteId);
      const updated = [newQuote, ...filtered];
      localStorage.setItem('webunica_quotes_history', JSON.stringify(updated));
      return updated;
    });

    fetch('/api/cotizaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuote),
    }).catch(err => console.warn('Supabase quote sync:', err));

    showToast(`Cotización ${qNum} guardada en el historial`);
  };

  const handleLoadQuoteRecord = (quote: SavedQuote) => {
    setQuoteNumber(quote.quoteNumber);
    setClientInfo(quote.clientInfo);
    setSelectedPlans(quote.selectedPlans || []);
    setSelectedOpCosts(quote.selectedOpCosts || []);
    setShowSecondPage(quote.showSecondPage ?? false);
    setNotes(quote.notes || '');
    if (quote.taxType) setTaxType(quote.taxType);
    if (quote.discountPercent !== undefined) setDiscountPercent(quote.discountPercent);
    if (quote.installments !== undefined) setInstallments(quote.installments);
    if (quote.showBankDetails !== undefined) setShowBankDetails(quote.showBankDetails);

    setIsHistoryOpen(false);
    showToast(`Cotización ${quote.quoteNumber} cargada en el editor`);
  };

  const handleDeleteQuoteRecord = (id: string, qNum: string) => {
    setSavedQuotes(prev => {
      const updated = prev.filter(q => q.id !== id);
      localStorage.setItem('webunica_quotes_history', JSON.stringify(updated));
      return updated;
    });
    showToast(`Cotización ${qNum} eliminada`);
  };

  const filteredQuotes = savedQuotes.filter(q => {
    if (!historySearch.trim()) return true;
    const query = historySearch.toLowerCase();
    return (
      (q.quoteNumber && q.quoteNumber.toLowerCase().includes(query)) ||
      (q.clientInfo?.name && q.clientInfo.name.toLowerCase().includes(query)) ||
      (q.clientInfo?.company && q.clientInfo.company.toLowerCase().includes(query)) ||
      (q.clientInfo?.email && q.clientInfo.email.toLowerCase().includes(query)) ||
      (q.clientInfo?.rut && q.clientInfo.rut.toLowerCase().includes(query))
    );
  });

  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // --- Inline editing ---
  const [editingCell, setEditingCell] = useState<{ planId: string; field: string } | null>(null);

  const updatePlanField = (planId: string, field: string, value: string | number | string[]) => {
    setSelectedPlans(prev =>
      prev.map(p => {
        if (p.id !== planId) return p;
        if (field.startsWith('features.')) {
          const idx = parseInt(field.split('.')[1]);
          const newFeatures = [...p.features];
          newFeatures[idx] = value as string;
          return { ...p, features: newFeatures };
        }
        return { ...p, [field]: value };
      })
    );
  };

  const EditableText = ({
    planId, field, value, className, multiline = false, numeric = false,
  }: {
    planId: string; field: string; value: string; className?: string;
    multiline?: boolean; numeric?: boolean;
  }) => {
    const isEditing = editingCell?.planId === planId && editingCell?.field === field;
    const [draft, setDraft] = useState(value);

    const commit = () => {
      const parsed = numeric ? Number(draft.replace(/\D/g, '')) || 0 : draft;
      updatePlanField(planId, field, parsed);
      setEditingCell(null);
    };

    if (isEditing) {
      const shared = {
        className: `w-full bg-violet-50 border border-violet-300 rounded px-2 py-1 outline-none text-violet-900 font-semibold resize-none ${className ?? ''}`,
        value: draft,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDraft(e.target.value),
        onBlur: commit,
        onKeyDown: (e: React.KeyboardEvent) => { if (e.key === 'Enter' && !multiline) { e.preventDefault(); commit(); } if (e.key === 'Escape') setEditingCell(null); },
        autoFocus: true,
      };
      return multiline
        ? <textarea rows={3} {...shared as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
        : <input type={numeric ? 'number' : 'text'} {...shared as React.InputHTMLAttributes<HTMLInputElement>} />;
    }

    return (
      <span
        onClick={() => { setDraft(value); setEditingCell({ planId, field }); }}
        className={`cursor-text hover:bg-violet-50 hover:text-violet-700 rounded px-1 -mx-1 transition-colors group/edit relative print:hover:bg-transparent print:cursor-default ${className ?? ''}`}
        title="Clic para editar"
      >
        {value || <span className="italic text-slate-300">—</span>}
        <span className="absolute -top-2 -right-2 text-[8px] bg-violet-100 text-violet-500 px-1 rounded opacity-0 group-hover/edit:opacity-100 print:hidden transition-opacity">✏</span>
      </span>
    );
  };

  // --- Calculations ---
  const subtotal = selectedPlans.reduce((acc, p) => {
    const priceNum = typeof p.price === 'number' ? p.price : Number(String(p.price).replace(/[^0-9.-]+/g, "")) || 0;
    return acc + priceNum;
  }, 0);
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

  const handleCreateUser = async () => {
    if (!clientInfo.email || !clientInfo.rut) {
      setUserCreationResult({ success: false, msg: 'Falta email o RUT' });
      return;
    }
    setIsCreatingUser(true);
    setUserCreationResult(null);
    const result = await createClientUserAccount(clientInfo.email, clientInfo.rut, clientInfo.name || 'Cliente');
    setUserCreationResult({ success: result.success, msg: result.success ? 'Usuario creado' : result.error || 'Error' });
    setIsCreatingUser(false);
    setTimeout(() => setUserCreationResult(null), 5000);
  };

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
        p.features.forEach(f => {
          text += `   • ${f}\n`;
        });
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
    if (installments > 1) {
      text += `• Forma de pago: ${installments} cuotas de ${formatCLP(Math.round(total / installments))}.\n`;
      text += `• Los pagos de las cuotas están sujetos a hitos de avance según la planificación.\n`;
    } else {
      text += `• 50% para dar inicio al proyecto y 50% contra entrega conforme.\n`;
    }
    if (startDate && endDate) {
      text += `• Plazos: Inicio el ${new Date(startDate + 'T00:00:00').toLocaleDateString('es-CL')} y finalización estimada el ${new Date(endDate + 'T00:00:00').toLocaleDateString('es-CL')} (incluye 2 semanas extras por imprevistos).\n`;
    }
    text += `• Precios en pesos chilenos (CLP).\n`;
    text += `• Soporte y garantía técnica incluidos por 30 días.\n`;
    text += `• Validez de cotización: 15 días corridos.\n\n`;
    
    if (showBankDetails) {
      text += `*Datos de Transferencia Bancaria:*\n`;
      text += `• Banco Estado de Chile | Cuenta Vista o Chequera Electrónica\n`;
      text += `• Cuenta: 629 - 716 - 20345 | Webunica Chile EIRL\n`;
      text += `• RUT: 76.371.864-6 | pagos@webunica.cl\n\n`;
    }

    if (showSecondPage && selectedOpCosts.length > 0) {
      text += `--------------------------------------------\n`;
      text += `*Anexo: Costos Operacionales de Terceros (Estimados)*\n`;
      text += `_Valores de referencia cobrados directamente por los proveedores (Shopify, Apps, Envíos):_\n\n`;
      
      selectedOpCosts.forEach(costId => {
        const item = OPERATIONAL_COSTS.find(o => o.id === costId);
        if (item) {
          text += `• *${item.name}* (${item.frequency})\n`;
          text += `  Costo: ${item.costLabel}\n`;
          text += `  _${item.desc}_\n\n`;
        }
      });
    }

    text += `🚀 ¡Quedamos a su total disposición para dar inicio al desarrollo!`;

    navigator.clipboard.writeText(text);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleExportPDF = async () => {
    if (selectedPlans.length === 0) return;
    setIsGeneratingPDF(true);

    try {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF } = await import('jspdf');

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'letter' });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const MARGIN = 32;
      const FOOTER_H = 20;
      const CONTENT_W = pdfW - MARGIN * 2;
      const CONTENT_H = pdfH - MARGIN * 2 - FOOTER_H;

      const renderSlices = async (elementId: string) => {
        const el = document.getElementById(elementId);
        if (!el) return [];

        el.classList.add('pdf-rendering');
        await new Promise(r => setTimeout(r, 150));

        const canvas = await html2canvas(el, { scale: 2, useCORS: true, logging: false });
        el.classList.remove('pdf-rendering');

        const pxPerPt = canvas.width / CONTENT_W;
        const contentHPx = CONTENT_H * pxPerPt;
        const pagesNeeded = Math.ceil(canvas.height / contentHPx);
        const slices: { imgData: string; h: number }[] = [];

        for (let p = 0; p < pagesNeeded; p++) {
          const srcY = Math.round(p * contentHPx);
          const sliceHPx = Math.min(Math.round(contentHPx), canvas.height - srcY);

          const sliceCanvas = document.createElement('canvas');
          sliceCanvas.width = canvas.width;
          sliceCanvas.height = sliceHPx;
          const ctx = sliceCanvas.getContext('2d')!;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
          ctx.drawImage(canvas, 0, srcY, canvas.width, sliceHPx, 0, 0, canvas.width, sliceHPx);

          slices.push({ imgData: sliceCanvas.toDataURL('image/jpeg', 0.98), h: sliceHPx / pxPerPt });
        }

        return slices;
      };

      const p1Slices = await renderSlices('printable-quote-p1');
      const p2Slices = showSecondPage ? await renderSlices('printable-quote-p2') : [];
      const allSlices = [...p1Slices, ...p2Slices];
      const totalPages = allSlices.length;

      allSlices.forEach((slice, i) => {
        if (i > 0) pdf.addPage();
        pdf.addImage(slice.imgData, 'JPEG', MARGIN, MARGIN, CONTENT_W, slice.h);

        pdf.setFontSize(8);
        pdf.setTextColor(160, 160, 160);
        pdf.text(
          `Página ${i + 1} de ${totalPages}  ·  ${quoteNumber}  ·  webunica.cl`,
          pdfW / 2,
          pdfH - 8,
          { align: 'center' }
        );
      });

      const filename = `Cotizacion_${quoteNumber}_${(clientInfo.company || clientInfo.name || 'Cliente').replace(/\s+/g, '_')}.pdf`;
      pdf.save(filename);
      handleSaveQuoteRecord();

    } catch (err: any) {
      console.error('Error generating PDF:', err);
      alert(`Error al generar PDF: ${err.message || err}. Fallback a impresión nativa.`);
      window.print();
    } finally {
      setIsGeneratingPDF(false);
    }
  };

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
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsHistoryOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-white text-violet-700 border border-violet-200 hover:bg-violet-50 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xs active:scale-95"
            >
              <History className="w-4 h-4 text-violet-600" />
              Historial ({savedQuotes.length})
            </button>

            <button
              onClick={() => handleSaveQuoteRecord()}
              disabled={selectedPlans.length === 0}
              className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Save className="w-4 h-4" />
              Guardar Cotización
            </button>

            <button
              onClick={handleCopyToWhatsApp}
              disabled={selectedPlans.length === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
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
              onClick={handleExportPDF}
              disabled={selectedPlans.length === 0 || isGeneratingPDF}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-violet-600 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 min-w-[150px] justify-center"
            >
              {isGeneratingPDF ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                  Generando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </>
              )}
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
                  <div key={key} className="relative flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-400 shrink-0">{icon}</span>
                    <div className="flex-1 relative">
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="bg-transparent outline-none w-full font-medium text-slate-800 placeholder:text-slate-300 text-sm focus:placeholder:text-slate-400 transition-colors animate-none"
                        value={clientInfo[key as keyof typeof clientInfo]}
                        onChange={e => {
                          if (key === 'name') {
                            handleNameChange(e.target.value);
                          } else {
                            setClientInfo({ ...clientInfo, [key]: e.target.value });
                          }
                        }}
                        onBlur={() => {
                          if (key === 'name') {
                            setTimeout(() => setShowSuggestions(false), 200);
                          }
                        }}
                        onFocus={() => {
                          if (key === 'name' && clientInfo.name.length >= 3 && filteredLeads.length > 0) {
                            setShowSuggestions(true);
                          }
                        }}
                      />

                      {/* Sugerencias de Autocompletado en tiempo real */}
                      {key === 'name' && showSuggestions && filteredLeads.length > 0 && (
                        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 max-h-48 overflow-y-auto divide-y divide-slate-50">
                          {filteredLeads.map(lead => (
                            <button
                              key={lead.id}
                              type="button"
                              onClick={() => handleSelectLead(lead)}
                              className="w-full text-left px-4 py-3 hover:bg-violet-50 transition-colors flex flex-col gap-0.5"
                            >
                              <span className="font-extrabold text-xs text-slate-800">{lead.name}</span>
                              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                                {(lead.company || lead.city) && (
                                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-bold">
                                    {lead.company || lead.city}
                                  </span>
                                )}
                                {(lead.service || lead.service_interest) && (
                                  <span className="bg-violet-50 text-violet-600 px-1.5 py-0.5 rounded font-black uppercase tracking-wider text-[8px]">
                                    {lead.service || lead.service_interest}
                                  </span>
                                )}
                                {lead.email && <span>{lead.email}</span>}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add User Creation Button */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCreateUser}
                  disabled={isCreatingUser || !clientInfo.email || !clientInfo.rut}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 disabled:opacity-50 transition-all"
                >
                  {isCreatingUser ? <Loader2 className="w-3 h-3 animate-spin" /> : <UserPlus className="w-3 h-3" />}
                  Crear Usuario
                </button>
                {userCreationResult && (
                  <span className={`text-[10px] font-bold ${userCreationResult.success ? 'text-emerald-500' : 'text-red-500'}`}>
                    {userCreationResult.msg}
                  </span>
                )}
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

              {/* Selector de Cuotas */}
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Dividir Pago en Cuotas
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={installments}
                    onChange={e => setInstallments(Number(e.target.value))}
                    className="flex-1 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={installments}
                      onChange={e =>
                        setInstallments(Math.min(12, Math.max(1, Number(e.target.value))))
                      }
                      className="w-8 text-center font-black text-xs text-slate-700 bg-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Fechas de Proyecto */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                    Fecha de Inicio
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={e => {
                      setStartDate(e.target.value);
                      if (e.target.value) {
                        const start = new Date(e.target.value + 'T00:00:00');
                        start.setDate(start.getDate() + 14); // 2 semanas extra base
                        setEndDate(start.toISOString().split('T')[0]);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 focus:bg-white focus:border-violet-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                    Fecha Fin (con holgura)
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 focus:bg-white focus:border-violet-500 outline-none transition-all"
                  />
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

            {/* Tarjeta 5: Costos Operacionales de Terceros */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-violet-500" /> Costos de Terceros (Pág 2)
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showSecondPage}
                    onChange={() => setShowSecondPage(!showSecondPage)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
                </label>
              </div>
              
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                Habilita el anexo de costos estimativos (licencias de Shopify, habilitación de envíos CCS, apps de conversión). 
              </p>

              {showSecondPage && (
                <div className="space-y-4 pt-2 border-t border-slate-100 max-h-80 overflow-y-auto pr-1">
                  {['Shopify', 'Logística', 'Apps'].map(category => {
                    const items = OPERATIONAL_COSTS.filter(o => o.category === category);
                    return (
                      <div key={category} className="space-y-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block border-b border-slate-50 pb-1">
                          {category}
                        </span>
                        <div className="space-y-2">
                          {items.map(item => {
                            const isChecked = selectedOpCosts.includes(item.id);
                            return (
                              <label
                                key={item.id}
                                className={`flex items-start gap-2.5 p-2 rounded-xl border text-xs cursor-pointer hover:bg-slate-50 transition-all ${
                                  isChecked 
                                    ? 'bg-violet-50/50 border-violet-200 text-violet-900' 
                                    : 'bg-white border-slate-200 text-slate-700'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {
                                    if (isChecked) {
                                      setSelectedOpCosts(selectedOpCosts.filter(id => id !== item.id));
                                    } else {
                                      setSelectedOpCosts([...selectedOpCosts, item.id]);
                                    }
                                  }}
                                  className="mt-0.5 accent-violet-600 shrink-0"
                                />
                                <div className="space-y-0.5">
                                  <div className="font-extrabold text-[11px] leading-tight flex flex-wrap items-center gap-1">
                                    {item.name}
                                    <span className="text-[8px] font-black bg-slate-100 px-1 py-0.2 rounded text-slate-500 uppercase tracking-wide">
                                      {item.frequency}
                                    </span>
                                  </div>
                                  <div className="text-[10px] font-black text-violet-600">{item.costLabel}</div>
                                  <p className="text-[9px] text-slate-400 leading-normal font-medium">{item.desc}</p>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* ========================================================= */}
          {/* HOJA DE COTIZACIÓN PREVIEW (RIGHT) - PRINTABLE AREA       */}
          {/* ========================================================= */}
          <div id="printable-quote-area" className="lg:col-span-7 space-y-8 print:space-y-0 print:w-full print:mx-0 print:my-0">
            
            <div id="printable-quote-p1" className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:w-full print:mx-0 print:my-0">

            {/* Encabezado Corporativo Premium */}
            <div className="relative bg-white border-b border-slate-200/80 overflow-hidden print:border-b-2 print:border-zinc-900">
              {/* Top Gradient Accent Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085]" />

              <div className="px-8 py-7 flex flex-col sm:flex-row justify-between items-start gap-6">
                <div>
                  <img
                    src="/logo-webunica.png.webp"
                    alt="Webunica"
                    className="h-8 mb-3 object-contain"
                  />
                  <div className="text-zinc-500 space-y-0.5 text-xs font-medium">
                    <p className="text-zinc-950 font-black uppercase tracking-wide">Webunica Chile EIRL</p>
                    <p>RUT: 76.371.864-6</p>
                    <p>MERCED 838 A INT OF 117 COMUNA SANTIAGO</p>
                    <p>consultas@webunica.cl · +56 9 8441 0379</p>
                  </div>
                </div>
                
                <div className="text-left sm:text-right">
                  <h2 className="text-3xl font-black uppercase tracking-widest text-zinc-950 mb-2 leading-none">
                    Cotización
                  </h2>
                  <div className="text-zinc-500 space-y-1 text-xs font-medium">
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <span className="font-bold text-zinc-400 uppercase text-[10px]">N°:</span>{' '}
                      <span className="font-mono font-black text-violet-700 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-md">{quoteNumber}</span>
                    </p>
                    <p>
                      <span className="font-bold text-zinc-400 uppercase text-[10px]">Fecha:</span>{' '}
                      <span className="text-zinc-800 font-semibold">{new Date().toLocaleDateString('es-CL', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}</span>
                    </p>
                    <p>
                      <span className="font-bold text-zinc-400 uppercase text-[10px]">Validez:</span>{' '}
                      <span className="text-zinc-800 font-semibold">15 días corridos</span>
                    </p>
                  </div>
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
                      <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 print:bg-zinc-100 print:border-zinc-300 print:text-zinc-600">
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
                                <EditableText planId={plan.id} field="name" value={plan.name} className="text-xs font-extrabold text-slate-900" />
                              </div>
                              <div className="text-[10px] font-black text-violet-600 print:text-zinc-700 uppercase tracking-widest mt-0.5">
                                <EditableText planId={plan.id} field="highlight" value={plan.highlight} className="text-[10px] font-black text-violet-600 uppercase tracking-widest" />
                              </div>
                              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed max-w-[200px]">
                                <EditableText planId={plan.id} field="desc" value={plan.desc} multiline className="text-[11px] font-medium" />
                              </p>
                              <div className="mt-1.5 flex items-center gap-1 print:hidden">
                                <span className="text-[10px] text-slate-400 font-bold">⏱</span>
                                <EditableText planId={plan.id} field="deliveryDays" value={plan.deliveryDays ?? ''} className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest" />
                              </div>
                              {plan.deliveryDays && (
                                <div className="mt-1 hidden print:inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-extrabold uppercase tracking-widest print:bg-zinc-100 print:text-zinc-600">
                                  ⏱ Plazo: {plan.deliveryDays}
                                </div>
                              )}
                            </td>
                            <td className="px-5 py-4 hidden md:table-cell print:table-cell">
                              <ul className="space-y-1">
                                {plan.features.map((f, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-[10px] text-slate-600 font-medium print:text-zinc-700">
                                    <span className="text-emerald-500 shrink-0 font-bold print:text-zinc-800 mt-0.5">✓</span>
                                    <EditableText
                                      planId={plan.id}
                                      field={`features.${i}`}
                                      value={f}
                                      className="text-[10px] text-slate-600 font-medium flex-1"
                                    />
                                  </li>
                                ))}
                                <li>
                                  <button
                                    onClick={() => updatePlanField(plan.id, 'features', [...plan.features, 'Nueva característica'] as any)}
                                    className="text-[9px] text-violet-400 hover:text-violet-600 font-black uppercase tracking-widest mt-1 print:hidden"
                                  >
                                    + agregar ítem
                                  </button>
                                </li>
                              </ul>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <div className="font-extrabold text-slate-900 print:text-zinc-950 text-right">
                                <EditableText
                                  planId={plan.id}
                                  field="price"
                                  value={String(plan.price)}
                                  numeric
                                  className="text-right font-extrabold text-slate-900 w-28"
                                />
                              </div>
                              <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                                {formatCLP(plan.price)}
                              </div>
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
                      <p><span className="font-extrabold text-slate-400 print:text-zinc-500">N° Cuenta:</span> 629 - 716 - 20345</p>
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
                    {installments > 1 ? (
                      <>
                        <strong className="text-slate-900 print:text-zinc-900">
                          {installments} cuotas de {formatCLP(Math.round(total / installments))}
                        </strong>. Los pagos de las cuotas están sujetos a hitos de avance según la planificación.
                      </>
                    ) : (
                      <>
                        <strong className="text-slate-900 print:text-zinc-900">50% para inicio del proyecto</strong>, y 50% contra entrega conforme y despliegue final en producción.
                      </>
                    )}
                  </li>
                  {startDate && endDate && (
                    <li>
                      Plazos del proyecto: Fecha de inicio <strong>{new Date(startDate + 'T00:00:00').toLocaleDateString('es-CL')}</strong> y fecha de finalización estimada <strong>{new Date(endDate + 'T00:00:00').toLocaleDateString('es-CL')}</strong> (incluye 2 semanas de holgura por posibles imprevistos).
                    </li>
                  )}
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

          {/* ========================================================= */}
          {/* SEGUNDA PÁGINA: ANEXO DE COSTOS (OPTIONAL / CONDITIONAL)  */}
          {/* ========================================================= */}
          {showSecondPage && (
            <div id="printable-quote-p2" className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:w-full print:mx-0 print:my-0 print:break-before-page html2pdf__page-break">
              
              {/* Encabezado Corporativo Página 2 */}
              <div className="relative bg-white border-b border-slate-200/80 overflow-hidden print:border-b-2 print:border-zinc-900">
                <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085]" />

                <div className="px-8 py-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <img
                      src="/logo-webunica.png.webp"
                      alt="Webunica"
                      className="h-7 mb-2 object-contain"
                    />
                    <div className="text-zinc-500 text-[10px] font-medium">
                      <p className="text-zinc-950 font-extrabold uppercase tracking-wide">Webunica Chile EIRL</p>
                      <p>RUT: 76.371.864-6 · consultas@webunica.cl</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <h2 className="text-xl font-black uppercase tracking-widest text-zinc-950 mb-1 leading-none">
                      Anexo Comercial
                    </h2>
                    <p className="text-[10px] text-zinc-500 font-medium">
                      Costos de Operación de Terceros (Estimados)
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido Página 2 */}
              <div className="p-8 space-y-6 print:px-0">
                <div className="space-y-2">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 print:text-zinc-500">
                    Resumen de Suscripciones y Tarifas de Operación
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium print:text-zinc-600">
                    Para el correcto funcionamiento de una tienda online moderna, existen ciertos costos operacionales y de software provistos por terceros. A continuación se detallan las tarifas estimadas según los requerimientos cotizados.
                  </p>
                </div>

                {/* Tabla de Costos Operacionales */}
                <div className="border border-slate-200 rounded-xl overflow-hidden print:border-zinc-300">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 print:bg-zinc-100 print:border-zinc-300 print:text-zinc-600">
                        <th className="px-5 py-3">Ítem / Servicio Externo</th>
                        <th className="px-5 py-3">Categoría</th>
                        <th className="px-5 py-3">Periodicidad</th>
                        <th className="px-5 py-3 text-right">Costo Estimado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 print:divide-zinc-200">
                      {selectedOpCosts.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-5 py-8 text-center text-slate-400 font-medium italic">
                            No hay costos de terceros seleccionados. Actívalos en el panel de control.
                          </td>
                        </tr>
                      ) : (
                        selectedOpCosts.map(costId => {
                          const item = OPERATIONAL_COSTS.find(o => o.id === costId);
                          if (!item) return null;
                          return (
                            <tr key={item.id} className="align-top">
                              <td className="px-5 py-3.5">
                                <div className="font-extrabold text-slate-900 print:text-zinc-950">{item.name}</div>
                                <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-relaxed max-w-[280px]">
                                  {item.desc}
                                </p>
                              </td>
                              <td className="px-5 py-3.5">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                  item.category === 'Shopify' 
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                                    : item.category === 'Logística'
                                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                      : 'bg-violet-50 text-violet-700 border border-violet-100'
                                }`}>
                                  {item.category}
                                </span>
                              </td>
                              <td className="px-5 py-3.5">
                                <span className="font-semibold text-slate-600 print:text-zinc-700">
                                  {item.frequency}
                                </span>
                              </td>
                              <td className="px-5 py-3.5 text-right font-extrabold text-slate-900 print:text-zinc-950 whitespace-nowrap">
                                {item.costLabel}
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Nota de Transparencia Aclaratoria */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 print:bg-white print:border-t-2 print:border-zinc-900 print:border-x-0 print:border-b-0 print:rounded-none">
                  <h4 className="font-extrabold text-slate-900 mb-2 text-xs uppercase tracking-widest print:text-zinc-950">
                    Declaración de Transparencia Comercial
                  </h4>
                  <ul className="text-[11px] text-slate-500 space-y-1.5 font-medium list-disc list-inside print:text-zinc-700">
                    <li>
                      Los montos indicados en este anexo corresponden a tarifas oficiales de terceros (Shopify, apps externas y empresas logísticas) y son <strong className="text-slate-900 print:text-zinc-900">estimaciones informativas de referencia</strong>.
                    </li>
                    <li>
                      Estos servicios <strong className="text-slate-900 print:text-zinc-900">son cobrados directamente por los proveedores</strong> mediante sus respectivas plataformas. Webunica Chile no actúa como recaudador ni cobra comisiones o recargos sobre estos servicios externos.
                    </li>
                    <li>
                      Las comisiones por venta indicadas corresponden a cobros de pasarelas de pago externas (ej: Flow, Mercado Pago) y el porcentaje transaccional nativo del plan Shopify.
                    </li>
                    <li>
                      Para habilitar la sincronización de tarifas automáticas en tiempo real en los couriers (CCS - Carrier Calculated Shipping), se recomienda la suscripción al <strong className="text-slate-900 print:text-zinc-900">Plan Anual de Shopify</strong>, el cual incluye esta característica de forma 100% gratuita.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Footer Corporativo Página 2 */}
              <div className="bg-slate-50 text-center py-4 border-t border-slate-100 text-[10px] text-slate-400 font-semibold print:bg-white print:text-zinc-500 print:border-t-2 print:border-zinc-200">
                <p>Webunica Chile EIRL · RUT 76.371.864-6 · consultas@webunica.cl · www.webunica.cl</p>
              </div>

            </div>
          )}

          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-white text-xs font-black uppercase tracking-wider px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-zinc-800 animate-in fade-in slide-in-from-bottom-5">
          <BookmarkCheck className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Modal Historial de Cotizaciones */}
      {isHistoryOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 print:hidden">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-violet-600/30 rounded-xl text-violet-400 border border-violet-500/30">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight">Historial de Cotizaciones</h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {savedQuotes.length} cotización{savedQuotes.length !== 1 ? 'es' : ''} en el registro
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsHistoryOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Buscador Modal */}
            <div className="p-5 bg-slate-50 border-b border-slate-200 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por N° Cotización, Cliente, RUT o Empresa..."
                  value={historySearch}
                  onChange={e => setHistorySearch(e.target.value)}
                  className="w-full pl-11 pr-16 py-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all shadow-xs"
                />
                {historySearch && (
                  <button
                    onClick={() => setHistorySearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 rounded-md"
                  >
                    Limpiar
                  </button>
                )}
              </div>
            </div>

            {/* Lista de Cotizaciones Guardadas */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {filteredQuotes.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-3">
                  <FolderOpen className="w-12 h-12 mx-auto text-slate-300 stroke-[1.5]" />
                  <p className="text-sm font-bold">
                    {historySearch ? 'No se encontraron cotizaciones coincidentes.' : 'Aún no tienes cotizaciones guardadas.'}
                  </p>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Cada vez que guardes o descargues un PDF, la cotización se registrará automáticamente en este historial.
                  </p>
                </div>
              ) : (
                filteredQuotes.map(q => (
                  <div
                    key={q.id}
                    className="bg-white border border-slate-200 hover:border-violet-300 rounded-2xl p-5 shadow-xs transition-all space-y-4 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-black text-xs text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-lg">
                          {q.quoteNumber}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {new Date(q.createdAt).toLocaleDateString('es-CL', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>

                      <span className="text-base font-black text-slate-900 font-mono">
                        {formatCLP(q.total)} <span className="text-[10px] text-slate-400 font-bold uppercase">NETO/TOTAL</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                      <div>
                        <p className="font-black text-slate-900 text-sm mb-0.5">{q.clientInfo?.name || 'Cliente sin nombre'}</p>
                        {q.clientInfo?.company && (
                          <p className="text-slate-500 font-medium">Empresa: {q.clientInfo.company}</p>
                        )}
                        {q.clientInfo?.rut && (
                          <p className="text-slate-400 font-medium">RUT: {q.clientInfo.rut}</p>
                        )}
                      </div>
                      <div className="sm:text-right space-y-0.5">
                        {q.clientInfo?.email && <p className="font-medium text-slate-600">Mail: {q.clientInfo.email}</p>}
                        {q.clientInfo?.phone && <p className="font-medium text-slate-500">Fono: {q.clientInfo.phone}</p>}
                      </div>
                    </div>

                    {/* Lista de servicios incluidos */}
                    {q.selectedPlans && q.selectedPlans.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {q.selectedPlans.map(p => (
                          <span
                            key={p.id}
                            className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                          >
                            ✦ {p.name} ({formatCLP(p.price)})
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Acciones */}
                    <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => handleLoadQuoteRecord(q)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-xs"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Cargar en Editor
                      </button>

                      <button
                        onClick={() => {
                          handleLoadQuoteRecord(q);
                          setTimeout(handleExportPDF, 250);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Descargar PDF
                      </button>

                      <button
                        onClick={() => handleDeleteQuoteRecord(q.id, q.quoteNumber)}
                        className="flex items-center gap-1.5 px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl text-xs font-bold transition-all"
                        title="Eliminar del historial"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      )}

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

        /* PDF rendering engine overrides */
        .pdf-rendering {
          width: 816px !important;
          background-color: #ffffff !important;
          color: #000000 !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .pdf-rendering .bg-white {
          border-radius: 0 !important;
          border: none !important;
          box-shadow: none !important;
        }
        .pdf-rendering .shadow-xl {
          box-shadow: none !important;
        }
        .pdf-rendering .rounded-\[2rem\] {
          border-radius: 0 !important;
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
