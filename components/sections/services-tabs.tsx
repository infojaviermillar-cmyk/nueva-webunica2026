"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Building2, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

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

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(serviceData[0]);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 rounded-full border border-violet-100">
             <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-black tracking-widest text-violet-600 uppercase">Ecosistema de Soluciones</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.9] mb-8">
            Nuestros centros de <br/><span className="text-violet-600 italic font-serif lowercase font-light">Ingeniería</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed">
            Estrategias digitales de alto rendimiento para cada etapa de tu negocio. Desde el lanzamiento hasta el dominio total de tu nicho.
          </p>
        </div>

        {/* Interactive Tabs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Menu (Tabs) */}
          <div className="lg:col-span-4 space-y-4">
            {serviceData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`w-full p-8 rounded-[2.5rem] text-left transition-all duration-500 group relative flex items-center gap-6 ${
                  activeTab.id === service.id 
                  ? 'bg-zinc-950 text-white shadow-2xl shadow-zinc-950/20' 
                  : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                  activeTab.id === service.id ? 'bg-violet-600 text-white' : 'bg-zinc-200 text-zinc-500 group-hover:bg-violet-100 group-hover:text-violet-600'
                }`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-black uppercase tracking-tight transition-colors duration-500 ${
                    activeTab.id === service.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-950'
                  }`}>
                    {service.menuTitle}
                  </h3>
                  <div className={`h-1 bg-violet-600 transition-all duration-500 rounded-full mt-1 ${
                    activeTab.id === service.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}></div>
                </div>
                {activeTab.id === service.id && (
                  <ArrowRight className="w-5 h-5 ml-auto text-violet-400" />
                )}
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-zinc-50 rounded-[4rem] p-10 lg:p-16 border border-zinc-100 transition-all duration-700 animate-in fade-in slide-in-from-right-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div>
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

                {/* Visual Content */}
                <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                  <Image 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
