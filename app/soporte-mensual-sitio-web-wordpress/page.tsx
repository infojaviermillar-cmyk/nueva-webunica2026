import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Soporte y Mantenimiento Mensual WordPress en Chile',
  description: 'Planes de soporte técnico continuo para portales WordPress y WooCommerce. Externaliza el mantenimiento y asegura uptime y seguridad.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Soporte Mensual para <span className="text-[#21759b] italic font-serif lowercase font-light">WordPress</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Un WordPress o WooCommerce sin mantenimiento es una bomba de tiempo tecnológica. Asegura tu negocio con actualizaciones controladas, respaldos diarios en la nube forense y firewall corporativo.
        </p>
        <LeadButton className="px-12 py-6 bg-[#21759b] text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px]">
          Cotizar Plan de Soporte
        </LeadButton>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-zinc-400 font-light leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 mt-12">¿Por qué fallan tantos sitios WordPress?</h2>
        <p>WordPress impulsa el 40% de internet, lo que lo hace el objetivo principal de bots maliciosos. La mayoría de los ataques no son dirigidos a ti personalmente; son scripts que buscan versiones desactualizadas de plugins, temas o PHP.</p>
        <p>Tener nuestro equipo de desarrollo asegurando tu sitio significa que cada actualización de plugin es probada en un entorno "Staging" (clon) antes de aplicarse a tu sitio en vivo, eliminando los riesgos de que una actualización rompa la interfaz visual de tus clientes.</p>
      </section>
    </main>
  );
}
