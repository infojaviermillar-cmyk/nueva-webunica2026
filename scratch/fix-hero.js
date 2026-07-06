const fs = require('fs');

const file = 'app/landing-shopify-emd/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHero = `<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-pink-600 uppercase">Shopify Partner Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Desarrollo de Tiendas <span className="text-pink-600 italic font-serif lowercase font-light">Shopify</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Diseño, Themes, Costos, Planes y Apps. Creamos tiendas Shopify profesionales, pensadas para vender, con diseño atractivo, configuración técnica, personalización de themes, integración de aplicaciones y estructura lista para crecer.
              </p>
              
              <div className="inline-block px-4 py-2 mb-10 bg-zinc-100 rounded-lg text-sm font-bold text-zinc-700 italic border-l-4 border-pink-500 shadow-sm">
                “Diseño + desarrollo + estrategia comercial”
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#cotizar"
                  className="px-8 py-4 bg-pink-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Solicitar cotización
                </a>
                <a 
                  href="#planes"
                  className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:border-zinc-900 transition-all active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Ver planes
                </a>
                <a 
                  href="https://wa.me/56984410379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Hablar por WhatsApp
                </a>
              </div>`;

const newHero = `<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-pink-700 uppercase">Shopify Growth Partner Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Lanza una <span className="text-pink-600">tienda Shopify</span> lista para vender en Chile <br/>
                <span className="text-3xl lg:text-5xl text-zinc-800">en menos de 30 días.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-600 font-light mb-10 leading-relaxed max-w-xl">
                Integramos pagos, logística, facturación, marketing y diseño para que empieces a vender desde el primer día. Olvídate de los problemas técnicos.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#cotizar"
                  className="px-8 py-4 bg-pink-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Solicitar Propuesta
                </a>
                <a 
                  href="https://wa.me/56984410379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Hablar por WhatsApp
                </a>
              </div>`;

if (content.includes('Desarrollo de Tiendas')) {
  content = content.replace(oldHero, newHero);
  fs.writeFileSync(file, content);
  console.log('Hero successfully replaced.');
} else {
  console.log('Hero text not found.');
}
