"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', 'Shopify', 'Inmobiliaria', 'SaaS', 'PYMES'];

  const projects = [
    {
      title: "SoloCasasChile.com",
      category: "Inmobiliaria",
      description: "Plataforma SaaS de gestión inmobiliaria con seguimiento de obra en tiempo real e integración de CRM.",
      image: "/featured_solocasachile_tech.png",
      link: "https://solocasaschile.com",
      tags: ["Next.js", "SaaS", "PropTech"],
      featured: true
    },
    {
      title: "Kinelawen",
      category: "Shopify",
      description: "Tienda Shopify con identidad limpia, navegación moderna y foco en experiencia de marca.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kinelawen.com%2F?w=1200",
      link: "https://www.kinelawen.com/",
      tags: ["Salud", "Branding"]
    },
    {
      title: "SpinMedical",
      category: "Shopify",
      description: "Proyecto ecommerce con estructura profesional, catálogo claro y presentación visual de confianza.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200",
      link: "https://spinmedical.cl/",
      tags: ["Insumos Médicos", "B2C"]
    },
    {
      title: "Librería Bazarte",
      category: "Shopify",
      description: "Ecommerce visualmente atractivo, preparado para exhibir productos y facilitar exploración por colecciones.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flibreriabazarte.cl%2F?w=1200",
      link: "https://libreriabazarte.cl/",
      tags: ["Retail", "Diseño"]
    },
    {
      title: "Altavista Chile",
      category: "Shopify",
      description: "Tienda de look robusto, con enfoque en navegación eficiente y presencia visual consistente.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Faltavistachile.cl%2F?w=1200",
      link: "https://altavistachile.cl/",
      tags: ["Outdoor", "Shopify"]
    },
    {
      title: "Recovery Zone",
      category: "Shopify",
      description: "Proyecto Shopify con diseño orientado a conversión y fichas de producto con buena lectura visual.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Frecoveryzone.cl%2F?w=1200",
      link: "https://recoveryzone.cl/",
      tags: ["Deportes", "Conversión"]
    },
    {
      title: "Only Jeep",
      category: "Shopify",
      description: "Tienda con carácter de nicho, buena jerarquía de colecciones y estética alineada al rubro automotor.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.onlyjeep.cl%2F?w=1200",
      link: "https://www.onlyjeep.cl/",
      tags: ["Automotriz", "Repuestos"]
    },
    {
      title: "EvertSport",
      category: "Shopify",
      description: "Diseño deportivo, moderno y preparado para destacar colecciones, ofertas y llamados a la acción.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Feversport.cl%2F?w=1200",
      link: "https://eversport.cl/",
      tags: ["Sportswear", "Fashion"]
    },
    {
      title: "AntarctiCare",
      category: "Shopify",
      description: "Ecommerce con branding más refinado, visual pulido y una presentación clara del catálogo.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fantarcticare.cl%2F?w=1200",
      link: "https://antarcticare.cl/",
      tags: ["Premium", "Skincare"]
    },
    {
      title: "Divan Tienda",
      category: "Shopify",
      description: "Proyecto con estilo comercial elegante, pensado para destacar productos y mantener orden visual.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdivantienda.cl%2F?w=1200",
      link: "https://divantienda.cl/",
      tags: ["Muebles", "Interiorismo"]
    },
    {
      title: "Chiletronics",
      category: "Shopify",
      description: "Tienda tecnológica con estructura orientada a variedad de productos y lectura rápida del catálogo.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchiletronics.cl%2F?w=1200",
      link: "https://chiletronics.cl/",
      tags: ["Electrónica", "Retail"]
    },
    {
      title: "PHY Waters",
      category: "Shopify",
      description: "Marca con enfoque visual fuerte, experiencia simple y espacio claro para beneficios de producto.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fphywaters.com%2F?w=1200",
      link: "https://phywaters.com/",
      tags: ["Bienestar", "Ventas"]
    },
    {
      title: "Tecno-Mobile",
      category: "Shopify",
      description: "Catálogo tecnológico con look comercial claro, navegación rápida y enfoque en productos destacados.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftecno-mobile.cl%2F?w=1200",
      link: "https://tecno-mobile.cl/",
      tags: ["Tecnología", "Gadgets"]
    },
    {
      title: "Tuupos",
      category: "Shopify",
      description: "Proyecto Shopify con identidad propia, buena legibilidad y composición de bloques moderna.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftuupos.cl%2F?w=1200",
      link: "https://tuupos.cl/",
      tags: ["General Store", "Dropshipping"]
    },
    {
      title: "Anteros",
      category: "Shopify",
      description: "Tienda enfocada en visual limpio, presencia de marca y una experiencia de exploración ordenada.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftienda.anteros.cl%2F?w=1200",
      link: "https://tienda.anteros.cl/",
      tags: ["Branding", "Ventas"]
    },
    {
      title: "Terra Andes",
      category: "Shopify",
      description: "Proyecto con estética más corporativa y vitrina visual enfocada en credibilidad y presentación.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fterraandesplus.com%2F?w=1200",
      link: "https://terraandesplus.com/",
      tags: ["Alimentos", "Exportación"]
    },
    {
      title: "Serch",
      category: "Shopify",
      description: "Diseño actual, orden visual sólido y estructura preparada para campañas y catálogo online.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.serch.cl%2F?w=1200",
      link: "https://www.serch.cl/",
      tags: ["Moda", "Accesorios"]
    },
    {
      title: "Sonnda",
      category: "Shopify",
      description: "Tienda con enfoque comercial, categorías claras y presentación robusta para productos técnicos.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsonnda.cl%2F?w=1200",
      link: "https://sonnda.cl/",
      tags: ["Técnico", "B2B"]
    },
    {
      title: "Fcastro.cl",
      category: "Shopify",
      description: "Nueva tienda Shopify en proceso, enfocada en categorías como sillas, mesas, escaleras, hogar y cocina.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffcastrocl.myshopify.com%2F?w=1400",
      link: "https://fcastrocl.myshopify.com/",
      tags: ["En Desarrollo", "Hogar"]
    }
  ];

  const filteredProjects = activeCategory === 'Todas' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <main className="pt-32 pb-20">
        <section className="relative px-6 py-20 lg:pt-32 lg:pb-48 overflow-hidden bg-zinc-950 text-white rounded-b-[4rem] lg:rounded-b-[6rem]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full -z-10" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl lg:text-9xl font-black tracking-tighter leading-none mb-8 uppercase">
              PORTAFOLIO <br/><span className="text-zinc-500 font-serif italic lowercase font-light">de Éxito</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Transformamos marcas a través de ingeniería web de élite. Explora cómo hemos impulsado a más de 50 empresas en Chile y el mundo.
            </p>
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <Image 
                    src="/portfolio_showcase_premium_1776268133984.png"
                    alt="Webunica Portfolio Showcase"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-zinc-900 text-white shadow-xl scale-105' : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-2xl ${project.featured ? 'lg:col-span-2 lg:flex-row' : ''}`}
              >
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2 h-[400px] lg:h-auto' : 'aspect-[16/10]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-1.5 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className={`p-10 flex flex-col justify-between ${project.featured ? 'lg:w-1/2' : 'flex-grow'}`}>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags?.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-200 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`font-black tracking-tighter leading-none mb-4 uppercase ${project.featured ? 'text-4xl lg:text-5xl' : 'text-3xl'}`}>
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors uppercase tracking-widest">Explorar proyecto</span>
                    <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all transform group-hover:translate-x-2">
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

        <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-extrabold mb-8 tracking-tight">¿Listo para ser nuestro próximo <br/><span className="text-emerald-600">Caso de Éxito?</span></h2>
           <p className="text-lg text-zinc-500 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              No importa si eres una gran marca o una PYME con ambición. Tenemos la ingeniería necesaria para escalar tus resultados.
           </p>
           <a 
            href="https://calendly.com/javiermillar/reunion-webunica" 
            target="_blank"
            className="inline-block px-12 py-6 bg-zinc-950 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-xl"
           >
              Agendar mi Evaluación Gratuita
           </a>
        </section>
      </main>
    </div>
  );
}
