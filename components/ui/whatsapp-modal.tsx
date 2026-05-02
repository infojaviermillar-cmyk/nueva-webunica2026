"use client";

import React, { useState, useEffect } from 'react';
import { createLead } from '@/lib/lead-actions';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "56984410379";

const ALL_SERVICES = [
  "Next.js & SaaS a Medida",
  "Tiendas Shopify",
  "SEO & Auditoría Avanzada",
  "WooCommerce Empresas",
  "Sitios Web Pymes",
  "Academias Tutor LMS",
  "Inmobiliarias Premium",
  "Funerarias & Obituarios",
  "Dropshipping Shopi+Dropi",
  "Configurar Pagos (Webpay, Flow)",
  "Configurar Envíos (Starken, etc)",
  "Conectar mi Contabilidad/ERP",
  "Emisión de Boletas Electrónicas",
  "Talleres y Cursos Shopify",
  "Busco trabajo como Freelance",
  "Soy Agencia y busco Partner"
];

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    interest: ALL_SERVICES[0],
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if (!isOpen) {
      setFormData({ interest: ALL_SERVICES[0], name: "", email: "", phone: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    try {
      // 1. Guardar en Supabase usando el Server Action
      const result = await createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: "",  // No se solicita en este form simplificado
        project_type: formData.interest,
        source: 'WhatsApp Funnel'
      });

      if (!result.success) {
        console.error('Error saving lead:', result.error);
      }

      // 2. Redirigir a WhatsApp
      const message = `¡Hola Webunica! 👋 Mi nombre es ${formData.name}. Mi teléfono es ${formData.phone}. Estoy interesado en: ${formData.interest}. Mi correo es ${formData.email}. Me gustaría recibir más información y una cotización.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Intentamos abrir en una nueva pestaña, si falla usamos la misma (evita bloqueos de popups)
      const win = window.open(whatsappUrl, '_blank');
      if (win) {
        win.focus();
      } else {
        window.location.href = whatsappUrl;
      }
      onClose();
    } catch (err) {
      console.error('Error saving lead:', err);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Webunica, me interesa ${formData.interest}`)}`, '_blank');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button UI */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors z-20 bg-zinc-100 rounded-full p-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Form Content Area */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {/* Header Visual */}
          <div className="bg-zinc-950 p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25d366]/20 blur-[60px] rounded-full" />
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl border-2 border-white/10">
                 <img 
                   src="/javier-avatar-clean.png" 
                   alt="Javier Millar" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#25d366] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Continuar por WhatsApp</h2>
            <p className="text-zinc-500 text-sm mt-3 font-light">Completa tus datos para iniciar la conversación con un asesor.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-4">Nombre Completo</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#25d366] transition-all placeholder:text-zinc-300 text-zinc-950 font-bold"
                placeholder="Ej: Javier Millar"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-4">Tu Email de contacto</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#25d366] transition-all placeholder:text-zinc-300 text-zinc-950 font-bold"
                placeholder="hola@empresa.cl"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-4">WhatsApp / Teléfono</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#25d366] transition-all placeholder:text-zinc-300 text-zinc-950 font-bold"
                placeholder="+56 9 ..."
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-4">Servicio de Interés</label>
              <div className="relative">
                <select 
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#25d366] transition-all text-zinc-950 font-bold appearance-none cursor-pointer"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  {ALL_SERVICES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-[#25d366] text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-[#25d366]/30 hover:bg-[#20bd5a] transition-all scale-100 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                   Iniciar Chat en WhatsApp
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="bg-zinc-50 p-6 text-center border-t border-zinc-100 flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#25d366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-black">
            Conexión protegida e instantánea
          </p>
        </div>
      </div>
    </div>
  );
}
