
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple text-white pt-20 pb-10 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="space-y-6 lg:pr-4">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-black text-white tracking-tighter">webunica<span className="text-brand-green">.cl</span></span>
            </Link>
            
            <p className="text-[14px] leading-relaxed text-white/80 font-normal">
              Agencia líder en Diseño Web Shopify en Chile. Creamos tiendas de alto rendimiento integradas con Transbank, Flow y Bluexpress.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green hover:text-brand-purple transition-colors group">
                <FaInstagram className="w-4 h-4 text-white group-hover:text-brand-purple transition-colors" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green hover:text-brand-purple transition-colors group">
                <FaFacebookF className="w-4 h-4 text-white group-hover:text-brand-purple transition-colors" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green hover:text-brand-purple transition-colors group">
                <FaLinkedinIn className="w-4 h-4 text-white group-hover:text-brand-purple transition-colors" />
              </Link>
            </div>
          </div>

          {/* Explorar Col */}
          <div className="space-y-6 lg:pl-8">
            <div className="flex items-center gap-4">
              <h4 className="text-[16px] font-bold tracking-wide text-white">Servicios</h4>
              <div className="h-[2px] w-8 bg-brand-green"></div>
            </div>
            <ul className="space-y-4 text-[14px] text-white/80 font-medium">
              {[
                { name: "Diseño Shopify", path: "/diseno-web-shopify-chile" },
                { name: "Planes", path: "/planes" },
                { name: "Portafolio", path: "/portafolio" },
                { name: "Blog Ecommerce", path: "/blog" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="hover:text-brand-green transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h4 className="text-[16px] font-bold tracking-wide text-white">Contacto</h4>
              <div className="h-[2px] w-8 bg-brand-green"></div>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand-green" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.1em] mb-0.5">Email</p>
                  <p className="text-[13px] text-white/90 font-medium tracking-wide">contacto@webunica.cl</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <a href="https://wa.me/56964130601" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-brand-green shrink-0 flex items-center justify-center transition-colors">
                    <FaWhatsapp className="w-4 h-4 text-brand-green group-hover:text-brand-purple transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-green uppercase tracking-[0.1em] mb-0.5">WhatsApp</p>
                    <p className="text-[13px] text-white/90 font-medium tracking-wide group-hover:text-brand-green transition-colors">+56 9 6413 0601</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.1em] mb-0.5">Ubicación</p>
                  <p className="text-[13px] text-white/90 font-medium tracking-wide">Santiago, Chile</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Suscríbete Col */}
          <div className="space-y-6 lg:pl-4">
            <div className="flex items-center gap-4">
              <h4 className="text-[16px] font-bold tracking-wide text-white">Newsletter</h4>
              <div className="h-[2px] w-8 bg-brand-green"></div>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed font-medium">
              Tips de ecommerce y actualizaciones de Shopify directamente en tu inbox.
            </p>
            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="tu@email.com..." 
                className="w-full h-11 bg-white/10 border-none rounded-lg pl-4 pr-12 text-[13px] outline-none placeholder:text-white/40 focus:ring-1 focus:ring-brand-green transition-all font-medium text-white"
              />
              <button className="absolute right-1 top-1 bottom-1 w-9 bg-brand-green rounded-[6px] flex items-center justify-center text-brand-purple hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/50 font-medium tracking-wide">
            © {currentYear} webunica.cl. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-white/50 font-medium tracking-wide">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
