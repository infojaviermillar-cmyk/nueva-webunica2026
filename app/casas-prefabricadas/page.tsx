import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Fabrica y Venta de Casas Prefabricadas en Chile | Modelos y Precios',
  description: 'Catálogo de casas prefabricadas y modulares en Chile. Modelos llave en mano, paneles SIP, y opciones económicas. Construcción rápida y garantizada.',
  keywords: [
    'casas prefabricadas',
    'casas prefabricadas chile',
    'venta de casas prefabricadas',
    'prefabricadas'
  ],
  alternates: {
    canonical: 'https://webunica.cl/casas-prefabricadas',
  }
};

export default function CasasPrefabricadasPage() {
  const faqs = [
    {
      question: "¿Qué incluye la modalidad llave en mano en nuestras casas prefabricadas?",
      answer: "La modalidad llave en mano significa que entregamos la casa completamente lista para habitar. Incluye radier (fundaciones), armado de estructura técnica, instalación sanitaria, red eléctrica, terminaciones interiores y exteriores, ventanas de termopanel y techumbre completa. No te preocupas de nada."
    },
    {
      question: "¿Puedo personalizar los planos y modelos de las casas?",
      answer: "Sí, todos nuestros modelos base son 100% modificables. Nuestros arquitectos adaptan los planos de las casas prefabricadas según tu terreno, orientación solar y necesidades familiares sin comprometer la estructura de ingeniería."
    },
    {
      question: "¿Construyen en todas las regiones de Chile?",
      answer: "Sí, contamos con capacidad logística para despachar y armar casas prefabricadas desde la zona central hasta el sur de Chile. Evaluamos los costos de traslado dependiendo de la accesibilidad del terreno."
    },
    {
      question: "¿Qué diferencia hay entre casas prefabricadas tradicionales y Paneles SIP?",
      answer: "Mientras la tradicional usa tabiquería de madera o metalcom con aislante suelto, los Paneles SIP (Structural Insulated Panel) fusionan madera OSB con un núcleo de poliestireno de alta densidad prensado, brindando hasta un 60% más de aislación térmica y acústica continua sin puentes térmicos."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        {/* Pilar Hero */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-100">
              Fabricación e Instalación en todo Chile
            </div>
            <h1 className="text-5xl lg:text-[80px] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-950 uppercase">
              Venta de <br/>
              <span className="text-emerald-600 italic font-serif lowercase font-light block mt-4">Casas Prefabricadas</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light text-pretty">
              Descubre nuestro catálogo de modelos modulares, construcciones de alto estándar energético y soluciones rápidas. Calidad estructural para toda la vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <LeadButton className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 scale-100 hover:scale-105 active:scale-95">
                Cotizar mi Propiedad
              </LeadButton>
              <WhatsAppButton className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                 Ver Catálogo PDF
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Cuerpos de Texto SEO (Clúster A) */}
        <section className="bg-white py-32 border-y border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-emerald text-zinc-600 font-light text-pretty">
            <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tighter mb-8">¿Por qué elegir casas prefabricadas en Chile?</h2>
            <p>
              La <strong>venta de casas prefabricadas</strong> ha experimentado un crecimiento exponencial en el país debido a la rapidez de ejecución, los costos controlados y la modernización de los materiales constructivos que superan ampliamente las barreras climáticas de Chile. Olvídate de los retrasos por clima y los presupuestos inciertos de la obra gruesa tradicional.
            </p>
            <p>
              Nuestra ingeniería se basa en asegurar una estructura inquebrantable, integrando sistemas eficientes. Puedes expandir tus conocimientos sobre nuestra especialidad térmica visitando nuestras soluciones enfocadas en <Link href="/casas-paneles-sip" className="font-bold text-emerald-600 hover:underline">casas paneles SIP</Link> o revisar directamente nuestra galería de <Link href="/modelos-casas-prefabricadas" className="font-bold text-emerald-600 hover:underline">modelos de casas prefabricadas</Link>.
            </p>
          </div>
        </section>

        <section className="bg-zinc-950 py-32 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                 <div className="text-3xl mb-4">🚀</div>
                 <h3 className="font-black text-lg uppercase tracking-widest mb-2">Construcción Rápida</h3>
                 <p className="text-zinc-400 text-sm font-light">Reduce hasta en un 50% los tiempos de espera versus una construcción con albañilería tradicional.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 border-emerald-500/30">
                 <div className="text-3xl mb-4">⚡</div>
                 <h3 className="font-black text-lg uppercase tracking-widest mb-2">Eficiencia Energética</h3>
                 <p className="text-zinc-400 text-sm font-light">Materiales termosellados aseguran ahorro constante en calefacción (leña, gas) y aire acondicionado.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                 <div className="text-3xl mb-4">💰</div>
                 <h3 className="font-black text-lg uppercase tracking-widest mb-2">Costo Cerrado</h3>
                 <p className="text-zinc-400 text-sm font-light">Presupuesto inicial sin sorpresas. Al ser módulos estandarizados controlamos la pérdida de material.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                 <div className="text-3xl mb-4">🏗️</div>
                 <h3 className="font-black text-lg uppercase tracking-widest mb-2">Sismoresistentes</h3>
                 <p className="text-zinc-400 text-sm font-light">Estructuras flexibles calculadas bajo estricta norma chilena, resistiendo esfuerzos de forma dinámica.</p>
               </div>
            </div>
          </div>
        </section>

        <section className="py-24">
           <FAQSection 
             faqs={faqs}
             title="Dudas Comunes sobre Prefabricadas"
             description="Respondemos las consultas más frecuentes antes de que decidas tu nuevo hogar."
           />
        </section>

      </main>
    </div>
  );
}
