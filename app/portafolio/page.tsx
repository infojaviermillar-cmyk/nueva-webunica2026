"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', 'Shopify', 'Migración', 'SaaS', 'PYMES', 'LMS'];

  const projects = [
    {
      title: "Oh My Skin",
      category: "Shopify",
      description: "Tienda online de cuidado de la piel y cosmética profesional en Chile, con diseño responsivo, navegación fluida y experiencia de marca refinada.",
      image: "https://api.microlink.io/?url=https://www.ohmyskinchile.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://www.ohmyskinchile.cl/",
      tags: ["Skincare", "Cosmética", "Shopify"]
    },
    {
      title: "Activos en Red",
      category: "SaaS",
      description: "Portal inmobiliario avanzado con filtros dinámicos, gestión de propiedades y diseño profesional.",
      image: "https://api.microlink.io/?url=https://activosenred.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://activosenred.cl/",
      tags: ["Inmobiliaria", "PropTech"]
    },
    {
      title: "BodyMuscle",
      category: "Shopify",
      description: "Tienda online de suplementación deportiva (en desarrollo), enfocada en alto rendimiento y conversiones.",
      image: "https://api.microlink.io/?url=https://bodymuscle-89.myshopify.com&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://bodymuscle-89.myshopify.com/",
      tags: ["En Desarrollo", "Deportes"]
    },
    {
      title: "Academia Ctalentos",
      category: "LMS",
      description: "Academia con tutor LMS, creado de acuerdo al diseño UX/UI solicitado por cliente.",
      image: "https://api.microlink.io/?url=https://academia.ctalentos.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://academia.ctalentos.cl/",
      tags: ["LMS", "Educación", "UX/UI"]
    },
    {
      title: "Vicca.cl",
      category: "Migración",
      description: "Migración completa de Magento a Shopify vía API. Traspaso íntegro de catálogo, clientes, historial de pedidos y configuraciones sin perder datos ni tiempo de operación.",
      image: "https://api.microlink.io/?url=https://vicca.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://vicca.cl/",
      tags: ["Migración", "Magento → Shopify", "API", "Ecommerce"]
    },
    {
      title: "Tecno-Mobile",
      category: "Shopify",
      description: "Catálogo tecnológico con look comercial claro, navegación rápida y enfoque en productos destacados.",
      image: "https://api.microlink.io/?url=https://tecno-mobile.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://tecno-mobile.cl/",
      tags: ["Tecnología", "Gadgets"]
    },
    {
      title: "Tuupos",
      category: "Shopify",
      description: "Proyecto Shopify con identidad propia, buena legibilidad y composición de bloques moderna.",
      image: "https://api.microlink.io/?url=https://tuupos.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://tuupos.cl/",
      tags: ["General Store", "Dropshipping"]
    },
    {
      title: "Terra Andes",
      category: "Shopify",
      description: "Proyecto con estética más corporativa y vitrina visual enfocada en credibilidad y presentación.",
      image: "https://api.microlink.io/?url=https://terraandesplus.com&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://terraandesplus.com/",
      tags: ["Alimentos", "Exportación"]
    },
    {
      title: "Chiletronics",
      category: "Shopify",
      description: "Tienda tecnológica con estructura orientada a variedad de productos y lectura rápida del catálogo.",
      image: "https://api.microlink.io/?url=https://chiletronics.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://chiletronics.cl/",
      tags: ["Electrónica", "Retail"]
    },
    {
      title: "Canine Fight",
      category: "Shopify",
      description: "Tienda Shopify de alto rendimiento para artículos deportivos y artes marciales. Una plataforma robusta diseñada para la comunidad de combate y entrenamiento intenso.",
      image: "https://api.microlink.io/?url=https://caninefight.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://caninefight.cl/",
      tags: ["Artes Marciales", "Deportes", "Equipamiento"]
    },
    {
      title: "SoloCasasChile.com",
      category: "SaaS",
      description: "Plataforma SaaS de gestión inmobiliaria con seguimiento de obra en tiempo real e integración de CRM.",
      image: "/publi-solocasas.png",
      link: "https://solocasaschile.com",
      tags: ["Next.js", "SaaS", "PropTech"]
    },
    {
      title: "Pymee.org",
      category: "SaaS",
      description: "Plataforma SaaS de gestión empresarial para PYMES. Herramientas digitales integradas para optimizar operaciones y escalar negocios en Latinoamérica.",
      image: "https://api.microlink.io/?url=https://pymee.org&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://pymee.org/",
      tags: ["SaaS", "PYMES", "Gestión"]
    },
    {
      title: "Kinelawen",
      category: "Shopify",
      description: "Tienda Shopify con identidad limpia, navegación moderna y foco en experiencia de marca.",
      image: "https://api.microlink.io/?url=https://www.kinelawen.com&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://www.kinelawen.com/",
      tags: ["Salud", "Branding"]
    },
    {
      title: "SpinMedical",
      category: "Shopify",
      description: "Proyecto ecommerce con estructura profesional, catálogo claro y presentación visual de confianza.",
      image: "https://api.microlink.io/?url=https://spinmedical.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://spinmedical.cl/",
      tags: ["Insumos Médicos", "B2C"]
    },
    {
      title: "Librería Bazarte",
      category: "Shopify",
      description: "Ecommerce visualmente atractivo, preparado para exhibir productos y facilitar exploración por colecciones.",
      image: "https://api.microlink.io/?url=https://libreriabazarte.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://libreriabazarte.cl/",
      tags: ["Retail", "Diseño"]
    },
    {
      title: "Altavista Chile",
      category: "Shopify",
      description: "Tienda de look robusto, con enfoque en navegación eficiente y presencia visual consistente.",
      image: "https://api.microlink.io/?url=https://altavistachile.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://altavistachile.cl/",
      tags: ["Outdoor", "Shopify"]
    },
    {
      title: "Recovery Zone",
      category: "Shopify",
      description: "Proyecto Shopify con diseño orientado a conversión y fichas de producto con buena lectura visual.",
      image: "https://api.microlink.io/?url=https://recoveryzone.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://recoveryzone.cl/",
      tags: ["Deportes", "Conversión"]
    },
    {
      title: "Only Jeep",
      category: "Shopify",
      description: "Tienda con carácter de nicho, buena jerarquía de colecciones y estética alineada al rubro automotor.",
      image: "https://api.microlink.io/?url=https://www.onlyjeep.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://www.onlyjeep.cl/",
      tags: ["Automotriz", "Repuestos"]
    },
    {
      title: "EvertSport",
      category: "Shopify",
      description: "Diseño deportivo, moderno y preparado para destacar colecciones, ofertas y llamados a la acción.",
      image: "https://api.microlink.io/?url=https://eversport.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://eversport.cl/",
      tags: ["Sportswear", "Fashion"]
    },
    {
      title: "AntarctiCare",
      category: "Shopify",
      description: "Ecommerce con branding más refinado, visual pulido y una presentación clara del catálogo.",
      image: "https://api.microlink.io/?url=https://antarcticare.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://antarcticare.cl/",
      tags: ["Premium", "Skincare"]
    },
    {
      title: "Divan Tienda",
      category: "Shopify",
      description: "Proyecto con estilo comercial elegante, pensado para destacar productos y mantener orden visual.",
      image: "https://api.microlink.io/?url=https://divantienda.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://divantienda.cl/",
      tags: ["Muebles", "Interiorismo"]
    },
    {
      title: "PHY Waters",
      category: "Shopify",
      description: "Marca con enfoque visual fuerte, experiencia simple y espacio claro para beneficios de producto.",
      image: "https://api.microlink.io/?url=https://phywaters.com&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://phywaters.com/",
      tags: ["Bienestar", "Ventas"]
    },
    {
      title: "Anteros",
      category: "Shopify",
      description: "Tienda enfocada en visual limpio, presencia de marca y una experiencia de exploración ordenada.",
      image: "https://api.microlink.io/?url=https://tienda.anteros.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://tienda.anteros.cl/",
      tags: ["Branding", "Ventas"]
    },
    {
      title: "Serch",
      category: "Shopify",
      description: "Diseño actual, orden visual sólido y estructura preparada para campañas y catálogo online.",
      image: "https://api.microlink.io/?url=https://www.serch.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://www.serch.cl/",
      tags: ["Moda", "Accesorios"]
    },
    {
      title: "Sonnda",
      category: "Shopify",
      description: "Tienda con enfoque comercial, categorías claras y presentación robusta para productos técnicos.",
      image: "https://api.microlink.io/?url=https://sonnda.cl&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://sonnda.cl/",
      tags: ["Técnico", "B2B"]
    },
    {
      title: "Fcastro.cl",
      category: "Shopify",
      description: "Nueva tienda Shopify en proceso, enfocada en categorías como sillas, mesas, escaleras, hogar y cocina.",
      image: "https://api.microlink.io/?url=https://fcastrocl.myshopify.com&screenshot=true&meta=false&embed=screenshot.url?w=1400",
      link: "https://fcastrocl.myshopify.com/",
      tags: ["En Desarrollo", "Hogar"]
    }
  ];

  const filteredProjects = activeCategory === 'Todas' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <div className="pt-[20vh] pb-20">
        <section className="relative px-6 py-20 lg:pb-48 overflow-hidden bg-zinc-950 text-white rounded-b-[4rem] lg:rounded-b-[6rem]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              PORTAFOLIO <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-emerald-400 font-serif italic lowercase font-light">de Éxito</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Transformamos marcas a través de ingeniería web de élite. Explora cómo hemos impulsado a más de 50 empresas en Chile y el mundo.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25 scale-105' : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-2xl"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className={`px-4 py-1.5 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 ${project.category === 'Migración' ? 'bg-amber-500/90' : 'bg-violet-600/90'}`}>
                      {project.category === 'Migración' ? '⚡ Migración' : project.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags?.map(tag => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${project.category === 'Migración' ? 'text-amber-600 bg-amber-50 border-amber-100' : 'text-violet-600 bg-violet-50 border-violet-100'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-black tracking-tighter leading-none mb-4 uppercase text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors uppercase tracking-widest">Explorar proyecto</span>
                    <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all transform group-hover:translate-x-2 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-32 max-w-4xl mx-auto px-6 text-center py-20 bg-zinc-50 rounded-[4rem] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-3xl rounded-full" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full" />
           <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase relative z-10">
              ¿Listo para ser nuestro próximo <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-emerald-600">Caso de Éxito?</span>
           </h2>
           <p className="text-lg text-zinc-500 mb-12 max-w-xl mx-auto font-light leading-relaxed relative z-10">
              No importa si eres una gran marca o una PYME con ambición. Tenemos la ingeniería necesaria para escalar tus resultados.
           </p>
           <LeadButton 
            className="inline-block px-12 py-6 bg-violet-600 text-white font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-xl shadow-violet-500/20 uppercase tracking-tighter relative z-10"
           >
              Agendar mi Evaluación Gratuita
           </LeadButton>
        </section>
      </div>
    </div>
  );
}
