import Link from 'next/link';

export const metadata = {
  title: 'Política de Devoluciones y Reembolsos | Webunica Chile 2026',
  description: 'Consulta nuestras políticas de devolución y reembolsos para servicios digitales y software en Chile.',
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 pb-20">
      <main className="max-w-4xl mx-auto px-6 pt-32 lg:pt-40">
        <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-zinc-100">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-10 text-zinc-950">
            Política de <br/> <span className="text-violet-600 italic font-serif lowercase font-light">Devoluciones</span>
          </h1>
          
          <p className="text-zinc-500 mb-12 font-medium">Última actualización: 01 de Mayo, 2026</p>
          
          <div className="space-y-12 text-zinc-600 leading-relaxed font-light text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">1. Naturaleza de los Servicios Digitales</h2>
              <p>
                Debido a la naturaleza intangible y personalizada de los servicios de desarrollo web, SEO y software a medida, <strong className="text-zinc-950">no se realizan reembolsos una vez iniciado el trabajo</strong> o entregados los accesos/licencias, ya que los costos operativos y de horas-hombre se ejecutan de manera inmediata.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">2. Cancelación Antes del Inicio</h2>
              <p>
                Si el cliente decide cancelar un proyecto antes de que Webunica haya iniciado cualquier labor de diseño o desarrollo, se podrá solicitar un reembolso del monto pagado, descontando una comisión del 15% por concepto de gastos administrativos y reserva de agenda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">3. Suscripciones y Mantenimiento</h2>
              <p>
                Los planes de mantenimiento mensual o suscripciones a herramientas pueden cancelarse en cualquier momento. La cancelación tendrá efecto al final del periodo de facturación actual. No se realizan reembolsos prorrateados por meses parcialmente utilizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">4. Productos Digitales (Plugins/Licencias)</h2>
              <p>
                Para la venta de licencias de software o plugins específicos, una vez que la clave de licencia ha sido generada y enviada al cliente, no se aceptarán devoluciones ni cambios, dada la imposibilidad de "devolver" un producto digital que ya ha sido visualizado o activado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4">5. Garantía de Satisfacción Técnica</h2>
              <p>
                Aunque no se realizan devoluciones de dinero, Webunica garantiza que el producto final cumplirá con las especificaciones técnicas acordadas en la propuesta comercial inicial. Si existen errores técnicos o discrepancias con lo pactado, trabajaremos hasta subsanarlos sin costo adicional durante el periodo de garantía.
              </p>
            </section>

            <section className="pt-10 border-t border-zinc-100">
              <p className="text-zinc-400 text-sm italic">
                Cualquier solicitud extraordinaria de reembolso será evaluada de manera individual por la dirección de Webunica, cuya decisión será final y definitiva.
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
