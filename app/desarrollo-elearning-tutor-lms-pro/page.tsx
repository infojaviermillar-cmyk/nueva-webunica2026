import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Consultoría y Alternativas a Tutor LMS Pro | Webunica',
  description: 'Te asesoramos en la construcción de academias online. Por qué un sistema Next.js a medida supera con creces el rendimiento de Tutor LMS Pro.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="¿Evaluando comprar la licencia de Tutor LMS Pro? Espera un segundo. Existe una arquitectura superior pensada en Retención y Experiencia."
      competitorName="el ecosistema de plugins pagados"
      focusText="Las licencias anuales de LMS para WordPress pueden sumar miles de dólares ocultos con el tiempo. Te ofrecemos ser dueño de la infraestructura completa con una base en código limpio y seguro."
    />
  );
}
