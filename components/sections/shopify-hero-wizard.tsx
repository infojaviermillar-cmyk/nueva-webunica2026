'use client';

import { useState, useTransition } from 'react';
import { createLead } from '@/lib/lead-actions';
import {
  Store, RefreshCcw, Paintbrush, Zap,
  Rocket, ShoppingBag, Crown, Sparkles,
  ArrowRight, Check, Loader2, ChevronLeft,
  MessageCircle, Shirt, Heart, Cpu, Coffee,
  Home, Package, Globe, Smartphone, TrendingUp,
  ShieldCheck, Truck, ShoppingCart, Layers, HelpCircle
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Step1Option {
  id: 'nueva' | 'migracion' | 'rediseno' | 'optimizar';
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

interface OptionItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
}

interface PlanOption {
  id: string;
  label: string;
  price: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const STEP1_OPTIONS: Step1Option[] = [
  {
    id: 'nueva',
    label: 'Tienda nueva',
    sublabel: 'Crear desde cero para vender en Chile',
    icon: <Store className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />,
  },
  {
    id: 'migracion',
    label: 'Migrar tienda',
    sublabel: 'Desde WooCommerce, Jumpseller, etc.',
    icon: <RefreshCcw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
  },
  {
    id: 'rediseno',
    label: 'Rediseñar tienda',
    sublabel: 'Tengo Shopify, cambiar diseño y UX',
    icon: <Paintbrush className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
  },
  {
    id: 'optimizar',
    label: 'Optimizar tienda',
    sublabel: 'Mejorar velocidad, pagos o ventas',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
  },
];

// Step 2 Options per branch
const STEP2_BRANCHES: Record<'nueva' | 'migracion' | 'rediseno' | 'optimizar', { title: string; subtitle: string; options: OptionItem[] }> = {
  nueva: {
    title: '¿De qué rubro es tu tienda?',
    subtitle: 'Nos ayuda a recomendar la estructura de diseño ideal',
    options: [
      { id: 'moda', label: 'Moda, Calzado & Accesorios', sublabel: 'Vestuario, joyas, calzado', icon: <Shirt className="w-5 h-5 text-violet-600" /> },
      { id: 'belleza', label: 'Belleza, Salud & Skincare', sublabel: 'Cosmética, suplementos, higiene', icon: <Heart className="w-5 h-5 text-pink-600" /> },
      { id: 'tecnologia', label: 'Tecnología & Equipamiento', sublabel: 'Electrónica, gadgets, herramientas', icon: <Cpu className="w-5 h-5 text-blue-600" /> },
      { id: 'gourmet', label: 'Alimentos, Bebidas & Gourmet', sublabel: 'Licores, café, productos frescos', icon: <Coffee className="w-5 h-5 text-amber-600" /> },
      { id: 'hogar', label: 'Deco, Hogar & Muebles', sublabel: 'Decoración, camas, construcción', icon: <Home className="w-5 h-5 text-emerald-600" /> },
      { id: 'otro', label: 'Otro Rubro / Multicategoría', sublabel: 'Productos variados o nicho especial', icon: <Package className="w-5 h-5 text-purple-600" /> },
    ],
  },
  migracion: {
    title: '¿Desde qué plataforma migras?',
    subtitle: 'Preservaremos tu SEO y catálogo al cambiar a Shopify',
    options: [
      { id: 'woocommerce', label: 'WooCommerce / WordPress', sublabel: 'Migración total con productos y SEO', icon: <Globe className="w-5 h-5 text-blue-600" /> },
      { id: 'jumpseller', label: 'Jumpseller / PrestaShop', sublabel: 'Paso directo a Shopify Partner', icon: <Store className="w-5 h-5 text-emerald-600" /> },
      { id: 'magento_vtex', label: 'Magento / Vtex / Custom', sublabel: 'Migración empresarial masiva', icon: <Layers className="w-5 h-5 text-purple-600" /> },
      { id: 'marketplaces', label: 'MercadoLibre / Falabella', sublabel: 'Exportar catálogo a tu web propia', icon: <ShoppingCart className="w-5 h-5 text-amber-600" /> },
    ],
  },
  rediseno: {
    title: '¿Cuál es el objetivo del rediseño?',
    subtitle: 'Enfocaremos el nuevo diseño en resolver este punto',
    options: [
      { id: 'cro_ventas', label: 'Aumentar conversión y ventas', sublabel: 'Ficha de producto y checkout optimizado', icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
      { id: 'imagen_brand', label: 'Imagen de marca más moderna', sublabel: 'Diseño premium Liquid de alto impacto', icon: <Paintbrush className="w-5 h-5 text-pink-600" /> },
      { id: 'mobile_first', label: 'Mejorar experiencia en celulares', sublabel: 'Navegación ultrarrápida 100% móvil', icon: <Smartphone className="w-5 h-5 text-violet-600" /> },
      { id: 'orden_catalogo', label: 'Ordenar arquitectura y filtros', sublabel: 'Mejorar navegación de colecciones', icon: <Layers className="w-5 h-5 text-blue-600" /> },
    ],
  },
  optimizar: {
    title: '¿Qué área necesitas mejorar?',
    subtitle: 'Diagnosticamos tu tienda para darte la solución exacta',
    options: [
      { id: 'velocidad', label: 'Velocidad de carga (Core Web Vitals)', sublabel: 'Optimización de código y scripts', icon: <Zap className="w-5 h-5 text-amber-600" /> },
      { id: 'boleta_sii', label: 'Facturación & Boleta SII', sublabel: 'Integrar Bsale, Obuma, etc.', icon: <ShieldCheck className="w-5 h-5 text-violet-600" /> },
      { id: 'envios_chile', label: 'Envíos dinámicos en Chile', sublabel: 'Configurar Starken, BlueExpress, CCS', icon: <Truck className="w-5 h-5 text-blue-600" /> },
      { id: 'checkout_ventas', label: 'Recuperación de carritos & CRO', sublabel: 'Email marketing y embudo de pago', icon: <ShoppingCart className="w-5 h-5 text-emerald-600" /> },
    ],
  },
};

// Step 3 Options per branch (Operación / Canales / Catálogo)
const STEP3_BRANCHES: Record<'nueva' | 'migracion' | 'rediseno' | 'optimizar', { title: string; subtitle: string; options: OptionItem[] }> = {
  nueva: {
    title: '¿Vendes actualmente por algún canal?',
    subtitle: 'Para sincronizar tu inventario desde el día uno',
    options: [
      { id: 'redes', label: 'Instagram, TikTok o WhatsApp', sublabel: 'Tengo clientes pero vendo manual', icon: <Smartphone className="w-5 h-5 text-pink-600" /> },
      { id: 'tienda_fisica', label: 'Tienda física / Local comercial', sublabel: 'Tengo negocio presencial en Chile', icon: <Store className="w-5 h-5 text-emerald-600" /> },
      { id: 'marketplaces', label: 'MercadoLibre / Falabella / Paris', sublabel: 'Vendo en plataformas de retail', icon: <ShoppingCart className="w-5 h-5 text-blue-600" /> },
      { id: 'primera_vez', label: 'Es mi primera vez emprendiendo', sublabel: 'Comenzando desde cero', icon: <Rocket className="w-5 h-5 text-violet-600" /> },
    ],
  },
  migracion: {
    title: '¿Cuántos productos manejas aproximadamente?',
    subtitle: 'Determinaremos la estrategia de importación masiva',
    options: [
      { id: 'cat_100', label: '1 a 100 productos', sublabel: 'Catálogo pequeño / mediano', icon: <Package className="w-5 h-5 text-blue-600" /> },
      { id: 'cat_500', label: '100 a 500 productos', sublabel: 'Catálogo comercial estándar', icon: <Package className="w-5 h-5 text-violet-600" /> },
      { id: 'cat_1500', label: '500 a 1.500 productos', sublabel: 'Catálogo amplio con variaciones', icon: <Package className="w-5 h-5 text-pink-600" /> },
      { id: 'cat_masivo', label: 'Más de 1.500 productos', sublabel: 'Importación por CSV / ERP', icon: <Layers className="w-5 h-5 text-amber-600" /> },
    ],
  },
  rediseno: {
    title: '¿Cuántos productos tiene tu catálogo?',
    subtitle: 'Estructuraremos las colecciones y menús según tu volumen',
    options: [
      { id: 'cat_100', label: 'Hasta 100 productos', sublabel: 'Navegación limpia y rápida', icon: <Package className="w-5 h-5 text-blue-600" /> },
      { id: 'cat_500', label: '100 a 500 productos', sublabel: 'Secciones dinámicas y filtros', icon: <Package className="w-5 h-5 text-violet-600" /> },
      { id: 'cat_1500', label: '500 a 1.500 productos', sublabel: 'Filtros avanzados por categoría', icon: <Package className="w-5 h-5 text-pink-600" /> },
      { id: 'cat_masivo', label: 'Más de 1.500 productos', sublabel: 'Búsqueda inteligente & ERP', icon: <Layers className="w-5 h-5 text-amber-600" /> },
    ],
  },
  optimizar: {
    title: '¿Cuál es tu nivel de ventas actual?',
    subtitle: 'Para aplicar optimizaciones según tu flujo de clientes',
    options: [
      { id: 'v_inicial', label: 'Iniciando (0 a $1M / mes)', sublabel: 'Buscando despegar y validar', icon: <Rocket className="w-5 h-5 text-blue-600" /> },
      { id: 'v_crecimiento', label: 'En crecimiento ($1M a $10M / mes)', sublabel: 'Necesito escalar y automatizar', icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
      { id: 'v_consolidado', label: 'Consolidado (+$10M / mes)', sublabel: 'Enfocado en retención y CRO alto', icon: <Crown className="w-5 h-5 text-amber-600" /> },
      { id: 'v_pausado', label: 'Tienda sin ventas o pausada', sublabel: 'Revisión y relanzamiento', icon: <HelpCircle className="w-5 h-5 text-purple-600" /> },
    ],
  },
};

const PLAN_OPTIONS: PlanOption[] = [
  {
    id: 'prende',
    label: 'Plan Prende',
    price: 'Desde $580.000 + IVA',
    tag: 'Ideal para iniciar rápido y vender en Chile',
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    id: 'full',
    label: 'Plan Full (El Más Vendido)',
    price: 'Desde $1.200.000 + IVA',
    tag: 'ERP + Boleta SII + Envíos automatizados',
    icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: 'text-violet-600 bg-violet-50 border-violet-200',
  },
  {
    id: 'conversion',
    label: 'Plan Conversión',
    price: 'Desde $2.100.000 + IVA',
    tag: 'Diseño UX Premium + Optimización CRO avanzada',
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: 'text-pink-600 bg-pink-50 border-pink-200',
  },
  {
    id: 'custom',
    label: 'Plan Custom / Enterprise',
    price: 'A cotizar a medida',
    tag: 'Desarrollo a medida con integraciones complejas',
    icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ShopifyHeroWizard() {
  const [step, setStep] = useState<number>(1);
  const [step1Selected, setStep1Selected] = useState<'nueva' | 'migracion' | 'rediseno' | 'optimizar' | null>(null);
  const [step2Selected, setStep2Selected] = useState<string | null>(null);
  const [step3Selected, setStep3Selected] = useState<string | null>(null);
  const [planSelected, setPlanSelected] = useState<string | null>(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [isPending, startTransition] = useTransition();

  // Selected labels for summary
  const step1Item = STEP1_OPTIONS.find(o => o.id === step1Selected);
  const step2Branch = step1Selected ? STEP2_BRANCHES[step1Selected] : null;
  const step2Item = step2Branch?.options.find(o => o.id === step2Selected);
  const step3Branch = step1Selected ? STEP3_BRANCHES[step1Selected] : null;
  const step3Item = step3Branch?.options.find(o => o.id === step3Selected);
  const planItem = PLAN_OPTIONS.find(o => o.id === planSelected);

  function handleSelect1(id: 'nueva' | 'migracion' | 'rediseno' | 'optimizar') {
    setStep1Selected(id);
    setStep2Selected(null);
    setStep3Selected(null);
    setTimeout(() => setStep(2), 250);
  }

  function handleSelect2(id: string) {
    setStep2Selected(id);
    setTimeout(() => setStep(3), 250);
  }

  function handleSelect3(id: string) {
    setStep3Selected(id);
    setTimeout(() => setStep(4), 250);
  }

  function handleSelectPlan(id: string) {
    setPlanSelected(id);
    setTimeout(() => setStep(5), 250);
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Tu nombre es requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email válido requerido';
    if (!form.phone.trim()) errs.phone = 'Tu WhatsApp es requerido';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    startTransition(async () => {
      const summaryParts = [
        `Necesidad: ${step1Item?.label || ''}`,
        `Detalle 1: ${step2Item?.label || ''}`,
        `Detalle 2: ${step3Item?.label || ''}`,
        `Plan elegido: ${planItem?.label || 'Sin seleccionar'}`,
      ];
      const projectType = `Shopify / ${summaryParts.join(' / ')}`;

      await createLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        project_type: projectType,
        source: 'Wizard Interactivo Hero Shopify',
      });

      setLeadName(form.name.split(' ')[0]);
      setDone(true);
    });
  }

  function openWhatsApp() {
    const msg = encodeURIComponent(
      `Hola Webunica 👋 Me llamo ${form.name || leadName}. Completé el asistente interactivo:\n` +
      `• Necesidad: ${step1Item?.label || ''}\n` +
      `• Detalle: ${step2Item?.label || ''} (${step3Item?.label || ''})\n` +
      `• Plan de interés: ${planItem?.label || 'Asesoría'}\n` +
      `¿Podemos revisar mi propuesta personalizada?`
    );
    window.open(`https://wa.me/56991089527?text=${msg}`, '_blank');
  }

  const inputCls = (err?: string) =>
    `w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white border ${err ? 'border-red-400 ring-2 ring-red-200' : 'border-zinc-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100'} text-sm sm:text-base text-zinc-900 outline-none transition placeholder-zinc-400 font-medium shadow-xs`;

  return (
    <div className="w-full max-w-[670px] mx-auto lg:mx-0">
      <div className="relative bg-white/95 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-violet-900/15 border-2 border-violet-100/90 overflow-hidden transition-all duration-300">

        {/* Top gradient glow line */}
        <div className="h-2 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085]" />

        {/* ── SUCCESS STATE ──────────────────────────────────────────── */}
        {done ? (
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-emerald-100 flex items-center justify-center shadow-inner">
                <Check className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-600" strokeWidth={3} />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full bg-emerald-200 animate-ping opacity-30" />
            </div>

            <div>
              <span className="px-3.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-[11px] sm:text-xs uppercase tracking-widest rounded-full mb-3 inline-block">
                ¡Solicitud recibida con éxito!
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tighter mb-2 sm:mb-3 leading-tight font-heading">
                ¡Excelente, {leadName}!
              </h3>
              <p className="text-sm sm:text-lg text-zinc-600 leading-relaxed max-w-md mx-auto font-light">
                Analizaremos los detalles de tu proyecto para preparar una propuesta a tu medida.
              </p>
            </div>

            {/* Selected Summary Card */}
            <div className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 sm:p-5 text-left text-xs sm:text-sm space-y-1.5 text-zinc-700 font-medium">
              <p className="text-[11px] font-black uppercase tracking-wider text-violet-600 mb-1">Resumen de tu proyecto:</p>
              <p>• <strong>Objetivo:</strong> {step1Item?.label}</p>
              {step2Item && <p>• <strong>Especialidad:</strong> {step2Item.label}</p>}
              {step3Item && <p>• <strong>Operación:</strong> {step3Item.label}</p>}
              {planItem && <p>• <strong>Plan sugerido:</strong> {planItem.label}</p>}
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl shadow-green-500/25 uppercase tracking-wider active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Hablar por WhatsApp
            </button>
            <p className="text-xs text-zinc-400 font-mono">Respuesta habitual en menos de 15 minutos</p>
          </div>
        ) : (
          <div className="p-5 sm:p-9 lg:p-12">

            {/* ── Header: Titulo + Progreso Dinámico ── */}
            <div className="flex items-start justify-between mb-5 sm:mb-8 gap-3 border-b border-zinc-100 pb-4 sm:pb-6">
              <div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1.5 sm:mb-2 inline-block">
                  Asistente de Cotización Shopify
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-950 tracking-tighter leading-tight font-heading">
                  {step === 1 && '¿Qué necesitas crear?'}
                  {step === 2 && (step2Branch?.title || 'Cuéntanos de tu tienda')}
                  {step === 3 && (step3Branch?.title || 'Detalles de tu negocio')}
                  {step === 4 && '¿Qué plan encaja con tu meta?'}
                  {step === 5 && '¿Dónde enviamos la propuesta?'}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5 sm:mt-1">
                  {step === 1 && 'Selecciona una opción para personalizar las preguntas'}
                  {step === 2 && step2Branch?.subtitle}
                  {step === 3 && step3Branch?.subtitle}
                  {step === 4 && 'Te asesoramos sin compromiso para ajustar los costos'}
                  {step === 5 && 'Recibirás la propuesta y evaluación en menos de 24 horas'}
                </p>
              </div>

              {/* Steps control */}
              <div className="flex flex-col items-end gap-1.5 sm:gap-2 shrink-0 pt-0.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(s => s - 1)}
                      className="flex items-center gap-0.5 text-[11px] sm:text-xs font-bold text-zinc-400 hover:text-violet-600 transition-colors px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg hover:bg-violet-50"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Volver
                    </button>
                  )}
                  <span className="text-[11px] sm:text-xs font-black text-zinc-500 font-mono uppercase tracking-widest bg-zinc-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg">
                    {step} / 5
                  </span>
                </div>
                <div className="flex gap-1 sm:gap-1.5">
                  {[1, 2, 3, 4, 5].map(n => (
                    <div
                      key={n}
                      className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                        n <= step
                          ? 'w-3.5 sm:w-5 bg-gradient-to-r from-violet-600 to-pink-500'
                          : 'w-1.5 sm:w-2 bg-zinc-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── PASO 1: SELECCIÓN PRINCIPAL ───────────────────────────── */}
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {STEP1_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect1(opt.id)}
                    className={`group flex items-start sm:flex-col gap-3.5 sm:gap-4 p-4 sm:p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                      step1Selected === opt.id
                        ? 'border-violet-600 bg-violet-50/80 shadow-lg shadow-violet-100'
                        : 'border-zinc-100 bg-zinc-50/60 hover:border-violet-300 hover:bg-violet-50/40'
                    }`}
                  >
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-black text-zinc-950 leading-tight mb-0.5 sm:mb-1 font-heading">{opt.label}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">{opt.sublabel}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── PASO 2: PREGUNTA DINÁMICA SEGÚN PASO 1 ─────────────────── */}
            {step === 2 && step2Branch && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {step2Branch.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect2(opt.id)}
                    className={`group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                      step2Selected === opt.id
                        ? 'border-violet-600 bg-violet-50/80 shadow-md'
                        : 'border-zinc-100 bg-zinc-50/60 hover:border-violet-300 hover:bg-violet-50/40'
                    }`}
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-black text-zinc-950 leading-tight mb-0.5 font-heading">{opt.label}</p>
                      {opt.sublabel && <p className="text-xs text-zinc-500 truncate font-medium">{opt.sublabel}</p>}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── PASO 3: DETALLE OPERATIVO DINÁMICO ─────────────────────── */}
            {step === 3 && step3Branch && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {step3Branch.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect3(opt.id)}
                    className={`group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                      step3Selected === opt.id
                        ? 'border-violet-600 bg-violet-50/80 shadow-md'
                        : 'border-zinc-100 bg-zinc-50/60 hover:border-violet-300 hover:bg-violet-50/40'
                    }`}
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-black text-zinc-950 leading-tight mb-0.5 font-heading">{opt.label}</p>
                      {opt.sublabel && <p className="text-xs text-zinc-500 truncate font-medium">{opt.sublabel}</p>}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── PASO 4: SELECCIÓN DE PLAN ─────────────────────────────── */}
            {step === 4 && (
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {PLAN_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectPlan(opt.id)}
                    className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                      planSelected === opt.id
                        ? 'border-violet-600 bg-violet-50 shadow-md'
                        : 'border-zinc-100 bg-zinc-50/60 hover:border-violet-300 hover:bg-violet-50/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className={`p-2.5 sm:p-3.5 rounded-2xl border shrink-0 ${opt.color}`}>
                        {opt.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-base font-black text-zinc-950 leading-snug font-heading">{opt.label}</p>
                        <p className="text-xs text-zinc-500 font-medium mt-0.5 leading-tight">{opt.tag}</p>
                      </div>
                    </div>
                    <div className="self-start sm:self-center shrink-0 pl-11 sm:pl-0">
                      <span className="inline-block text-xs sm:text-sm font-black text-zinc-900 bg-white px-3 py-1.5 rounded-xl border border-zinc-200 shadow-xs">
                        {opt.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── PASO 5: DATOS DE CONTACTO ──────────────────────────────── */}
            {step === 5 && (
              <div>
                {/* Resumen Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {step1Item && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100/70 border border-violet-200 rounded-full text-[11px] sm:text-xs font-black text-violet-800 uppercase tracking-wide">
                      ✦ {step1Item.label}
                    </span>
                  )}
                  {step2Item && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100/70 border border-pink-200 rounded-full text-[11px] sm:text-xs font-black text-pink-800 uppercase tracking-wide">
                      {step2Item.label}
                    </span>
                  )}
                  {planItem && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100/70 border border-emerald-200 rounded-full text-[11px] sm:text-xs font-black text-emerald-800 uppercase tracking-wide">
                      {planItem.label}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">Nombre completo *</label>
                    <input
                      type="text"
                      placeholder="Ej: María González"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputCls(errors.name)}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">Correo electrónico *</label>
                      <input
                        type="email"
                        placeholder="tu@empresa.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className={inputCls(errors.email)}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        placeholder="+56 9 1234 5678"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className={inputCls(errors.phone)}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2.5 sm:gap-3 py-4 sm:py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085] hover:opacity-95 text-white font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl shadow-violet-600/30 uppercase tracking-wider disabled:opacity-70 active:scale-[0.98] mt-3 sm:mt-4 cursor-pointer"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generando propuesta...
                      </>
                    ) : (
                      <>
                        Solicitar evaluación gratuita
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-xs text-zinc-400 mt-3 sm:mt-4 font-mono">
                  🔒 Evaluamos tu proyecto y te recomendamos el plan adecuado sin ningún compromiso.
                </p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
