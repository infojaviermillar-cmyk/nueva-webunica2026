import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Servicio de Modificaciones y Cambios en WordPress',
  description: 'Desarrolladores expertos para modificar themes, crear plugins a medida y rediseñar sitios web en WordPress y Elementor.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Configuramos o modfiicamos <br/><span className="text-[#21759b] italic font-serif lowercase font-light">tu WordPress</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          ¿Compraste una plantilla en ThemeForest y no logras configurarla? ¿Necesitas agregar un área de miembros, modificar el header o mejorar el WooCommerce? Somos tu equipo técnico as-a-service.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-800 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px] border border-white/10 hover:bg-zinc-700">
          Contar tu proyecto
        </LeadButton>
      </section>

      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Rediseño con Elementor PRO</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Limpiamos tu antiguo código y maquetamos con builders modernos para que, una vez entregado, puedas modificar tus textos sin depender de nosotros.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Integración de Plugins</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Sistemas de reserva, calendarios (Booking), cursos en línea (LMS) y suscripciones. Instalamos, configuramos la lógica de negocio y traducimos el plugin.</p>
        </div>
      </section>
    </main>
  );
}
