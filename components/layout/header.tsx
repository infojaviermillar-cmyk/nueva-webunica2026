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
        .group:hover .gris-img, .gris-img:hover {
          filter: grayscale(0);
        }
      `}</style>
      
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f5f3ff]/70 backdrop-blur-lg backdrop-saturate-150 border-b border-white/60 shadow-lg shadow-violet-900/5 h-[95px]' : `h-[116px] ${isDarkHero ? 'bg-transparent' : 'bg-[#f5f3ff]/80 backdrop-blur-sm border-b border-white/30'}`} flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Oficial Webunica */}
            <div className="flex-shrink-0 flex items-center relative z-20">
              <Link href="/" prefetch={false} className="group block focus:outline-none relative z-20">
                <img 
                  src="https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp" 
                  alt="Webunica Agencia" 
                  className={`h-10 w-auto gris-img transition-all duration-500 group-hover:scale-105 ${isDarkHero && !scrolled ? 'brightness-0 invert opacity-100' : 'brightness-[0.1] opacity-100'}`}
                  width={135}
                  height={36}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 ml-16">
              <Link href="/" prefetch={false} className={`${textColor} ${hoverColor} font-bold transition-all text-[12px] uppercase tracking-widest relative z-20`}>
                Inicio
              </Link>
              
              {/* Servicios Dropdown */}
              <div className="relative group">
                <button className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-[12px] uppercase tracking-widest py-4`}>
                  Servicios
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                  <div className="flex flex-col py-3">
                    <Link href="/desarrollo-web-nextjs-saas-custom" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                      Next.js & SaaS a Medida
                    </Link>
                    <Link href="/desarrollo-tiendas-shopify-chile" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      Tiendas Shopify
                    </Link>
                    <Link href="/diseno-themes-shopify-personalizados-adobe-xd" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      Shopify Themes (XD Design)
                    </Link>
                    <Link href="/desarrollo-tienda-en-linea-woocommerce" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      WooCommerce Empresas
                    </Link>
                    <Link href="/desarrollo-paginas-web-pymes-chile" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Sitios Web Pymes
                    </Link>
                    <Link href="/desarrollo-diseno-elearning-tutor-lms" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Academias Tutor LMS
                    </Link>
                    <Link href="/diseno-paginas-web-inmobiliaria" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                      Inmobiliarias Premium
                    </Link>
                    <Link href="/desarrollo-pagina-web-funeraria" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
                      Funerarias & Obituarios
                    </Link>
                    <Link href="/tienda-dropshipping-shopify-dropi" className="px-6 py-3 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      Dropshipping Shopi+Dropi
                    </Link>
                    <Link href="/servicios-seo-posicionamiento-google" className="px-6 py-4 text-[15px] font-bold text-white bg-violet-600 hover:bg-zinc-900 transition-colors flex items-center justify-between group/seo">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        Auditoría & SEO Avanzado
                      </div>
                      <span className="text-[12px] bg-white/20 text-white px-2 py-0.5 rounded-full">PRO</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Herramientas Dropdown */}
              <div className="relative group">
                <button className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-[12px] uppercase tracking-widest py-4`}>
                  Herramientas
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                  <div className="flex flex-col py-3">
                    <Link href="/cotizador-en-linea-desarrollo-web" className="px-6 py-4 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      Calculadora Presupuesto Web
                    </Link>
                    <Link href="/calculadora-de-campana-meta-ads-facebook" className="px-6 py-4 text-[15px] font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      Calculadora Meta Ads ROI
                    </Link>
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

              <div className="space-y-6 pt-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Servicios Digitales</span>
                <div className="grid gap-4">
                  {[
                    { n: 'Next.js & SaaS', h: '/desarrollo-web-nextjs-saas-custom' },
                    { n: 'Shopify Chile', h: '/desarrollo-tiendas-shopify-chile' },
                    { n: 'SEO Avanzado', h: '/servicios-seo-posicionamiento-google' },
                    { n: 'Sitios Pymes', h: '/desarrollo-paginas-web-pymes-chile' }
                  ].map((item) => (
                    <Link 
                      key={item.h} 
                      href={item.h} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      {item.n}
                    </Link>
                  ))}
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
