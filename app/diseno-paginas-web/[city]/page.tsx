"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/ui/contact-modal';

// Diccionario de ciudades para SEO Local
const citiesData: Record<string, { 
  name: string, 
  title: string, 
  desc: string,
  keywords: string[] 
}> = {
  'punta-arenas': {
    name: 'Punta Arenas',
    title: 'Diseño de Páginas Web en Punta Arenas',
    desc: 'Llevamos la ingeniería web de élite al extremo sur. Creamos tiendas en línea y sitios corporativos que dominan el mercado de Magallanes.',
    keywords: ['Shopify Punta Arenas', 'WordPress Magallanes', 'WooCommerce']
  },
  'ancud': {
    name: 'Ancud',
    title: 'Desarrollo Web y Tiendas Online en Ancud',
    desc: 'Conectamos a las empresas de Chiloé con el mundo a través de diseños web modernos y plataformas e-commerce de alto rendimiento.',
    keywords: ['Diseño Web Ancud', 'Vender online Chiloé', 'Shopify']
  },
  'puerto-montt': {
    name: 'Puerto Montt',
    title: 'Agencia de Diseño Web en Puerto Montt',
    desc: 'Potenciamos el crecimiento de la capital de Los Lagos con sitios web Next.js y tiendas Shopify optimizadas para conversión.',
    keywords: ['Páginas Web Puerto Montt', 'Ecommerce Los Lagos', 'Google Ads']
  },
  'osorno': {
    name: 'Osorno',
    title: 'Diseño y Desarrollo de Páginas Web en Osorno',
    desc: 'Soluciones digitales robustas para el sector agrícola y comercial de Osorno. Especialistas en WordPress y Shopify.',
    keywords: ['Diseño Web Osorno', 'Tiendas Online Osorno', 'WooCommerce']
  },
  'valdivia': {
    name: 'Valdivia',
    title: 'Diseño Web en Valdivia | Experiencia Digital de Élite',
    desc: 'Innovación y diseño boutique en la ciudad de los ríos. Creamos plataformas SaaS y sitios web que destacan por su velocidad.',
    keywords: ['Páginas Web Valdivia', 'Shopify Valdivia', 'Next.js']
  },
  'temuco': {
    name: 'Temuco',
    title: 'Diseño de Páginas Web y Tiendas Online en Temuco',
    desc: 'Líderes en transformación digital en la Araucanía. Implementamos e-commerce avanzados con WooCommerce y Shopify.',
    keywords: ['Diseño Web Temuco', 'Shopify Temuco', 'Agencia Digital']
  },
  'concepcion': {
    name: 'Concepción',
    title: 'Agencia de Diseño Web en Concepción y el Biobío',
    desc: 'Ingeniería web de alto impacto para la región del Biobío. Sitios web a medida que cargan en menos de 1 segundo.',
    keywords: ['Páginas Web Concepción', 'Ecommerce Biobío', 'Shopify Experts']
  },
  'rancagua': {
    name: 'Rancagua',
    title: 'Diseño Web en Rancagua | Soluciones Digitales Pro',
    desc: 'Impulsamos marcas en la región de O\'Higgins con estrategias de diseño web y posicionamiento SEO local avanzado.',
    keywords: ['Diseño Web Rancagua', 'Tiendas Online Rancagua', 'WordPress']
  },
  'santiago': {
    name: 'Santiago',
    title: 'Diseño Web en Santiago | Ingeniería y E-commerce',
    desc: 'La capital demanda estándares de élite. Desarrollamos plataformas SaaS, CRM y tiendas Shopify con foco en resultados.',
    keywords: ['Páginas Web Santiago', 'Agencia Shopify Chile', 'Next.js']
  },
  'la-serena': {
    name: 'La Serena',
    title: 'Diseño de Páginas Web en La Serena y Coquimbo',
    desc: 'Diseño moderno y elegante para la cuarta región. Especialistas en posicionamiento en Google y tiendas WooCommerce.',
    keywords: ['Diseño Web La Serena', 'Tiendas Online Coquimbo', 'SEO']
  },
  'antofagasta': {
    name: 'Antofagasta',
    title: 'Diseño Web en Antofagasta | Potencia el Norte',
    desc: 'Digitalizamos el sector industrial y comercial del norte grande con sitios web de alto rendimiento y seguridad.',
    keywords: ['Páginas Web Antofagasta', 'Shopify Norte de Chile', 'SaaS']
  },
  'iquique': {
    name: 'Iquique',
    title: 'Diseño Web y E-commerce en Iquique',
    desc: 'Transformamos tu negocio en Tarapacá con plataformas de venta online optimizadas y diseño web estratégico.',
    keywords: ['Diseño Web Iquique', 'Tiendas Online Iquique', 'WooCommerce']
  }
};

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = use(params);
  const data = citiesData[city];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        city={data.name} 
      />

      <main className="pt-32 pb-20">
        {/* White Corporate Hero */}
        <section className="relative px-6 py-20 lg:py-40 bg-zinc-50 border-b border-zinc-100">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-700">Webunica | Presencia Local</span>
            </div>
            <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-950 uppercase max-w-5xl mx-auto">
              {data.title}
            </h1>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {data.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95"
              >
                Cotización Gratis
              </button>
              <Link 
                href="/portafolio"
                className="px-12 py-6 bg-white text-zinc-900 border border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-zinc-50 transition-all"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Text Content - Natural Style */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none">
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 mb-12 uppercase">
              Potenciamos el mercado digital de <span className="text-violet-600">{data.name}</span>
            </h2>
            
            <div className="space-y-8 text-zinc-500 font-light leading-relaxed">
              <p>
                En el escenario competitivo actual de <strong>{data.name}</strong>, contar con una página web estática ya no es suficiente. Las empresas modernas necesitan herramientas de venta dinámicas que no solo carguen rápido, sino que estén optimizadas para los algoritmos de búsqueda más exigentes de Google.
              </p>
              
              <p>
                Como especialistas en <strong>Diseño Web</strong> de alto nivel, implementamos soluciones robustas utilizando plataformas líderes como <strong>Shopify</strong> para e-commerce avanzado, <strong>WooCommerce</strong> para tiendas integradas en WordPress y desarrollos a medida en <strong>Next.js</strong> para quienes buscan una experiencia SaaS personalizada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ Tiendas con Shopify</h3>
                  <p className="text-sm">Configuración experta de canales de venta, pagos locales y optimización de conversión para marcas en {data.name}.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ WordPress & WooCommerce</h3>
                  <p className="text-sm">Estructuras autogestionables, seguras y preparadas para el crecimiento de tu inventario online.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ Diseño Estratégico</h3>
                  <p className="text-sm">UI/UX boutique que prioriza la experiencia del usuario local, aumentando la confianza y el retorno de inversión.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ SEO de Ingeniería</h3>
                  <p className="text-sm">Arquitectura de datos avanzada para que tu marca en {data.name} sea la primera opción en los resultados orgánicos.</p>
                </div>
              </div>

              <p>
                Nuestro enfoque en <strong>{data.name}</strong> se basa en la ingeniería de crecimiento. No solo "hacemos páginas"; construimos activos digitales que generan confianza desde el primer clic. Ya sea que necesites una landing page informativa o un sistema e-commerce complejo, nuestro equipo está preparado para llevar tu visión técnica al siguiente nivel.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-zinc-100 text-center">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">¿Listo para dominar Google en {data.name}?</h3>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-6 bg-zinc-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all shadow-2xl"
              >
                Iniciar Proyecto Gratis
              </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// Generación estática de las 12 ciudades para SEO inmediato
export async function generateStaticParams() {
  return [
    { city: 'punta-arenas' },
    { city: 'ancud' },
    { city: 'puerto-montt' },
    { city: 'osorno' },
    { city: 'valdivia' },
    { city: 'temuco' },
    { city: 'concepcion' },
    { city: 'rancagua' },
    { city: 'santiago' },
    { city: 'la-serena' },
    { city: 'antofagasta' },
    { city: 'iquique' }
  ];
}
