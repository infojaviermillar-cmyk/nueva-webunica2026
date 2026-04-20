import Link from 'next/link';
import Image from 'next/image';
import LeadButton from '@/components/ui/lead-button';

export const metadata = {
  title: 'Shopify vs Jumpseller vs WooCommerce Chile 2026: ¿Cuál es mejor?',
  description: 'Análisis profundo sobre las mejores plataformas de e-commerce en Chile. Comparamos Shopify, Jumpseller y WooCommerce para ayudarte a elegir.',
};

export default function ComparisonPage() {
  const platforms = [
    {
      name: "Shopify",
      speed: "Excelente (SaaS)",
      fees: "Moderadas",
      difficulty: "Baja",
      growth: "Infinito",
      bestFor: "Marcas que escalan globalmente",
      verdict: "Ganador indiscutido por estabilidad y ecosistema de apps."
    },
    {
      name: "Jumpseller",
      speed: "Buena (SaaS)",
      fees: "Bajas",
      difficulty: "Muy Baja",
      growth: "Limitado",
      bestFor: "Emprendedores locales iniciales",
      verdict: "Excelente para empezar, pero se queda corto para marcas medianas."
    },
    {
      name: "WooCommerce",
      speed: "Variable (Depends on Host)",
      fees: "Cero (Directas)",
      difficulty: "Media-Alta",
      growth: "Escalable",
      bestFor: "Negocios con necesidades de personalización extrema",
      verdict: "Requiere mucho mantenimiento y seguridad técnica."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 pt-[20vh] pb-32 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <h1 className="text-4xl lg:text-7xl font-black text-zinc-950 uppercase tracking-tighter mb-8 leading-[0.9]">
          Shopify <span className="text-zinc-300">vs</span> Jumpseller <span className="text-zinc-300">vs</span> WooCommerce
        </h1>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed mb-10 text-pretty">
          Elegir la plataforma equivocada puede costar años de crecimiento. Analizamos la realidad del e-commerce en Chile para este 2026.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32 overflow-x-auto">
        <div className="min-w-[800px] bg-white rounded-[4rem] border border-zinc-100 shadow-2xl p-12">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="pb-8 font-black uppercase text-xs tracking-widest text-zinc-400">Característica</th>
                {platforms.map(p => (
                  <th key={p.name} className="pb-8 font-black uppercase text-lg text-zinc-950">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {[
                { label: 'Velocidad de Carga', key: 'speed' },
                { label: 'Comisiones / Costos', key: 'fees' },
                { label: 'Dificultad Técnica', key: 'difficulty' },
                { label: 'Potencial de Crecimiento', key: 'growth' },
                { label: 'Ideal para', key: 'bestFor' }
              ].map(row => (
                <tr key={row.label}>
                  <td className="py-8 font-bold text-zinc-400 uppercase text-[10px] tracking-wider">{row.label}</td>
                  {platforms.map(p => (
                    <td key={p.name} className="py-8 text-zinc-800 font-medium">{(p as any)[row.key]}</td>
                  ))}
                </tr>
              ))}
              <tr className="bg-violet-50/50">
                <td className="py-10 px-6 font-black text-violet-600 uppercase text-xs tracking-widest">Veredicto Final</td>
                {platforms.map(p => (
                  <td key={p.name} className="py-10 px-6 italic text-zinc-900 font-bold leading-tight">{p.verdict}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Convincing Section */}
      <section className="max-w-4xl mx-auto px-6 text-center">
         <div className="p-12 lg:p-24 bg-zinc-950 rounded-[5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent)]" />
            <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
              ¿Convencido de que <br/><span className="text-violet-400 italic font-serif lowercase font-light">Shopify es el camino?</span>
            </h2>
            <p className="text-zinc-400 mb-14 text-xl font-light">
              Lleva tu marca al siguiente nivel con nuestro servicio de diseño y desarrollo experto.
            </p>
            <Link href="/desarrollo-tiendas-shopify-en-chile">
              <LeadButton className="px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all">
                Ver nuestro Servicio Shopify Expert
              </LeadButton>
            </Link>
         </div>
      </section>
    </main>
  );
}