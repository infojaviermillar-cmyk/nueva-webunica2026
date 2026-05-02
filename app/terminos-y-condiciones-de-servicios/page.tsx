import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones de Servicios | Webunica Chile 2026',
  description: 'Consulta los términos y condiciones de uso de los servicios de desarrollo web, SEO y marketing digital de Webunica en Chile.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 pb-20">
      <main className="max-w-4xl mx-auto px-6 pt-[22vh] lg:pt-[12vh] lg:pt-40">
        <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-zinc-100">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-10 text-zinc-950">
            Términos y <br/> <span className="text-violet-600 italic font-serif lowercase font-light">Condiciones</span>
          </h1>
          
          <p className="text-zinc-500 mb-12 font-medium">Última actualización: 01 de Mayo, 2026</p>
          
          <div className="space-y-12 text-zinc-600 leading-relaxed font-light text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al contratar los servicios de Webunica (en adelante "la Agencia"), usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">2. Descripción de Servicios</h2>
              <p>
                Webunica ofrece servicios de diseño web, desarrollo de e-commerce (Shopify, WooCommerce), consultoría SEO, marketing digital y desarrollo de aplicaciones a medida. Cada proyecto se regirá por una propuesta comercial específica que detallará el alcance, plazos y costos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">3. Pagos y Financiamiento</h2>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>Los pagos se realizarán según el cronograma acordado en la cotización.</li>
                <li>Ofrecemos financiamiento de hasta 6 cuotas sin interés mediante plataformas de pago autorizadas (Webpay, Flow, etc.).</li>
                <li>La falta de pago en los plazos estipulados podrá resultar en la suspensión temporal o definitiva de los servicios y acceso a las plataformas en desarrollo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">4. Propiedad Intelectual</h2>
              <p>
                Tras la liquidación total del proyecto, la propiedad de los activos digitales (código personalizado, diseños finales) se transferirá al cliente. Sin embargo, la Agencia se reserva el derecho de mostrar el trabajo realizado en su portafolio, a menos que se acuerde expresamente lo contrario por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">5. Responsabilidades del Cliente y Contenido</h2>
              <p>
                El cliente es responsable de proporcionar la información, contenidos, imágenes, videos y accesos necesarios para el desarrollo del proyecto. 
                <strong className="text-zinc-950">Todo el contenido proporcionado por el cliente es de su exclusiva responsabilidad</strong>, liberando a Webunica de cualquier reclamación relacionada con derechos de autor, veracidad de la información o legalidad del material entregado. 
                Webunica no se hace responsable por retrasos causados por la falta de entrega de materiales por parte del cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">6. Garantía y Mantenimiento</h2>
              <p>
                Todos nuestros desarrollos cuentan con una garantía de 30 días posteriores a la entrega para la corrección de errores técnicos. Los servicios de mantenimiento recurrente, actualizaciones de seguridad y soporte continuo requieren la contratación de un plan de mantenimiento mensual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">7. Limitación de Responsabilidad</h2>
              <p>
                Webunica no será responsable por pérdidas de beneficios, datos o interrupciones de negocio resultantes del uso o la imposibilidad de uso de nuestros desarrollos. La responsabilidad total de la Agencia se limitará al monto pagado por el servicio específico contratado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio web.
              </p>
            </section>

            <section className="pt-10 border-t border-zinc-100">
              <p className="text-zinc-400 text-sm italic">
                Para cualquier duda o aclaración sobre estos términos, por favor contáctenos a través de nuestro formulario oficial de contacto o vía WhatsApp.
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
