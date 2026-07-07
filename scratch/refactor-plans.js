const fs = require('fs');
const file = 'components/sections/shopify-plans.tsx';
let content = fs.readFileSync(file, 'utf8');

const importData = `import { plans, features } from '@/data/shopify-plans';\nimport Link from 'next/link';\n`;

// Add imports
content = content.replace("import { Check, X, Star, Zap, Shield, ArrowRight } from 'lucide-react';", 
  "import { Check, X, Star, Zap, Shield, ArrowRight } from 'lucide-react';\n" + importData);

// Remove the data definition inside ShopifyPlans
const plansStart = content.indexOf('  const plans = [');
const plansEnd = content.indexOf('  const renderValue', plansStart);

if (plansStart !== -1 && plansEnd !== -1) {
  content = content.substring(0, plansStart) + content.substring(plansEnd);
}

// Modify the render icons logic
// Since icon is no longer a JSX element in the data, we need to map iconName to the component.
const iconMap = `
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-pink-600" />;
      case 'Star': return <Star className="w-5 h-5 text-pink-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-pink-600" />;
      case 'ArrowRight': return <ArrowRight className="w-5 h-5 text-pink-600" />;
      default: return null;
    }
  };
`;

content = content.replace('  const renderValue', iconMap + '\n  const renderValue');
content = content.replace(/\{p\.icon\}/g, '{getIcon(p.iconName)}');

// Change the LeadButton in desktop view to a Link wrapping a LeadButton or just Link styling
// But LeadButton might have its own onClick. Let's just replace LeadButton with Link for plan selection, keeping styling.
const oldDesktopButton = `<LeadButton className={\`w-full py-3 rounded-lg font-black uppercase tracking-widest text-[10px] text-center transition-all shadow-sm flex items-center justify-center gap-2 \${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}\`}>
                      Elegir Plan
                    </LeadButton>`;
const newDesktopButton = `<Link href={\`/planes/\${p.id}\`} className={\`w-full py-3 rounded-lg font-black uppercase tracking-widest text-[10px] text-center transition-all shadow-sm flex items-center justify-center gap-2 \${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}\`}>
                      Ver Plan
                    </Link>`;

content = content.replace(oldDesktopButton, newDesktopButton);

// Do the same for Mobile View
const oldMobileButton = `<LeadButton className={\`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 \${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}\`}>
                  Elegir Plan <ArrowRight className="w-4 h-4" />
                </LeadButton>`;
const newMobileButton = `<Link href={\`/planes/\${p.id}\`} className={\`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 \${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}\`}>
                  Ver Plan <ArrowRight className="w-4 h-4" />
                </Link>`;

content = content.replace(oldMobileButton, newMobileButton);

fs.writeFileSync(file, content);
console.log("shopify-plans.tsx refactored");
