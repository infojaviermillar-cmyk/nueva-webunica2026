"use client";

import { useState } from 'react';
import { createLead } from '@/lib/lead-actions';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  city?: string;
}

export default function ContactModal({ isOpen, onClose, city = "" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    ciudad: city,
    servicio: 'Diseño Web & SEO'
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');
    
    try {
      const response = await createLead({
        name: formData.nombre,
        email: formData.correo,
        phone: formData.telefono,
        city: formData.ciudad,
        project_type: formData.servicio,
 source: city ? `Lead Ciudad: ${city}` : 'Modal Web'
      });

      if (response.success) {
        if (typeof window !== 'undefined' && (window as any).clarity) {
          (window as any).clarity("identify", formData.correo);
          (window as any).clarity("set", "lead_name", formData.nombre);
          (window as any).clarity("set", "lead_source", city ? `Lead Ciudad: ${city}` : 'Modal Web');
        }
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError(response.error || 'Error al enviar el mensaje.');
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg max-h-[92vh] overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-300 border border-zinc-100">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-700 transition-colors z-20 bg-zinc-100 hover:bg-zinc-200 rounded-full p-2"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8 custom-scrollbar">

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-purple-50 text-[#7850FA] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-purple-100">
                ✓
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-3 text-zinc-950 font-heading">¡Mensaje Recibido!</h3>
              <p className="text-zinc-600 font-light text-base leading-relaxed max-w-sm mx-auto">
                Gracias por confiar en Webunica. <br/>Un asesor experto te contactará a la brevedad.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center px-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 text-[#7850FA] border border-purple-200/80 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
                  <span>Asesoría & Propuesta Comercial</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-2 text-zinc-950 font-heading">Cotización Gratis</h3>
                <p className="text-zinc-600 font-normal text-xs sm:text-sm">Completa tus datos para iniciar tu proyecto digital con nosotros.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                    Nombre Completo <span className="text-purple-600">*</span>
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: Javier Millar"
                    className="w-full px-5 py-3.5 bg-zinc-50/80 border border-zinc-300 rounded-2xl text-zinc-950 font-semibold text-sm placeholder:text-zinc-400 focus:bg-white focus:border-[#7850FA] focus:ring-4 focus:ring-[#7850FA]/15 outline-none transition-all shadow-xs"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                    Tu Correo Electrónico <span className="text-purple-600">*</span>
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="hola@tuempresa.cl"
                    className="w-full px-5 py-3.5 bg-zinc-50/80 border border-zinc-300 rounded-2xl text-zinc-950 font-semibold text-sm placeholder:text-zinc-400 focus:bg-white focus:border-[#7850FA] focus:ring-4 focus:ring-[#7850FA]/15 outline-none transition-all shadow-xs"
                    value={formData.correo}
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                      Teléfono / WhatsApp <span className="text-purple-600">*</span>
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+56 9 1234 5678"
                      className="w-full px-5 py-3.5 bg-zinc-50/80 border border-zinc-300 rounded-2xl text-zinc-950 font-semibold text-sm placeholder:text-zinc-400 focus:bg-white focus:border-[#7850FA] focus:ring-4 focus:ring-[#7850FA]/15 outline-none transition-all shadow-xs"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                      Ciudad <span className="text-purple-600">*</span>
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="Ej: Santiago, Temuco..."
                      className="w-full px-5 py-3.5 bg-zinc-50/80 border border-zinc-300 rounded-2xl text-zinc-950 font-semibold text-sm placeholder:text-zinc-400 focus:bg-white focus:border-[#7850FA] focus:ring-4 focus:ring-[#7850FA]/15 outline-none transition-all shadow-xs"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5 ml-1">
                    Servicio Requerido
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full px-5 py-3.5 bg-zinc-50/80 border border-zinc-300 rounded-2xl text-zinc-950 font-semibold text-sm focus:bg-white focus:border-[#7850FA] focus:ring-4 focus:ring-[#7850FA]/15 outline-none transition-all appearance-none cursor-pointer shadow-xs"
                      value={formData.servicio}
                      onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                    >
                      <option value="Diseño Web & SEO">Diseño Web & SEO</option>
                      <option value="E-commerce Shopify">E-commerce Shopify</option>
                      <option value="SaaS & Aplicaciones">Next.js, SaaS & Aplicaciones</option>
                      <option value="WooCommerce">WooCommerce Empresas</option>
                      <option value="Dropshipping">Dropshipping Shopify & Dropi</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase p-3.5 rounded-2xl text-center">
                    ⚠️ {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 px-6 bg-[#7850FA] hover:bg-[#683fe4] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-lg shadow-[#7850FA]/25 active:scale-[0.98] disabled:opacity-50 mt-4 cursor-pointer"
                >
                  {isSending ? 'Enviando...' : 'Solicitar Cotización Ahora'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

