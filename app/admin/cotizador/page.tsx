"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calculator, Download, Plus, Trash2, Mail, Phone, User, CheckCircle2 } from 'lucide-react';

const SERVICES_CATALOG = [
  { id: 'sh-base', name: 'Desarrollo Tienda Shopify Base', price: 950000, category: 'E-commerce' },
  { id: 'sh-pro', name: 'Desarrollo Tienda Shopify Pro (A Medida)', price: 1800000, category: 'E-commerce' },
  { id: 'woo-base', name: 'Desarrollo Tienda WooCommerce B2B', price: 1500000, category: 'E-commerce' },
  { id: 'lp-pyme', name: 'Landing Page Corporativa / Pyme', price: 650000, category: 'Desarrollo Web' },
  { id: 'int-pago', name: 'Integración Pasarela de Pago (Fintoc/Webpay)', price: 150000, category: 'Integraciones' },
  { id: 'int-erp', name: 'Integración ERP (Bsale, Obuma)', price: 450000, category: 'Integraciones' },
  { id: 'int-dte', name: 'Configuración Boleta Electrónica', price: 120000, category: 'Integraciones' },
  { id: 'seo-audit', name: 'Auditoría SEO Técnico', price: 350000, category: 'Marketing' },
  { id: 'seo-mensual', name: 'Campaña SEO Mensual', price: 400000, category: 'Marketing' },
  { id: 'lms-base', name: 'Academia E-learning Tutor LMS', price: 1200000, category: 'Sistemas Especiales' },
];

function CotizadorContent() {
  const searchParams = useSearchParams();
  
  // Client info
  const [clientInfo, setClientInfo] = useState({
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    company: ''
  });

  // Selected services
  const [selectedServices, setSelectedServices] = useState<typeof SERVICES_CATALOG>([]);
  
  // Discount
  const [discountPercent, setDiscountPercent] = useState(0);

  // Calculations
  const subtotal = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const subtotalWithDiscount = subtotal - discountAmount;
  const iva = subtotalWithDiscount * 0.19; // 19% IVA in Chile
  const total = subtotalWithDiscount + iva;

  const handleAddService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceId = e.target.value;
    if (!serviceId) return;
    
    const service = SERVICES_CATALOG.find(s => s.id === serviceId);
    if (service && !selectedServices.find(s => s.id === serviceId)) {
      setSelectedServices([...selectedServices, service]);
    }
    // reset select
    e.target.value = "";
  };

  const handleRemoveService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  const formatCLP = (amount: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-40 pb-20 print:bg-white print:pt-0 print:pb-0">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header - Hidden in Print */}
        <div className="flex items-center justify-between mb-12 print:hidden">
          <div>
            <Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest mb-6 transition-colors">
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

        {/* Printable Area */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden print:border-none print:shadow-none print:rounded-none">
          
          {/* Quote Header */}
          <div className="bg-zinc-950 p-10 flex flex-col sm:flex-row justify-between items-start gap-8 print:bg-white print:border-b print:border-slate-200 print:text-black">
            <div>
              <img src="/logo-webunica.png.webp" alt="Webunica" className="h-8 brightness-0 invert print:invert-0 print:brightness-100 mb-6" />
              <div className="text-white print:text-black space-y-1 text-sm font-medium">
                <p>Webunica Digital SpA</p>
                <p>Providencia, Santiago, Chile</p>
                <p>consultas@webunica.cl</p>
              </div>
            </div>
            <div className="text-right text-white print:text-black">
              <h2 className="text-3xl font-black uppercase tracking-widest mb-2">Cotización</h2>
              <p className="text-slate-400 print:text-slate-500 font-medium text-sm">Fecha: {new Date().toLocaleDateString('es-CL')}</p>
              <p className="text-slate-400 print:text-slate-500 font-medium text-sm">Validez: 15 días</p>
            </div>
          </div>

          <div className="p-10">
            {/* Client Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 print:bg-white print:border-none print:p-0">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 print:text-slate-500">Preparado para</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-slate-400 print:hidden" />
                    <input 
                      type="text" 
                      placeholder="Nombre del Cliente" 
                      className="bg-transparent border-b border-slate-200 focus:border-violet-600 outline-none w-full font-bold text-slate-900 print:border-none"
                      value={clientInfo.name}
                      onChange={e => setClientInfo({...clientInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 print:hidden" />
                    <input 
                      type="text" 
                      placeholder="Correo Electrónico" 
                      className="bg-transparent border-b border-slate-200 focus:border-violet-600 outline-none w-full text-slate-600 font-medium print:border-none"
                      value={clientInfo.email}
                      onChange={e => setClientInfo({...clientInfo, email: e.target.value})}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 print:hidden" />
                    <input 
                      type="text" 
                      placeholder="Teléfono" 
                      className="bg-transparent border-b border-slate-200 focus:border-violet-600 outline-none w-full text-slate-600 font-medium print:border-none"
                      value={clientInfo.phone}
                      onChange={e => setClientInfo({...clientInfo, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Service Selector (Hidden in Print) */}
              <div className="print:hidden">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Agregar Servicios</h3>
                <div className="flex gap-2">
                  <select 
                    onChange={handleAddService}
                    defaultValue=""
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-violet-600 font-medium text-slate-700"
                  >
                    <option value="" disabled>Seleccionar producto o servicio...</option>
                    <optgroup label="E-commerce">
                      {SERVICES_CATALOG.filter(s => s.category === 'E-commerce').map(s => <option key={s.id} value={s.id}>{s.name} ({formatCLP(s.price)})</option>)}
                    </optgroup>
                    <optgroup label="Integraciones">
                      {SERVICES_CATALOG.filter(s => s.category === 'Integraciones').map(s => <option key={s.id} value={s.id}>{s.name} ({formatCLP(s.price)})</option>)}
                    </optgroup>
                    <optgroup label="Desarrollo Web & Marketing">
                      {SERVICES_CATALOG.filter(s => s.category !== 'E-commerce' && s.category !== 'Integraciones').map(s => <option key={s.id} value={s.id}>{s.name} ({formatCLP(s.price)})</option>)}
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-12 border border-slate-200 rounded-2xl overflow-hidden print:border-none print:rounded-none">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 print:bg-white print:border-b-2">
                    <th className="p-4">Descripción del Servicio</th>
                    <th className="p-4 text-right">Monto Neto</th>
                    <th className="p-4 w-16 print:hidden"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedServices.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-8 text-center text-slate-400 font-medium italic print:hidden">No has agregado servicios a la cotización.</td>
                    </tr>
                  ) : (
                    selectedServices.map((service) => (
                      <tr key={service.id}>
                        <td className="p-4">
                          <div className="font-bold text-slate-900">{service.name}</div>
                          <div className="text-xs text-slate-500">{service.category}</div>
                        </td>
                        <td className="p-4 text-right font-bold text-slate-900">
                          {formatCLP(service.price)}
                        </td>
                        <td className="p-4 text-right print:hidden">
                          <button onClick={() => handleRemoveService(service.id)} className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex flex-col items-end mb-12">
              <div className="w-full max-w-sm space-y-4">
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Subtotal Neto:</span>
                  <span>{formatCLP(subtotal)}</span>
                </div>
                
                {/* Discount Control */}
                <div className="flex justify-between items-center text-emerald-600 font-bold group">
                  <span className="flex items-center gap-2">
                    Descuento Comercial:
                    <div className="print:hidden bg-emerald-50 rounded-lg px-2 flex items-center border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity">
                      <input 
                        type="number" 
                        min="0" max="100" 
                        value={discountPercent} 
                        onChange={(e) => setDiscountPercent(Number(e.target.value))}
                        className="w-12 bg-transparent text-right outline-none text-emerald-700"
                      />
                      <span className="text-emerald-700">%</span>
                    </div>
                    {discountPercent > 0 && <span className="hidden print:inline">({discountPercent}%)</span>}
                  </span>
                  <span>-{formatCLP(discountAmount)}</span>
                </div>

                <div className="flex justify-between items-center text-slate-600 font-medium pt-4 border-t border-slate-200">
                  <span>IVA (19%):</span>
                  <span>{formatCLP(iva)}</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-black text-slate-900 pt-4 border-t-2 border-slate-900">
                  <span>Total Final:</span>
                  <span>{formatCLP(total)}</span>
                </div>
              </div>
            </div>

            {/* Footer Notes */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 print:bg-white print:border-t-2 print:border-x-0 print:border-b-0 print:rounded-none">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Condiciones Comerciales</h4>
              <ul className="text-sm text-slate-600 space-y-1 font-medium list-disc list-inside">
                <li>Forma de pago: 50% al inicio del proyecto, 50% a la entrega en producción.</li>
                <li>Tiempo de entrega estimado: Evaluado en reunión de Kick-off (Aprox. 3 a 5 semanas).</li>
                <li>Los valores incluyen configuración y control de calidad (QA).</li>
                <li>Soporte técnico y garantía de código por 30 días tras liberación.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function CotizadorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-40 text-center font-bold">Cargando cotizador...</div>}>
      <CotizadorContent />
    </Suspense>
  );
}
