"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/context/contact-modal-context';
import { supabase } from '@/lib/supabase/client';
import { User, LogIn, ShoppingBag } from 'lucide-react';

export default function Header({ domain = '' }: { domain?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const { openModal, openWhatsApp } = useContactModal();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getSession() {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    getSession();

    if (!supabase) return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  // Listener para cerrar Mega Menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  // Páginas con Hero OSCURO (Texto Blanco)
  const darkPages = [
    '/desarrollo-web-nextjs-saas-custom',
    '/contacto',
    '/calculadora-de-campana-meta-ads-facebook',
    '/geo-ai-visibility'
  ];

  // Páginas con Hero CLARO (Texto Violeta)
  const lightPages = [
    '/',
    '/portafolio',
    '/desarrollo-tiendas-shopify-en-chile',
    '/desarrollo-tienda-en-linea-woocommerce',
    '/desarrollo-diseno-elearning-tutor-lms',
    '/desarrollo-paginas-web-pymes-chile',
    '/diseno-themes-shopify-personalizados-adobe-xd',
    '/diseno-paginas-web-inmobiliaria',
    '/complemento-sence-tutor-lms-pro',
    '/sistema-cotizaciones-intranet-wordpress',
    '/servicios-seo-posicionamiento-google',
    '/tienda-dropshipping-shopify-y-dropi',
    '/desarrollo-web-corporativo',
    '/ley-21719-proteccion-de-datos-personales'
  ];

  const isDarkHero = darkPages.includes(pathname);
  const isLightHero = lightPages.includes(pathname);
  const isShopifyLanding = pathname === '/landing-shopify-emd' || domain.includes('desarrolloshopify.cl');
  
  const textColor = scrolled 
    ? 'text-zinc-900' 
    : (isDarkHero ? 'text-white' : (isLightHero ? 'text-violet-600' : 'text-zinc-900'));

  const hoverColor = isDarkHero && !scrolled ? 'hover:text-violet-400' : 'hover:text-violet-700';

  const basePath = (pathname === '/' || pathname === '/landing-shopify-emd') ? '' : '/';

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

        /* Animación de agitación (shake) vigorosa cada 15s */
        @keyframes subtle-shake {
          0%, 90%, 100% { transform: scale(1) rotate(0deg); }
          91% { transform: scale(1.1) rotate(5deg); }
          92% { transform: scale(1.1) rotate(-5deg); }
          93% { transform: scale(1.1) rotate(5deg); }
          94% { transform: scale(1.1) rotate(-5deg); }
          95% { transform: scale(1.1) rotate(5deg); }
          96% { transform: scale(1.1) rotate(-5deg); }
          97% { transform: scale(1.1) rotate(0deg); }
        }
        .animate-shake-15s {
          animation: subtle-shake 15s infinite ease-in-out;
        }
      `}</style>
      
      <header className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-[#f5f3ff]/70 backdrop-blur-lg backdrop-saturate-150 border-b border-white/60 shadow-lg shadow-violet-900/5 h-[95px]' : `h-[116px] ${isDarkHero ? 'bg-transparent' : 'bg-[#f5f3ff]/80 backdrop-blur-sm border-b border-white/30'}`} flex items-center`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-full relative">
            
            {/* Logo Oficial Webunica */}
            <div className="flex-shrink-0 flex items-center justify-center z-20 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto">
              {isShopifyLanding ? (
                <Link href={`${basePath}#inicio`} className="group flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-zinc-100">
                  <div className="flex flex-col leading-none">
                    <span className="text-[14px] font-black uppercase tracking-tighter text-zinc-950">desarrolloshopify</span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-pink-600">de webunica.cl</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-all">
                    <ShoppingBag className="w-4 h-4 text-pink-600" />
                  </div>
                </Link>
              ) : (
                <Link href="/" className="group flex flex-col items-center justify-center focus:outline-none cursor-pointer">
                  <img 
                    src="/logo-webunica.png.webp" 
                    alt="Webunica Expertos en E-commerce" 
                    className={`h-8 sm:h-10 w-auto transition-all duration-500 group-hover:scale-105 ${isDarkHero && !scrolled ? 'violet-filter' : 'brightness-[0.1] opacity-100 gris-img'}`}
                    width={135}
                    height={36}
                  />
                  <span className={`block mt-[3px] text-[7.5px] sm:text-[9px] font-bold uppercase tracking-[0.20em] leading-none whitespace-nowrap text-center transition-colors duration-300 ${isDarkHero && !scrolled ? 'text-white/80' : 'text-[rgba(20,24,39,0.70)]'}`}>
                    UNA NUEVA ERA WEB
                  </span>
                </Link>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-4 xl:gap-10 ml-6 xl:ml-16 relative z-30">
              {isShopifyLanding ? (
                <>
                  <Link href={`${basePath}#inicio`} className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer`}>Inicio</Link>
                  <Link href={`${basePath}#ventajas`} className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer`}>Ventajas</Link>
                  <Link href={`${basePath}#planes`} className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer`}>Planes</Link>
                  <Link href={`${basePath}#faq`} className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer`}>FAQ</Link>
                </>
              ) : (
                <>
                  <Link href="/" className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer`}>
                    Inicio
                  </Link>
              
              {/* Servicios Dropdown */}
              <div 
                ref={megaMenuRef}
                className="relative group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button 
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={`${textColor} ${hoverColor} font-bold transition-all flex items-center gap-1 text-[11px] xl:text-[12px] uppercase tracking-widest py-4 cursor-pointer`}
                >
                  Servicios
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div 
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.closest('a')) {
                      setIsMegaMenuOpen(false);
                    }
                  }}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1240px] bg-white/95 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-[0_45px_100px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden transform z-[100] ${
                    isMegaMenuOpen 
                      ? 'opacity-100 visible translate-y-2 pointer-events-auto' 
                      : 'opacity-0 invisible translate-y-0 pointer-events-none'
                  }`}
                >
                  <div className="p-10 grid grid-cols-5 gap-8 relative z-10">
                    
                    {/* Col 1: E-commerce & SaaS */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-violet-600"></span>
                        E-commerce & SaaS
                      </h4>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <Link 
                            href="/desarrollo-tiendas-shopify-en-chile" 
                            className="group/item flex flex-col p-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all border border-violet-400/30 mb-1"
                          >
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-[14px] font-black uppercase tracking-tight flex items-center gap-1.5">
                                Tiendas Shopify
                              </span>
                              <span className="text-[8px] bg-white/25 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                                ⭐ ESTRELLA
                              </span>
                            </div>
                            <span className="text-[11px] text-white/85 font-medium">Diseño y desarrollo pro en Chile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/rediseno-tienda-shopify" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors border border-violet-100 bg-violet-50/40">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors flex items-center gap-2">
                              Rediseño Shopify
                              <span className="text-[8px] bg-violet-600 text-white px-1.5 py-0.5 rounded-sm uppercase font-black">NUEVO</span>
                            </span>
                            <span className="text-[11px] text-zinc-500 font-medium">Tu tienda, reinventada para vender</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/desarrollo-tienda-en-linea-woocommerce" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Tienda WooCommerce</span>
                            <span className="text-[11px] text-zinc-500 font-medium">B2B y Catálogos complejos</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/tienda-dropshipping-shopify-y-dropi" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Dropshipping Shopi+Dropi</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Automatización de ventas</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/desarrollo-web-nextjs-saas-custom" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Next.js & SaaS a Medida</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Software Web de Alto Vuelo</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/desarrollo-web-corporativo" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors border border-violet-200/80 bg-violet-50/50">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors flex items-center gap-2">
                              Web Corporativa
                              <span className="text-[8px] bg-violet-600 text-white px-1.5 py-0.5 rounded-sm uppercase font-black">NUEVO</span>
                            </span>
                            <span className="text-[11px] text-zinc-500 font-medium">Sitios corporativos de alto rendimiento</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/desarrollo-paginas-web-pymes-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-violet-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-violet-600 transition-colors">Sitios Web Pymes</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Diseño para servicios locales</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 2: Marketing & Herramientas */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-blue-500"></span>
                        Marketing & Recursos
                      </h4>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <Link href="/brief/nuevo-proyecto" className="group/item flex flex-col p-3 rounded-2xl hover:bg-purple-50 transition-colors bg-purple-50/60 border border-purple-200">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-purple-700 transition-colors flex items-center gap-2">Brief UX/UI Ecommerce <span className="text-[8px] bg-purple-600 text-white px-1.5 py-0.5 rounded-sm uppercase font-black">NUEVO</span></span>
                            <span className="text-[11px] text-zinc-500 font-medium">Diseño UX/UI en 20 etapas</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/geo-ai-visibility" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors bg-blue-50/50 border border-blue-100">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors flex items-center gap-2">GEO AI Visibility <span className="text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-sm uppercase">NUEVO</span></span>
                            <span className="text-[11px] text-zinc-500 font-medium">Posicionamiento en IA</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/servicios-seo-posicionamiento-google" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors">SEO Avanzado</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Auditoría y posicionamiento</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/agencia-de-embudos-de-venta-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors">Embudos de Venta</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Sales Funnels de conversión</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/calculadora-de-campana-meta-ads-facebook" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors">Calculadora Meta Ads</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Proyecta tu ROAS y ventas</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/listas-de-verificacion-shopify-cro-basica" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors">Checklist CRO Shopify</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Auditoría de conversión</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/recursos" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors">Centro de Recursos</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Herramientas gratuitas</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 3: Guías Shopify */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500"></span>
                        Guías Shopify Chile
                      </h4>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <Link href="/como-estructurar-ficha-de-producto-shopify" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors bg-emerald-50/50 border border-emerald-100">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors flex items-center gap-2">Ficha de Producto CRO <span className="text-[8px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-sm uppercase font-black">NUEVO</span></span>
                            <span className="text-[11px] text-zinc-500 font-medium">Estructura para vender más</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/comisiones-plataformas-de-pago-para-shopify-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Comisiones de Pago</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Transbank, Mercado Pago, etc.</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/empresas-de-transporte-y-envios-para-shopify-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Logística y Envíos</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Shipit, Bluexpress, Starken</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/integracion-erp-shopify-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Integración ERP</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Bsale, Obuma, Defontana</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/boleta-electronica-facturacion-shopify-chile" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Boletas y Facturas</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Haulmer, Lioren, LibreDTE</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos-y-talleres-shopify" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Talleres & Cursos</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Básico, Avanzado, IA</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/integracion-fintoc-shopify" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Fintoc Shopify</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Pagos por transferencia</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/migrar-a-shopify" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Migrar a Shopify</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Desde Magento, WooCommerce, Jumpseller</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shopify-inteligencia-artificial" className="group/item flex flex-col p-3 rounded-2xl hover:bg-emerald-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-emerald-600 transition-colors">Shopify + IA</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Productos, textos y ofertas con IA</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 4: Especialidades Pro */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-orange-500"></span>
                        Especialidades B2B
                      </h4>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <Link href="/ley-21719-proteccion-de-datos-personales" className="group/item flex flex-col p-3 rounded-2xl hover:bg-blue-50 transition-colors bg-blue-50/60 border border-blue-200">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-blue-600 transition-colors flex items-center gap-2">
                              Ley 21.719 Protección Datos
                              <span className="text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-sm uppercase font-black">NUEVO</span>
                            </span>
                            <span className="text-[11px] text-zinc-500 font-medium">Adecuación Web y ARCOP 2026</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/implementacion-ia-conversacional" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors bg-orange-50/50 border border-orange-100">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors flex items-center gap-2">IA Conversacional <span className="text-[8px] bg-orange-600 text-white px-1.5 py-0.5 rounded-sm uppercase">NUEVO</span></span>
                            <span className="text-[11px] text-zinc-500 font-medium">Chatbots Databot B2B</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/desarrollo-diseno-elearning-tutor-lms" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors">Academias Tutor LMS</span>
                            <span className="text-[11px] text-zinc-500 font-medium">E-learning y Cursos</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/complemento-sence-tutor-lms-pro" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors">Plugin Sence Pro</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Cumplimiento para Tutor LMS</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sistema-cotizaciones-intranet-wordpress" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors">Cotizador & Intranet</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Gestión B2B y Descuentos</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/diseno-paginas-web-inmobiliaria" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors">Inmobiliarias Premium</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Catálogo de propiedades</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/diseno-paginas-web-odontologia" className="group/item flex flex-col p-3 rounded-2xl hover:bg-orange-50 transition-colors">
                            <span className="text-[15px] font-bold text-zinc-950 group-hover/item:text-orange-600 transition-colors">Clínicas Dentales</span>
                            <span className="text-[11px] text-zinc-500 font-medium">Agendas y captación</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 5: Últimos Artículos */}
                    <div className="bg-zinc-50 -m-10 p-10 border-l border-zinc-100 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-sm bg-indigo-500"></span>
                          Últimos Artículos
                        </h4>
                        <Link href="/blog" className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 uppercase">
                          Ver todo →
                        </Link>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        {/* Article 1 */}
                        <Link href="/blog/como-elegir-el-mejor-erp-para-conectar-con-shopify" className="group flex flex-col gap-3">
                          <div className="w-full h-24 rounded-2xl overflow-hidden relative border border-zinc-200/50 shadow-sm">
                            <img 
                              src="/shopify_hero_card.png" 
                              alt="Shopify vs ERPs"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60" />
                          </div>
                          <div>
                            <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[9px] font-black uppercase tracking-widest rounded mb-1">Integraciones</span>
                            <h5 className="text-[13px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors leading-tight">
                              Shopify vs ERPs: ¿Cómo elegir el mejor sistema en 2026?
                            </h5>
                          </div>
                        </Link>

                        {/* Article 2 */}
                        <Link href="/blog/guia-definitiva-de-seo-tecnico-para-tiendas-online-en-2025" className="group flex flex-col gap-3 mt-2">
                          <div className="w-full h-24 rounded-2xl overflow-hidden relative border border-zinc-200/50 shadow-sm">
                            <img 
                              src="/seo_performance_dashboard_premium_1776268863414.png" 
                              alt="Guía Definitiva de SEO Técnico"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60" />
                          </div>
                          <div>
                            <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-black uppercase tracking-widest rounded mb-1">Marketing</span>
                            <h5 className="text-[13px] font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors leading-tight">
                              Guía Definitiva de SEO Técnico para Tiendas Online
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="/portafolio" className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest`}>
                Portafolio
              </Link>
              
              <Link href="/blog" className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest`}>
                Blog
              </Link>
              
              <Link href="/contacto" className={`${textColor} ${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest`}>
                Contacto
              </Link>
              
              <Link 
                href="/mi-cuenta" 
                className={`flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-1.5 xl:py-2 rounded-xl text-[9px] xl:text-[10px] font-black uppercase tracking-widest transition-all ${scrolled ? 'bg-zinc-100 text-zinc-900 border border-zinc-200' : (isDarkHero ? 'bg-white/10 text-white border border-white/20' : 'bg-violet-50 text-violet-600 border border-violet-100')} hover:scale-105`}
              >
                {user ? (
                  <><User className="w-3.5 h-3.5" /> Mi Cuenta</>
                ) : (
                  <><LogIn className="w-3.5 h-3.5" /> Acceso</>
                )}
              </Link>
                </>
              )}
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a 
                href={isShopifyLanding ? "#planes" : "#"} 
                onClick={(e) => {
                  if (!isShopifyLanding) {
                    e.preventDefault();
                    openWhatsApp();
                  }
                }}
                target={isShopifyLanding ? undefined : undefined}
                rel={isShopifyLanding ? undefined : undefined}
                className={`hidden md:flex items-center gap-1.5 xl:gap-2.5 px-4 lg:px-5 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 rounded-full font-black text-[10px] xl:text-[11px] uppercase tracking-[0.15em] xl:tracking-[0.18em] transition-all duration-300 transform animate-shake-15s border border-white/20 relative overflow-hidden group active:scale-95 ${
                  isShopifyLanding 
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-[0_8px_25px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_35px_rgba(219,39,119,0.5)] hover:scale-105' 
                    : 'bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-800 text-white shadow-[0_8px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.5)] hover:scale-105'
                }`}
              >
                {/* Shine metallic reflection effect */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] -translate-x-[150%] transition-transform duration-1000 ease-out group-hover:translate-x-[150%] pointer-events-none" />
                
                {!isShopifyLanding && (
                  <div className="relative flex items-center justify-center">
                    <svg className="w-4.5 h-4.5 text-white transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.006 3.85 1.536 5.94 1.536h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    
                    {/* Active/Online Glow Indicator */}
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  </div>
                )}
                <span className="relative z-10">{isShopifyLanding ? 'Ver Planes' : 'Hablemos'}</span>
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
            <nav aria-label="Navegación móvil" className="flex flex-col gap-8">
              {isShopifyLanding ? (
                <div className="flex flex-col gap-6">
                  <Link href={`${basePath}#inicio`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Inicio</Link>
                  <Link href={`${basePath}#ventajas`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Ventajas</Link>
                  <Link href={`${basePath}#planes`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Planes</Link>
                  <Link href={`${basePath}#faq`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">FAQ</Link>
                </div>
              ) : (
                <>
                  <Link href="/" prefetch={false} onClick={() => setIsMobileMenuOpen(false)} className="group border-b border-zinc-100 pb-6">
                    <span className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] block mb-1 opacity-60">Home</span>
                    <span className="text-4xl font-black text-zinc-900 uppercase tracking-tighter group-hover:text-violet-600 transition-colors">Inicio</span>
                  </Link>

              <div className="space-y-8 pt-2">
                {/* E-commerce */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">E-commerce</span>
                  <div className="grid gap-3">
                    <Link href="/desarrollo-tiendas-shopify-en-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Tiendas Shopify
                    </Link>
                    <Link href="/rediseno-tienda-shopify" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Rediseño Shopify <span className="text-[9px] bg-violet-600 text-white px-2 py-0.5 rounded-full uppercase font-black">NUEVO</span>
                    </Link>
                    <Link href="/migrar-a-shopify" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Migrar a Shopify
                    </Link>
                    <Link href="/desarrollo-tienda-en-linea-woocommerce" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      WooCommerce
                    </Link>
                    <Link href="/tienda-dropshipping-shopify-y-dropi" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Dropshipping
                    </Link>
                    <Link href="/diseno-themes-shopify-personalizados-adobe-xd" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Shopify Themes
                    </Link>
                  </div>
                </div>

                {/* Desarrollo & SEO */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Desarrollo & SEO</span>
                  <div className="grid gap-3">
                    <Link href="/agencia-de-embudos-de-venta-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Embudos de Venta
                    </Link>
                    <Link href="/geo-ai-visibility" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      GEO AI Visibility <span className="text-[9px] bg-violet-600 text-white px-2 py-0.5 rounded-full uppercase">Nuevo</span>
                    </Link>
                    <Link href="/desarrollo-web-nextjs-saas-custom" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Next.js & SaaS
                    </Link>
                    <Link href="/servicios-seo-posicionamiento-google" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      SEO Avanzado
                    </Link>
                    <Link href="/implementacion-ia-conversacional" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      IA Conversacional <span className="text-[9px] bg-violet-600 text-white px-2 py-0.5 rounded-full uppercase">Nuevo</span>
                    </Link>
                    <Link href="/desarrollo-web-corporativo" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Web Corporativa <span className="text-[9px] bg-violet-600 text-white px-2 py-0.5 rounded-full uppercase font-black">Nuevo</span>
                    </Link>
                    <Link href="/desarrollo-paginas-web-pymes-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Sitios Pymes
                    </Link>
                    <Link href="/ley-21719-proteccion-de-datos-personales" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-blue-600 hover:text-blue-700 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Ley 21.719 Protección Datos <span className="text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase font-black">Nuevo</span>
                    </Link>
                  </div>
                </div>

                {/* Especialidades */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Especialidades</span>
                  <div className="grid gap-3">
                    <Link href="/desarrollo-diseno-elearning-tutor-lms" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Academias LMS
                    </Link>
                    <Link href="/diseno-paginas-web-inmobiliaria" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Inmobiliarias
                    </Link>
                    <Link href="/diseno-paginas-web-odontologia" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Odontología
                    </Link>
                  </div>
                </div>

                {/* Complementos Pro */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 block mb-4">Complementos Pro</span>
                  <div className="grid gap-3">
                    <Link href="/complemento-sence-tutor-lms-pro" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-orange-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Plugin Sence Pro
                    </Link>
                    <Link href="/sistema-cotizaciones-intranet-wordpress" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-orange-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Cotizador & Intranet
                    </Link>
                  </div>
                </div>

                {/* Herramientas */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Herramientas</span>
                  <div className="grid gap-3">
                    <Link href="/brief/nuevo-proyecto" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-purple-700 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      Brief UX/UI Ecommerce <span className="text-[9px] bg-purple-600 text-white px-2 py-0.5 rounded-full uppercase font-black">Nuevo</span>
                    </Link>
                    <Link href="/recursos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Centro de Recursos
                    </Link>
                    <Link href="/calculadora-de-campana-meta-ads-facebook" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Calculadora Meta
                    </Link>
                    <Link href="/listas-de-verificacion-shopify-cro-basica" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Checklist CRO
                    </Link>
                    <Link href="/como-estructurar-ficha-de-producto-shopify" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-emerald-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Ficha de Producto CRO <span className="text-[9px] bg-emerald-600 text-white px-2 py-0.5 rounded-full uppercase font-black">Nuevo</span>
                    </Link>
                    <Link href="/comisiones-plataformas-de-pago-para-shopify-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Comisiones Pagos
                    </Link>
                    <Link href="/empresas-de-transporte-y-envios-para-shopify-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Envíos & Logística
                    </Link>
                    <Link href="/integracion-erp-shopify-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Integración ERP
                    </Link>
                    <Link href="/boleta-electronica-facturacion-shopify-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Facturación DTE
                    </Link>
                    <Link href="/cursos-y-talleres-shopify" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Talleres & Cursos
                    </Link>
                    <Link href="/integracion-fintoc-shopify" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-blue-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Fintoc Shopify
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
                <Link href="/mi-cuenta" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 p-5 bg-violet-50 rounded-2xl text-violet-600 font-bold uppercase tracking-widest text-xs flex items-center justify-between">
                  {user ? 'Mi Cuenta Personal' : 'Acceso Clientes'}
                  <User className="w-4 h-4" />
                </Link>
              </div>
                </>
              )}
            </nav>

            <div className="mt-auto pt-10 grid gap-4">
              <a 
                href={isShopifyLanding ? "#planes" : "#"} 
                onClick={(e) => {
                  if (!isShopifyLanding) {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    openWhatsApp();
                  }
                }}
                target={isShopifyLanding ? undefined : undefined} 
                rel={isShopifyLanding ? undefined : undefined} 
                className={`w-full py-4 text-white rounded-2xl font-black uppercase tracking-[0.18em] text-[11px] flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden group active:scale-95 ${
                  isShopifyLanding 
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 shadow-[0_8px_25px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_35px_rgba(219,39,119,0.5)]' 
                    : 'bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-800 shadow-[0_8px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.5)]'
                }`}
              >
                {/* Shine metallic reflection effect */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] -translate-x-[150%] transition-transform duration-1000 ease-out group-hover:translate-x-[150%] pointer-events-none" />

                {!isShopifyLanding && (
                  <div className="relative flex items-center justify-center">
                    <svg className="w-4.5 h-4.5 text-white transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.006 3.85 1.536 5.94 1.536h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    
                    {/* Active/Online Glow Indicator */}
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  </div>
                )}
                <span className="relative z-10">{isShopifyLanding ? 'Ver Planes' : 'Asesor Directo'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
