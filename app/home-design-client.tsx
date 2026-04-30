"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Monitor, Code2, Rocket, Globe, Zap, Heart, Trophy, Users } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import { BlogPost } from '@/lib/blog';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import TestimonialsSection from '@/components/sections/testimonials';

export default function HomeDesignClient({ posts }: { posts: BlogPost[] }) {
  const projects = [
    { title: "Tecno-Mobile", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftecno-mobile.cl%2F?w=1200" },
    { title: "Tuupos", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftuupos.cl%2F?w=1200" },
    { title: "Terra Andes", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fterraandesplus.com%2F?w=1200" },
    { title: "Chiletronics", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchiletronics.cl%2F?w=1200" },
    { title: "Canine Fight", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcaninefight.cl%2F?w=1200" },
    { title: "SoloCasasChile", image: "/publi-solocasas.png" },
    { title: "SpinMedical", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200" },
    { title: "Librería Bazarte", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flibreriabazarte.cl%2F?w=1200" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950 font-sans antialiased overflow-x-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative pt-[12vh] pb-32 lg:pb-40 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Texture from Funnel Page */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Background Texture" 
            fill 
            className="object-cover object-center" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-50/50 blur-[150px] rounded-full -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-white/80 backdrop-blur-sm border border-zinc-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">Ingeniería Web de Élite 2026</span>
              </div>
              
              <h1 className="text-6xl md:text-[90px] font-black tracking-tighter leading-[0.8] mb-12 uppercase text-zinc-950">
                DISEÑO & <br/>
                <span className="text-blue-600">DESARROLLO</span> <br/>
                SITIOS WEB.
              </h1>
              
              <p className="text-xl text-zinc-500 max-w-xl mb-16 font-light leading-relaxed">
                No creamos páginas estáticas. Construimos ecosistemas digitales de alto rendimiento con <strong className="text-zinc-950 font-bold">Next.js</strong> y <strong className="text-zinc-950 font-bold">Shopify</strong> para marcas que exigen velocidad y resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <LeadButton className="px-14 py-7 bg-zinc-950 text-white font-black rounded-3xl hover:bg-zinc-800 transition-all shadow-2xl uppercase tracking-widest text-xs flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group w-full sm:w-auto">
                  Cotizar mi Proyecto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </LeadButton>
                <Link href="/portafolio" className="px-14 py-7 border border-zinc-200 text-zinc-950 font-black rounded-3xl hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs w-full sm:w-auto text-center">
                  Portafolio
                </Link>
              </div>
            </div>

            {/* Right: Vertical Scrolling Carousel */}
            <div className="relative h-[600px] lg:h-[800px] hidden lg:flex gap-6 overflow-hidden">
              <style jsx>{`
                @keyframes scroll-vertical {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .scroll-container {
                  display: flex;
                  flex-direction: column;
                  gap: 1.5rem;
                  animation: scroll-vertical 40s linear infinite;
                }
                .scroll-container:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="flex-1 space-y-6">
                <div className="scroll-container">
                  {[...projects, ...projects].map((p, i) => (
                    <div key={i} className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl group/card">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-8">
                        <span className="text-white font-black uppercase text-xs tracking-widest">{p.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-6 translate-y-20">
                <div className="scroll-container" style={{ animationDirection: 'reverse' }}>
                  {[...projects.reverse(), ...projects].map((p, i) => (
                    <div key={i} className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl group/card">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-8">
                        <span className="text-white font-black uppercase text-xs tracking-widest">{p.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Focus Card */}
          <div className="md:col-span-8 bg-zinc-950 rounded-[4rem] p-12 lg:p-16 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -z-0 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Zap className="w-12 h-12 text-blue-500 mb-8" />
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">Velocidad <br/>Insuperable</h2>
                <p className="text-zinc-400 text-lg font-light max-w-md leading-relaxed">
                  Utilizamos <span className="text-white font-bold">Next.js 16</span> para que tu sitio cargue en menos de 1 segundo. En 2026, si tu web demora, tu cliente se va.
                </p>
              </div>
              <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-black text-white mb-1">100/100</div>
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Performance</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">0.4s</div>
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">LCP Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Focus Cards */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-blue-50 rounded-[3.5rem] p-10 border border-blue-100 flex flex-col justify-between h-full group hover:bg-blue-100 transition-colors">
              <Monitor className="w-10 h-10 text-blue-600 mb-8" />
              <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight leading-none mb-4">Diseño <br/>Mobile-First</h3>
              <p className="text-blue-900/60 text-sm font-medium leading-relaxed">
                El 90% de tu tráfico viene del móvil. Diseñamos experiencias fluidas e interactivas para smartphones.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-zinc-50 rounded-[3.5rem] p-10 border border-zinc-100 flex flex-col justify-between h-full group hover:border-blue-200 transition-all">
            <Code2 className="w-10 h-10 text-zinc-400 mb-8 group-hover:text-blue-600 transition-colors" />
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight leading-none mb-4">Arquitectura <br/>SEO de Élite</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              No solo "colocamos" palabras clave. Estructuramos tu código para que Google te ponga en primer lugar.
            </p>
          </div>

          <div className="md:col-span-8 bg-zinc-50 rounded-[4rem] p-12 lg:p-16 border border-zinc-100 relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Rocket className="w-12 h-12 text-blue-600 mb-8" />
                <h3 className="text-4xl font-black text-zinc-950 uppercase tracking-tighter leading-none mb-6">Convertimos Visitas <br/>en Facturación</h3>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  Aplicamos psicología de ventas y embudos de conversión en cada página web que desarrollamos.
                </p>
                <Link href="/agencia-de-embudos-de-venta-chile" className="inline-flex items-center gap-2 mt-8 text-blue-600 font-black uppercase text-xs tracking-widest hover:translate-x-2 transition-transform">
                  Ver Embudos de Venta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/publi-solocasas.png" alt="Portfolio Preview" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hub */}
      <section className="py-32 bg-zinc-950 text-white rounded-[5rem] mx-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Nuestros Centros de <br/><span className="text-blue-500 italic font-serif lowercase font-light">Ingeniería</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              Desde pequeñas PYMES con gran ambición hasta corporaciones que buscan dominar su nicho global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tiendas Shopify', link: '/desarrollo-tiendas-shopify-chile', desc: 'Líderes en e-commerce de alto rendimiento en Chile.', icon: '🛍️' },
              { title: 'Páginas PYMES', link: '/desarrollo-paginas-web-pymes-chile', desc: 'Presencia profesional y optimizada con planes a medida.', icon: '🏢' },
              { title: 'SaaS & Custom', link: '/desarrollo-web-nextjs-saas-custom', desc: 'Software a medida escalable sobre Next.js y Supabase.', icon: '⚡' },
              { title: 'SEO Avanzado', link: '/servicios-seo-posicionamiento-google', desc: 'Dominio de Google mediante ingeniería de contenidos.', icon: '🚀' }
            ].map((s, i) => (
              <Link key={i} href={s.link} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                <div className="text-4xl mb-8 group-hover:scale-125 transition-transform origin-left">{s.icon}</div>
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{s.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">{s.desc}</p>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <TestimonialsSection />

      {/* Featured Insights */}
      <FeaturedBlogSection posts={posts} />

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
              Hagamos que tu marca <br/>sea <span className="italic font-serif lowercase font-light text-blue-100">Inolvidable.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Agenda una consultoría técnica gratuita y descubre por qué somos la agencia elegida por los negocios que quieren escalar de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <LeadButton className="px-14 py-7 bg-white text-blue-600 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all">
                Cotizar mi Sitio Web
              </LeadButton>
              <Link href="/contacto" className="px-14 py-7 border border-white/30 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Hablar con un Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
