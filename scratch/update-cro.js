const fs = require('fs');

function updateShopifyPlans() {
  const file = 'components/sections/shopify-plans.tsx';
  let content = fs.readFileSync(file, 'utf8');

  // Replace originalPrice with bonus for AJUSTE
  content = content.replace(
    /originalPrice: "\$337\.000",/,
    'bonus: "Auditoría CRO Gratis",'
  );
  
  // Replace originalPrice with bonus for PRENDE
  content = content.replace(
    /originalPrice: "\$650\.000",/,
    'bonus: "Theme Premium Incluido",'
  );
  
  // Replace originalPrice with bonus for FULL
  content = content.replace(
    /originalPrice: "\$980\.000",/,
    'bonus: "Setup GA4 Sin Costo",'
  );
  
  // Replace originalPrice with bonus for PRO
  content = content.replace(
    /originalPrice: "\$1\.400\.000",/,
    'bonus: "Consultoría SEO Inicial",'
  );

  // Update rendering to use bonus instead of 10% OFF
  const renderingOld = `<div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100">
                  10% OFF
                </div>`;
  const renderingNew = `{p.bonus && (
                  <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100">
                    + {p.bonus}
                  </div>
                )}`;
  content = content.replace(renderingOld, renderingNew);

  // Remove originalPrice rendering
  const priceRenderingOld = `{p.originalPrice ? (
                  <div className="text-sm text-zinc-400 line-through font-medium mb-1 decoration-pink-300">{p.originalPrice} + iva</div>
                ) : (
                  <div className="h-5 mb-1" />
                )}`;
  
  content = content.replace(priceRenderingOld, '<div className="h-5 mb-1" />');

  // Replace CTA button text
  content = content.replace(
    /Obtener 10% Dto/g,
    'Solicitar Propuesta'
  );

  fs.writeFileSync(file, content);
  console.log('shopify-plans.tsx updated.');
}

function updateLanding() {
  const file = 'app/landing-shopify-emd/page.tsx';
  let content = fs.readFileSync(file, 'utf8');

  // 1. Add new imports
  content = content.replace(
    "import ShopifyPlans from '@/components/sections/shopify-plans';",
    "import ShopifyPlans from '@/components/sections/shopify-plans';\nimport SuccessCases from '@/components/sections/success-cases';\nimport PlatformComparison from '@/components/sections/platform-comparison';"
  );

  // 2. Replace Hero content
  const oldHero = `<h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950 leading-[0.9]">
                Desarrollo de <br/>
                <span className="text-pink-600 relative inline-block">
                  Tiendas Shopify
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200/50 -z-10 -rotate-1" />
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-zinc-600 font-light mb-10 leading-relaxed max-w-xl">
                Creamos tiendas Shopify profesionales, pensadas para vender. Configuradas para el mercado chileno, con pagos locales, logística integrada y facturación SII.
              </p>`;
  
  const newHero = `<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-pink-700 uppercase">Shopify Growth Partner Chile</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950 leading-[0.9]">
                Lanza una <span className="text-pink-600">tienda Shopify</span> lista para vender en Chile <br/>
                <span className="text-3xl lg:text-5xl">en menos de 30 días.</span>
              </h1>
              <p className="text-lg lg:text-xl text-zinc-600 font-light mb-10 leading-relaxed max-w-xl">
                Integramos pagos, logística, facturación, marketing y diseño para que empieces a vender desde el primer día. Olvídate de los problemas técnicos.
              </p>`;

  content = content.replace(oldHero, newHero);

  // 3. Add large numbers section below Hero
  const trustNumbers = `
        {/* Trust Numbers */}
        <section className="bg-zinc-950 py-12 relative z-10 -mt-10 mx-6 lg:mx-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-emerald-600/20 opacity-50" />
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">250+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Proyectos Lanzados</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">12</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Años de Experiencia</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Integraciones Logísticas</div>
            </div>
          </div>
        </section>
  `;
  content = content.replace('{/* 2. Marcas Confían */}', trustNumbers + '\n\n        {/* 2. Marcas Confían */}');

  // 4. Remove Ecosistema and old portfolio, insert new sections
  // It's safer to use regex to cut out large sections and replace them with new components.
  // Removing old Portafolio:
  const portafolioRegex = /\{\/\* 4\. Portafolio Destacado \*\/\}[\s\S]*?\{\/\* 5\. ¿Por qué Shopify\? \*\/\}/;
  content = content.replace(portafolioRegex, `{/* 4. Casos de Éxito */}
        <SuccessCases />

        {/* 5. ¿Por qué Shopify? */}`);
  
  // Replace old Why Shopify (which had text) with PlatformComparison
  const whyShopifyRegex = /\{\/\* 5\. ¿Por qué Shopify\? \*\/\}[\s\S]*?\{\/\* 6\. Estructura \*\/\}/;
  content = content.replace(whyShopifyRegex, `{/* 5. Comparativa de Plataformas */}
        <PlatformComparison />

        {/* 6. Estructura */}`);

  // 5. Clean up old variables if possible (projects array is at the top)
  const projectsVarRegex = /  const projects = \[\s*\{[\s\S]*?\}\s*\];\n/;
  content = content.replace(projectsVarRegex, '');

  fs.writeFileSync(file, content);
  console.log('page.tsx updated.');
}

updateShopifyPlans();
updateLanding();
