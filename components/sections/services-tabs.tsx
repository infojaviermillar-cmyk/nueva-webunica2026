"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Building2, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import { motion, AnimatePresence } from 'framer-motion';

const serviceData = [
  {
    id: 'shopify',
    menuTitle: 'Tiendas Shopify',
    title: 'Desarrollo Shopify de Élite',
    description: 'Somos expertos en transformar marcas en líderes del eCommerce. No solo diseñamos tiendas bonitas; creamos máquinas de venta optimizadas con integraciones locales (Flow, Mercado Pago) y automatización de envíos para el mercado chileno.',
    features: [
      'Optimización de Conversión (CRO)',
      'Integración con Pasarelas Chilenas',
      'Automatización Starken/BlueExpress',
      'Configuración de Pixel y Eventos Ads'
    ],
    image: '/tab-shopify.png',
    link: '/desarrollo-tiendas-shopify-en-chile',
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    id: 'pymes',
    menuTitle: 'Páginas PYMES',
    title: 'Sitios Web de Alto Impacto',
    description: 'La presencia digital de tu PYME debe proyectar confianza y autoridad inmediata. Diseñamos sitios web profesionales, rápidos y 100% autogestionables, pensados para captar clientes desde el primer día en Google.',
    features: [
      'Diseño 100% Personalizado',
      'Optimización para Celulares',
      'SEO Técnico Estructurado',
      'Botones de WhatsApp y CRM'
    ],
    image: '/tab-pymes.png',
    link: '/desarrollo-paginas-web-pymes-chile',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'saas',
    menuTitle: 'SaaS & Software',
    title: 'Ingeniería Web a Medida',
    description: 'Cuando las soluciones estándar no bastan, construimos software a medida. Utilizamos el stack más moderno del mundo (Next.js + Supabase) para crear aplicaciones escalables, seguras y con una experiencia de usuario insuperable.',
    features: [
      'Desarrollo Next.js 16 Pro',
      'Bases de Datos en Tiempo Real',
      'Arquitectura Serverless',
      'Paneles de Administración Custom'
    ],
    image: '/tab-saas.png',
    link: '/desarrollo-web-nextjs-saas-custom',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 'seo',
    menuTitle: 'SEO & Embudos',
    title: 'Dominio en Google y ROI',
    description: 'No vendemos visitas, vendemos resultados. Nuestra ingeniería de contenidos y diseño de embudos (funnels) de venta están diseñados para posicionar tu marca sobre la competencia y maximizar el retorno de cada peso invertido en marketing.',
    features: [
      'Análisis de Keywords Estratégico',
      'Ingeniería de Contenidos SEO',
      'Diseño de Funnels de Venta',
      'Consultoría de Crecimiento (Growth)'
    ],
    image: '/tab-pymes.png', // Reuse or add another
    link: '/servicios-seo-posicionamiento-google',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const shopifyProjects = [
  {
    title: 'Aetheria Jewelry',
    category: 'Joyería de Lujo',
    image: '/tab-shopify.png',
    description: 'Tienda de alta gama con optimización de conversión y diseño minimalista.'
  },
  {
    title: 'Actusama',
    category: 'Moda & Estilo',
    image: '/tab-pymes.png', // Temporary placeholder, will improve
    description: 'E-commerce escalable con integración de pagos y logística automatizada.'
  },
  {
    title: 'FreshCart',
    category: 'Alimentos & Bebidas',
    image: '/tab-saas.png', // Temporary placeholder
    description: 'Plataforma de grocery store con carga ultra rápida y experiencia móvil superior.'
  }
];

function TabContent({ activeTab }: { activeTab: typeof serviceData[0] }) {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-play for the carousel (only for shopify for now)
  React.useEffect(() => {
    if (activeTab.id !== 'shopify') return;
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % shopifyProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTab.id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Text Content */}
      <div className="order-2 md:order-1">
        <h3 className="text-3xl lg:text-4xl font-black text-zinc-950 uppercase tracking-tighter leading-none mb-8">
          {activeTab.title}
        </h3>
        <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10">
          {activeTab.description}
        </p>
        
        <ul className="space-y-4 mb-12">
          {activeTab.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-xs font-bold text-zinc-700 uppercase tracking-wide">
              <CheckCircle2 className="w-5 h-5 text-violet-600" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
           <LeadButton className="px-10 py-5 bg-zinc-950 text-white font-black rounded-2xl hover:bg-violet-600 transition-all shadow-xl uppercase tracking-widest text-[10px]">
              Consultar Servicio
           </LeadButton>
           <Link 
             href={activeTab.link}
             className="px-10 py-5 border border-zinc-200 text-zinc-950 font-black rounded-2xl hover:bg-white transition-all uppercase tracking-widest text-[10px] text-center"
           >
              Ver Detalles
           </Link>
        </div>
      </div>

      {/* Visual Content - Carousel for Shopify, static for others */}
      <div className="order-1 md:order-2">
        <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group bg-zinc-100">
          <AnimatePresence mode="wait">
            {activeTab.id === 'shopify' ? (
              <motion.div
                key={shopifyProjects[currentProject].title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image 
                  src={shopifyProjects[currentProject].image} 
                  alt={shopifyProjects[currentProject].title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-violet-600 text-[9px] font-black uppercase rounded-full tracking-widest">
                      {shopifyProjects[currentProject].category}
                    </span>
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-2">
                    {shopifyProjects[currentProject].title}
                  </h4>
                  <p className="text-xs text-zinc-300 font-light line-clamp-1">
                    {shopifyProjects[currentProject].description}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <Image 
                  src={activeTab.image} 
                  alt={activeTab.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Carousel Indicators for Shopify */}
          {activeTab.id === 'shopify' && (
            <div className="absolute top-8 right-8 flex gap-2">
              {shopifyProjects.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentProject ? 'w-8 bg-white' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(serviceData[0]);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="servicios">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-violet-50 rounded-full border border-violet-100">
               <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black tracking-widest text-violet-600 uppercase">Ecosistema de Soluciones</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.95] mb-8">
              Centros de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 italic font-serif lowercase font-normal">Ingeniería Web</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
              Estrategias digitales de alto rendimiento para cada etapa de tu negocio. Desde el lanzamiento hasta el dominio total de tu nicho.
            </p>
          </motion.div>
        </div>

        {/* Interactive Tabs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Menu (Tabs) - Cleaner & Slimmer */}
          <div className="lg:col-span-3 space-y-2 relative">
            {/* Vertical Indicator Bar for Desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-[2px] h-full bg-zinc-100 rounded-full" />
            
            {serviceData.map((service) => (
              <div key={service.id} className="relative">
                <button
                  onClick={() => setActiveTab(service)}
                  className={`w-full px-6 py-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group relative ${
                    activeTab.id === service.id 
                    ? 'bg-violet-50 text-violet-700' 
                    : 'bg-transparent text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {activeTab.id === service.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-violet-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeTab.id === service.id ? 'bg-white shadow-sm text-violet-600' : 'bg-zinc-50 text-zinc-400 group-hover:bg-white group-hover:text-zinc-600'
                  }`}>
                    {React.cloneElement(service.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  </div>
                  
                  <span className={`text-sm font-black uppercase tracking-wider transition-colors duration-300 ${
                    activeTab.id === service.id ? 'text-violet-900' : 'text-zinc-500'
                  }`}>
                    {service.menuTitle}
                  </span>
                </button>

                {/* Mobile Content Accordion */}
                <div className="lg:hidden">
                  <AnimatePresence initial={false}>
                    {activeTab.id === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="py-6">
                          <div className="bg-zinc-50/50 rounded-[2.5rem] p-6 border border-zinc-100">
                             <TabContent activeTab={service} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content Area (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-9">
            <div className="bg-zinc-50/30 rounded-[3.5rem] p-12 lg:p-16 border border-zinc-100/50 relative overflow-hidden backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <TabContent activeTab={activeTab} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

