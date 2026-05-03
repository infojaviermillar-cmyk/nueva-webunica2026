import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Webunica Chile 2026',
  description: 'Conoce cómo protegemos tus datos personales y la información de tu negocio en Webunica.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 pb-20">
      <main className="max-w-4xl mx-auto px-6 pt-[22vh] lg:pt-48 lg:pt-40">
        <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-zinc-100">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-10 text-zinc-950">
            Política de <br/> <span className="text-violet-600 italic font-serif lowercase font-light">Privacidad</span>
          </h1>
          
          <p className="text-zinc-500 mb-12 font-medium">Última actualización: 01 de Mayo, 2026</p>
          
          <div className="space-y-12 text-zinc-600 leading-relaxed font-light text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">1. Recolección de Información</h2>
              <p>
                En Webunica recolectamos información personal mínima necesaria para la prestación de nuestros servicios, incluyendo nombres, correos electrónicos, números de teléfono y datos de facturación. También recolectamos datos técnicos anónimos mediante cookies para mejorar la experiencia de usuario en nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">2. Uso de los Datos</h2>
              <p>
                Los datos recolectados se utilizan exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestionar y ejecutar los proyectos contratados.</li>
                <li>Enviar comunicaciones relacionadas con el servicio o soporte técnico.</li>
                <li>Cumplir con obligaciones legales y contables.</li>
                <li>Enviar boletines o promociones (solo si el cliente ha dado su consentimiento explícito).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">3. Protección de la Información</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la alteración o la destrucción. El acceso a la información personal está restringido a colaboradores que necesitan conocer esos datos para operar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">4. Compartir Información con Terceros</h2>
              <p>
                Webunica <strong className="text-zinc-950">no vende ni alquila sus datos personales</strong> a terceros. Solo compartiremos información con proveedores de servicios de confianza (como plataformas de pago o servicios de hosting) necesarios para la ejecución del proyecto, siempre bajo estrictos acuerdos de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">5. Derechos del Usuario</h2>
              <p>
                Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, puede enviarnos una solicitud formal a través de nuestros canales de contacto.
              </p>
            </section>

            <section className="pt-10 border-t border-zinc-100">
              <p className="text-zinc-400 text-sm italic">
                El uso de este sitio web y la contratación de nuestros servicios implica la aceptación de esta Política de Privacidad.
              </p>
            </section>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link href="/" className="px-10 py-5 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

