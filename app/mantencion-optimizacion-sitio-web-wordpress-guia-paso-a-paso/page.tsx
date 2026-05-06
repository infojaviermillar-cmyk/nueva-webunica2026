import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Guía: Cómo optimizar y mantener WordPress (Paso a Paso)',
  description: 'Tutorial detallado 2026 para acelerar tu WooCommerce, optimizar base de datos, configurar caché de Redis y asegurar tu panel wp-admin.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest rounded-full">
            Technical Tutorial
          </div>
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Optimización <span className="text-amber-500 italic font-serif lowercase font-light px-2">WordPress</span> Guía Total
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed">
          Si tu puntaje en Google PageSpeed es trágico y tu panel de administrador demora segundos en cargar, esta es la rutina forense de optimización que aplicamos a nuestros clientes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-32 space-y-12 relative z-10">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-3">1. Caché de Objetos (Memcached / Redis)</h3>
          <p className="text-zinc-400 font-light mb-4">WordPress consulta la base de datos por los mismos fragmentos de texto cientos de veces. Activar Redis a nivel servidor (si tu hosting lo permite) es el salto de velocidad más drástico que puedes dar.</p>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-3">2. WP-Cron a nivel Servidor</h3>
          <p className="text-zinc-400 font-light mb-4">El cron por defecto de WP se activa cada vez que un usuario entra a tu web, matando el Time To First Byte (TTFB). Desactívalo en wp-config.php y configuralo a nivel cPanel o CloudPanel cada 15 minutos.</p>
          <div className="bg-[#0D1117] p-4 rounded-xl text-sm text-green-400 font-mono overflow-x-auto">
            define('DISABLE_WP_CRON', true);
          </div>
        </div>

        <div className="mt-12 p-10 bg-zinc-900/50 rounded-[3rem] text-center border dashed border-zinc-700">
          <h3 className="text-white font-bold text-xl mb-4">¿Muy técnico para ti?</h3>
          <p className="text-zinc-400 mb-6 text-sm">Déjanos a nosotros auditar, limpiar e implementar Redis, PHP 8.2 y reglas de Cloudflare estrictas en tu entorno de producción.</p>
          <LeadButton className="px-8 py-4 bg-white text-black rounded-xl font-bold text-xs uppercase shadow-xl transition-all hover:scale-105 hover:bg-zinc-200">
            Hacer Auditoría Externa
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
