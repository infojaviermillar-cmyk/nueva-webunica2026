"use client";

import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta crear una página web profesional en Chile este 2026?",
    answer: "El costo depende de los objetivos de tu negocio. Una landing page de alta conversión comienza desde los $350.000 CLP, mientras que tiendas Shopify premium o aplicaciones SaaS complejas con Next.js suelen superar el $1.000.000 CLP. Nuestra ingeniería web garantiza que cada peso sea una inversión con retorno directo."
  },
  {
    question: "¿Por qué es mejor desarrollar mi tienda con Shopify en lugar de otras plataformas?",
    answer: "Shopify ofrece la mayor estabilidad y seguridad del mercado. En Chile, se integra nativamente con Flow, Mercado Pago y aplicaciones de logística líderes. Olvídate de servidores caídos o errores de plugins; con Shopify te enfocas en vender, no en arreglar código."
  },
  {
    question: "¿Qué diferencia a Webunica de una agencia de diseño web tradicional?",
    answer: "No somos diseñadores que 'hacen cosas bonitas'. Somos ingenieros de conversión. Aplicamos psicología de ventas y arquitectura de embudos (funnels) en cada línea de código. Tu sitio no solo se verá increíble, estará diseñado para facturar."
  },
  {
    question: "¿Cuánto tiempo demora el proceso de diseño y desarrollo?",
    answer: "Un sitio web corporativo u optimizado toma entre 2 a 3 semanas. Proyectos más complejos como un eCommerce avanzado o un software a medida pueden tomar de 4 a 8 semanas. Mantenemos una comunicación constante para que veas el progreso en tiempo real."
  },
  {
    question: "¿Mi sitio web aparecerá en los primeros lugares de Google?",
    answer: "Sí, aplicamos SEO técnico avanzado desde el primer día. Al usar Next.js, logramos tiempos de carga menores a 1 segundo e indexación inmediata. Esto, sumado a una estructura de contenidos semántica, te da una ventaja competitiva masiva frente a sitios lentos hechos en WordPress."
  },
  {
    question: "¿Qué pasa si necesito cambios después de que el sitio esté terminado?",
    answer: "Nuestra relación no termina con la entrega. Ofrecemos planes de soporte y optimización continua para que tu plataforma evolucione junto con tu negocio. Siempre tendrás un consultor experto a disposición para escalar nuevas funcionalidades."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Schema.org FAQ structured data
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
    <section className="py-32 bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Content & SEO Strategy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 rounded-full border border-violet-100">
               <HelpCircle className="w-4 h-4 text-violet-600" />
               <span className="text-[10px] font-black tracking-widest text-violet-600 uppercase">Resolviendo dudas</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.9] mb-10">
              Preguntas <br/><span className="text-violet-600 italic font-serif lowercase font-light">Estratégicas</span>
            </h2>
            
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
              Todo lo que necesitas saber sobre ingeniería web, SEO y conversión en Chile. Si no encuentras tu respuesta, hablemos directamente.
            </p>

            <div className="bg-zinc-950 rounded-[3rem] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 blur-[60px] rounded-full"></div>
               <MessageSquare className="w-10 h-10 text-violet-500 mb-6" />
               <h3 className="text-2xl font-black mb-4">¿Buscas algo más específico?</h3>
               <p className="text-zinc-400 text-sm font-light mb-10 leading-relaxed">
                  Cada modelo de negocio es único. Agenda una consultoría gratuita para analizar la viabilidad técnica de tu idea.
               </p>
               <LeadButton className="w-full py-5 bg-white text-zinc-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-violet-50 transition-all shadow-xl">
                  Iniciar Consultoría Técnica
               </LeadButton>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group border rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                  ? 'border-violet-200 bg-violet-50/30 shadow-xl shadow-violet-500/5' 
                  : 'border-zinc-100 hover:border-violet-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-8 text-left flex justify-between items-center gap-6"
                >
                  <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 ${
                    openIndex === index ? 'text-zinc-950' : 'text-zinc-700 group-hover:text-zinc-950'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-violet-600 text-white rotate-180' : 'bg-zinc-50 text-zinc-400 group-hover:bg-violet-100 group-hover:text-violet-600'
                  }`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-10 pt-2">
                    <div className="h-px w-12 bg-violet-200 mb-8"></div>
                    <p className="text-zinc-600 text-lg font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
