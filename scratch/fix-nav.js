const fs = require('fs');
const file = 'components/layout/header.tsx';
let content = fs.readFileSync(file, 'utf8');

// Inject basePath variable
const targetToInject = `  const hoverColor = isDarkHero && !scrolled ? 'hover:text-violet-400' : 'hover:text-violet-700';`;
const injection = `  const hoverColor = isDarkHero && !scrolled ? 'hover:text-violet-400' : 'hover:text-violet-700';

  const basePath = (pathname === '/' || pathname === '/landing-shopify-emd') ? '' : '/';`;

if (content.includes(targetToInject) && !content.includes('const basePath =')) {
  content = content.replace(targetToInject, injection);
}

// Fix desktop links
content = content.replace(
  `<Link href="#inicio" className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Inicio</Link>`,
  `<Link href={\`\${basePath}#inicio\`} className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Inicio</Link>`
);
content = content.replace(
  `<Link href="#ventajas" className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Ventajas</Link>`,
  `<Link href={\`\${basePath}#ventajas\`} className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Ventajas</Link>`
);
content = content.replace(
  `<Link href="#planes" className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Planes</Link>`,
  `<Link href={\`\${basePath}#planes\`} className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>Planes</Link>`
);
content = content.replace(
  `<Link href="#faq" className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>FAQ</Link>`,
  `<Link href={\`\${basePath}#faq\`} className={\`\${textColor} \${hoverColor} font-bold transition-all text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer\`}>FAQ</Link>`
);

// Fix mobile links
content = content.replace(
  `<Link href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Inicio</Link>`,
  `<Link href={\`\${basePath}#inicio\`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Inicio</Link>`
);
content = content.replace(
  `<Link href="#ventajas" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Ventajas</Link>`,
  `<Link href={\`\${basePath}#ventajas\`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Ventajas</Link>`
);
content = content.replace(
  `<Link href="#planes" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Planes</Link>`,
  `<Link href={\`\${basePath}#planes\`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">Planes</Link>`
);
content = content.replace(
  `<Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">FAQ</Link>`,
  `<Link href={\`\${basePath}#faq\`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-zinc-900 uppercase tracking-tighter hover:text-pink-600 transition-colors border-b border-zinc-100 pb-4">FAQ</Link>`
);

// Fix logo link
content = content.replace(
  `<Link href="#inicio" className="group flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-zinc-100">`,
  `<Link href={\`\${basePath}#inicio\`} className="group flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-zinc-100">`
);

fs.writeFileSync(file, content);
console.log("Navigation links fixed");
