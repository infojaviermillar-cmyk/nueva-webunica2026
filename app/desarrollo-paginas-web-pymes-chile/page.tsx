import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Diseño de Páginas Web para PYMES en Chile | Webunica',
  description: 'Creamos sitios web profesionales y económicos para PYMES. Diseño rápido, optimizado para móviles y enfocado en generar contactos reales desde el primer día.',
  keywords: 'paginas web pymes chile, diseño web economico santiago, crear sitio web profesional pymes, desarrollo web emprendedores',
};

export default function PymesPage() {
  const pymesFaqs = [
    {
      question: "¿Qué incluye el pack de diseño para PYMES?",
      answer: "Incluye el diseño de tu sitio web profesional (Home, Servicios, Nosotros, Contacto), optimización para celulares, botones de WhatsApp, configuración de correos corporativos y una estructura SEO básica para que empieces a aparecer en Google."
    },
    {
      question: "¿Cuánto tiempo demora en estar lista mi web?",
      answer: "Entendemos que el tiempo es dinero para una PYME. Por eso, una vez que tenemos todo tu material (textos y fotos), podemos tener tu sitio operativo en un plazo de entre 5 y 10 días hábiles."
    },
    {
      question: "¿Podré cambiar yo mismo los textos o fotos después?",
      answer: "Sí. Entregamos sitios autogestionables fáciles de usar. Te daremos una breve capacitación para que puedas actualizar tus servicios, precios o fotos sin tener que pagarnos cada vez que quieras hacer un cambio."
    },
    {
      question: "¿Cuáles son las opciones de pago?",
      answer: "Ofrecemos flexibilidad para emprendedores. Puedes pagar el 50% al inicio y el 50% al finalizar el proyecto, o usar tarjetas de crédito para pagar en las cuotas que más te convengan."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño Web para PYMES",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Servicios de creación de sitios web profesionales y accesibles para pequeñas y medianas empresas en Chile.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-20">
        {/* Pymes Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-zinc-400 uppercase bg-zinc-50 rounded-full border border-zinc-100">
              Crecimiento Digital para Emprendedores
            </span>
            <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-10 uppercase">
              TU WEB <br/><span className="text-zinc-400">A OTRO NIVEL</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl leading-relaxed font-light">
              Llegó el momento de profesionalizar tu marca. Creamos sitios web que no solo se ven bien, sino que trabajan por ti las 24 horas captando nuevos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="px-12 py-5 bg-zinc-950 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl"
               >
                  Consultoría de Digitalización
               </a>
            </div>
          </div>
        </section>

        {/* Tactical Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-50">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { t: 'Botón de WhatsApp', d: 'Recibe consultas directas a tu teléfono al instante.' },
                { t: 'Diseño para Móviles', d: 'Tu web se verá perfecta en todos los smartphones.' },
                { t: 'SEO Regional', d: 'Aparece cuando tus vecinos busquen tus servicios en Google.' },
                { t: 'Correos Pro', d: 'Deja de usar gmail personal. Ten correos con tu nombre@tuempresa.cl.' },
                { t: 'Mantenimiento Fácil', d: 'Cambia promociones tú mismo sin complicaciones técnicas.' },
                { t: 'Seguridad SSL', d: 'Incluimos candado de seguridad para proteger a tus clientes.' }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-xl group-hover:bg-zinc-950 group-hover:text-white transition-all">✓</div>
                   <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{f.t}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{f.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={pymesFaqs}
          title="Dudas Comunes de Pymes"
          description="Resolvemos las inquietudes más frecuentes para que des el paso hoy mismo."
          ctaTitle="¿Profesionalizamos tu marca?"
          ctaDescription="Agenda una breve llamada para definir la mejor estructura para tu sitio web según tu presupuesto."
          ctaLabel="Agendar Llamada Pyme"
        />

        {/* CTA Banner */}
        <section className="py-32 bg-zinc-950 mx-4 rounded-[4rem] text-center text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto px-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 tracking-tight">Es hora de destacar en Google</h2>
              <p className="text-xl text-zinc-500 mb-12 italic font-serif">Tu negocio merece una presentación que cierre ventas automáticamente.</p>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-12 py-6 bg-white text-zinc-950 font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
              >
                  Quiero mi Web Pyme
              </a>
           </div>
        </section>
      </main>
    </div>
  );
}