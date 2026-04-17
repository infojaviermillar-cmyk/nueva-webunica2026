"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/context/contact-modal-context';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Páginas con Hero OSCURO (Texto Blanco)
  const darkPages = [
    '/desarrollo-web-nextjs-saas-custom',
    '/contacto',
    '/servicios-seo-posicionamiento-google',
    '/calculadora-de-campana-meta-ads-facebook',
    '/tienda-dropshipping-shopify-dropi'
  ];

  // Páginas con Hero CLARO (Texto Violeta)
  const lightPages = [
    '/',
    '/portafolio',
    '/desarrollo-tiendas-shopify-chile',
    '/desarrollo-tienda-en-linea-woocommerce',
    '/desarrollo-diseno-elearning-tutor-lms',
    '/desarrollo-paginas-web-pymes-chile',
    '/diseno-themes-shopify-personalizados-adobe-xd',
    '/diseno-paginas-web-inmobiliaria',
    '/desarrollo-pagina-web-funeraria'
  ];

  const isDarkHero = darkPages.includes(pathname);
  const isLightHero = lightPages.includes(pathname);
  
  const textColor = scrolled 
    ? 'text-zinc-900' 
    : (isDarkHero ? 'text-white' : (isLightHero ? 'text-violet-600' : 'text-zinc-900'));

  const hoverColor = isDarkHero && !scrolled ? 'hover:text-violet-400' : 'hover:text-violet-700';

  return (
    <>
      <style jsx global>{`
        .gris-img {
          filter: grayscale(1);
          transition: filter 1s ease-in-out;
        }
        .violet-filter {
          filter: brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(4156%) hue-rotate(261deg) brightness(101%) contrast(103%);
        }
        .group:hover .gris-img, .gris-img:hover {
          filter: grayscale(0);
        }
      `}</style>
      
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f5f3ff]/70 backdrop-blur-lg backdrop-saturate-150 border-b border-white/60 shadow-lg shadow-violet-900/5 h-[95px]' : `h-[116px] ${isDarkHero ? 'bg-transparent' : 'bg-[#f5f3ff]/80 backdrop-blur-sm border-b border-white/30'}`} flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Oficial Webunica */}
            <div className="flex-shrink-0 flex items-center relative z-20">
              <Link href="/" className="group block focus:outline-none cursor-pointer">
                <img 
                  src="https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp" 
                  alt="Webunica Agencia" 
                  className={`h-10 w-auto transition-all duration-500 group-hover:scale-105 ${isDarkHero && !scrolled ? 'violet-filter' : 'brightness-[0.1] opacity-100 gris-img'}`}
                  width={135}
                  height={36}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 ml-16 relative z-30">
              <Link href="/" className={`${textColor} ${hoverColor} font-bold transition-all text-[12px] uppercase tracking-widest cursor-pointer`}>
                Inicio
              </Link>
              
              {/* Servicios Dropdown */}
              <div className="relative group">
                <button className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-[12px] uppercase tracking-widest py-4`}>
                  Servicios
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1120px] bg-white/95 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-[0_45px_100px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2 z-[100]">
                  <div className="p-10 grid grid-cols-4 gap-8 relative z-10">
                    
                    {/* Col 1: E-commerce */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-violet-600"></span>
                        E-commerce Profesional
                      </h4>
                      <div className="flex flex-col gap-1">
                        <Link href="/desarrollo-tiendas-shopify-chile" className="group/item flex flex-col p-4 bg-zinc-50 rounded-[2.2rem] border-2 border-transparent hover:border-violet-500 hover:bg-violet-50 transition-all relative overflow-hidden mb-2">
                          <div className="absolute top-0 right-0 px-3 py-1 bg-violet-600 text-[8px] font-black text-white uppercase rounded-bl-xl">Estrella</div>
                          <span className="text-[15px] font-black text-zinc-950 group-hover/item:text-violet-600 transition-colors uppercase italic">Tiendas Shopify</span>
                          <span className="text-[11px] text-zinc-500 font-medium leading-tight">Escala tu marca al mundo</span>
                        </Link>
                        <Link href="/desarrollo-tienda-en-linea-woocommerce" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Tienda WooCommerce</span>
                          <span className="text-[11px] text-zinc-500 font-medium">B2B y Catálogos complejos</span>
                        </Link>
                        <Link href="/tienda-dropshipping-shopify-dropi" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Dropshipping Shopi+Dropi</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Automatización de ventas</span>
                        </Link>
                        <Link href="/diseno-themes-shopify-personalizados-adobe-xd" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Shopify Themes (XD Design)</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Diseño UI/UX a medida</span>
                        </Link>
                      </div>
                    </div>

                    {/* Col 2: Desarrollo & SEO */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-violet-600"></span>
                        Desarrollo & Posicionamiento
                      </h4>
                      <div className="flex flex-col gap-1">
                        <Link href="/desarrollo-web-nextjs-saas-custom" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Next.js & SaaS a Medida</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Software Web de Alto Vuelo</span>
                        </Link>
                        <Link href="/servicios-seo-posicionamiento-google" className="group/item flex flex-col p-4 bg-violet-600 rounded-3xl mt-2 group/seo transition-all hover:bg-zinc-950">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[15px] font-black text-white">SEO Avanzado</span>
                            <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full font-black">PRO</span>
                          </div>
                          <span className="text-[11px] text-white/70 font-medium leading-tight">Auditoría y posicionamiento orgánico</span>
                        </Link>
                        <Link href="/desarrollo-paginas-web-pymes-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Sitios Web Pymes</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Embudos para servicios locales</span>
                        </Link>
                      </div>
                    </div>

                    {/* Col 3: nichos */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-violet-600"></span>
                        Especialidades
                      </h4>
                      <div className="flex flex-col gap-1">
                        <Link href="/desarrollo-diseno-elearning-tutor-lms" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Academias Tutor LMS</span>
                          <span className="text-[11px] text-zinc-500 font-medium">E-learning y Venta de Cursos</span>
                        </Link>
                        <Link href="/diseno-paginas-web-inmobiliaria" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Inmobiliarias Premium</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Catálogo de propiedades</span>
                        </Link>
                        <Link href="/desarrollo-pagina-web-funeraria" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                          <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Funerarias & Obituarios</span>
                          <span className="text-[11px] text-zinc-500 font-medium">Software de gestión y homenajes</span>
                        </Link>
                      </div>
                    </div>

                    {/* Col 4: Herramientas */}
                    <div className="bg-zinc-50 -m-10 p-10 border-l border-zinc-100 flex flex-col">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-blue-600"></span>
                        Herramientas
                      </h4>
                      <div className="flex flex-col gap-3">
                        <Link href="/calculadora-de-campana-meta-ads-facebook" className="group/tool block p-4 bg-white border border-zinc-100 rounded-2xl hover:border-violet-500 hover:shadow-xl transition-all">
                          <span className="block text-[13px] font-bold text-zinc-950 mb-1 group-hover/tool:text-violet-600">Calculadora Meta Ads</span>
                          <span className="block text-[10px] text-zinc-500 leading-tight">Retorno de inversión publicitaria</span>
                        </Link>
                        <Link href="/cotizador-en-linea-desarrollo-web" className="group/tool block p-4 bg-white border border-zinc-100 rounded-2xl hover:border-violet-500 hover:shadow-xl transition-all">
                          <span className="block text-[13px] font-bold text-zinc-950 mb-1 group-hover/tool:text-violet-600">Cotizador Web Pro</span>
                          <span className="block text-[10px] text-zinc-500 leading-tight">Presupuesto estimado al instante</span>
                        </Link>
                        <div className="mt-4 p-4 bg-violet-600/5 rounded-2xl border border-violet-600/10">
                          <p className="text-[11px] text-violet-600 leading-relaxed font-bold">Insights técnicos en nuestro blog.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="/portafolio" className={`${textColor} ${hoverColor} font-bold transition-all text-[12px] uppercase tracking-widest`}>
                Portafolio
              </Link>
              
              <Link href="/blog" className={`${textColor} ${hoverColor} font-bold transition-all text-[12px] uppercase tracking-widest`}>
                Blog
              </Link>
              
              <Link href="/contacto" className={`${textColor} ${hoverColor} font-bold transition-all text-[12px] uppercase tracking-widest`}>
                Contacto
              </Link>
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => openModal()}
                className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.15em] transition-all transform hover:scale-105 shadow-lg ${scrolled ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-violet-600/20' : (isDarkHero ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800')}`}>
                Cotizar Proyecto
              </button>
              
              <a href="tel:+56984410379" className={`hidden md:flex items-center gap-2 p-4 rounded-full font-black text-[10px] uppercase tracking-[0.15em] transition-all transform hover:scale-105 border ${scrolled ? 'border-violet-100 text-violet-600' : (isDarkHero ? 'border-white/20 text-white' : 'border-zinc-200 text-zinc-900')}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className={`${textColor} lg:hidden relative z-[100] h-12 w-12 flex items-center justify-center rounded-full hover:bg-black/5 transition-all outline-none`}
                aria-label="Menu"
              >
                <div className="relative w-6 h-5 pointer-events-none">
                  <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                  <span className={`absolute left-0 w-full h-0.5 bg-current top-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>
      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[80] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Background Blur Overlay */}
        <div 
          className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Side Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex-grow flex flex-col pt-32 px-10 pb-12 overflow-y-auto">
            <nav className="flex flex-col gap-8">
              <Link href="/" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="group border-b border-zinc-100 pb-6">
                <span className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] block mb-1 opacity-60">Home</span>
                <span className="text-4xl font-black text-zinc-900 uppercase tracking-tighter group-hover:text-violet-600 transition-colors">Inicio</span>
              </Link>

              <div className="space-y-8 pt-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">E-commerce</span>
                  <div className="grid gap-3">
                    <Link href="/desarrollo-tiendas-shopify-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Shopify Expert
                    </Link>
                    <Link href="/desarrollo-tienda-en-linea-woocommerce" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      WooCommerce
                    </Link>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Desarrollo & SEO</span>
                  <div className="grid gap-3">
                    <Link href="/desarrollo-web-nextjs-saas-custom" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Next.js & SaaS
                    </Link>
                    <Link href="/servicios-seo-posicionamiento-google" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      SEO Avanzado
                    </Link>
                    <Link href="/desarrollo-paginas-web-pymes-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Sitios Pymes
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/portafolio" onClick={() => setIsMobileMenuOpen(false)} className="group mt-2 border-t border-zinc-100 pt-6 pb-6 border-b">
                <span className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] block mb-1 opacity-60">Resultados</span>
                <span className="text-4xl font-black text-zinc-900 uppercase tracking-tighter group-hover:text-violet-600 transition-colors">Portafolio</span>
              </Link>

              <div className="flex flex-col gap-6 mt-2">
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest flex justify-between items-center">
                  Blog
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest flex justify-between items-center">
                  Contacto
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </nav>

            <div className="mt-auto pt-10 grid gap-4">
              <button 
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="w-full py-4 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95"
              >
                Cotizar Proyecto
              </button>
              <a href="tel:+56984410379" className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Asesor Directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
