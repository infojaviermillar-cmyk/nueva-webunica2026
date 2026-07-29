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
  CheckCircle2
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
    const iva = Math.round(newNeto * (data.ivaPorcentaje / 100));

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
          body { font-family: 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #000; }
          h1, h2, h3 { text-align: center; text-transform: uppercase; font-weight: bold; }
          .clause-title { font-weight: bold; margin-top: 14pt; }
          table { width: 100%; border-collapse: collapse; margin: 12pt 0; }
          th, td { border: 1px solid #000; padding: 6pt; font-size: 10pt; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
          .signature-box { margin-top: 40pt; width: 100%; }
          .signature-col { width: 48%; float: left; text-align: center; }
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
    URL.revokeObjectURL(url);
  };

  // Add Gantt row
  const addGanttRow = () => {
    const newIdx = data.ganttEtapas.length;
    setData({
      ...data,
      ganttEtapas: [
        ...data.ganttEtapas,
        {
          semana: `Semana ${newIdx}`,
          fechas: "Fechas a definir",
          disenoUxUi: "Actividades de Diseño",
          desarrolloShopify: "Actividades de Desarrollo",
          entregable: "Entregables de la etapa",
          pagoPct: "-"
        }
      ]
    });
  };

  // Delete Gantt row
  const removeGanttRow = (index: number) => {
    const updated = data.ganttEtapas.filter((_, i) => i !== index);
    setData({ ...data, ganttEtapas: updated });
  };

  // Update Gantt cell in array
  const updateGanttCell = (index: number, field: keyof ContractData['ganttEtapas'][0], value: string) => {
    const updated = [...data.ganttEtapas];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setData({ ...data, ganttEtapas: updated });
  };

  const totalIva = Math.round(data.valorNeto * (data.ivaPorcentaje / 100));
  const totalConIva = data.valorNeto + totalIva;

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 pt-28 sm:pt-36 lg:pt-40 pb-20 print:pt-0 print:pb-0 print:bg-white">
      
      {/* PRINT STYLES FOR PAGE BREAKS & FOOTER POSITIONS */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          header, footer, .print\\:hidden, nav { display: none !important; }
          .contract-sheet {
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            page-break-after: always !important;
            break-after: page !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          @page {
            size: letter;
            margin: 15mm 15mm 15mm 15mm;
          }
        }
      `}</style>

      {/* HEADER BANNER / ACTIONS (Hidden on print) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 print:hidden">
        <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <Link href="/admin" className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-all text-zinc-300 shrink-0">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FileText className="w-6 h-6 text-[#7850FA]" />
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-heading">Generador de Contratos Webunica</h1>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">Generador Legal Automatizado • Cotizaciones N° {data.cotizacionNumero}</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2.5 justify-center">
            <button 
              onClick={() => setData(PACIFIC_COLOR_PRESET)}
              className="px-4 py-2.5 bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-400/50 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-900/40 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
              Ejemplo Pacific Color
            </button>
            <button 
              onClick={() => setData(PRESET_FULL_SHOPIFY)}
              className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Shopify Full ($850k)
            </button>
          </div>
        </div>

        {/* PRIMARY BIG ACTION BUTTONS BAR */}
        <div className="mt-4 bg-white p-4 sm:p-5 rounded-3xl border border-zinc-200 shadow-md flex flex-wrap items-center justify-between gap-4">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 print:px-0 print:max-w-none">
        
        {/* VIEW MODE TOGGLE ON MOBILE */}
        <div className="lg:hidden print:hidden mb-6 flex bg-zinc-200 p-1.5 rounded-2xl">
          <button 
            onClick={() => setActiveTab('editor')} 
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'editor' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-600'}`}
          >
            ✏️ Editar Campos
          </button>
          <button 
            onClick={() => setActiveTab('preview')} 
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'preview' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-600'}`}
          >
            📄 Ver Documento
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT PANEL: FORM EDITOR (Hidden on print)                 */}
          {/* ========================================================= */}
          <div className={`lg:col-span-4 space-y-6 print:hidden ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
            
            {/* CARD 1: CLIENTE */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-purple-900 border-b border-zinc-100 pb-3">
                <Building2 className="w-5 h-5 text-[#7850FA]" />
                <h2 className="font-black text-sm uppercase tracking-wider">Datos de la Empresa Cliente</h2>
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

            {/* CARD 2: PLAN Y VALORES */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-purple-900 border-b border-zinc-100 pb-3">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <h2 className="font-black text-sm uppercase tracking-wider">Plan, Valores & Facturación</h2>
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

              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-600 mb-1">Sistema Facturación Electrónica</label>
                <input 
                  type="text" 
                  value={data.sistemaFacturacion}
                  onChange={(e) => setData({...data, sistemaFacturacion: e.target.value})}
                  placeholder="Ej: Wasabil, Bsale..."
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold text-zinc-900 focus:bg-white focus:border-[#7850FA] outline-none"
                />
              </div>
            </div>

            {/* CARD 3: FECHAS Y DURACIÓN CON AUTO-RECALCULADOR */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
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
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2 text-purple-900">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <h2 className="font-black text-sm uppercase tracking-wider">Carta Gantt Edit (Todas las Filas)</h2>
                </div>
                <button 
                  onClick={addGanttRow}
                  className="p-1.5 bg-purple-50 hover:bg-purple-100 text-[#7850FA] rounded-lg transition-all text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Agregar Etapa
                </button>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                {data.ganttEtapas.map((etapa, index) => (
                  <div key={index} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-xs space-y-2 relative group">
                    <div className="flex items-center justify-between gap-2 border-b border-zinc-200 pb-2">
                      <input 
                        type="text" 
                        value={etapa.semana}
                        onChange={(e) => updateGanttCell(index, 'semana', e.target.value)}
                        className="bg-white px-2.5 py-1 rounded-lg border border-zinc-300 w-28 font-bold text-xs text-zinc-950"
                        placeholder="Ej: Semana 1"
                      />
                      <input 
                        type="text" 
                        value={etapa.fechas}
                        onChange={(e) => updateGanttCell(index, 'fechas', e.target.value)}
                        className="bg-white px-2.5 py-1 rounded-lg border border-zinc-300 flex-1 font-mono text-[11px] text-zinc-900 text-right"
                        placeholder="Ej: 27-07 al 02-08"
                      />
                      <button 
                        onClick={() => removeGanttRow(index)}
                        className="text-red-500 hover:text-red-700 p-1.5 bg-white rounded-lg border border-red-200 hover:bg-red-50 cursor-pointer"
                        title="Eliminar esta fila"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pt-1">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-0.5">Diseño UX/UI:</span>
                        <input 
                          type="text" 
                          value={etapa.disenoUxUi}
                          onChange={(e) => updateGanttCell(index, 'disenoUxUi', e.target.value)}
                          className="w-full bg-white px-2.5 py-1 rounded-lg border border-zinc-300 text-xs text-zinc-900"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-0.5">Desarrollo Shopify / Integraciones:</span>
                        <input 
                          type="text" 
                          value={etapa.desarrolloShopify}
                          onChange={(e) => updateGanttCell(index, 'desarrolloShopify', e.target.value)}
                          className="w-full bg-white px-2.5 py-1 rounded-lg border border-zinc-300 text-xs text-zinc-900"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-0.5">Entregable Principal:</span>
                        <input 
                          type="text" 
                          value={etapa.entregable}
                          onChange={(e) => updateGanttCell(index, 'entregable', e.target.value)}
                          className="w-full bg-white px-2.5 py-1 rounded-lg border border-zinc-300 text-xs font-semibold text-zinc-950"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase shrink-0">Hito Pago (%):</span>
                        <input 
                          type="text" 
                          value={etapa.pagoPct}
                          onChange={(e) => updateGanttCell(index, 'pagoPct', e.target.value)}
                          className="bg-white px-2.5 py-1 rounded-lg border border-zinc-300 text-xs font-bold text-zinc-950 w-20 text-center"
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
              
              {/* HOJA 1 (PÁGINA 1 DE 4) */}
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
                      COTIZACIÓN N° {data.cotizacionNumero}
                    </p>
                  </div>

                  {/* COMPARECIENTES */}
                  <p className="text-justify leading-relaxed text-black text-xs sm:text-sm">
                    En Santiago de Chile, a <strong>{formatDateSpanish(data.fechaContrato)}</strong>, entre <strong>{data.proveedorRazonSocial}</strong>, RUT N° <strong>{data.proveedorRut}</strong>, representada por don <strong>{data.proveedorRepresentante}</strong>, RUT N° <strong>{data.proveedorRepresentanteRut}</strong>, ambos domiciliados en {data.proveedorDireccion}, en adelante &apos;EL PROVEEDOR&apos;; y, por la otra, <strong>{data.clienteRazonSocial}</strong>, RUT N° <strong>{data.clienteRut}</strong>, representada por don <strong>{data.clienteRepresentante}</strong>, RUT N° <strong>{data.clienteRepresentanteRut}</strong>, domiciliada en {data.clienteDireccion}, en adelante &apos;EL CLIENTE&apos;, se celebra el presente Contrato de Prestación de Servicios.
                  </p>

                  {/* CLAUSULAS LEGALES 1 A 7 */}
                  <div className="space-y-3.5 text-justify text-black text-xs">
                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">PRIMERO: ANTECEDENTES</h3>
                      <p>EL PROVEEDOR declara contar con la experiencia, conocimientos, infraestructura y recursos necesarios para desarrollar e implementar soluciones de comercio electrónico sobre la plataforma Shopify y arquitecturas web avanzadas.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SEGUNDO: OBJETO</h3>
                      <p>EL PROVEEDOR se obliga a desarrollar e implementar el proyecto <strong>{data.planNombre}</strong> conforme a la Cotización N° <strong>{data.cotizacionNumero}</strong> y sus anexos, incluyendo la configuración e integración técnica de un sistema de facturación electrónica compatible.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">TERCERO: ALCANCE</h3>
                      <p>El detalle de los servicios, actividades, pagos, requisitos de inicio y servicios de terceros se encuentra en los Anexos N°1, N°2, N°3, N°4 y N°5, todos los cuales forman parte integrante e inseparable del presente contrato.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">CUARTO: HABILITACIÓN SHOPIFY Y PLATAFORMAS</h3>
                      <p>EL PROVEEDOR creará la cuenta Shopify Partner correspondiente. EL CLIENTE deberá aceptar la invitación de propiedad, contratar un plan Shopify, aceptar sus términos y registrar una tarjeta válida para cobros recurrentes. La demora en estas gestiones suspenderá automáticamente los plazos del proyecto.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">QUINTO: INFORMACIÓN DE MARCA Y UX/UI</h3>
                      <p>EL CLIENTE proporcionará logotipos, colores corporativos, manual de marca, tipografías, banners, fotografías, catálogos y referencias visuales. Las partes reconocen que el proyecto contempla dos líneas de trabajo paralelas: Diseño UX/UI y Desarrollo de Software.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SEXTO: MIGRACIÓN Y ACCESOS</h3>
                      <p>EL CLIENTE entregará oportunamente los accesos a plataformas previas (WordPress, WooCommerce, hosting, ERP, sistema de facturación electrónica) y demás credenciales necesarias para la migración e integración de contenidos, productos y servicios.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">SÉPTIMO: PRODUCTOS Y OPTIMIZACIÓN SEO</h3>
                      <p>EL CLIENTE proporcionará títulos, precios, SKU, descripciones e imágenes de productos. EL PROVEEDOR podrá utilizar herramientas de inteligencia artificial para optimizar títulos, descripciones y metadatos con fines SEO.</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 1 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Contrato {data.planNombre} • Cotización N° {data.cotizacionNumero}</span>
                  <span>Página 1 de 4</span>
                </div>
              </div>

              {/* HOJA 2 (PÁGINA 2 DE 4) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-4">
                  <div className="text-center pb-3 border-b border-black mb-4">
                    <p className="text-xs font-mono font-bold text-black uppercase">
                      CONTRATO DE PRESTACIÓN DE SERVICIOS — CONTINUACIÓN CLÁUSULAS
                    </p>
                  </div>

                  {/* CLAUSULAS LEGALES 8 A 15 */}
                  <div className="space-y-3.5 text-justify text-black text-xs">
                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">OCTAVO: APLICACIONES Y FACTURACIÓN ELECTRÓNICA</h3>
                      <p>EL CLIENTE reconoce que determinadas funcionalidades podrán requerir aplicaciones o servicios de terceros (Shopify Apps, ERP, email marketing, logística, pasarelas de pago y sistemas de facturación electrónica como <strong>{data.sistemaFacturacion}</strong> o equivalente), cuyos planes, licencias y costos recurrentes serán de su exclusiva responsabilidad, salvo pacto escrito en contrario.</p>
                      <p className="mt-1.5">En particular, EL PROVEEDOR realizará la configuración e integración técnica básica del sistema de facturación electrónica <strong>{data.sistemaFacturacion}</strong> o equivalente compatible. El servicio comprende la instalación o conexión del aplicativo disponible, vinculación con las credenciales proporcionadas por EL CLIENTE, parametrización inicial y pruebas de emisión de documentos tributarios.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">NOVENO: PLATAFORMAS DE TERCEROS</h3>
                      <p>EL CLIENTE reconoce que Shopify, Google, Meta y proveedores de pasarelas son servicios de terceros y que sus precios, políticas y funcionalidades pueden variar sin intervención de EL PROVEEDOR.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO: PLAZOS Y CUMPLIMIENTO</h3>
                      <p>El proyecto iniciará el <strong>{formatDateSpanish(data.fechaContrato)}</strong> y tendrá una duración estimada de <strong>{data.duracionSemanas} semanas</strong>, más <strong>{data.holguraSemanas} semanas</strong> de holgura operacional. Las actividades podrán ejecutarse en paralelo cuando ello resulte técnica y operativamente conveniente.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO PRIMERO: PRECIO Y FORMA DE PAGO</h3>
                      <p>El valor neto del proyecto asciende a <strong>{formatCLP(data.valorNeto)} más IVA (19%)</strong>, equivalente a <strong>{formatCLP(totalIva)}</strong>, totalizando <strong>{formatCLP(totalConIva)}</strong>, pagaderos en los hitos establecidos en el Anexo N°3.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO SEGUNDO: APROBACIÓN DE ENTREGABLES</h3>
                      <p>EL CLIENTE dispondrá de cinco (5) días hábiles para aprobar u observar cada entregable. En ausencia de observaciones dentro de dicho plazo, éstos se entenderán aprobados en forma definitiva.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO TERCERO: GARANTÍA Y SOPORTE</h3>
                      <p>EL PROVEEDOR otorgará una garantía de treinta (30) días corridos contados desde la puesta en producción respecto de errores atribuibles al desarrollo. El soporte posterior será cotizado separadamente.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO CUARTO: PROPIEDAD INTELECTUAL Y CONFIDENCIALIDAD</h3>
                      <p>EL CLIENTE será titular de los desarrollos específicos del proyecto. Las partes se obligan a mantener reserva sobre toda información confidencial obtenida por un plazo de dos (2) años.</p>
                    </div>

                    <div className="clause-block">
                      <h3 className="font-bold uppercase text-black text-xs tracking-wider mb-1">DÉCIMO QUINTO: FIRMA ELECTRÓNICA Y JURISDICCIÓN</h3>
                      <p>Las partes reconocen plena validez a la firma electrónica simple o avanzada. Para todos los efectos legales, las partes fijan domicilio en la ciudad de Santiago y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.</p>
                    </div>
                  </div>

                  {/* FIRMAS */}
                  <div className="pt-12 pb-4 border-t border-black mt-8 grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="border-b border-black mb-2 pb-14"></div>
                      <p className="font-bold uppercase text-xs text-black">{data.proveedorRepresentante}</p>
                      <p className="text-[11px] font-mono text-zinc-700">RUT N° {data.proveedorRepresentanteRut}</p>
                      <p className="text-[11px] font-bold uppercase text-black">{data.proveedorRazonSocial}</p>
                      <p className="text-[10px] text-zinc-600 font-mono uppercase">EL PROVEEDOR</p>
                    </div>

                    <div>
                      <div className="border-b border-black mb-2 pb-14"></div>
                      <p className="font-bold uppercase text-xs text-black">{data.clienteRepresentante}</p>
                      <p className="text-[11px] font-mono text-zinc-700">RUT N° {data.clienteRepresentanteRut}</p>
                      <p className="text-[11px] font-bold uppercase text-black">{data.clienteRazonSocial}</p>
                      <p className="text-[10px] text-zinc-600 font-mono uppercase">EL CLIENTE</p>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 2 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Contrato {data.planNombre} • {data.clienteRazonSocial}</span>
                  <span>Página 2 de 4</span>
                </div>
              </div>

              {/* HOJA 3 (PÁGINA 3 DE 4) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-5">
                  <div className="text-center pb-4 border-b border-black mb-4">
                    <h2 className="text-lg font-black uppercase tracking-tight text-black">
                      ANEXOS INTEGRANTES DEL CONTRATO
                    </h2>
                    <p className="text-xs font-mono text-zinc-700">
                      Cotización N° {data.cotizacionNumero} • {data.clienteRazonSocial}
                    </p>
                  </div>

                  {/* ANEXO 1 */}
                  <div className="space-y-2">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N°1 - DETALLE DE SERVICIOS Y ALCANCE DEL PROYECTO
                    </h3>
                    <div className="pl-2 space-y-2 text-xs text-black">
                      <p><strong>Servicio Contratado:</strong> {data.planNombre}.</p>
                      <p>{data.planDescripcion}</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Creación de cuenta Shopify Partner y transferencia de propiedad a EL CLIENTE.</li>
                        <li>Diseño UX/UI responsive para escritorio, tablet y dispositivos móviles.</li>
                        <li>Configuración completa de plataforma: dominio, SSL, checkout e impuestos.</li>
                        <li>Configuración e integración técnica del sistema de facturación electrónica <strong>{data.sistemaFacturacion}</strong> o equivalente.</li>
                        <li>Configuración de pasarelas de pago locales (Webpay, Mercado Pago, Flow) y métodos de despacho en Chile.</li>
                        <li>Configuración de Google Analytics 4, GTM, Meta Pixel y SEO técnico inicial.</li>
                        <li>Capacitación personalizada y documentación de entrega.</li>
                      </ul>
                    </div>
                  </div>

                  {/* ANEXO 2: CARTA GANTT DETALLADA */}
                  <div className="space-y-2 pt-2">
                    <div className="bg-zinc-100 p-2 border border-black">
                      <h3 className="font-black text-xs uppercase text-black">
                        ANEXO N°2 - CARTA GANTT DETALLADA Y CRONOGRAMA DE CUMPLIMIENTO
                      </h3>
                    </div>
                    <p className="text-xs text-black">
                      Fechas y actividades estimadas. Las etapas se ajustarán en caso de demoras imputables a entrega de información o accesos por parte de EL CLIENTE.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-[8.5px] text-left border-collapse border border-black leading-tight table-fixed">
                        <thead>
                          <tr className="bg-zinc-100 font-bold uppercase text-[8.5px] text-black tracking-tight">
                            <th className="border border-black p-1.5 w-[12%]">Semana</th>
                            <th className="border border-black p-1.5 w-[15%]">Fechas</th>
                            <th className="border border-black p-1.5 w-[25%]">Diseño UX/UI</th>
                            <th className="border border-black p-1.5 w-[25%]">Desarrollo Shopify / Integraciones</th>
                            <th className="border border-black p-1.5 w-[15%]">Entregable</th>
                            <th className="border border-black p-1.5 text-center w-[8%]">Hito Pago</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.ganttEtapas.map((g, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                              <td className="border border-black p-1.5 align-top font-bold text-[8.5px] text-black break-words">
                                {g.semana}
                              </td>
                              <td className="border border-black p-1.5 align-top font-mono text-[8px] text-black break-words">
                                {g.fechas}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[8.5px] leading-tight text-black break-words whitespace-pre-wrap">
                                {g.disenoUxUi}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[8.5px] leading-tight text-black break-words whitespace-pre-wrap">
                                {g.desarrolloShopify}
                              </td>
                              <td className="border border-black p-1.5 align-top text-[8.5px] leading-tight font-bold text-black break-words whitespace-pre-wrap">
                                {g.entregable}
                              </td>
                              <td className="border border-black p-1.5 align-top text-center font-bold text-[8.5px] text-black">
                                {g.pagoPct}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 3 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Anexos Integrantes • {data.clienteRazonSocial}</span>
                  <span>Página 3 de 4</span>
                </div>
              </div>

              {/* HOJA 4 (PÁGINA 4 DE 4) */}
              <div className="contract-sheet bg-white p-8 sm:p-12 rounded-2xl border border-black shadow-xl text-black leading-relaxed font-sans text-xs sm:text-sm flex flex-col justify-between min-h-[1050px]">
                <div className="space-y-6">
                  <div className="text-center pb-3 border-b border-black mb-4">
                    <p className="text-xs font-mono font-bold text-black uppercase">
                      ANEXOS N°3, N°4 Y N°5 — CONTINUACIÓN
                    </p>
                  </div>

                  {/* ANEXO 3: CRONOGRAMA DE PAGOS */}
                  <div className="space-y-3">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N°3 - CRONOGRAMA DE PAGOS E HITOS
                    </h3>

                    <table className="w-full text-[9.5px] text-left border-collapse border border-black leading-tight">
                      <thead>
                        <tr className="bg-zinc-100 font-bold uppercase text-[9px] text-black tracking-tight">
                          <th className="border border-black p-1.5">Hito de Cumplimiento</th>
                          <th className="border border-black p-1.5 text-center">% Hito</th>
                          <th className="border border-black p-1.5 text-right">Monto Neto</th>
                          <th className="border border-black p-1.5 text-right">IVA (19%)</th>
                          <th className="border border-black p-1.5 text-right">Total a Pagar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.hitosPago.map((h, idx) => (
                          <tr key={idx} className="bg-white">
                            <td className="border border-black p-1.5 font-bold">{h.nombre}</td>
                            <td className="border border-black p-1.5 text-center font-mono text-[9px]">{h.porcentaje}%</td>
                            <td className="border border-black p-1.5 text-right font-mono text-[9px]">{formatCLP(h.montoNeto)}</td>
                            <td className="border border-black p-1.5 text-right font-mono text-[9px]">{formatCLP(h.montoIva)}</td>
                            <td className="border border-black p-1.5 text-right font-black font-mono text-[9px] text-black">{formatCLP(h.montoTotal)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-zinc-100 font-black uppercase text-[9px]">
                          <td colSpan={2} className="border border-black p-1.5">TOTAL PROYECTO CONTRATADO</td>
                          <td className="border border-black p-1.5 text-right font-mono">{formatCLP(data.valorNeto)}</td>
                          <td className="border border-black p-1.5 text-right font-mono">{formatCLP(totalIva)}</td>
                          <td className="border border-black p-1.5 text-right font-mono text-black font-black">{formatCLP(totalConIva)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* ANEXO 4: CHECKLIST DE INICIO */}
                  <div className="space-y-2 pt-2">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N°4 - CHECKLIST DE INICIO DEL PROYECTO
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-black">
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Cuenta Shopify creada</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Invitación de propietario aceptada</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Plan Shopify contratado</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Accesos WordPress/WooCommerce</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Material de marca y manual entregados</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-black">
                        <span className="w-4 h-4 border border-black flex items-center justify-center text-[10px] font-bold">✓</span>
                        <span>Servicio {data.sistemaFacturacion} activo</span>
                      </div>
                    </div>
                  </div>

                  {/* ANEXO 5: SERVICIOS DE TERCEROS */}
                  <div className="space-y-2 pt-2">
                    <h3 className="font-black text-xs uppercase text-black bg-zinc-100 p-2 border border-black">
                      ANEXO N°5 - APLICACIONES Y SERVICIOS DE TERCEROS
                    </h3>
                    <p className="text-xs text-black">
                      Los siguientes servicios son prestados por proveedores independientes. Sus costos de plan, suscripción o consumo mensual corresponden a EL CLIENTE:
                    </p>
                    <ul className="list-disc pl-5 text-xs text-black space-y-1">
                      <li><strong>Plan Shopify:</strong> Cobrado por Shopify directamente a la tarjeta registrada por EL CLIENTE.</li>
                      <li><strong>Sistema Facturación ({data.sistemaFacturacion}):</strong> Suscripción y soporte del proveedor de facturación.</li>
                      <li><strong>Pasarelas de Pago (Webpay, Flow, Mercado Pago):</strong> Comisiones por transacción cobradas por la pasarela.</li>
                      <li><strong>Aplicaciones Shopify (Klaviyo, Judge.me, etc.):</strong> Licencias mensuales según volumen de uso.</li>
                    </ul>
                  </div>
                </div>

                {/* PIE DE PÁGINA OFICIAL HOJA 4 */}
                <div className="border-t border-black pt-3 mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase">
                  <span>Anexos Integrantes • {data.clienteRazonSocial}</span>
                  <span>Página 4 de 4</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
