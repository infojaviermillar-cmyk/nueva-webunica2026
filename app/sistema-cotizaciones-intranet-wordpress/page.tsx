import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { 
  FileText, 
  Users, 
  Lock, 
  Percent, 
  LayoutDashboard, 
  CheckCircle2,
  Zap,
  ShieldCheck,
  BarChart,
  Download,
  CreditCard,
  Settings,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Sistema de Cotizaciones e Intranet para WordPress | Webunica Chile 2026',
  description: 'Software de cotizaciones profesional para WordPress con Intranet de clientes y sistema de descuentos dinámicos. Optimiza tus ventas B2B y gestión comercial.',
  keywords: 'sistema cotizaciones wordpress, intranet clientes wordpress, plugin cotizaciones chile, gestion de presupuestos wordpress, descuentos dinamicos wordpress, area privada clientes web',
};

export default function QuotationSystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sistema de Cotizaciones e Intranet Pro para WordPress",
    "description": "Plataforma integral para la gestión de presupuestos, área privada de clientes y reglas de descuento para sitios WordPress.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "WordPress",
    "provider": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "35"
    }
  };


  const quotationFaqs = [
    {
      question: "¿Se integra con WooCommerce?",
      answer: "Totalmente. Podemos vincularlo con tu catálogo de productos de WooCommerce para que las cotizaciones usen precios y stock en tiempo real, o bien usarlo como un sistema independiente para servicios."
    },
    {
      question: "¿Puedo personalizar el diseño de las cotizaciones PDF?",
      answer: "Sí, diseñamos la plantilla de PDF con tu marca, logo, términos legales y firma digital para que cada presupuesto que envíes proyecte profesionalismo absoluto."
    },
    {
      question: "¿El cliente puede aprobar la cotización online?",
      answer: "Correcto. El cliente recibe un link único o entra a su Intranet, revisa la propuesta y puede hacer clic en 'Aprobar'. El sistema te notifica al instante y puede generar la orden de pago."
    },
    {
      question: "¿Es seguro para manejar datos de clientes?",
      answer: "Implementamos protocolos de seguridad robustos y encriptación de datos en la Intranet, asegurando que cada cliente solo vea su propia información financiera y comercial."
    }
  ];

  const plans = [
    {
      name: "Cotizador Business",
      price: "$280.000",
      originalPrice: "$350.000",
      highlight: "✓ Ideal para Ventas B2B",
      desc: "Gestión profesional de presupuestos con envío de PDF automático.",
      features: [
        "Generador de Cotizaciones PDF",
        "Gestión de Estados (Enviado/Visto)",
        "Notificaciones vía Email",
        "Plantilla Corporativa Única",
        "Soporte por 12 meses",
        "Instalación en WordPress"
      ],
      cta: "Comenzar ahora"
    },
    {
      name: "Intranet Pro + Descuentos",
      price: "$460.000",
      originalPrice: "$620.000",
      highlight: "🚀 El más completo",
      recommended: true,
      desc: "Área privada para clientes con historial y lógica de descuentos avanzada.",
      features: [
        "Todo lo del Plan Business, más:",
        "Intranet de Usuarios Privada",
        "Sistema de Descuentos por Perfil",
        "Historial de Descargas PDF",
        "Botón de Aprobación Online",
        "Dashboard de Ventas para Admin"
      ],
      cta: "Adquirir Sistema Pro"
    },
    {
      name: "Enterprise Custom",
      price: "Consultar",
      highlight: "🏢 Soluciones a Medida",
      desc: "Desarrollo de funcionalidades específicas e integración con ERP/CRM.",
      features: [
        "Integración con ERP/SAP/CRM",
        "Reglas de Negocio Complejas",
        "Múltiples Vendedores/Agentes",
        "Firma Digital Avanzada",
        "Soporte Prioritario 24/7",
        "Mantenimiento Proactivo"
      ],
      cta: "Hablar con Consultor"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <main className="pt-[22vh] lg:pt-[12vh]">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-500/10 border border-violet-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-400 uppercase">Productividad Comercial B2B</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Intranet & <br/> <span className="text-violet-500 italic font-serif lowercase font-light">Cotizaciones Pro</span> <br/> para WordPress.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light text-pretty">
                Transforma tu sitio web en una <strong className="text-white">herramienta de ventas imparable</strong>. Área privada para clientes, generación de presupuestos y gestión de descuentos inteligentes en una sola plataforma.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center">
                  Digitalizar mis Ventas
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Asesoría Técnica
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="bg-zinc-900 border border-white/10 rounded-[4rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
                <div className="space-y-6">
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all">
                      <LayoutDashboard className="w-12 h-12 text-violet-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">Intranet de Clientes</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Historial de presupuestos y facturación.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all translate-x-8">
                      <Percent className="w-12 h-12 text-violet-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">Descuentos Inteligentes</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Lógica de precios por tipo de cliente.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all">
                      <FileText className="w-12 h-12 text-violet-500" />
                      <div>
                         <h4 className="font-black text-sm uppercase tracking-tighter">PDF Pro Automático</h4>
                         <p className="text-[10px] text-zinc-500 font-light">Diseño corporativo en cada envío.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients / Social Proof */}
        <section className="py-16 border-y border-white/5 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 text-center mb-10">Empresas que confían en nuestra ingeniería B2B</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Skillnest.la</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Reaprende.cl</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">IpsDatax</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">Educontable</span>
               <span className="text-xl lg:text-2xl font-black tracking-tighter text-white uppercase italic">MeCapacito</span>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white rounded-[4rem] mx-4 text-zinc-900 relative overflow-hidden">
           <div className="absolute top-10 right-10 rotate-12 z-20 hidden md:block">
              <div className="bg-violet-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 border-4 border-white">
                 <span className="text-[10px] font-black uppercase tracking-tighter">Paga hasta</span>
                 <span className="text-3xl font-black">6</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-violet-200">Cuotas sin interés</span>
              </div>
           </div>

           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 border border-violet-100 rounded-full mb-6">
                    <Zap className="w-4 h-4 text-violet-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-violet-600">Inversión en Productividad</span>
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Planes <br/> <span className="text-violet-600 italic font-serif lowercase font-light">Ecosistema Pro</span></h2>
                 <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-8">Automatiza tus presupuestos y fideliza a tus clientes con un área privada exclusiva.</p>
                 <p className="text-xs font-black text-violet-600 uppercase tracking-widest">Aprovecha hasta 6 cuotas sin interés con todas las tarjetas Bancarias</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-zinc-50 rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] flex flex-col h-full ${p.recommended ? 'border-violet-500 shadow-3xl shadow-violet-500/10' : 'border-transparent hover:border-violet-100'}`}>
                      {p.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                          Recomendado B2B
                        </div>
                      )}
                      
                      <div className="mb-8">
                        <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-zinc-950">{p.name}</h3>
                        <p className="text-[10px] font-bold text-violet-600 uppercase mb-8 tracking-widest">{p.highlight}</p>
                        
                        <div className="mb-6">
                          {p.originalPrice && (
                            <div className="text-xs text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + IVA</div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-zinc-950">{p.price}</span>
                            <span className="text-[10px] text-zinc-500 font-bold uppercase ml-1">+ IVA</span>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-500 font-light leading-relaxed">{p.desc}</p>
                      </div>

                      <ul className="space-y-4 mb-12 flex-grow">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-xs text-zinc-600 flex gap-3 font-medium">
                              <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                              {f}
                           </li>
                         ))}
                      </ul>
                      
                      <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${p.recommended ? 'bg-violet-600 text-white shadow-violet-600/20 hover:bg-violet-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                        {p.cta}
                      </LeadButton>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Feature Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6">¿Por qué usar un <br/><span className="text-violet-500 italic">Cotizador con Intranet?</span></h2>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5 hover:border-violet-500/30 transition-all">
              <Lock className="w-12 h-12 text-violet-500 mb-6" />
              <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Área Privada Segura</h4>
              <p className="text-zinc-500 font-light leading-relaxed">Cada cliente accede solo a sus datos. Proporciona un entorno profesional para descargar facturas y presupuestos.</p>
            </div>
            <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5 hover:border-violet-500/30 transition-all">
              <Percent className="w-12 h-12 text-violet-500 mb-6" />
              <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Reglas de Descuento</h4>
              <p className="text-zinc-500 font-light leading-relaxed">Configura descuentos automáticos para clientes frecuentes o mayoristas, reduciendo el trabajo manual administrativo.</p>
            </div>
            <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5 hover:border-violet-500/30 transition-all">
              <BarChart className="w-12 h-12 text-violet-500 mb-6" />
              <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Métricas de Venta</h4>
              <p className="text-zinc-500 font-light leading-relaxed">Analiza qué cotizaciones se aprueban más rápido y qué productos tienen mayor demanda en tus presupuestos.</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-fuchsia-700 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-6xl font-black text-white mb-10 tracking-tight uppercase leading-[0.85]">
                   ¿Listo para profesionalizar <br/> <span className="italic font-serif lowercase font-light text-violet-100">tu gestión comercial?</span>
                </h2>
                <p className="text-violet-100/80 text-xl mb-14 max-w-xl mx-auto font-light leading-relaxed">
                  Implementamos tu sistema de cotizaciones en tiempo récord. Dale a tus clientes el servicio que merecen.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-14 py-7 bg-white text-violet-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                    Cotizar mi Sistema Pro
                  </LeadButton>
                  <WhatsAppButton className="px-14 py-7 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                    Hablar con un Experto
                  </WhatsAppButton>
                </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32">
           <FAQSection 
             faqs={quotationFaqs} 
             title="Dudas sobre el Cotizador"
             description="Todo lo que necesitas saber sobre la integración de intranet y presupuestos."
           />
        </div>
      </main>
    </div>
  );
}
