const fs = require('fs');
const file = 'app/landing-shopify-emd/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldCopy = `<h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                Diseño pensado <br/>para vender mejor
              </h2>
              <p className="text-lg text-zinc-500 font-light mb-10">
                El diseño no es solo estética, es funcionalidad. Nos enfocamos en crear experiencias de compra fluidas que minimizan el abandono del carrito.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Diseño Responsive</h4>
                    <p className="text-sm text-zinc-500 font-light">Tu tienda se verá y funcionará perfecta en cualquier smartphone, desde donde provienen la mayoría de las compras.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Jerarquía de Contenido</h4>
                    <p className="text-sm text-zinc-500 font-light">Estructuramos la información para guiar intuitivamente al cliente hacia el botón de "Comprar".</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Confianza Visual</h4>
                    <p className="text-sm text-zinc-500 font-light">Banners, tipografías y colores que transmiten profesionalismo y seguridad al pagar.</p>
                  </div>
                </div>
              </div>`;

const newCopy = `<h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                Diseño a medida <br/>centrado en <span className="text-pink-600">conversión</span>
              </h2>
              <p className="text-lg text-zinc-500 font-light mb-10">
                No usamos plantillas genéricas. Desarrollamos tiendas con <strong>diseños 100% personalizados</strong> que reflejan la identidad de tu marca, aplicando principios de CRO (Optimización de Tasa de Conversión) para transformar visitantes en compradores.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Look & Feel Único</h4>
                    <p className="text-sm text-zinc-500 font-light">Tu tienda no se verá igual a las demás. Adaptamos cada detalle visual para que comunique el valor real de tus productos y tu marca.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Estructura para Vender (CRO)</h4>
                    <p className="text-sm text-zinc-500 font-light">Diseñamos el embudo de navegación estratégicamente para eliminar fricciones y guiar al usuario directo al botón de pago.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Mobile-First Total</h4>
                    <p className="text-sm text-zinc-500 font-light">Dado que más del 80% del tráfico compra por celular, tu diseño estará milimétricamente optimizado para pantallas móviles.</p>
                  </div>
                </div>
              </div>`;

// Safe replace using substring if needed
const idx = content.indexOf('<h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">\n                Diseño pensado');
if (idx !== -1) {
  const endMarker = '</div>\n            </div>\n            <div className="bg-zinc-50';
  const endIdx = content.indexOf(endMarker, idx);
  
  if (endIdx !== -1) {
    content = content.substring(0, idx) + newCopy + '\n            ' + content.substring(endIdx);
    fs.writeFileSync(file, content);
    console.log("Success");
  } else {
    console.log("End marker not found");
  }
} else {
  console.log("Start marker not found");
}
