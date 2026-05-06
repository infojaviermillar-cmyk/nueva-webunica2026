import Link from 'next/link';
import { Metadata } from 'next';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes Shopify Chile | Guía Completa 2026',
  description: 'Todo lo que necesitas saber para lanzar tu tienda Shopify en Chile: métodos de pago, costos, envíos, rut de empresa y más.',
};

export default function Page() {
  const shopifyFaqs = [
    {
      question: "¿Es necesario tener RUT de empresa para vender en Shopify Chile?",
      answer: "No es obligatorio para empezar, puedes vender como persona natural. Sin embargo, para contratar pasarelas de pago locales (como Flow o Mercado Pago) y emitir boletas/facturas legales, es altamente recomendable tener iniciación de actividades para formalizar tu negocio."
    },
    {
      question: "¿Qué pasarelas de pago funcionan mejor en Chile?",
      answer: "Las más robustas actualmente son Mercado Pago, Flow y Pago Fácil. Todas se integran perfectamente con Shopify y permiten aceptar tarjetas de crédito, débito y transferencias bancarias locales."
    },
    {
      question: "¿Cuánto cuesta Shopify mensualmente en Chile?",
      answer: "El plan Basic cuesta aproximadamente USD $25/mes. A esto debes sumar las comisiones por transacción (si no usas Shopify Payments, que aún no está disponible nativamente como procesador local en Chile) y el costo de las apps adicionales que decidas instalar."
    },
    {
      question: "¿Cómo se gestionan los envíos con Starken, Blue Express o ChilePost?",
      answer: "Existen aplicaciones chilenas excelentes como Shipit, Enviame o integraciones directas que automatizan la creación de etiquetas y el cálculo de tarifas según la zona de Chile, permitiendo que el cliente vea el costo real en el carrito."
    },
    {
      question: "¿Shopify cobra comisiones adicionales por venta?",
      answer: "Si utilizas pasarelas externas (como Mercado Pago o Flow), Shopify cobra una comisión adicional por transacción (0.5% a 2% según tu plan). Esto se suma a la comisión que te cobre tu pasarela de pago local."
    },
    {
      question: "¿Puedo migrar mi tienda actual de WooCommerce o Wix a Shopify?",
      answer: "Sí, es un proceso común. Podemos migrar tus productos, clientes e historial de pedidos. La principal ventaja es que dejarás de preocuparte por servidores caídos o actualizaciones de plugins que rompen tu web."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[20vh] pb-24">

      {/* Hero FAQ */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Centro de Conocimiento Shopify 2026
        </div>
        <h1 className="text-[2.2rem] xs:text-4xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.9] mb-8 break-words">
          Preguntas <span className="text-violet-600 italic font-serif lowercase font-light text-[2rem] xs:text-4xl lg:text-8xl">frecuentes</span> <br/>sobre Shopify Chile
        </h1>

        <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
          Resolvemos todas tus dudas técnicas y comerciales para que lances tu tienda online con éxito en el mercado chileno.
        </p>

      </section>

      {/* FAQ Grid */}
      <FAQSection 
        faqs={shopifyFaqs}
        title="Dudas Técnicas y Comerciales"
        description="Seleccionamos las preguntas que más nos hacen nuestros clientes al iniciar su proyecto."
        ctaTitle="¿Aún tienes dudas específicas?"
        ctaDescription="Cada negocio es un mundo. Agenda una asesoría de 15 minutos para analizar la factibilidad de tu proyecto Shopify."
        ctaLabel="Agendar Asesoría Técnica"
      />

      {/* Trust Blocks */}
      <section className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center uppercase">
        <div className="p-10 border border-zinc-100 bg-zinc-50 rounded-[3rem]">
          <span className="text-3xl mb-4 block">📈</span>
          <h3 className="text-zinc-950 font-bold mb-2 tracking-widest text-xs">Ventas 24/7</h3>
          <p className="text-zinc-600 text-[10px] font-medium leading-relaxed">Tu tienda nunca duerme, automatiza tus ingresos.</p>
        </div>
        <div className="p-10 border border-zinc-100 bg-zinc-50 rounded-[3rem]">
          <span className="text-3xl mb-4 block">🔒</span>
          <h3 className="text-zinc-950 font-bold mb-2 tracking-widest text-xs">Seguridad Pro</h3>
          <p className="text-zinc-600 text-[10px] font-medium leading-relaxed">Certificados SSL incluidos y máxima protección de datos.</p>
        </div>
        <div className="p-10 border border-zinc-100 bg-zinc-50 rounded-[3rem]">
          <span className="text-3xl mb-4 block">🚀</span>
          <h3 className="text-zinc-950 font-bold mb-2 tracking-widest text-xs">Escalabilidad</h3>
          <p className="text-zinc-600 text-[10px] font-medium leading-relaxed">Desde 1 hasta 100,000 productos sin perder rendimiento.</p>
        </div>
      </section>


      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="bg-violet-600 rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Deja de dudar y <br/>empieza a <span className="italic font-serif lowercase font-light opacity-80">vender.</span>
          </h2>
          <Link 
            href="/contacto" 
            className="inline-block px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-zinc-100 transition-all shadow-2xl active:scale-95"
          >
            Lanzar mi tienda ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

