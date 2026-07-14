import { Metadata } from 'next';
import PricingIA from '@/components/sections/pricing-ia';

export const metadata: Metadata = {
  title: 'Implementación IA Conversacional | Webunica',
  description: 'Implementación de Inteligencia Artificial Conversacional para tu empresa. Chatbots inteligentes basados en Databot.',
  openGraph: {
    title: 'Implementación IA Conversacional | Webunica',
    description: 'Chatbots inteligentes basados en Databot para tu empresa.',
    url: 'https://webunica.cl/implementacion-ia-conversacional',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/implementacion-ia-conversacional',
  }
};

export default function ImplementacionIAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Espaciador para el header */}
      <div className="pt-[116px]" />
      
      <main>
        {/* Aquí iría el hero de la landing, por ahora mostramos directamente el pricing */}
        <PricingIA />
      </main>
    </div>
  );
}
