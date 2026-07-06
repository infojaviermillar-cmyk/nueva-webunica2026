const fs = require('fs');
const file = 'app/landing-shopify-emd/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// I will use regex to find the block from `<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">`
// up to `</div>` before `{/* Mockup CSS representation */}`

const startMarker = '<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">';
const endMarker = '{/* Mockup CSS representation */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newHeroContent = `<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">
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
              </div>
            </div>
            
            `;
  
  // Replace the old chunk with the new chunk
  content = content.substring(0, startIndex) + newHeroContent + content.substring(endIndex);
  fs.writeFileSync(file, content);
  console.log("Replaced successfully!");
} else {
  console.log("Could not find markers.");
}
