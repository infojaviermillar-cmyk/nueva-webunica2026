import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Diseño de Páginas Web para Inmobiliarias en Chile | Webunica',
  description: 'Soluciones digitales exclusivas para corredores de propiedades y constructoras. Sitios web rápidos, con filtros avanzados y generadores de leads certificados.',
  keywords: 'paginas web inmobiliarias, diseño web corredores propiedades, sitio web inmobiliario premium chile, desarrollo inmobiliario digital',
};

export default function RealEstatePage() {
  const realEstateFaqs = [
    {
      question: "¿Se pueden integrar filtros de búsqueda por zona y precio?",
      answer: "Sí. Desarrollamos filtros dinámicos que permiten a tus clientes encontrar la propiedad ideal por comuna, rango de precio, número de habitaciones, m² y más, todo con una velocidad de carga instantánea."
    },
    {
      question: "¿Cómo recibo los avisos de nuevos leads?",
      answer: "Configuramos ruteo inteligente: cada vez que alguien consulta por una propiedad, recibes un correo o un mensaje de WhatsApp con el link exacto de la propiedad interesada, facilitando el cierre de la venta."
    },
    {
      question: "¿Puedo sincronizar mi stock con portales nacionales?",
      answer: "Podemos trabajar con integraciones MLS o desarrollar sistemas de carga masiva para que tu inventario esté siempre al día en tu propia web y en portales externos sin duplicar trabajo."
    },
    {
      question: "¿El sitio se ve bien en celulares?",
      answer: "Absolutamente. El 80% de las búsquedas de propiedades comienzan en un móvil. Nuestros diseños son 'Mobile-First', garantizando una navegación fluida y rápida desde cualquier smartphone."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño Web Inmobiliario Premium",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp"
    },
    "description": "Plataformas de alta gama para corretaje de propiedades, optimizadas para captación y exhibición de catálogo.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-[20vh]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-zinc-950">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-zinc-500 uppercase bg-zinc-100 rounded-full">
                Exclusividad y Alto Rendimiento
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
                El Nuevo Estándar para el <span className="text-zinc-500 block italic">Lujo Inmobiliario</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-xl text-pretty text-zinc-600">
                No arriesgues tus captaciones con un sitio web genérico. Creamos plataformas diseñadas para proyectar autoridad, facilitar la búsqueda y cerrar cierres más rápido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/javiermillar/reunion-webunica" 
                  target="_blank"
                  className="px-10 py-5 bg-zinc-950 text-white rounded-2xl font-bold text-center hover:bg-zinc-800 transition-all shadow-2xl"
                >
                  Agendar Reunión Técnica
                </a>
                <Link
                  href="/contacto"
                  className="px-10 py-5 bg-white border-2 border-zinc-100 text-zinc-900 rounded-2xl font-bold text-center hover:border-zinc-300 transition-all"
                >
                  Hablar con un Agente
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-zinc-200/50 rounded-full blur-[100px] -z-10 group-hover:bg-zinc-300/50 transition-colors" />
              <div className="relative rounded-[3rem] overflow-hidden border border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                <Image 
                  src="/portfolio_realestate_luxury_1776265924096.png"
                  alt="Luxury Real Estate Web Design"
                  width={800}
                  height={800}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tactical Features Container */}
        <section className="bg-zinc-50 py-32 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-zinc-950">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-1/3 text-zinc-950">
                  <h2 className="text-4xl font-bold text-zinc-900 mb-6 font-bold leading-tight">Herramientas que Cierran Ventas</h2>
                  <p className="text-zinc-500 text-lg leading-relaxed">
                    Nuestras webs inmobiliarias no son solo catálogos; son motores de conversión optimizados para cada etapa del embudo.
                  </p>
               </div>
               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {[
                    { t: 'Filtros Dinámicos', d: 'Búsqueda instantánea por zona, precio, m² y características específicas.' },
                    { t: 'Integración MLS', d: 'Sincronización automática de tus propiedades con portales nacionales.' },
                    { t: 'WhatsApp Automatizado', d: 'Recibe consultas en el móvil de tus agentes con la propiedad exacta adjunta.' },
                    { t: 'SEO Local Geo-referenciado', d: 'Posicionamos tu corredor en las zonas exactas donde operan tus clientes.' }
                  ].map((f, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-zinc-300 transition-colors">
                       <h3 className="text-xl font-bold text-zinc-900 mb-3">{f.t}</h3>
                       <p className="text-zinc-600 text-sm leading-relaxed">{f.d}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={realEstateFaqs}
          title="Dudas sobre Webs Inmobiliarias"
          description="Resolvemos los desafíos tecnológicos comunes del corretaje de propiedades."
          ctaTitle="¿Escalamos tu corretaje al siguiente nivel?"
          ctaDescription="Agenda una reunión técnica para ver cómo podemos gestionar tu catálogo de forma profesional."
        />

        {/* CTA Case Study */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-black">
             <div className="bg-zinc-900 rounded-[4rem] px-12 py-24 lg:p-32 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight tracking-tighter uppercase">
                    ¿Listo para tener la <br/><span className="text-zinc-500 italic lowercase font-serif">mejor oficina digital</span> de Chile?
                   </h2>
                   <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Hemos ayudado a más de 15 corredoras a duplicar su tasa de captación de propiedades exclusivas gracias a un posicionamiento web premium.
                   </p>
                   <a 
                    href="https://calendly.com/javiermillar/reunion-webunica" 
                    target="_blank"
                    className="inline-block px-12 py-6 bg-white text-zinc-900 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
                   >
                    Cotizar mi Plataforma Inmobiliaria
                   </a>
                </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
