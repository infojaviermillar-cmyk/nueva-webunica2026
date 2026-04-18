import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Software as a Service (SaaS): Tu propia Plataforma de Clases en Línea',
  description: 'La industria del e-learning generará billones este 2026. Lanza tu propia plataforma para dar clases en línea con nuestra arquitectura de alto impacto.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="Crea la Plataforma de Clases en Línea Definitiva. Imparte conocimiento desde cualquier lugar del mundo con una velocidad envidiable."
      competitorName="las típicas escuelas virtuales compartidas"
      focusText="Tener el control total de tu academia en línea te permite vender suscripciones, gestionar membresías y crear comunidades de alto nivel."
    />
  );
}
