import type { Metadata } from 'next';
import { Questrial, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Webunica Intelligence — Análisis Digital y SEO',
  description: 'Plataforma de inteligencia digital para análisis SEO, keywords, score y oportunidades de crecimiento.',
  robots: { index: false, follow: false }, // Private SaaS — no indexar
};

export default function IntelligenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${questrial.variable} ${jetbrainsMono.variable} min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased`}>
      {children}
    </div>
  );
}
