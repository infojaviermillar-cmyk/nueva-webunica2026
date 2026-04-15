import Link from 'next/link';
import MetaAdsCalculator from '@/components/sections/meta-ads-calculator';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Calculadora de ROI y Presupuesto Meta Ads (Facebook & Instagram) | Webunica',
  description: 'Simula el rendimiento de tus campañas publicitarias con nuestra calculadora de ROI. Proyecta ventas, CPA y ROAS antes de invertir en Meta Ads.',
  keywords: 'calculadora meta ads, simulador roi facebook ads, presupuesto publicidad digital, calcular cpa ecommerce',
};

export default function MetaAdsCalculatorPage() {
  const metaFaqs = [
    {
      question: "¿Qué tan precisas son las simulaciones de la calculadora?",
      answer: "Los cálculos se basan en fórmulas estándar de la industria publicitaria. Sin embargo, los resultados reales dependen de factores externos como la calidad de tus creativos, la oferta de tu producto y la competencia en el momento de la subasta."
    },
    {
      question: "¿Qué es el ROAS y por qué es tan importante?",
      answer: "El ROAS (Return on Ad Spend) mide cuántos pesos generas por cada peso invertido en publicidad. Es la métrica clave para saber si tu campaña de Meta Ads es rentable o si está consumiendo tu presupuesto sin retorno."
    },
    {
      question: "¿Cómo puedo bajar mi CPA (Costo por Adquisición)?",
      answer: "Mejorar el CPA se logra optimizando el CTR (tasa de clics) con mejores anuncios y mejorando la tasa de conversión de tu página de destino. Nuestra calculadora te permite ver cómo pequeñas mejoras en estas métricas reducen drásticamente tu costo por venta."
    },
    {
      question: "¿Cuál es el presupuesto mínimo recomendado para Meta Ads?",
      answer: "Recomendamos empezar con un presupuesto que permita obtener al menos 50 conversiones por semana para que el algoritmo de aprendizaje de Meta pueda optimizar correctamente tus anuncios."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <main className="pt-32 pb-20">
        {/* Simple Header for Calculator */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
            Simulador de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Performance Ads</span>
          </h1>
          <p className="text-zinc-400 text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Ajusta los valores para proyectar la rentabilidad de tus campañas de Meta Ads. Los datos no mienten.
          </p>
        </section>

        {/* Calculator Component */}
        <div className="max-w-7xl mx-auto px-4 mb-32">
          <MetaAdsCalculator />
        </div>

        {/* Content & SEO Section */}
        <FAQSection 
          faqs={metaFaqs}
          title="Interpretando tus Resultados"
          description="Aprende a leer las métricas de tu negocio y cómo mejorarlas con estrategia real."
          ctaTitle="¿Tus campañas no están rindiendo?"
          ctaDescription="Agenda una auditoría técnica de tus campañas de Meta Ads para encontrar por dónde se está fugando tu presupuesto."
          ctaLabel="Agendar Auditoría de Ads"
        />

        {/* Tactical Footer CTA */}
        <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
           <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl">
             <h2 className="text-3xl font-bold mb-6">Optimización Basada en Datos</h2>
             <p className="text-zinc-400 mb-10 leading-relaxed font-light">
               No dejes tu inversión al azar. En Webunica utilizamos esta misma lógica para gestionar presupuestos publicitarios de alto impacto, maximizando cada peso invertido.
             </p>
             <a 
              href="https://calendly.com/javiermillar/reunion-webunica" 
              target="_blank"
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
             >
               Analizar mi Estrategia de Ads
             </a>
           </div>
        </section>
      </main>
    </div>
  );
}
