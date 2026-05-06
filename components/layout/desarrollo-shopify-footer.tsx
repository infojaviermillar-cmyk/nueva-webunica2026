import Link from 'next/link';
import CompaniesCarousel from '@/components/ui/companies-carousel';

export default function DesarrolloShopifyFooter() {
  return (
    <>
      <CompaniesCarousel />
      <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white tracking-tighter leading-none text-2xl">desarrolloshopify.cl</span>
                <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest leading-tight">Shopify Partners</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="#inicio" className="text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Inicio</Link>
              <Link href="#ventajas" className="text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Ventajas</Link>
              <Link href="#planes" className="text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">Planes</Link>
              <Link href="#faq" className="text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">FAQ</Link>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
            <p>© {new Date().getFullYear()} DesarrolloShopify.cl - Operado por Webunica. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 hidden sm:inline-block">Santiago, Chile</span>
              <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800" dangerouslySetInnerHTML={{ __html: '<!--email_off-->consultas@webunica.cl<!--/email_off-->' }} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
