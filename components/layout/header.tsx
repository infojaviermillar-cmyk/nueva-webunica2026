"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si debemos usar texto claro u oscuro basado en la página si no hemos hecho scroll
  const isDarkHero = pathname === '/desarrollo-tiendas-shopify-chile' || 
                    pathname === '/desarrollo-tienda-en-linea-woocommerce' || 
                    pathname === '/desarrollo-diseno-elearning-tutor-lms' ||
                    pathname === '/tienda-dropshipping-shopify-dropi' ||
                    pathname === '/calculadora-de-campana-meta-ads-facebook';
  
  const textColor = scrolled ? 'text-zinc-900' : (isDarkHero ? 'text-white' : 'text-[#2d3748]');
  const logoColor = scrolled ? 'text-zinc-900' : (isDarkHero ? 'text-white' : 'text-[#2d3748]');
  const logoAccent = scrolled ? 'border-zinc-900' : (isDarkHero ? 'border-white' : 'border-[#2d3748]');

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm h-[75px]' : 'bg-transparent h-24'} flex items-center`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Oficial Webunica */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center">
              <img 
                src="https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp" 
                alt="Webunica Agencia" 
                className={`h-10 w-auto transition-[filter] duration-1000 grayscale group-hover:grayscale-0 ${isDarkHero && !scrolled ? 'brightness-0 invert opacity-90' : ''}`}
                width={150}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`${textColor} font-bold hover:opacity-70 transition-opacity text-sm uppercase tracking-wide`}>
              Inicio
            </Link>
            
            {/* Servicios Dropdown */}
            <div className="relative group">
              <button className={`${textColor} font-bold hover:opacity-70 transition-opacity flex items-center gap-1 text-sm uppercase tracking-wide py-4`}>
                Servicios
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                <div className="flex flex-col py-3">
                  <Link href="/desarrollo-web-nextjs-saas-custom" className="px-6 py-4 text-sm font-bold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 hover:text-black transition-colors flex items-center gap-3 border-b border-zinc-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                    Next.js & SaaS a Medida
                  </Link>
                  <Link href="/desarrollo-tiendas-shopify-chile" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-[#a1fcd8]/30 hover:text-teal-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#95bf47]"></div>
                    Tiendas Shopify
                  </Link>
                  <Link href="/desarrollo-tienda-en-linea-woocommerce" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-purple-100/50 hover:text-purple-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    WooCommerce Empresas
                  </Link>
                  <Link href="/desarrollo-paginas-web-pymes-chile" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-blue-100/50 hover:text-blue-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Sitios Web Pymes
                  </Link>
                  <Link href="/desarrollo-diseno-elearning-tutor-lms" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-orange-100/50 hover:text-orange-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    Academias Tutor LMS
                  </Link>
                  <div className="border-t border-zinc-50 my-1"></div>
                  <Link href="/diseno-paginas-web-inmobiliaria" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                    Inmobiliarias Premium
                  </Link>
                  <Link href="/desarrollo-pagina-web-funeraria" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
                    Funerarias & Obituarios
                  </Link>
                  <Link href="/tienda-dropshipping-shopify-dropi" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-purple-50 hover:text-purple-900 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    Dropshipping Shopi+Dropi
                  </Link>
                </div>
              </div>
            </div>

            {/* Herramientas Dropdown */}
            <div className="relative group">
              <button className={`${textColor} font-bold hover:opacity-70 transition-opacity flex items-center gap-1 text-sm uppercase tracking-wide py-4`}>
                Simuladores
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-zinc-100 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-2">
                <div className="flex flex-col py-3">
                  <Link href="/cotizador-en-linea-desarrollo-web" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-zinc-100 transition-colors">
                    Calculadora Presupuesto Web
                  </Link>
                  <Link href="/calculadora-de-campana-meta-ads-facebook" className="px-6 py-4 text-sm font-bold text-zinc-700 hover:bg-zinc-100 transition-colors">
                    Calculadora Meta Ads ROI
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/contacto" className={`${textColor} font-bold hover:opacity-70 transition-opacity text-sm uppercase tracking-wide`}>
              Contacto
            </Link>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:+56984410379" className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-xl ${scrolled ? 'bg-[#4f46e5] text-white hover:bg-blue-800' : (isDarkHero ? 'bg-white text-zinc-900 hover:bg-zinc-200 shadow-white/10' : 'bg-[#2d3748] text-white hover:bg-black')}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Llamar Asesor
            </a>

            <button className={`${textColor} lg:hidden p-2`}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
