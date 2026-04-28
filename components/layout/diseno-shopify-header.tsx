"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export default function DisenoShopifyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Liquid', href: '#liquid' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-zinc-200 shadow-sm h-[80px]' : 'bg-white/50 backdrop-blur-sm h-[100px]'} flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between h-full">
        <Link href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
            <ShoppingBag className="w-5 h-5 text-pink-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-zinc-900 tracking-tighter leading-none text-lg">diseñoshopify</span>
            <span className="text-[9px] font-bold text-pink-600 uppercase tracking-widest leading-tight">by Webunica</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-[11px] font-black uppercase tracking-widest text-zinc-600 hover:text-pink-600 transition-colors">
              {item.label}
            </Link>
          ))}
          <LeadButton className="px-6 py-3 bg-zinc-950 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all shadow-xl">
            Cotizar Diseño
          </LeadButton>
        </nav>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 relative"
        >
          <span className={`block w-6 h-0.5 bg-zinc-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menú Móvil */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden flex flex-col pt-24 px-6`}>
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase tracking-tighter text-zinc-900 hover:text-pink-600 border-b border-zinc-100 pb-4">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <LeadButton className="w-full px-6 py-4 bg-pink-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl text-center flex justify-center">
            Cotizar Proyecto
          </LeadButton>
        </div>
      </div>
    </header>
  );
}
