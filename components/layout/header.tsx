"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    '/portafolio',
    '/servicios-seo-posicionamiento-google',
    '/calculadora-de-campana-meta-ads-facebook'
  ];

  // Páginas con Hero CLARO (Texto Violeta)
  const lightPages = [
    '/',
    '/desarrollo-tiendas-shopify-chile',
    '/desarrollo-tienda-en-linea-woocommerce',
    '/desarrollo-diseno-elearning-tutor-lms',
    '/desarrollo-paginas-web-pymes-chile',
    '/diseno-themes-shopify-personalizados-adobe-xd',
    '/diseno-paginas-web-inmobiliaria',
    '/desarrollo-pagina-web-funeraria',
    '/tienda-dropshipping-shopify-dropi'
  ];

  const isDarkHero = darkPages.includes(pathname);
  const isLightHero = lightPages.includes(pathname);
  
  // Colores dinámicos
  // Si scrolled: Zinc-900 (Negro suave)
  // Si es página oscura no scrolled: Blanco
  // Si es página clara no scrolled: VIOLETA (Petición del usuario)
  const textColor = scrolled 
    ? 'text-zinc-900' 
    : (isDarkHero ? 'text-white' : (isLightHero ? 'text-violet-600' : 'text-zinc-900'));

  const hoverColor = isDarkHero && !scrolled ? 'hover:text-emerald-400' : 'hover:text-violet-700';

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm h-[75px]' : 'bg-transparent h-24'} flex items-center`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Oficial Webunica */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="group flex items-center">
                <img 
                  src="https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp" 
                  alt="Webunica Agencia" 
                  className={`h-10 w-auto transition-all duration-500 group-hover:scale-105 ${isDarkHero && !scrolled ? 'brightness-0 invert opacity-90' : ''}`}
                  width={150}
                  height={40}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className={`${textColor} ${hoverColor} font-bold transition-all text-sm uppercase tracking-widest`}>
                Inicio
              </Link>
              
              {/* Servicios Dropdown */}
              <div className="relative group">
                <button className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-sm uppercase tracking-widest py-4`}>
                  Servicios
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                  <div className="flex flex-col py-3">
                    <Link href="/desarrollo-web-nextjs-saas-custom" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-600"></div>
                      Next.js & SaaS a Medida
                    </Link>
                    <Link href="/desarrollo-tiendas-shopify-chile" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#95bf47]"></div>
                      Tiendas Shopify
                    </Link>
                    <Link href="/diseno-themes-shopify-personalizados-adobe-xd" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      Shopify Themes (XD Design)
                    </Link>
                    <Link href="/desarrollo-tienda-en-linea-woocommerce" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      WooCommerce Empresas
                    </Link>
                    <Link href="/desarrollo-paginas-web-pymes-chile" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Sitios Web Pymes
                    </Link>
                    <Link href="/desarrollo-diseno-elearning-tutor-lms" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Academias Tutor LMS
                    </Link>
                    <div className="border-t border-zinc-50 my-1"></div>
                    <Link href="/diseno-paginas-web-inmobiliaria" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                      Inmobiliarias Premium
                    </Link>
                    <Link href="/desarrollo-pagina-web-funeraria" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
                      Funerarias & Obituarios
                    </Link>
                    <Link href="/tienda-dropshipping-shopify-dropi" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      Dropshipping Shopi+Dropi
                    </Link>
                    <Link href="/servicios-seo-posicionamiento-google" className="px-6 py-4 text-sm font-bold text-white bg-violet-600 hover:bg-zinc-900 transition-colors flex items-center justify-between group/seo">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                        Auditoría & SEO Avanzado
                      </div>
                      <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">PRO</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Herramientas Dropdown */}
              <div className="relative group">
                <button className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-sm uppercase tracking-widest py-4`}>
                  Simuladores
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                  <div className="flex flex-col py-3">
                    <Link href="/cotizador-en-linea-desarrollo-web" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      Calculadora Presupuesto Web
                    </Link>
                    <Link href="/calculadora-de-campana-meta-ads-facebook" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      Calculadora Meta Ads ROI
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/portafolio" className={`${textColor} ${hoverColor} font-bold transition-all text-sm uppercase tracking-widest`}>
                Portafolio
              </Link>
              
              <Link href="/contacto" className={`${textColor} ${hoverColor} font-bold transition-all text-sm uppercase tracking-widest`}>
                Contacto
              </Link>
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a href="tel:+56984410379" className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-xl ${scrolled ? 'bg-violet-600 text-white hover:bg-violet-700' : (isDarkHero ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-violet-600 text-white hover:bg-violet-700')}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Llamar Asesor
              </a>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${textColor} lg:hidden p-2 transition-transform h-12 w-12 flex items-center justify-center rounded-full hover:bg-black/5`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[45] bg-zinc-950 transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto shadow-[0_0_50px_rgba(139,92,246,0.3)]' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-8 text-center sm:text-left">
            <Link href="/" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-violet-500 transition-colors">Inicio</Link>
            <div className="space-y-4">
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Nuestros Servicios</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 border-l border-zinc-800">
                <Link href="/desarrollo-web-nextjs-saas-custom" className="text-lg font-bold text-zinc-300 hover:text-violet-400">Next.js & SaaS</Link>
                <Link href="/desarrollo-tiendas-shopify-chile" className="text-lg font-bold text-zinc-300 hover:text-violet-400">Tiendas Shopify</Link>
                <Link href="/servicios-seo-posicionamiento-google" className="text-lg font-bold text-violet-500">SEO & Google</Link>
                <Link href="/desarrollo-paginas-web-pymes-chile" className="text-lg font-bold text-zinc-300 hover:text-violet-400">Web Pymes</Link>
              </div>
            </div>
            <Link href="/portafolio" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-violet-500 transition-colors">Portafolio</Link>
            <Link href="/contacto" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-violet-500 transition-colors">Contacto</Link>
          </nav>

          <div className="mt-auto pt-12 border-t border-zinc-900">
            <a href="tel:+56984410379" className="flex items-center justify-center gap-3 w-full py-6 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/20">
              Hablar con Webunica
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
