import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';

export const metadata = {
  title: 'Diseño de Themes Shopify Personalizados en Adobe XD | Webunica',
  description: 'Creamos tiendas Shopify únicas diseñadas desde cero en Adobe XD. Experiencia de usuario (UX) superior, diseño (UI) vanguardista y programación Liquid a medida.',
  keywords: 'temas shopify personalizados, diseño adobe xd shopify, expertos liquid shopify chile, desarrollo temas shopify boutique',
};

export default function ShopifyXDPage() {
  const shopifyFaqs = [
    {
      question: "¿Por qué diseñar en Adobe XD antes de programar?",
      answer: "Diseñar en Adobe XD nos permite iterar la experiencia de usuario (UX) sin limitaciones técnicas iniciales. Esto garantiza que el diseño sea 100% original y esté optimizado para la conversión antes de escribir una sola línea de código en Shopify."
    },
    {
      question: "¿Mi tienda será lenta por tener un diseño tan complejo?",
      answer: "Al contrario. Al desarrollar un tema a medida en Liquid, evitamos el uso de aplicaciones pesadas y código innecesario que suelen traer los temas comprados. Tu tienda será mucho más rápida y eficiente."
    },
    {
      question: "¿Es fácil editar el contenido después del lanzamiento?",
      answer: "Sí. Construimos 'Custom Sections' nativas dentro de Shopify. Esto te permite cambiar imágenes, textos y banners de forma visual (Drag & Drop) sin necesidad de conocimientos técnicos."
    },
    {
      question: "¿Qué pasa si ya tengo un diseño en Figma?",
      answer: "También trabajamos con Figma. Podemos tomar tus archivos de diseño y transformarlos en un tema de Shopify de alta performance respetando cada detalle visual."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño de Themes Shopify Personalizados desde Adobe XD",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Servicio premium de diseño y desarrollo de plantillas Shopify únicas utilizando prototipado avanzado en Adobe XD.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-900 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32">
        {/* Aesthetic Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 overflow-hidden">
          {/* Background Texture Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
            <Image 
              src="/bg-01.jpg" 
              alt="Background Texture" 
              fill 
              className="object-cover object-center" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfc] via-transparent to-[#fcfcfc]"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-zinc-400 uppercase border border-zinc-200 rounded-full">
                Design-First Methodology
              </span>
              <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-10 text-zinc-950">
                La Estética <br/><span className="font-serif italic text-zinc-500">como motor</span> <br/>de Ventas
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty">
                Olvídate de las plantillas genéricas. Diseñamos tu tienda Shopify en **Adobe XD** junto a un equipo de especialistas en UX para asegurar que tu marca proyecte el valor que realmente tiene.
              </p>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-10 py-5 bg-zinc-950 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
              >
                Agendar Mi Diseño Pro
              </a>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-zinc-100 rounded-[3rem] -z-10 group-hover:bg-zinc-200/50 transition-colors" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                <Image 
                   src="/adobe_xd_hero_new.png"
                  alt="Adobe XD to Shopify Workflow"
                  width={1000}
                  height={1000}
                  priority
                  quality={85}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Bridge: XD to Liquid */}
        <section className="bg-zinc-950 text-white py-32 rounded-[4rem] lg:rounded-[6rem] mx-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">El Puente entre <br/>Arte y Tecnología</h2>
                <p className="text-zinc-400 text-lg">Nuestro flujo de trabajo elimina la incertidumbre. El diseño que apruebas en Adobe XD es exactamente el que verás funcionando en Shopify.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { step: '01', title: 'Conceptualización en XD', desc: 'Diseñamos cada pantalla pensando en la psicología del comprador, creando prototipos navegables antes de programar.' },
                  { step: '02', title: 'Desarrollo Liquid Pro', desc: 'Codificamos tu diseño a mano usando el motor Liquid de Shopify, sin apps pesadas que ralenticen tu sitio.' },
                  { step: '03', title: 'Secciones Editables', desc: 'Te entregamos un panel "Drag & Drop" personalizado para que puedas cambiar banners y textos sin saber código.' }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-10 bg-zinc-900/50 border border-white/5 rounded-3xl group hover:border-zinc-700 transition-all">
                    <span className="text-6xl font-black text-white/5 absolute top-4 right-8 group-hover:text-white/10 transition-colors">{item.step}</span>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={shopifyFaqs}
          title="Diseño Shopify & XD"
          description="Resolvemos tus dudas sobre cómo el diseño personalizado puede cambiar el rumbo de tu negocio."
          ctaTitle="¿Creamos una tienda que realmente destaque?"
          ctaDescription="Agenda una breve llamada para mostrarte ejemplos de prototipos en XD y cómo los convertimos en ventas."
        />

        {/* UX Specialists Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8 text-center border-t border-zinc-100">
           <div className="inline-block px-12 py-12 bg-zinc-50 rounded-[4rem] border border-zinc-100">
              <h3 className="text-3xl font-bold mb-6 text-zinc-900">Un equipo de diseñadores a tu servicio</h3>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                En Webunica no solo somos programadores. Colaboramos con expertos en **UX/UI Design** para optimizar la navegación de tu tienda, reducir el abandono de carrito y elevar el valor percibido de tus productos.
              </p>
              <div className="flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-black">📐</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Pixel Perfect</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-black">⚡</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Optimized UX</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2 text-black">💎</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Unique UI</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Call to Action */}
        <section className="py-32">
           <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-5xl font-extrabold mb-10 text-zinc-900">¿Tu marca merece <br/><span className="text-zinc-400 uppercase tracking-tighter">lo extraordinario?</span></h2>
              <p className="text-xl text-zinc-500 mb-12 italic font-serif">Proyecta la imagen de las grandes marcas internacionales con un diseño 100% propietario.</p>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-12 py-6 bg-zinc-950 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
              >
                Quiero mi Diseño en Adobe XD
              </a>
           </div>
        </section>
      </main>
    </div>
  );
}
