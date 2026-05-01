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
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl w-full max-w-lg max-h-[92vh] overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-600 transition-colors z-20 bg-white/80 backdrop-blur-sm rounded-full p-1"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-10 pb-12 custom-scrollbar">

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-zinc-900">¡Mensaje Recibido!</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Gracias por confiar en Webunica. <br/>Un asesor experto te contactará en breve.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center px-6 sm:px-10">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-3 text-zinc-900">Cotización Gratis</h3>
                <p className="text-zinc-500 font-light text-sm sm:text-base">Completa tus datos para iniciar tu transformación digital.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-4">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ej: Javier Millar"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-zinc-300"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-1 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-4">Tu Correo</label>
                    <input 
                      required
                      type="email" 
                      placeholder="hola@tuempresa.com"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-zinc-300"
                      value={formData.correo}
                      onChange={(e) => setFormData({...formData, correo: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-4">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+56 9..."
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-all placeholder:text-zinc-300"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-1 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-4">Ciudad</label>
                    <input 
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-4">Servicio</label>
                    <select 
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-all appearance-none"
                      value={formData.servicio}
                      onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                    >
                      <option>Diseño Web & SEO</option>
                      <option>E-commerce Shopify</option>
                      <option>SaaS & Aplicaciones</option>
                      <option>WooCommerce</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase p-4 rounded-xl text-center">
                    ⚠️ {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-5 sm:py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 disabled:opacity-50 mt-4 leading-none"
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
