"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Layers, 
  ArrowLeft,
  Plus,
  Trash2,
  RefreshCw,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';
import { 
  ContractData, 
  PACIFIC_COLOR_PRESET, 
  PRESET_FULL_SHOPIFY, 
  formatCLP 
} from '@/lib/contract-templates';

// Recalculate Gantt dates based on start date
function recalculateGanttDates(startDateStr: string, currentGantt: ContractData['ganttEtapas']) {
  if (!startDateStr) return currentGantt;
  
  const parts = startDateStr.split('-').map(Number);
  if (parts.length !== 3) return currentGantt;
  const [year, month, day] = parts;
  if (!year || !month || !day) return currentGantt;

  const startDate = new Date(year, month - 1, day);

  return currentGantt.map((etapa, idx) => {
    if (idx === 0) {
      const dd = String(startDate.getDate()).padStart(2, '0');
      const mm = String(startDate.getMonth() + 1).padStart(2, '0');
      const yyyy = startDate.getFullYear();
      return {
        ...etapa,
        fechas: `${dd}-${mm}-${yyyy}`
      };
    }

    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + (idx - 1) * 7);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const d1 = String(weekStart.getDate()).padStart(2, '0');
    const m1 = String(weekStart.getMonth() + 1).padStart(2, '0');
    const d2 = String(weekEnd.getDate()).padStart(2, '0');
    const m2 = String(weekEnd.getMonth() + 1).padStart(2, '0');

    const dateFormatted = m1 === m2 ? `${d1}-${m1} al ${d2}-${m2}` : `${d1}-${m1} al ${d2}-${m2}`;

    return {
      ...etapa,
      fechas: dateFormatted
    };
  });
}

export default function ContratoGeneratorPage() {
  const [data, setData] = useState<ContractData>(PACIFIC_COLOR_PRESET);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('preview');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Format Spanish date for document header
  const formatDateSpanish = (dateString: string) => {
    if (!dateString) return "____ de ____________ de 2026";
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return `${day} de ${months[monthIndex] || 'julio'} de ${year}`;
  };

  // Handle start date change + auto recalculate dates
  const handleDateChange = (newDateStr: string) => {
    const updatedGantt = recalculateGanttDates(newDateStr, data.ganttEtapas);
    setData({
      ...data,
      fechaContrato: newDateStr,
      ganttEtapas: updatedGantt
    });
  };

  // Recalculate payments based on net value
  const handleNetoChange = (newNeto: number) => {
    const newHitos = data.hitosPago.map(hito => {
      const hitoNeto = Math.round(newNeto * (hito.porcentaje / 100));
      const hitoIva = Math.round(hitoNeto * (data.ivaPorcentaje / 100));
      return {
        ...hito,
        montoNeto: hitoNeto,
        montoIva: hitoIva,
        montoTotal: hitoNeto + hitoIva
      };
    });

    setData({
      ...data,
      valorNeto: newNeto,
      hitosPago: newHitos
    });
  };

  // Direct Page-by-Page High Precision PDF Exporter
  const handleGenerateRealPdf = async () => {
    setIsGeneratingPdf(true);
    document.body.classList.add('generating-pdf');
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const sheets = Array.from(document.querySelectorAll('.contract-sheet')) as HTMLElement[];
      if (sheets.length === 0) return;

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;

      for (let i = 0; i < sheets.length; i++) {
        const sheet = sheets[i];
        const canvas = await html2canvas(sheet, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: 1000
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, contentHeight);
      }

      const cleanPlan = data.planNombre.replace(/[^a-zA-Z0-9]/g, '_');
      const cleanCliente = data.clienteRazonSocial.replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `Contrato_${cleanPlan}_${cleanCliente}.pdf`;

      pdf.save(filename);
    } catch (err) {
      console.error('PDF Export Error:', err);
    } finally {
      document.body.classList.remove('generating-pdf');
      setIsGeneratingPdf(false);
    }
  };

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Copy plain text to clipboard
  const handleCopyText = () => {
    const el = document.getElementById('legal-contract-print-area');
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Download Word .doc compatible file
  const handleDownloadDoc = () => {
    const el = document.getElementById('legal-contract-print-area');
    if (!el) return;
    const htmlContent = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>Contrato ${data.clienteRazonSocial}</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #000000; }
          h1 { font-size: 16pt; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 5px; }
          h2 { font-size: 13pt; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 5px; }
          h3 { font-size: 11pt; font-weight: bold; text-transform: uppercase; margin-top: 15px; margin-bottom: 5px; }
          p { text-align: justify; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px; }
          th, td { border: 1pt solid #000000; padding: 5pt; font-size: 10pt; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; text-transform: uppercase; }
          .contract-sheet { page-break-after: always; }
        </style>
      </head>
      <body>
        ${el.innerHTML}
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Contrato_${data.planNombre.replace(/\s+/g, '_')}_${data.clienteRazonSocial.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const totalIva = Math.round(data.valorNeto * (data.ivaPorcentaje / 100));
  const totalConIva = data.valorNeto + totalIva;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-24 selection:bg-purple-500 selection:text-white print:bg-white print:text-black print:pb-0">
      
      {/* HEADER BAR */}
      <div className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <Link href="/admin/leads" className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-2xl transition-all border border-zinc-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FileText className="w-6 h-6 text-[#7850FA]" />
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-heading">Generador de Contratos Webunica</h1>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">Generador Legal Automatizado • Cotización N° {data.cotizacionNumero}</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2.5 justify-center">
            <button 
              onClick={() => setData(PACIFIC_COLOR_PRESET)}
              className="px-4 py-2.5 bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-400/50 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-900/40 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
              Contrato Custom Elite (Pacific Color)
            </button>
            <button 
              onClick={() => setData(PRESET_FULL_SHOPIFY)}
              className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Shopify Full ($850k)
            </button>
          </div>
        </div>

        {/* PRIMARY ACTION BUTTONS BAR */}
        <div className="max-w-7xl mx-auto mt-4 bg-white p-4 sm:p-5 rounded-3xl border border-zinc-200 shadow-md flex flex-wrap items-center justify-between gap-4 text-black">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Documento formal generado para: <strong className="text-zinc-950">{data.clienteRazonSocial}</strong></span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={handleCopyText}
              className="flex-1 sm:flex-none px-4 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-zinc-300"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-zinc-600" />}
              {copied ? '¡Copiado!' : 'Copiar Texto'}
            </button>

            <button 
              onClick={handleDownloadDoc}
              className="flex-1 sm:flex-none px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Descargar Word (.doc)
            </button>

            <button 
              onClick={handleGenerateRealPdf}
              disabled={isGeneratingPdf}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#7850FA] hover:bg-[#683fe4] text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#7850FA]/30 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generando PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Descargar PDF (.pdf)
                </>
              )}
            </button>

            <button 
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              Imprimir / Guardar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 print:px-0 print:max-w-none">
        
        {/* VIEW MODE TOGGLE ON MOBILE */}
        <div className="lg:hidden print:hidden mb-6 flex bg-zinc-800 p-1.5 rounded-2xl">
          <button 
            onClick={() => setActiveTab('editor')} 
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'editor' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-400'}`}
          >
            ✏️ Editar Campos
          </button>
          <button 
            onClick={() => setActiveTab('preview')} 
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'preview' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-400'}`}
          >
            📄 Ver Documento
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT PANEL: FORM EDITOR (Hidden on print)                 */}
          {/* ========================================================= */}
          <div className={`lg:col-span-4 space-y-6 print:hidden ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
            
            {/* CARD 1: CLIENTE & MARCA */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4 text-black">
              <div className="flex items-center gap-2 text-purple-900 border-b border-zinc-100 pb-3">
                <Building2 className="w-5 h-5 text-[#7850FA]" />
                <h2 className="font-black text-sm uppercase tracking-wider">Datos Empresa Cliente & Marca</h2>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Razón Social Cliente</label>
                <input 
                  type="text" 
                  value={data.clienteRazonSocial}
                  onChange={(e) => setData({...data, clienteRazonSocial: e.target.value})}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">RUT Empresa</label>
                  <input 
                    type="text" 
                    value={data.clienteRut}
                    onChange={(e) => setData({...data, clienteRut: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Cotización N°</label>
                  <input 
                    type="text" 
                    value={data.cotizacionNumero}
                    onChange={(e) => setData({...data, cotizacionNumero: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Nombre de Marca / Tienda</label>
                <input 
                  type="text" 
                  value={data.nombreMarca || ''}
                  onChange={(e) => setData({...data, nombreMarca: e.target.value})}
                  placeholder="Ej: Maxxgo"
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Domicilio Empresa</label>
                <input 
                  type="text" 
                  value={data.clienteDireccion}
                  onChange={(e) => setData({...data, clienteDireccion: e.target.value})}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div className="pt-2 border-t border-zinc-100 space-y-3">
                <div className="flex items-center gap-2 text-zinc-700">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  <span className="font-bold text-xs uppercase">Representante Legal Cliente</span>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Nombre Representante</label>
                  <input 
                    type="text" 
                    value={data.clienteRepresentante}
                    onChange={(e) => setData({...data, clienteRepresentante: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">RUT Representante</label>
                  <input 
                    type="text" 
                    value={data.clienteRepresentanteRut}
                    onChange={(e) => setData({...data, clienteRepresentanteRut: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2: PLAN, VALORES Y PARÁMETROS DINÁMICOS */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4 text-black">
              <div className="flex items-center gap-2 text-purple-900 border-b border-zinc-100 pb-3">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <h2 className="font-black text-sm uppercase tracking-wider">Plan, Valores & Parámetros</h2>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Nombre del Servicio / Plan</label>
                <input 
                  type="text" 
                  value={data.planNombre}
                  onChange={(e) => setData({...data, planNombre: e.target.value})}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Valor Neto ($ CLP)</label>
                <input 
                  type="number" 
                  value={data.valorNeto}
                  onChange={(e) => handleNetoChange(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-bold text-emerald-700 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 text-xs space-y-1 font-mono">
                <div className="flex justify-between text-zinc-600"><span>Neto:</span><span>{formatCLP(data.valorNeto)}</span></div>
                <div className="flex justify-between text-zinc-600"><span>IVA ({data.ivaPorcentaje}%):</span><span>{formatCLP(totalIva)}</span></div>
                <div className="flex justify-between font-black text-zinc-950 text-sm border-t border-zinc-200 pt-1 mt-1"><span>Total IVA Incluido:</span><span>{formatCLP(totalConIva)}</span></div>
              </div>

              {/* NUEVOS CAMPOS SOLICITADOS POR EL USUARIO */}
              <div className="pt-3 border-t border-zinc-100 space-y-3">
                <div className="flex items-center gap-2 text-zinc-800 font-bold text-xs uppercase">
                  <PackageCheck className="w-4 h-4 text-violet-600" />
                  <span>Configuración Dinámica del Proyecto</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Cant. Productos</label>
                    <input 
                      type="number" 
                      value={data.cantidadProductos ?? 1000}
                      onChange={(e) => setData({...data, cantidadProductos: parseInt(e.target.value, 10) || 0})}
                      placeholder="Ej: 1000"
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Días Garantía</label>
                    <input 
                      type="number" 
                      value={data.diasGarantia ?? 90}
                      onChange={(e) => setData({...data, diasGarantia: parseInt(e.target.value, 10) || 0})}
                      placeholder="Ej: 90"
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Nombre del ERP</label>
                    <input 
                      type="text" 
                      value={data.nombreErp ?? 'Nebula'}
                      onChange={(e) => setData({...data, nombreErp: e.target.value})}
                      placeholder="Ej: Nebula, Bsale"
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Facturación Elec.</label>
                    <input 
                      type="text" 
                      value={data.sistemaFacturacion ?? 'Wasabil'}
                      onChange={(e) => setData({...data, sistemaFacturacion: e.target.value})}
                      placeholder="Ej: Wasabil, Haulmer"
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: FECHAS Y DURACIÓN CON AUTO-RECALCULADOR */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4 text-black">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2 text-purple-900">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h2 className="font-black text-sm uppercase tracking-wider">Fechas de Inicio y Plazos</h2>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-bold uppercase text-zinc-600">Fecha de Firma / Inicio</label>
                  <button 
                    type="button"
                    onClick={() => handleDateChange(data.fechaContrato)}
                    className="text-[10px] font-bold text-[#7850FA] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Auto-recalcular Fechas
                  </button>
                </div>
                <input 
                  type="date" 
                  value={data.fechaContrato}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Duración (semanas)</label>
                  <input 
                    type="number" 
                    value={data.duracionSemanas}
                    onChange={(e) => setData({...data, duracionSemanas: parseInt(e.target.value, 10) || 1})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Holgura (semanas)</label>
                  <input 
                    type="number" 
                    value={data.holguraSemanas}
                    onChange={(e) => setData({...data, holguraSemanas: parseInt(e.target.value, 10) || 0})}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* CARD 4: EDICIÓN COMPLETA DE ETAPAS GANTT */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4 text-black">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2 text-purple-900">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <h2 className="font-black text-sm uppercase tracking-wider">Editar Filas de Carta Gantt</h2>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    const newEtapas = [...data.ganttEtapas, {
                      semana: `Semana ${data.ganttEtapas.length}`,
                      fechas: "Por definir",
                      disenoUxUi: "Nuevas tareas UX",
                      desarrolloShopify: "Nuevas tareas dev",
                      entregable: "Entregable clave",
                      pagoPct: "-"
                    }];
                    setData({...data, ganttEtapas: newEtapas});
                  }}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer border border-indigo-200"
                >
                  <Plus className="w-3 h-3" /> Agregar Fila
                </button>
              </div>

              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                {data.ganttEtapas.map((etapa, idx) => (
                  <div key={idx} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2 text-xs relative group">
                    <div className="flex items-center justify-between gap-2">
                      <input 
                        type="text"
                        value={etapa.semana}
                        onChange={(e) => {
                          const updated = [...data.ganttEtapas];
                          updated[idx].semana = e.target.value;
                          setData({...data, ganttEtapas: updated});
                        }}
                        className="font-bold text-zinc-900 bg-transparent border-b border-zinc-300 w-1/3 text-xs focus:border-[#7850FA] outline-none"
                      />
                      <input 
                        type="text"
                        value={etapa.fechas}
                        onChange={(e) => {
                          const updated = [...data.ganttEtapas];
                          updated[idx].fechas = e.target.value;
                          setData({...data, ganttEtapas: updated});
                        }}
                        className="font-mono text-zinc-600 bg-transparent border-b border-zinc-300 w-1/3 text-xs focus:border-[#7850FA] outline-none"
                      />
                      <button 
                        type="button"
                        onClick={() => {
                          const updated = data.ganttEtapas.filter((_, i) => i !== idx);
                          setData({...data, ganttEtapas: updated});
                        }}
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        title="Eliminar fila"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-400 uppercase">Diseño UX/UI</label>
                      <input 
                        type="text"
                        value={etapa.disenoUxUi}
                        onChange={(e) => {
                          const updated = [...data.ganttEtapas];
                          updated[idx].disenoUxUi = e.target.value;
                          setData({...data, ganttEtapas: updated});
                        }}
                        className="w-full px-2 py-1 bg-white border border-zinc-200 rounded-lg text-xs text-zinc-800 focus:border-[#7850FA] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-400 uppercase">Desarrollo Shopify / Integraciones</label>
                      <input 
                        type="text"
                        value={etapa.desarrolloShopify}
                        onChange={(e) => {
                          const updated = [...data.ganttEtapas];
                          updated[idx].desarrolloShopify = e.target.value;
                          setData({...data, ganttEtapas: updated});
                        }}
                        className="w-full px-2 py-1 bg-white border border-zinc-200 rounded-lg text-xs text-zinc-800 focus:border-[#7850FA] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2">
                        <label className="block text-[9px] font-bold text-zinc-400 uppercase">Entregable Clave</label>
                        <input 
                          type="text"
                          value={etapa.entregable}
                          onChange={(e) => {
                            const updated = [...data.ganttEtapas];
                            updated[idx].entregable = e.target.value;
                            setData({...data, ganttEtapas: updated});
                          }}
                          className="w-full px-2 py-1 bg-white border border-zinc-200 rounded-lg text-xs text-zinc-800 font-bold focus:border-[#7850FA] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-zinc-400 uppercase">Hito Pago</label>
                        <input 
                          type="text"
                          value={etapa.pagoPct}
                          onChange={(e) => {
                            const updated = [...data.ganttEtapas];
                            updated[idx].pagoPct = e.target.value;
                            setData({...data, ganttEtapas: updated});
                          }}
                          className="w-full px-2 py-1 bg-white border border-zinc-200 rounded-lg text-xs text-center font-bold focus:border-[#7850FA] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL: LIVE MULTI-PAGE SHEET CONTRACT PREVIEW       */}
          {/* ========================================================= */}
          <div className={`lg:col-span-8 space-y-8 ${activeTab === 'editor' ? 'hidden lg:block' : 'block'}`}>
            <div id="legal-contract-print-area" className="space-y-8 text-black">
              
              {/* HOJA 1 (PÁGINA 1 DE 5) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-5">
                  {/* FORMAL DOCUMENT TITLE HEADER */}
                  <div className="text-center pb-5 border-b border-black">
                    <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-1 text-black font-heading">
                      CONTRATO DE PRESTACIÓN DE SERVICIOS
                    </h1>
                    <h2 className="text-base sm:text-lg font-bold text-black uppercase tracking-wider font-mono">
                      {data.planNombre}
                    </h2>
                    <p className="text-xs font-mono text-zinc-800 mt-1">
                      COTIZACIÓN N.º {data.cotizacionNumero}
                    </p>
                  </div>

                  {/* COMPARECIENTES */}
                  <p className="text-justify leading-relaxed text-black text-xs sm:text-sm">
                    En Santiago de Chile, a <strong>{formatDateSpanish(data.fechaContrato)}</strong>, entre <strong>{data.proveedorRazonSocial}</strong>, RUT N.º <strong>{data.proveedorRut}</strong>, representada por don <strong>{data.proveedorRepresentante}</strong>, RUT N.º <strong>{data.proveedorRepresentanteRut}</strong>, ambos domiciliados en {data.proveedorDireccion}, en adelante &ldquo;EL PROVEEDOR&rdquo;; y, por la otra, <strong>{data.clienteRazonSocial}</strong>, RUT N.º <strong>{data.clienteRut}</strong>, representada por don <strong>{data.clienteRepresentante}</strong>, RUT N.º <strong>{data.clienteRepresentanteRut}</strong>, domiciliada en {data.clienteDireccion}, en adelante &ldquo;EL CLIENTE&rdquo;; conjuntamente, &ldquo;LAS PARTES&rdquo;, se celebra el siguiente Contrato de Prestación de Servicios:
                  </p>

                  {/* CLAUSULAS LEGALES 1 A 7 */}
                  <div className="space-y-3.5 text-justify text-black text-xs">
                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">PRIMERO: ANTECEDENTES Y DEFINICIONES</h3>
                      <p>EL PROVEEDOR declara contar con experiencia, conocimientos y recursos para diseñar, configurar e implementar soluciones de comercio electrónico sobre Shopify. EL CLIENTE desea desarrollar una nueva tienda de comercio electrónico para la marca {data.nombreMarca || 'su negocio'}, conforme a la Cotización N.º <strong>{data.cotizacionNumero}</strong> y a los anexos de este contrato.</p>
                      <p className="mt-1">Para este contrato se entenderá por: (a) &ldquo;Proyecto&rdquo;, el conjunto de servicios descritos en este instrumento; (b) &ldquo;Entregable&rdquo;, toda pieza de diseño, configuración, desarrollo, migración, integración o documentación sometida a revisión; (c) &ldquo;Día hábil&rdquo;, de lunes a viernes, excluidos feriados legales en Chile; y (d) &ldquo;Integraciones críticas&rdquo;, el checkout, la pasarela de pago acordada, los métodos de despacho acordados, la facturación electrónica incluida y la conexión estándar con ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>, dentro de los límites del alcance contratado.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SEGUNDO: OBJETO</h3>
                      <p>EL PROVEEDOR se obliga a diseñar, desarrollar, configurar e implementar una tienda Shopify <strong>{data.planNombre}</strong> para EL CLIENTE, incluyendo diseño UX/UI, implementación responsive, migración de hasta <strong>{(data.cantidadProductos ?? 1000).toLocaleString('es-CL')}</strong> fichas de producto, configuración de comercio electrónico, integración técnica básica con ERP <strong>{data.nombreErp ?? 'Nebula'}</strong> y con un sistema de facturación electrónica <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong> o equivalente, analítica, SEO técnico inicial, capacitación y puesta en producción, todo conforme al alcance y exclusiones de este contrato.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">TERCERO: DOCUMENTOS INTEGRANTES Y PRELACIÓN</h3>
                      <p>Forman parte integrante del contrato: el cuerpo principal, el Anexo N.º 1 (Alcance y responsabilidades), el Anexo N.º 2 (Carta Gantt), el Anexo N.º 3 (Cronograma de pagos), el Anexo N.º 4 (Checklist de inicio), el Anexo N.º 5 (Servicios de terceros) y el Anexo N.º 6 (Criterios de aceptación y cierre).</p>
                      <p className="mt-1">En caso de contradicción, prevalecerá el cuerpo principal del contrato; luego, los anexos en orden numérico; y finalmente, la Cotización N.º <strong>{data.cotizacionNumero}</strong>. Correos, mensajes, reuniones o documentos anteriores no modificarán el alcance, precio o plazo salvo que consten en un anexo o solicitud de cambio aceptada por escrito por ambas partes.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">CUARTO: INICIO, DURACIÓN Y CONDICIONES PREVIAS</h3>
                      <p>La fecha estimada de inicio operativo será el <strong>{formatDateSpanish(data.fechaContrato)}</strong>. El inicio efectivo quedará condicionado a que concurran conjuntamente: (a) la firma del contrato; (b) el pago íntegro del primer hito; y (c) la entrega de los accesos, información y materiales esenciales indicados en el Anexo N.º 4.</p>
                      <p className="mt-1">El Proyecto tendrá una duración estimada de <strong>{data.duracionSemanas} semanas</strong> de ejecución, más <strong>{data.holguraSemanas} semanas</strong> de holgura operacional. Si alguna condición previa se cumple después del <strong>{formatDateSpanish(data.fechaContrato)}</strong>, la planificación se desplazará proporcionalmente y EL PROVEEDOR podrá reasignar la fecha de inicio según su programación disponible, sin que ello constituya incumplimiento.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">QUINTO: HABILITACIÓN DE SHOPIFY</h3>
                      <p>EL PROVEEDOR creará o administrará inicialmente la tienda mediante su cuenta Shopify Partner y transferirá la propiedad a EL CLIENTE cuando corresponda. EL CLIENTE deberá aceptar la invitación, contratar y mantener un plan Shopify activo, aceptar los términos de Shopify y registrar un medio de pago válido para cobros recurrentes. La demora o rechazo de estas gestiones suspenderá las actividades dependientes.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SEXTO: DISEÑO UX/UI, MARCA Y CONTENIDOS</h3>
                      <p>EL CLIENTE proporcionará oportunamente logotipos, colores corporativos, manual de marca, tipografías, fotografías, banners, catálogos, referencias visuales, textos legales, información comercial y demás contenidos necesarios. El Proyecto contempla líneas de trabajo paralelas de Diseño UX/UI y Desarrollo Shopify.</p>
                      <p className="mt-1">El diseño comprenderá las vistas y componentes expresamente descritos en el Anexo N.º 1. Se incluyen hasta dos (2) rondas consolidadas de ajustes sobre la propuesta UX/UI presentada. Cambios posteriores a su aprobación, reconstrucciones derivadas de nuevas instrucciones o solicitudes no contempladas constituirán cambio de alcance.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SÉPTIMO: MIGRACIÓN DE PRODUCTOS</h3>
                      <p>La migración comprende hasta <strong>{(data.cantidadProductos ?? 1000).toLocaleString('es-CL')}</strong> fichas principales de producto desde WordPress/WooCommerce u otra fuente acordada, incluyendo las variantes e imágenes que se encuentren correctamente asociadas y disponibles en una exportación estructurada o mediante mecanismos técnicamente accesibles.</p>
                      <p className="mt-1">La migración incluye una importación inicial y una ronda de correcciones de incidencias directamente atribuibles al proceso de importación. No incluye reconstrucción manual masiva, creación de fotografías, edición gráfica individual, traducción, levantamiento de información faltante, depuración comercial, homologación de SKU, normalización compleja de variantes, carga posterior de nuevos productos ni corrección de datos defectuosos en el sistema de origen. EL CLIENTE será responsable de revisar y validar títulos, precios, SKU, inventario, impuestos, descripciones, variantes, imágenes, categorías y datos tributarios antes de la publicación.</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 1 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Contrato {data.planNombre} • Cotización N.º {data.cotizacionNumero}</span>
                  <span>Página 1 de 5</span>
                </div>
              </div>

              {/* HOJA 2 (PÁGINA 2 DE 5) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-4">
                  <div className="text-center pb-3 border-b border-black mb-4">
                    <p className="text-xs font-mono font-bold text-black uppercase">
                      CONTRATO DE PRESTACIÓN DE SERVICIOS — CONTINUACIÓN CLÁUSULAS
                    </p>
                  </div>

                  {/* CLAUSULAS LEGALES 8 A 14 */}
                  <div className="space-y-3.5 text-justify text-black text-xs">
                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">OCTAVO: INTEGRACIÓN CON ERP {(data.nombreErp ?? 'NEBULA').toUpperCase()}</h3>
                      <p>EL PROVEEDOR realizará la conexión técnica básica de Shopify con ERP <strong>{data.nombreErp ?? 'Nebula'}</strong> mediante el conector estándar disponible y contratado por EL CLIENTE. La configuración se limitará a las funciones compatibles ofrecidas por dicho conector, tales como sincronización de productos, SKU, precios, inventario y pedidos, según las capacidades efectivamente habilitadas por <strong>{data.nombreErp ?? 'Nebula'}</strong> y Shopify.</p>
                      <p className="mt-1">EL CLIENTE deberá contratar y mantener activo <strong>{data.nombreErp ?? 'Nebula'}</strong> y su conector, entregar credenciales, accesos, documentación, datos maestros y soporte del proveedor cuando sea necesario, además de validar las pruebas de sincronización. No se incluyen desarrollos API a medida, modificaciones internas del ERP, homologaciones especiales, saneamiento de datos, migración histórica, conciliación contable, integraciones con módulos no soportados ni soporte propio del proveedor de ERP. Si el conector estándar no permite una función solicitada, presenta incompatibilidades, requiere certificación, intervención del proveedor o desarrollo personalizado, LAS PARTES evaluarán una cotización y plazo adicionales.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">NOVENO: FACTURACIÓN ELECTRÓNICA</h3>
                      <p>EL PROVEEDOR realizará la instalación o conexión, parametrización inicial y pruebas técnicas de <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong> o de otro sistema de facturación electrónica compatible con Shopify que LAS PARTES acuerden por escrito.</p>
                      <p className="mt-1">EL CLIENTE será responsable de contratar y mantener activo el servicio, entregar sus datos tributarios, certificados, credenciales y autorizaciones, y aprobar los documentos de prueba. No se incluyen licencias, certificaciones ante el SII, regularización tributaria, migración histórica, desarrollo API a medida ni soporte propio del proveedor de facturación.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO: SERVICIOS DE TERCEROS</h3>
                      <p>Shopify, ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>, <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong>, pasarelas de pago, operadores logísticos, aplicaciones, Google, Meta y demás servicios externos son prestados por terceros. Sus precios, políticas, aprobaciones, continuidad, APIs, tiempos de respuesta y funcionalidades pueden cambiar sin intervención de EL PROVEEDOR.</p>
                      <p className="mt-1">Salvo estipulación expresa, los planes, licencias, consumos, transacciones, certificados y costos recurrentes de terceros serán de cargo exclusivo de EL CLIENTE. EL PROVEEDOR no responderá por rechazos de cuentas, bloqueos, interrupciones, modificaciones de API, pérdidas de servicio, cambios tarifarios o errores atribuibles a dichos proveedores.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO PRIMERO: PRECIO, IMPUESTOS Y FORMA DE PAGO</h3>
                      <p>El valor neto del Proyecto asciende a <strong>{formatCLP(data.valorNeto)}</strong>, más IVA (19%) por <strong>{formatCLP(totalIva)}</strong>, totalizando <strong>{formatCLP(totalConIva)} IVA incluido</strong>. El precio se pagará en <strong>{data.hitosPago.length} hitos</strong> conforme al Anexo N.º 3.</p>
                      <p className="mt-1">El primer pago es anticipado y constituye condición para reservar la programación e iniciar actividades. Cada pago posterior deberá efectuarse al cumplirse el hito respectivo, aun cuando existan observaciones menores que no impidan la continuidad del Proyecto. El atraso en cualquier pago facultará a EL PROVEEDOR para suspender inmediatamente los servicios, accesos, publicación, transferencia de propiedad o entrega de archivos y reprogramar los plazos. Los hitos iniciados, ejecutados o aprobados no serán reembolsables.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO SEGUNDO: REVISIÓN Y APROBACIÓN DE ENTREGABLES</h3>
                      <p>EL CLIENTE dispondrá de cinco (5) días hábiles desde la entrega para aprobar u observar cada Entregable. Las observaciones deberán remitirse en un único documento o comunicación consolidada, ser concretas, reproducibles y referirse al alcance contratado.</p>
                      <p className="mt-1">Si EL CLIENTE no formula observaciones dentro del plazo, el Entregable se entenderá aprobado de forma definitiva. La utilización, publicación, entrega a terceros o instrucción de continuar con la etapa siguiente también constituirá aprobación.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO TERCERO: CAMBIOS DE ALCANCE</h3>
                      <p>Toda solicitud que exceda el alcance, las cantidades, las rondas de revisión, las integraciones o los entregables definidos se gestionará mediante una solicitud de cambio. EL PROVEEDOR informará su impacto en precio y plazo, y solo la ejecutará una vez aceptada por escrito por EL CLIENTE.</p>
                      <p className="mt-1">Se considerarán cambios de alcance, entre otros: nuevas plantillas o vistas; más de <strong>{(data.cantidadProductos ?? 1000).toLocaleString('es-CL')}</strong> productos; reconstrucciones manuales; nuevas integraciones; API a medida; nuevas rondas de diseño; cambios posteriores a una aprobación; funciones no soportadas por Shopify, ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>, <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong> o aplicaciones; y tareas solicitadas después de la puesta en producción.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO CUARTO: GARANTÍA Y ACOMPAÑAMIENTO</h3>
                      <p>EL PROVEEDOR otorgará una garantía de <strong>{data.diasGarantia ?? 90} días corridos</strong>, contados desde la recepción conforme, exclusivamente para corregir errores reproducibles y directamente atribuibles a los trabajos ejecutados por EL PROVEEDOR dentro del alcance contratado.</p>
                      <p className="mt-1">La garantía no cubre cambios o intervenciones de EL CLIENTE o terceros; errores de contenido o datos; fallas de Shopify, ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>, <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong>, aplicaciones, APIs, pagos, logística, Google o Meta; actualizaciones de plataformas; pérdida o rechazo de credenciales; nuevos requerimientos; carga de productos; capacitación adicional; incidentes de seguridad ajenos al código implementado; ni uso distinto del previsto.</p>
                      <p className="mt-1">Adicionalmente, EL PROVEEDOR prestará acompañamiento remoto funcional durante seis (6) meses desde la recepción conforme, limitado a una (1) sesión mensual de hasta cuarenta y cinco (45) minutos, no acumulable, previa coordinación. Este acompañamiento comprende consultas sobre el uso general de la configuración entregada y no incluye ejecución de tareas, soporte de urgencia, nuevos desarrollos, cambios de diseño, carga de contenido, administración comercial ni soporte técnico de terceros.</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 2 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Contrato {data.planNombre} • {data.clienteRazonSocial}</span>
                  <span>Página 2 de 5</span>
                </div>
              </div>

              {/* HOJA 3 (PÁGINA 3 DE 5) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-4">
                  <div className="text-center pb-3 border-b border-black mb-4">
                    <p className="text-xs font-mono font-bold text-black uppercase">
                      CONTRATO DE PRESTACIÓN DE SERVICIOS — CONTINUACIÓN Y FIRMAS
                    </p>
                  </div>

                  {/* CLAUSULAS LEGALES 15 A 26 Y FIRMAS */}
                  <div className="space-y-3.5 text-justify text-black text-xs">
                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO QUINTO: PROPIEDAD INTELECTUAL Y LICENCIAS</h3>
                      <p>Una vez pagado íntegramente el precio y los servicios adicionales que correspondan, EL CLIENTE será titular de los desarrollos específicos creados exclusivamente para el Proyecto, en la medida en que sean transferibles.</p>
                      <p className="mt-1">Permanecerán excluidos de la transferencia y bajo la titularidad o licencia de sus respectivos propietarios: Shopify, themes, aplicaciones, conectores, tipografías, fotografías, librerías, código abierto, componentes preexistentes, metodologías, herramientas, plantillas, fragmentos genéricos y componentes reutilizables de EL PROVEEDOR. EL CLIENTE declara contar con derechos suficientes sobre los materiales proporcionados y mantendrá indemne a EL PROVEEDOR frente a reclamaciones derivadas de dichos contenidos.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO SEXTO: CONFIDENCIALIDAD</h3>
                      <p>LAS PARTES mantendrán reserva sobre la información técnica, comercial, financiera, estratégica, de clientes, credenciales y demás información no pública conocida con ocasión del Proyecto, durante la vigencia del contrato y por cinco (5) años desde su término.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO SÉPTIMO: PROTECCIÓN DE DATOS Y SEGURIDAD</h3>
                      <p>Cada parte tratará los datos personales y credenciales a los que acceda únicamente para ejecutar el contrato y conforme a la legislación chilena vigente. EL CLIENTE será responsable de sus políticas de privacidad, textos legales, bases de legitimación, consentimiento y cumplimiento aplicable a su operación comercial. EL PROVEEDOR aplicará medidas razonables de seguridad sobre sus accesos y entregables.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO OCTAVO: ESTÁNDAR TÉCNICO Y RESULTADOS COMERCIALES</h3>
                      <p>EL PROVEEDOR desarrollará el Proyecto aplicando buenas prácticas generalmente aceptadas, vigentes a la fecha de ejecución y pertinentes al alcance contratado, en materias de UX/UI, optimización de conversión (CRO), SEO técnico, rendimiento, seguridad del código implementado y mantenibilidad. Estas obligaciones constituyen un estándar de diligencia técnica y no una garantía de niveles de venta, tasa de conversión, posicionamiento orgánico, tráfico, aprobación de campañas o cuentas, retorno de inversión, disponibilidad absoluta ni puntajes específicos en herramientas automáticas de medición.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO NOVENO: RECEPCIÓN CONFORME</h3>
                      <p>La recepción conforme se verificará conforme al Anexo N.º 6. EL CLIENTE dispondrá de diez (10) días hábiles desde la puesta en producción o desde la notificación de disponibilidad para validación final, lo que ocurra primero, para informar observaciones críticas en un único reporte consolidado. Se considerará observación crítica únicamente aquella que impida totalmente el funcionamiento del checkout, el procesamiento de la pasarela acordada, un método de despacho contratado, la emisión tributaria de prueba o una integración crítica expresamente incluida. La operación normal del sitio durante dicho período o la ausencia de observaciones críticas constituirá recepción conforme.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">VIGÉSIMO A VIGÉSIMO SEXTO: DISPOSICIONES GENERALES Y JURISDICCIÓN</h3>
                      <p>EL PROVEEDOR podrá mencionar la marca e incluir capturas del sitio en su portafolio sin revelar información confidencial. La responsabilidad acumulada de EL PROVEEDOR no excederá el monto neto efectivamente pagado por el Proyecto, salvo dolo o culpa grave. Ninguna parte responderá por casos de fuerza mayor o eventos imprevisibles fuera de su control razonable. Cualquiera de LAS PARTES podrá poner término anticipado mediante aviso escrito con 30 días de anticipación pagando los hitos ejecutados. LAS PARTES reconocen plena validez a la firma electrónica simple o avanzada, fijan domicilio en la ciudad de Santiago de Chile y se someten a sus Tribunales Ordinarios de Justicia.</p>
                    </div>
                  </div>

                  {/* FIRMAS FORMALES */}
                  <div className="pt-10 pb-4 border-t border-black mt-6 grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="border-b border-black mb-2 pb-14"></div>
                      <p className="font-bold uppercase text-xs text-black">{data.proveedorRepresentante}</p>
                      <p className="text-[11px] font-mono text-zinc-700">RUT N.º {data.proveedorRepresentanteRut}</p>
                      <p className="text-[11px] font-bold uppercase text-black">{data.proveedorRazonSocial}</p>
                      <p className="text-[10px] text-zinc-600 font-mono uppercase">POR EL PROVEEDOR</p>
                    </div>

                    <div>
                      <div className="border-b border-black mb-2 pb-14"></div>
                      <p className="font-bold uppercase text-xs text-black">{data.clienteRepresentante}</p>
                      <p className="text-[11px] font-mono text-zinc-700">RUT N.º {data.clienteRepresentanteRut}</p>
                      <p className="text-[11px] font-bold uppercase text-black">{data.clienteRazonSocial}</p>
                      <p className="text-[10px] text-zinc-600 font-mono uppercase">POR EL CLIENTE</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 3 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Contrato {data.planNombre} • {data.clienteRazonSocial}</span>
                  <span>Página 3 de 5</span>
                </div>
              </div>

              {/* HOJA 4 (PÁGINA 4 DE 5) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-5">
                  <div className="text-center pb-4 border-b border-black mb-4">
                    <h2 className="text-lg font-black uppercase tracking-tight text-black">
                      ANEXOS INTEGRANTES DEL CONTRATO (ANEXO N.º 1 Y N.º 2)
                    </h2>
                    <p className="text-xs font-mono text-zinc-700">
                      Cotización N.º {data.cotizacionNumero} • {data.clienteRazonSocial}
                    </p>
                  </div>

                  {/* ANEXO 1 */}
                  <div className="space-y-2">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N.º 1 — ALCANCE DEL PROYECTO Y RESPONSABILIDADES
                    </h3>
                    <div className="pl-2 space-y-2 text-xs text-black text-justify">
                      <p><strong>1. Servicios incluidos:</strong> Levantamiento inicial y arquitectura de información; Diseño UX/UI en Figma para Home, colección, ficha de producto, carrito y componentes; Hasta 2 rondas consolidadas de ajustes UX/UI; Implementación responsive; Configuración de dominio, SSL, impuestos y checkout; Migración de hasta <strong>{(data.cantidadProductos ?? 1000).toLocaleString('es-CL')}</strong> fichas de producto con variantes e imágenes importables; Pasarela de pago principal y despacho acordados; Conexión estándar con ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>; Configuración técnica de <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong> o equivalente; GA4, GTM, Meta Pixel, Google Search Console y Merchant Center; SEO técnico inicial; Capacitación remota de 90 min y entrega final.</p>
                      <p><strong>2. Responsabilidades de EL CLIENTE:</strong> Pagar oportunamente los hitos; Contratar planes y licencias de terceros; Aceptar la propiedad de Shopify; Entregar accesos, credenciales, bases de datos y datos maestros completos; Suministrar logotipos, banners, textos legales y catálogos; Validar títulos, SKU, inventario y documentos tributarios; Emitir aprobaciones en los plazos contractuales.</p>
                      <p><strong>3. Exclusiones principales:</strong> Más de <strong>{(data.cantidadProductos ?? 1000).toLocaleString('es-CL')}</strong> fichas de producto; Rediseño de identidad de marca o fotografía; Depuración manual masiva o homologación compleja de SKU; Desarrollos API a medida o modificaciones internas de ERP/Facturación; Licencias, comisiones o soporte propio de terceros; Garantías de venta, tráfico o posicionamiento.</p>
                    </div>
                  </div>

                  {/* ANEXO 2: CARTA GANTT DETALLADA */}
                  <div className="space-y-2 pt-2">
                    <div className="bg-zinc-100 p-2 border border-black">
                      <h3 className="font-black text-xs uppercase text-black">
                        ANEXO N.º 2 — CARTA GANTT DETALLADA Y CRONOGRAMA DE CUMPLIMIENTO
                      </h3>
                    </div>
                    <p className="text-xs text-black">
                      Planificación iniciada estimativamente el {formatDateSpanish(data.fechaContrato)}. Las fechas se desplazarán proporcionalmente ante demoras en accesos o entregables del CLIENTE.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] text-left border-collapse border border-black leading-snug table-fixed">
                        <thead>
                          <tr className="bg-zinc-100 font-bold uppercase text-[10px] text-black tracking-tight">
                            <th className="border border-black p-1.5 w-[10%]">Semana</th>
                            <th className="border border-black p-1.5 w-[15%]">Fechas</th>
                            <th className="border border-black p-1.5 w-[25%]">Diseño UX/UI</th>
                            <th className="border border-black p-1.5 w-[28%]">Desarrollo Shopify / Integraciones</th>
                            <th className="border border-black p-1.5 w-[14%]">Entregable</th>
                            <th className="border border-black p-1.5 text-center w-[8%]">Hito</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.ganttEtapas.map((g, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                              <td className="border border-black p-1.5 align-top font-bold text-[10px] text-black break-words">
                                {g.semana}
                              </td>
                              <td className="border border-black p-1.5 align-top font-mono text-[9.5px] text-black break-words">
                                {g.fechas}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[10px] leading-snug text-black break-words whitespace-pre-wrap">
                                {g.disenoUxUi}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[10px] leading-snug text-black break-words whitespace-pre-wrap">
                                {g.desarrolloShopify}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[10px] leading-snug font-bold text-black break-words whitespace-pre-wrap">
                                {g.entregable}
                              </td>
                              <td className="border border-black p-1.5 align-top text-center font-bold text-[10px] text-black">
                                {g.pagoPct}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 4 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Anexos Integrantes • {data.clienteRazonSocial}</span>
                  <span>Página 4 de 5</span>
                </div>
              </div>

              {/* HOJA 5 (PÁGINA 5 DE 5) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-6">
                  <div className="text-center pb-3 border-b border-black mb-4">
                    <p className="text-xs font-mono font-bold text-black uppercase">
                      ANEXOS N.º 3, N.º 4, N.º 5 Y N.º 6 — CONTINUACIÓN Y CIERRE
                    </p>
                  </div>

                  {/* ANEXO 3: CRONOGRAMA DE PAGOS */}
                  <div className="space-y-3">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N.º 3 — CRONOGRAMA DE PAGOS
                    </h3>

                    <table className="w-full text-[11px] text-left border-collapse border border-black leading-snug">
                      <thead>
                        <tr className="bg-zinc-100 font-bold uppercase text-[10.5px] text-black tracking-tight">
                          <th className="border border-black p-2">Hito de Cumplimiento</th>
                          <th className="border border-black p-2 text-center">%</th>
                          <th className="border border-black p-2 text-right">Neto</th>
                          <th className="border border-black p-2 text-right">IVA (19%)</th>
                          <th className="border border-black p-2 text-right">Total IVA Inc.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.hitosPago.map((h, idx) => (
                          <tr key={idx} className="bg-white">
                            <td className="border border-black p-2 font-bold">{h.nombre}</td>
                            <td className="border border-black p-2 text-center font-mono text-[11px]">{h.porcentaje}%</td>
                            <td className="border border-black p-2 text-right font-mono text-[11px]">{formatCLP(h.montoNeto)}</td>
                            <td className="border border-black p-2 text-right font-mono text-[11px]">{formatCLP(h.montoIva)}</td>
                            <td className="border border-black p-2 text-right font-black font-mono text-[11px] text-black">{formatCLP(h.montoTotal)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-zinc-100 font-black uppercase text-[11px]">
                          <td colSpan={2} className="border border-black p-2">TOTAL PROYECTO CONTRATADO</td>
                          <td className="border border-black p-2 text-right font-mono">{formatCLP(data.valorNeto)}</td>
                          <td className="border border-black p-2 text-right font-mono">{formatCLP(totalIva)}</td>
                          <td className="border border-black p-2 text-right font-mono text-black font-black">{formatCLP(totalConIva)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* ANEXO 4: CHECKLIST DE INICIO */}
                  <div className="space-y-2 pt-1">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N.º 4 — CHECKLIST DE INICIO DEL PROYECTO
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-black">
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Contrato firmado y 1er hito pagado</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Cuenta Shopify Partner e invitación aceptada</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Accesos WordPress/WooCommerce y hosting</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Accesos y conector de ERP {data.nombreErp ?? 'Nebula'}</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Servicio {data.sistemaFacturacion ?? 'Wasabil'} activo y credenciales</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Material de marca, textos y catálogos</span>
                      </div>
                    </div>
                  </div>

                  {/* ANEXO 5 & ANEXO 6 */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-black pt-1">
                    <div className="space-y-1.5 border border-black p-3 bg-zinc-50">
                      <h4 className="font-black uppercase text-[11px] text-black border-b border-black pb-1">
                        ANEXO N.º 5 — TERCEROS
                      </h4>
                      <p className="text-[11px] leading-snug">Shopify, ERP <strong>{data.nombreErp ?? 'Nebula'}</strong>, <strong>{data.sistemaFacturacion ?? 'Wasabil'}</strong>, pasarelas de pago y operadores logísticos son independientes. Sus planes, consumos y comisiones son de cargo exclusivo de EL CLIENTE.</p>
                    </div>

                    <div className="space-y-1.5 border border-black p-3 bg-zinc-50">
                      <h4 className="font-black uppercase text-[11px] text-black border-b border-black pb-1">
                        ANEXO N.º 6 — CERRADO & GARANTÍA
                      </h4>
                      <p className="text-[11px] leading-snug">Recepción conforme tras 10 días de producción sin observaciones críticas. Garantía de <strong>{data.diasGarantia ?? 90} días corridos</strong> para corrección de código y 6 meses de acompañamiento remoto mensual.</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 5 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Anexos Integrantes • {data.clienteRazonSocial}</span>
                  <span>Página 5 de 5</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
