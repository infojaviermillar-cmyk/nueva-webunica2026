import { use } from 'react';
import CityPageClient from '@/components/sections/city-page-client';
import { Metadata } from 'next';

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

type Params = Promise<{ city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const data = citiesData[city];
  
  if (!data) return { title: 'Diseño Web en Chile' };
  
  return {
    title: data.title,
    description: data.desc,
    keywords: data.keywords.join(', ')
  };
}

export default function CityPage({ params }: { params: Params }) {
  const { city } = use(params);
  const data = citiesData[city];

  if (!data) return null;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <main className="pt-[20vh] pb-20">
        <CityPageClient data={data} />
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
