import Link from 'next/link';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="group relative block w-fit">
              {/* Logo con Máscara de Degradado - Tamaño Reducido */}
              <div 
                className="h-7 w-[110px] bg-gradient-to-r from-violet-400 via-violet-600 to-indigo-600 transition-transform duration-700 group-hover:scale-110"
                style={{
                  maskImage: 'url(/logo-webunica.png.webp)',
                  WebkitMaskImage: 'url(/logo-webunica.png.webp)',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain'
                }}
              />
            </Link>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Agencia de desarrollo web y eCommerce en Chile. Creamos plataformas rápidas, escalables y orientadas a resultados comerciales.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://web.facebook.com/webunicachile" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://www.instagram.com/webunicachile/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Servicios Digitales</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/desarrollo-web-nextjs-saas-custom" className="text-sm font-bold text-violet-400 hover:text-white transition-colors pb-1 inline-block">
                  Next.js & SaaS a Medida
                </Link>
              </li>
              <li>
                <Link href="/desarrollo-tiendas-shopify-chile" className="text-sm text-zinc-400 hover:text-white transition-colors pb-1 inline-block">
                  Diseño Web Shopify
                </Link>
              </li>
              <li>
                <Link href="/desarrollo-tienda-en-linea-woocommerce" className="text-sm text-zinc-400 hover:text-white transition-colors pb-1 inline-block">
                  Tiendas WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/desarrollo-paginas-web-pymes-chile" className="text-sm text-zinc-400 hover:text-white transition-colors pb-1 inline-block">
                  Páginas Web PYMES
                </Link>
              </li>
            </ul>
          </div>

          {/* New Cities Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Presencia Nacional</h4>
            <ul className="space-y-3">
              {[
                { n: 'Santiago', s: 'santiago' },
                { n: 'Concepción', s: 'concepcion' },
                { n: 'Temuco', s: 'temuco' },
                { n: 'Valdivia', s: 'valdivia' },
                { n: 'Puerto Montt', s: 'puerto-montt' },
                { n: 'Antofagasta', s: 'antofagasta' },
                { n: 'Iquique', s: 'iquique' },
                { n: 'La Serena', s: 'la-serena' },
                { n: 'Rancagua', s: 'rancagua' },
                { n: 'Osorno', s: 'osorno' },
                { n: 'Ancud', s: 'ancud' },
                { n: 'Punta Arenas', s: 'punta-arenas' },
              ].map((c) => (
                <li key={c.s}>
                  <Link href={`/diseno-paginas-web/${c.s}`} className="text-[12px] text-zinc-500 hover:text-white transition-colors">
                    Diseño Web {c.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Recursos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/portafolio" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors pb-1 inline-block">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/calculadora-de-campana-meta-ads-facebook/" className="text-sm text-zinc-400 hover:text-white transition-colors pb-1 inline-block">
                  Calculadora Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/soporte-mensual-tienda-shopify/" className="text-sm text-zinc-400 hover:text-white transition-colors pb-1 inline-block">
                  Soporte Shopify
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <svg className="w-4 h-4 text-violet-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@webunica.cl" className="text-sm hover:text-white transition-colors">info@webunica.cl</a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <svg className="w-4 h-4 text-[#25d366] mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                <WhatsAppButton className="text-sm hover:text-[#25d366] transition-colors">+56 9 8441 0379</WhatsAppButton>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} WebUnica. Todos los derechos reservados.
            </p>
            <span className="text-lg md:text-xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-600 to-indigo-400 select-none cursor-default hover:brightness-110 transition-all">
              Desarrollo React por Javier Millar V.
            </span>
          </div>
          
          <div className="flex gap-6">
            <Link href="/terminos-y-condiciones-de-servicios/" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Términos
            </Link>
            <Link href="/licencia-productos/" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Licencias
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
