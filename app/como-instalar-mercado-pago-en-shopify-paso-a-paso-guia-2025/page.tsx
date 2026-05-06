import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Guía 2026: Cómo Configurar Mercado Pago en Shopify Chile',
  description: 'Aprende paso a paso cómo conectar e instalar la pasarela de Mercado Pago Checkout Pro en tu tienda Shopify en Chile para aceptar tarjetas y transferencias.',
};

export default function Page() {
  const steps = [
    {
      step: "01",
      title: "Crear y Validar tu Cuenta",
      description: "Abre una cuenta de empresa en Mercado Pago Chile. Asegúrate de verificar tu identidad y asociar tu cuenta bancaria (RUT de empresa o persona natural) para que el dinero pueda ser transferido.",
      alert: "Debes tener tu cuenta Validada antes de solicitar las credenciales."
    },
    {
      step: "02",
      title: "Generar Credenciales (API Keys)",
      description: "En el panel de desarrolladores de Mercado Pago, ve a 'Tus Aplicaciones'. Crea una nueva y entra a 'Credenciales de Producción'. Necesitarás copiar dos datos clave: el Public Key y el Access Token.",
      code: "Public Key: APP_USR-xxxxxx...\nAccess Token: APP_USR-xxxxxx-xxxxxx..."
    },
    {
      step: "03",
      title: "Instalar App en Shopify",
      description: "Ve a la Shopify App Store y busca 'Mercado Pago Checkout Pro'. Instala la aplicación oficial. No te confundas con integraciones de terceros; busca la desarrollada por Mercado Libre.",
      alert: "Configura las cuotas sin interés si lo deseas ofrecer a tus clientes."
    },
    {
      step: "04",
      title: "Conectar y Pruebas",
      description: "Pega el Public Key y el Access Token en la configuración de la App dentro de Shopify. Antes de lanzar, haz una compra real de $10 CLP para verificar que el dinero llegue correctamente a tu panel."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-[22vh] lg:pt-48 pb-24 overflow-hidden font-sans">
      {/* Hero Document Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">
            Documentación Técnica
          </div>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Update 2026</span>
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Conectar Mercado <span className="text-blue-500 italic font-serif lowercase font-light px-2">Pago</span> en Shopify
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed">
          La pasarela de pagos líder en Latinoamérica. Con esta guía podrás aceptar Tarjetas de Crédito, Débito (Redcompra) y usar tus cuotas sin interés directamente en el checkout de tu tienda Shopify.
        </p>
      </section>

      {/* Guide Steps */}
      <section className="max-w-4xl mx-auto px-6 mb-32 relative">
        <div className="absolute left-[30px] top-0 bottom-0 w-px bg-zinc-800/50 hidden md:block" />
        
        <div className="space-y-12 relative z-10">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-xl font-black text-white shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  {item.step}
                </div>
              </div>
              <div className="pt-2 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light mb-6">{item.description}</p>
                
                {item.alert && (
                  <div className="bg-amber-500/10 border-l-2 border-amber-500 p-4 mb-6">
                    <p className="text-amber-500 text-sm font-bold">{item.alert}</p>
                  </div>
                )}
                
                {item.code && (
                  <div className="bg-[#0D1117] border border-zinc-800 p-4 rounded-xl font-mono text-sm text-zinc-300 overflow-x-auto">
                    <pre><code>{item.code}</code></pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frustration / Commercial CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-900 via-zinc-900 to-zinc-950 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                ¿Las APIs te dan <br/>
                <span className="text-blue-400 italic font-serif lowercase font-light">dolor de cabeza?</span>
              </h2>
              <p className="text-zinc-300 font-light leading-relaxed text-lg">
                La configuración de pasarelas, el diseño de carritos de alta conversión y la sincronización de logística puede tomar semanas si no eres experto. 
              </p>
            </div>
            
            <div className="lg:w-1/2 flex flex-col items-start lg:items-center w-full">
              <div className="bg-black/50 p-8 rounded-3xl border border-white/10 w-full mb-8">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Lo que hacemos en Webunica:</h4>
                <ul className="space-y-3 text-zinc-400 text-sm font-light">
                  <li className="flex gap-2">✔️ Construimos tu tienda Shopify en 2 semanas.</li>
                  <li className="flex gap-2">✔️ Configuramos Mercado Pago y Flow.</li>
                  <li className="flex gap-2">✔️ Instalamos envíos con Starken/Shipit.</li>
                  <li className="flex gap-2">✔️ Lo entregamos llave en mano.</li>
                </ul>
              </div>
              <LeadButton className="w-full px-8 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.15em] text-[11px] hover:bg-blue-700 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                Delegar el Desarrollo a un Experto
              </LeadButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


