"use client";

import { useState } from 'react';

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
    <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
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
                    className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 group"
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
                 <a 
                   href={ctaLink}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-950 font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 group"
                 >
                   {ctaLabel}
                   <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                   </svg>
                 </a>
                 <Link 
                   href="/contacto"
                   className="inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all"
                 >
                   Enviar contacto
                 </Link>
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
  );
}
