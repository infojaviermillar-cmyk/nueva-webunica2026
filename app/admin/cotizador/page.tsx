"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Trash2, Mail, Phone, User, Building2, CheckCircle2, Plus, FileText, Tag } from 'lucide-react';

// ─────────────────────────────────────────
// CATÁLOGO DE SERVICIOS — editar aquí los valores y descripciones
// ─────────────────────────────────────────
const SERVICES_CATALOG = [
  {
    category: '🛍️ E-commerce Shopify',
    items: [
      { id: 'sh-base', name: 'Tienda Shopify Base', desc: 'Configuración completa con plantilla premium (Dawn o similar), hasta 50 productos, medios de pago, despachos y dominio.', price: 950000 },
      { id: 'sh-pro', name: 'Tienda Shopify Pro (Diseño Personalizado)', desc: 'Diseño exclusivo desde wireframes en Figma/Adobe XD, secciones modulares, branding 100% a medida, QA técnico completo.', price: 1800000 },
      { id: 'sh-theme', name: 'Theme Shopify Personalizado (Liquid)', desc: 'Desarrollo a medida del theme en Liquid para una tienda ya existente. Incluye secciones dinámicas y ajustes mobile-first.', price: 1200000 },
    ]
  },
  {
    category: '🛒 E-commerce WooCommerce',
    items: [
      { id: 'woo-base', name: 'Tienda WooCommerce B2B / Catálogos', desc: 'Desarrollo sobre WordPress + WooCommerce con acceso por rol, listas de precios por cliente y generación de cotizaciones.', price: 1500000 },
    ]
  },
  {
    category: '🌐 Desarrollo Web',
    items: [
      { id: 'lp-pyme', name: 'Página Web Corporativa / Pyme', desc: 'Hasta 6 secciones: Hero, Servicios, About, Testimonios, Blog y Contacto. Diseño responsive, velocidad optimizada y SEO técnico básico.', price: 650000 },
      { id: 'lp-landing', name: 'Landing Page de Conversión', desc: 'Página de una sola pantalla enfocada 100% en CRO. Incluye formulario de leads, integración con WhatsApp y pixel de Facebook.', price: 450000 },
      { id: 'web-nextjs', name: 'Aplicación Web / SaaS (Next.js)', desc: 'Desarrollo de aplicaciones web a medida con Next.js, base de datos, autenticación y APIs. Cotización a confirmar según alcance.', price: 3500000 },
    ]
  },
  {
    category: '⚙️ Integraciones Shopify Chile',
    items: [
      { id: 'int-fintoc', name: 'Integración Fintoc (Transferencias bancarias)', desc: 'Configuración del plugin Fintoc para aceptar transferencias bancarias en el checkout de Shopify. Incluye pruebas de flujo completo.', price: 150000 },
      { id: 'int-webpay', name: 'Integración Transbank Webpay Plus', desc: 'Configuración y certificación de Webpay Plus (tarjetas de crédito/débito). Incluye pruebas en ambiente de integración.', price: 180000 },
      { id: 'int-flow', name: 'Integración Flow / Mercado Pago', desc: 'Configuración de Flow o Mercado Pago como pasarela de pago. Incluye revisión de comisiones y configuración de webhooks.', price: 120000 },
      { id: 'int-bsale', name: 'Integración ERP Bsale', desc: 'Sincronización bidireccional entre Shopify y Bsale (productos, stock, pedidos y emisión de DTE). Requiere cuenta Bsale activa.', price: 450000 },
      { id: 'int-dte', name: 'Configuración Boleta/Factura Electrónica', desc: 'Integración con Haulmer, LibreDTE u Obuma para emisión automática de DTE en cada venta. Incluye configuración tributaria.', price: 180000 },
      { id: 'int-envios', name: 'Configuración de Envíos (Shipit / Starken / Chilexpress)', desc: 'Integración con operador logístico para generación automática de etiquetas, cálculo de tarifa en checkout y seguimiento.', price: 200000 },
    ]
  },
  {
    category: '🎓 E-learning y Sistemas Especiales',
    items: [
      { id: 'lms-base', name: 'Academia E-learning (Tutor LMS + WordPress)', desc: 'Instalación y configuración de plataforma de cursos online con Tutor LMS Pro. Incluye pasarela de pago, certificados y hasta 3 cursos de prueba.', price: 1200000 },
      { id: 'lms-sence', name: 'Complemento Sence para Tutor LMS Pro', desc: 'Plugin propietario de Webunica para registro de asistencia y cumplimiento normativo SENCE en cursos con franquicia tributaria.', price: 490000 },
    ]
  },
  {
    category: '📈 Marketing y SEO',
    items: [
      { id: 'seo-audit', name: 'Auditoría SEO Técnico Completa', desc: 'Revisión de Core Web Vitals, rastreo, indexación, estructura de URLs, metadatos, enlaces y velocidad. Entregable: informe + roadmap de mejoras.', price: 350000 },
      { id: 'seo-mensual', name: 'Campaña SEO Mensual (Posicionamiento)', desc: 'Gestión mensual de posicionamiento: keyword research, producción de contenido, link building y reporte mensual de resultados.', price: 400000 },
      { id: 'cro-audit', name: 'Auditoría CRO para E-commerce', desc: 'Análisis de embudo de conversión, heatmaps, revisión de checkout, propuesta de mejoras UX/UI y test A/B inicial.', price: 280000 },
    ]
  },
  {
    category: '🔧 Soporte y Mantención',
    items: [
      { id: 'mant-shopify', name: 'Soporte Mensual Tienda Shopify', desc: 'Soporte técnico mensual: actualizaciones, corrección de errores, cambios de contenido (hasta 5 horas), revisión de velocidad.', price: 250000 },
      { id: 'mant-wp', name: 'Mantención Mensual WordPress / WooCommerce', desc: 'Actualizaciones de plugins y core, backup semanal, monitoreo de seguridad y hasta 5 horas de ajustes de contenido.', price: 200000 },
    ]
  },
];

// Aplanar catálogo para fácil búsqueda
const ALL_SERVICES = SERVICES_CATALOG.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));

function CotizadorContent() {
  const searchParams = useSearchParams();

  const [clientInfo, setClientInfo] = useState({
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    company: '',
    rut: '',
  });

  const [selectedServices, setSelectedServices] = useState<typeof ALL_SERVICES>(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const found = ALL_SERVICES.find(s => s.name.toLowerCase().includes(serviceParam.toLowerCase().slice(0, 10)));
      return found ? [found] : [];
    }
    return [];
  });

  const [discountPercent, setDiscountPercent] = useState(0);
  const [quoteNumber] = useState(() => `WU-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);
  const [notes, setNotes] = useState('');

  // Calculations
  const subtotal = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const subtotalWithDiscount = subtotal - discountAmount;
  const iva = Math.round(subtotalWithDiscount * 0.19);
  const total = subtotalWithDiscount + iva;

  const handleAddService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceId = e.target.value;
    if (!serviceId) return;
    const service = ALL_SERVICES.find(s => s.id === serviceId);
    if (service && !selectedServices.find(s => s.id === serviceId)) {
      setSelectedServices([...selectedServices, service]);
    }
    e.target.value = '';
  };

  const handleRemoveService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== id));
  };

  const handlePrint = () => window.print();

  const formatCLP = (amount: number) =>
    new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="min-h-screen bg-slate-100 pt-[22vh] lg:pt-40 pb-20 print:bg-white print:pt-0 print:pb-0">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Top Bar (no print) ── */}
        <div className="flex items-center justify-between mb-10 print:hidden">
          <div>
            <Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver a Leads
            </Link>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">
              Cotizador <span className="text-violet-600 italic font-serif lowercase font-light">Interno</span>
            </h1>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-violet-600 transition-all shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>

        {/* ── Document ── */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none">

          {/* Header dark */}
          <div className="bg-zinc-950 px-10 py-8 flex flex-col sm:flex-row justify-between items-start gap-8 print:bg-white print:border-b-2 print:border-zinc-900">
            <div>
              <img src="/logo-webunica.png.webp" alt="Webunica" className="h-8 brightness-0 invert print:invert-0 mb-4" />
              <div className="text-zinc-400 print:text-zinc-600 space-y-0.5 text-sm font-medium">
                <p className="text-white print:text-zinc-900 font-bold">Webunica Chile EIRL</p>
                <p>RUT: 76.371.864-6</p>
                <p>Providencia, Santiago, Chile</p>
                <p>consultas@webunica.cl · +56 9 8441 0379</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-4xl font-black uppercase tracking-widest text-white print:text-zinc-900 mb-2">Cotización</h2>
              <div className="text-zinc-400 print:text-zinc-500 space-y-1 text-sm font-medium">
                <p><span className="font-bold text-zinc-300 print:text-zinc-700">N°:</span> {quoteNumber}</p>
                <p><span className="font-bold text-zinc-300 print:text-zinc-700">Fecha:</span> {new Date().toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                <p><span className="font-bold text-zinc-300 print:text-zinc-700">Validez:</span> 15 días corridos</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10 space-y-10">

            {/* ── Client + Service Selector ── */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Client Info */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" /> Preparado para
                </h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4 print:bg-white print:border-none print:p-0">
                  {[
                    { icon: <User className="w-4 h-4" />, key: 'name', placeholder: 'Nombre Completo *', type: 'text' },
                    { icon: <Building2 className="w-4 h-4" />, key: 'company', placeholder: 'Empresa (opcional)', type: 'text' },
                    { icon: <Tag className="w-4 h-4" />, key: 'rut', placeholder: 'RUT empresa (opcional)', type: 'text' },
                    { icon: <Mail className="w-4 h-4" />, key: 'email', placeholder: 'correo@empresa.cl', type: 'email' },
                    { icon: <Phone className="w-4 h-4" />, key: 'phone', placeholder: '+56 9 XXXX XXXX', type: 'tel' },
                  ].map(({ icon, key, placeholder, type }) => (
                    <div key={key} className="flex items-center gap-3 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-400 shrink-0 print:hidden">{icon}</span>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="bg-transparent outline-none w-full font-medium text-slate-900 placeholder:text-slate-300 text-sm print:border-none"
                        value={clientInfo[key as keyof typeof clientInfo]}
                        onChange={e => setClientInfo({ ...clientInfo, [key]: e.target.value })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Selector */}
              <div className="print:hidden">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <Plus className="w-3.5 h-3.5" /> Agregar Servicios
                </h3>
                <select
                  onChange={handleAddService}
                  defaultValue=""
                  className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 font-medium text-slate-700 text-sm cursor-pointer hover:border-violet-400 transition-colors"
                >
                  <option value="" disabled>Seleccionar servicio...</option>
                  {SERVICES_CATALOG.map(cat => (
                    <optgroup key={cat.category} label={cat.category}>
                      {cat.items.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name} — {formatCLP(s.price)}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                {/* Hint */}
                <p className="text-xs text-slate-400 font-medium mt-4 px-2">
                  💡 Puedes agregar múltiples servicios. El sistema calculará el subtotal, descuento e IVA automáticamente.
                </p>

                {/* Discount */}
                <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-3 block">Descuento Comercial</label>
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
                    <div className="w-16 bg-white border border-emerald-200 rounded-xl px-3 py-2 text-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={discountPercent}
                        onChange={e => setDiscountPercent(Math.min(100, Math.max(0, Number(e.target.value))))}
                        className="w-full text-center font-black text-emerald-700 bg-transparent outline-none text-sm"
                      />
                    </div>
                    <span className="font-black text-emerald-700 text-lg">%</span>
                  </div>
                  {discountPercent > 0 && (
                    <p className="text-sm font-bold text-emerald-700 mt-2">
                      Ahorro cliente: {formatCLP(discountAmount)}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div className="mt-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Notas internas (no se imprime)</label>
                  <textarea
                    rows={3}
                    placeholder="Ej: Cliente conocido, referido por X, plazo urgente..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm font-medium text-slate-600 resize-none focus:border-violet-400 placeholder:text-slate-300"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* ── Line Items Table ── */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Detalle de Servicios</h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <th className="px-6 py-4">Servicio</th>
                      <th className="px-6 py-4 hidden sm:table-cell">Descripción</th>
                      <th className="px-6 py-4 text-right">Monto Neto</th>
                      <th className="px-4 py-4 w-12 print:hidden"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedServices.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-10 text-center text-slate-300 font-medium italic text-sm print:hidden">
                          Selecciona servicios del listado de arriba para agregarlos aquí.
                        </td>
                      </tr>
                    ) : (
                      selectedServices.map((service) => (
                        <tr key={service.id} className="group">
                          <td className="px-6 py-5 align-top">
                            <div className="font-bold text-slate-900 text-sm leading-snug">{service.name}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                              {service.category.replace(/^[^\w]*/, '').split(' ').slice(0, 3).join(' ')}
                            </div>
                          </td>
                          <td className="px-6 py-5 align-top hidden sm:table-cell max-w-xs">
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                          </td>
                          <td className="px-6 py-5 align-top text-right font-black text-slate-900 whitespace-nowrap">
                            {formatCLP(service.price)}
                          </td>
                          <td className="px-4 py-5 align-top print:hidden">
                            <button
                              onClick={() => handleRemoveService(service.id)}
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
              <div className="w-full max-w-sm space-y-3">
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
                <li>Forma de pago: <strong>50% al inicio del proyecto</strong>, 50% a la entrega en producción.</li>
                <li>Los valores están expresados en pesos chilenos (CLP) e incluyen IVA según ley.</li>
                <li>Tiempo de entrega estimado según complejidad del proyecto (revisar en reunión de Kick-off).</li>
                <li>Garantía de código y soporte técnico por <strong>30 días</strong> desde la entrega en producción.</li>
                <li>Cotización válida por 15 días corridos desde su emisión.</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-400 font-medium">
                <p>Webunica Chile EIRL · RUT 76.371.864-6 · consultas@webunica.cl · +56 9 8441 0379</p>
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
    <Suspense fallback={<div className="min-h-screen bg-slate-100 pt-40 text-center font-bold text-slate-400">Cargando cotizador...</div>}>
      <CotizadorContent />
    </Suspense>
  );
}
