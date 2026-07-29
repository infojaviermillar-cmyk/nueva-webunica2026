"use client";

import React, { useState, useEffect } from 'react';
import { createLead } from '@/lib/lead-actions';
import { detectServiceFromUrl, DetectedServiceInfo } from '@/lib/service-detector';
import { Sparkles, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "56984410379";

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: ""
  });

  const [detectedInfo, setDetectedInfo] = useState<DetectedServiceInfo>({
    serviceName: 'Diseño Web & E-commerce',
    pageUrl: 'https://webunica.cl',
    pagePath: '/'
  });

  const [isChangingService, setIsChangingService] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const info = detectServiceFromUrl();
      setDetectedInfo(info);
      setFormData(prev => ({
        ...prev,
        interest: info.serviceName
      }));
      setIsChangingService(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    try {
      const result = await createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: "",
        project_type: formData.interest || detectedInfo.serviceName,
        source: detectedInfo.pageUrl || 'WhatsApp Funnel'
      });

      if (!result.success) {
        console.error('Error saving lead:', result.error);
      }

      if (typeof window !== 'undefined' && (window as any).clarity) {
        (window as any).clarity("identify", formData.email);
        (window as any).clarity("set", "lead_name", formData.name);
        (window as any).clarity("set", "lead_source", detectedInfo.pageUrl);
      }

      // Pre-filled WhatsApp message with exact URL and detected service
      const message = `¡Hola Webunica! 👋 Mi nombre es ${formData.name}.

Me interesa información sobre: *${formData.interest || detectedInfo.serviceName}*
📍 Vengo desde la página: ${detectedInfo.pageUrl}

Mi teléfono: ${formData.phone}
Mi correo: ${formData.email}

¿Podrían enviarme una propuesta o cotización?`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      const win = window.open(whatsappUrl, '_blank');
      if (win) {
        win.focus();
      } else {
        window.location.href = whatsappUrl;
      }
      onClose();
    } catch (err) {
      console.error('Error saving lead:', err);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Webunica, me interesa ${formData.interest} (vengo desde ${detectedInfo.pageUrl})`)}`, '_blank');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-300 border border-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button UI */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-700 transition-colors z-20 bg-zinc-100 hover:bg-zinc-200 rounded-full p-2"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Form Content Area */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {/* Header Visual */}
          <div className="bg-zinc-950 p-6 sm:py-6 sm:px-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25d366]/20 blur-[60px] rounded-full" />
            <div className="w-14 h-14 mx-auto mb-3 relative">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-2xl border-2 border-white/20">
                 <img 
                   src="/javier-avatar-clean.png" 
                   alt="Javier Millar" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-[#25d366] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.4 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter font-heading">Continuar por WhatsApp</h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 font-light">Completa tus datos para iniciar la conversación directamente.</p>
          </div>

          <div className="p-6 sm:px-8 sm:py-7">
            {/* Smart Auto-Detected Origin Badge Card */}
            <div className="mb-5 p-4 bg-emerald-50/80 border border-emerald-200/90 rounded-2xl flex flex-col gap-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25d366] animate-ping" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900">
                    Servicio Solicitado
                  </span>
                </div>
                <button 
                  type="button" 
                  onClick={() => setIsChangingService(!isChangingService)}
                  className="text-[10px] font-bold text-emerald-700 hover:underline uppercase tracking-wider cursor-pointer"
                >
                  {isChangingService ? 'Conservar Detectado' : 'Cambiar Servicio'}
                </button>
              </div>
              <div className="text-sm font-black text-zinc-950 font-heading flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25d366] shrink-0" />
                <span>{formData.interest}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono truncate">
                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">Origen: {detectedInfo.pagePath || '/'}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isChangingService && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                    Seleccionar Otro Servicio
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full bg-zinc-50/80 border border-zinc-300 rounded-2xl px-5 py-3.5 text-zinc-950 font-semibold text-sm focus:outline-none focus:border-[#25d366] focus:ring-4 focus:ring-[#25d366]/15 transition-all appearance-none cursor-pointer shadow-xs"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option value="Rediseño Tienda Shopify">Rediseño Tienda Shopify</option>
                      <option value="Diseño Web & SEO">Diseño Web & SEO</option>
                      <option value="E-commerce Shopify">E-commerce Shopify</option>
                      <option value="Next.js & SaaS Custom">Next.js & SaaS Custom</option>
                      <option value="WooCommerce Empresas">WooCommerce Empresas</option>
                      <option value="Dropshipping Shopify & Dropi">Dropshipping Shopify & Dropi</option>
                      <option value="Diseño Web Pymes Chile">Diseño Web Pymes Chile</option>
                      <option value="SEO & Auditoría Avanzada">SEO & Auditoría Avanzada</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                  Nombre Completo <span className="text-[#25d366]">*</span>
                </label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-50/80 border border-zinc-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#25d366] focus:ring-4 focus:ring-[#25d366]/15 transition-all placeholder:text-zinc-400 text-zinc-950 font-semibold text-sm shadow-xs"
                  placeholder="Ej: Javier Millar"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                  Tu Email de contacto <span className="text-[#25d366]">*</span>
                </label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-50/80 border border-zinc-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#25d366] focus:ring-4 focus:ring-[#25d366]/15 transition-all placeholder:text-zinc-400 text-zinc-950 font-semibold text-sm shadow-xs"
                  placeholder="hola@empresa.cl"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                  WhatsApp / Teléfono <span className="text-[#25d366]">*</span>
                </label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-zinc-50/80 border border-zinc-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#25d366] focus:ring-4 focus:ring-[#25d366]/15 transition-all placeholder:text-zinc-400 text-zinc-950 font-semibold text-sm shadow-xs"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-[#25d366] hover:bg-[#20bd5a] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#25d366]/25 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4 cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.4 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                     Iniciar Chat en WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer info */}
          <div className="bg-zinc-50 p-4 text-center border-t border-zinc-100 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#25d366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
              Conexión protegida e instantánea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
