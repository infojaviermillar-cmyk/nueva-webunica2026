"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { saveLeadAction } from '@/lib/supabase/actions';

// Definición de tipos para las opciones
type OptionType = {
  id: string;
  label: string;
  price: number;
  icon?: React.ReactNode;
};

// Preguntas y lógica de precios dinámica
const getQuestions = (selections: Record<string, string>) => {
  const base = [
    {
      id: "project_type",
      title: "¿Qué tipo de proyecto necesitas?",
      options: [
        { id: "landing", label: "Landing Page (Una página)", price: 450000 },
        { id: "corporate", label: "Sitio Web Corporativo", price: 850000 },
        { id: "ecommerce", label: "Tienda Online (Ecommerce)", price: 1200000 },
        { id: "lms", label: "Academia Online (Cursos)", price: 1500000 },
      ]
    }
  ];

  // Inyectar pregunta condicional si elige eCommerce
  if (selections["project_type"] === "ecommerce") {
    base.push({
      id: "ecommerce_platform",
      title: "¿Qué plataforma prefieres para tu tienda?",
      options: [
        { id: "shopify", label: "Shopify (Mensualidad baja, muy rápida)", price: 0 },
        { id: "woocommerce", label: "WooCommerce (Sin comisión mensual, 100% tuya)", price: 0 },
        { id: "other", label: "Otra / Necesito asesoría gratis", price: 0 },
      ]
    });
  }

  // Push the remaining fixed questions
  base.push(
    {
      id: "design_level",
      title: "¿Qué nivel de diseño visual buscas?",
      options: [
        { id: "template", label: "Básico y Limpio (Basado en Estructura)", price: 0 },
        { id: "custom", label: "Premium / A Medida (UI Avanzada)", price: 400000 },
        { id: "wow", label: "Nivel Agencia (Animaciones y Experiencia WOW)", price: 800000 },
      ]
    },
    {
      id: "timeline",
      title: "¿Con qué urgencia lo necesitas?",
      options: [
        { id: "relaxed", label: "Sin apuro (1-2 meses)", price: 0 },
        { id: "normal", label: "Normal (3-4 semanas)", price: 150000 },
        { id: "urgent", label: "¡Urgente! (Menos de 2 semanas)", price: 450000 },
      ]
    }
  );

  return base;
};

export default function CotizadorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const [emailUnlocked, setEmailUnlocked] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSavingLead, setIsSavingLead] = useState(false);

  const currentQuestions = getQuestions(selections);

  // Calcula el total basado en las opciones seleccionadas
  const calculateTotal = () => {
    let total = 0;
    currentQuestions.forEach(q => {
      if (selections[q.id]) {
        const option = q.options.find(opt => opt.id === selections[q.id]);
        if (option) total += option.price;
      }
    });
    
    // Aplicar 10% descuento si está desbloqueado
    if (emailUnlocked) {
      total = total * 0.9;
    }
    
    return total;
  };

  const handleSelect = (questionId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [questionId]: optionId }));
    // Necesitamos recalcular las preguntas con el estado futuro inmediato para no desfasar el contador
    const futureSelections = { ...selections, [questionId]: optionId };
    const futureQuestions = getQuestions(futureSelections);

    // Auto-avance después de un pequeño retraso
    setTimeout(() => {
      if (currentStep < futureQuestions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const handleReset = () => {
    setSelections({});
    setCurrentStep(0);
    setShowResult(false);
    setEmailUnlocked(false);
    setEmailInput('');
  };

  const handleUnlockDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.includes('@')) {
      setIsSavingLead(true);
      // Persist to Supabase
      await saveLeadAction(emailInput, selections, calculateTotal());
      setEmailUnlocked(true);
      setIsSavingLead(false);
    }
  };

  const getPlanDetails = () => {
    switch(selections["project_type"]) {
      case "landing":
        return [
          "Dominio y Hosting por 1 año",
          "Diseño One-Page optimizado para conversiones",
          "Formulario de captación de leads",
          "Botón de WhatsApp directo",
          "Diseño responsivo móvil y escritorio",
          "SEO On-Page Básico"
        ];
      case "corporate":
        return [
          "Estructura Multi-página Completa (Inicio, Nosotros, Servicios)",
          "Gestor de Contenidos Autoadministrable (WordPress)",
          "Optimización de Velocidad y Core Web Vitals",
          "Arquitectura SEO On-Page Avanzada",
          "Integración Google Analytics 4",
          "Servidor Dedicado o Cloud de alta métrica"
        ];
      case "ecommerce":
        return [
          "Ecosistema Ecommerce Completo (Shopify o WooCommerce)",
          "Pasarelas de pago automatizadas (Webpay, MercadoPago)",
          "Integraciones logísticas (Starken, Chilexpress)",
          "Diseño de carrito sin fricción (UX Data-Driven)",
          "Gestión de Inventarios y Pedidos centralizada",
          "Integración Meta Pixel / Conversiones API"
        ];
      case "lms":
        return [
          "Infraestructura E-Learning (Tutor LMS)",
          "Sistemas de Alumnos, Profesores y Certificados",
          "Pasarela de venta para suscripciones o pagos únicos",
          "Aula virtual privada con video streaming seguro",
          "Gamificación y seguimiento de progreso",
          "Automatización de correos transaccionales"
        ];
      default:
        return [
          "Estructura SEO Básica",
          "Integración de métodos de contacto",
          "Soporte y Garantía técnica por 3 meses"
        ];
    }
  };

  const totalFormat = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(calculateTotal());
  const selectedPlanFeatures = getPlanDetails();
  const waGatingText = emailUnlocked ? " (¡Cupón 10% Activado con Correo!)" : "";

  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 relative">
      <div className="h-20 bg-white border-b border-zinc-100"></div>

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
         <div className="w-[800px] h-[800px] bg-gradient-to-br from-[#a1fcd8] to-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <section className="relative container mx-auto px-4 py-16 lg:py-24 max-w-4xl flex-grow flex flex-col justify-center overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Background Texture" 
            fill 
            className="object-cover object-center" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-transparent to-zinc-50"></div>
        </div>
        
        <div className="relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d3748] mb-4 text-balance">
            Calcula tu Presupuesto Web
          </h1>
          <p className="text-zinc-600 text-lg">Descubre en menos de 1 minuto una estimación realista para tu proyecto.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-14 border border-zinc-100 min-h-[450px] flex flex-col">
          
          {!showResult ? (
            <div className="flex-grow flex flex-col">
              {/* Progress Bar */}
              <div className="w-full bg-zinc-100 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-[#4f46e5] h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep) / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold text-[#4f46e5] mb-2 uppercase tracking-wider">
                Paso {currentStep + 1} de {currentQuestions.length}
              </p>

              {/* Lógica de Transición (Simple Conditional Rendering per step) */}
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-zinc-900 mb-8">
                  {currentQuestions[currentStep].title}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQuestions[currentStep].options.map(option => {
                    const isSelected = selections[currentQuestions[currentStep].id] === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(currentQuestions[currentStep].id, option.id)}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                          isSelected 
                            ? 'border-[#4f46e5] bg-[#4f46e5]/5 ring-4 ring-[#4f46e5]/10 shadow-md' 
                            : 'border-zinc-200 hover:border-[#4f46e5] hover:bg-zinc-50'
                        }`}
                      >
                        <span className={`block text-lg font-bold ${isSelected ? 'text-[#4f46e5]' : 'text-zinc-800'}`}>
                          {option.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Botón de retroceso */}
              <div className="mt-8 flex justify-start">
                {currentStep > 0 && (
                  <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Volver
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Pantalla de Resultados
            <div className="flex-grow flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
               <div className="w-20 h-20 bg-[#a1fcd8] text-teal-800 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-zinc-900 mb-4">
                 Estimación Completada
               </h2>
               <p className="text-zinc-600 mb-8 max-w-md mx-auto">
                 Esta es una aproximación generada automáticamente calculando la complejidad de tu selección.
               </p>

               <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl text-left border-t border-zinc-100 pt-8 mb-10">
                 {/* Detalles del Plan Dinámico */}
                 <div className="flex-1">
                   <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Qué incluiría este plan?</h3>
                   <ul className="space-y-3">
                     {selectedPlanFeatures.map((feature, idx) => (
                       <li key={idx} className="flex items-start text-zinc-700 text-sm">
                         <svg className="w-5 h-5 text-[#4f46e5] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                         {feature}
                       </li>
                     ))}
                   </ul>

                   {/* Email Gated Discount System */}
                   <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                     {!emailUnlocked ? (
                       <form onSubmit={handleUnlockDiscount} className="flex flex-col gap-3">
                         <label htmlFor="discountEmail" className="text-sm font-bold text-blue-900 flex items-center gap-2">
                           <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                           ¿Quieres un 10% de descuento extra?
                         </label>
                         <p className="text-xs text-blue-700 mb-2">Ingresa tu correo comercial y desbloquea tu cupón especial en la estimación de inmediato.</p>
                         <div className="flex gap-2">
                           <input 
                              type="email" 
                              id="discountEmail" 
                              required
                              value={emailInput}
                              onChange={(e) => setEmailInput(e.target.value)}
                              placeholder="tu@empresa.com" 
                              className="flex-grow px-4 py-3 rounded-xl border border-blue-200 outline-none focus:ring-2 focus:ring-blue-500"
                           />
                           <button disabled={isSavingLead || !emailInput.includes('@')} type="submit" className="bg-[#4f46e5] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap disabled:opacity-50 flex justify-center items-center min-w-[130px]">
                             {isSavingLead ? 'Cargando...' : 'Aplicar 10%'}
                           </button>
                         </div>
                       </form>
                     ) : (
                       <div className="flex flex-col items-center text-center animate-in zoom-in duration-500">
                         <div className="text-[#1EBE5D] font-bold text-lg flex items-center gap-2 mb-1">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           ¡Descuento Aplicado Exitosamente!
                         </div>
                         <p className="text-sm text-blue-800">Cupón activado para <strong>{emailInput}</strong>. El precio final ha sido recalculado con un 10% OFF automático.</p>
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Bloque Precio */}
                 <div className="lg:w-[350px] shrink-0">
                   <div className="bg-zinc-950 p-8 rounded-3xl w-full h-full shadow-2xl relative overflow-hidden flex flex-col justify-center transition-all duration-500">
                     <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-40 transition-colors duration-700 ${emailUnlocked ? 'bg-[#1EBE5D]' : 'bg-[#4f46e5]'}`}></div>
                     
                     <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Presupuesto Estimado</p>
                     
                     {emailUnlocked && (
                       <p className="text-sm font-mono text-zinc-500 line-through mb-1 relative z-10 transition-all">
                         {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(calculateTotal() / 0.9)}
                       </p>
                     )}
                     
                     <p className={`text-4xl font-mono font-bold relative z-10 transition-colors duration-500 ${emailUnlocked ? 'text-[#a1fcd8]' : 'text-white'}`}>
                       {totalFormat}
                     </p>
                     
                     <p className="text-xs text-zinc-500 mt-2 relative z-10">* Valores Netos (CLP).</p>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                 <a 
                   href={`https://wa.me/56984410379?text=Hola Webunica! Acabo de hacer el presupuesto en su web y mi estimado es ${totalFormat} para el plan de ${selections["project_type"]}${waGatingText}. Me gustaría conversar los detalles de mi proyecto.`}
                   target="_blank" rel="noreferrer"
                   className="flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                 >
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                   WhatsApp
                 </a>
                 <button onClick={handleReset} className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold py-4 px-6 rounded-xl transition-colors">
                   Rehacer
                 </button>
               </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
