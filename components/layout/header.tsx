"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/context/contact-modal-context';
import { supabase } from '@/lib/supabase/client';
import { User, LogIn, ShoppingBag } from 'lucide-react';

export default function Header({ domain = '' }: { domain?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/context/contact-modal-context';
import { supabase } from '@/lib/supabase/client';
import { User, LogIn, ShoppingBag } from 'lucide-react';

export default function Header({ domain = '' }: { domain?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
    '/tienda-dropshipping-shopify-y-dropi'
  ];

  const isDarkHero = darkPages.includes(pathname);
  const isLightHero = lightPages.includes(pathname);
  const isShopifyLanding = pathname === '/landing-shopify-emd' || domain.includes('desarrolloshopify.cl');
  
  const textColor = scrolled 
    ? 'text-zinc-900' 
    : (isDarkHero ? 'text-white' : (isLightHero ? 'text-violet-600' : 'text-zinc-900'));

  const hoverColor = isDarkHero && !scrolled ? 'hover:text-violet-400' : 'hover:text-violet-700';

                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      SEO Avanzado
                    </Link>
                    <Link href="/desarrollo-paginas-web-pymes-chile" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-800 hover:text-violet-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Sitios Pymes
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
