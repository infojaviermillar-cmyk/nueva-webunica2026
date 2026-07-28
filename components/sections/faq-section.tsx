"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useContactModal } from '@/context/contact-modal-context';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  ctaLabel?: string;
}

export default function FAQSection({ 
  faqs, 
  title = "Preguntas Frecuentes",
  description = "Resolvemos tus dudas sobre nuestros servicios de desarrollo y diseño.",
  ctaTitle = "¿Listo para empezar tu transformación digital?",
  ctaDescription = "Agenda una reunión técnica gratuita conmigo para analizar tu proyecto en detalle.",
  ctaLink = "https://calendly.com/javiermillar/reunion-webunica",
  ctaLabel = "Agendar Reunión"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openModal, openWhatsApp } = useContactModal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Datos estructurados para SEO (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
    <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* FAQ Column */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-lg">
              {description}
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-3xl transition-all duration-300 ${openIndex === index ? 'border-zinc-300 bg-zinc-50 shadow-sm' : 'border-zinc-100 hover:border-zinc-200'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 rounded-3xl"
                  >
                    <span className="font-bold text-zinc-800 text-lg group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400 group-hover:border-zinc-400'}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 text-zinc-600 leading-relaxed text-lg border-t border-zinc-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Sticky Column */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-zinc-950 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-zinc-200">
               {/* Decorative Gradient */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -z-10" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full -z-10" />
               
               <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                 {ctaTitle}
               </h3>
               <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                 {ctaDescription}
               </p>
               
               <div className="flex flex-col gap-4">
                 <button 
                   onClick={() => openModal()}
                   className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-950 font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 group"
                 >
                   {ctaLabel}
                   <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                   </svg>
                 </button>
                 <button 
                   onClick={() => openWhatsApp()}
                   className="inline-flex items-center justify-center px-10 py-5 bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] font-bold text-lg rounded-2xl hover:bg-[#25d366]/20 transition-all font-black uppercase tracking-widest text-[10px] gap-3"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                   Hablar por WhatsApp
                 </button>
               </div>

               <div className="mt-12 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">💬</div>
                  <div>
                    <p className="text-sm font-bold">Respuesta rápida</p>
                    <p className="text-xs text-zinc-500">Respondemos en menos de 2 horas hábiles.</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
  );
}
