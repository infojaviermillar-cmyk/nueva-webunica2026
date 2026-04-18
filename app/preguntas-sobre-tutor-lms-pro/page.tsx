import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Tutor LMS y E-Learning | Webunica',
  description: 'Todo lo que necesitas saber antes de invertir en Tutor LMS. Descubre por qué un desarrollo a medida en Next.js garantiza mejor rendimiento y control.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="Respondemos tus dudas técnicas sobre plugins E-Learning y te mostramos el futuro del rubro."
      competitorName="los sistemas tradicionales"
      focusText="Nuestros clientes solían llegar frustrados tras intentar escalar escuelas online limitadas por plugins costosos y frágiles. Hoy migran a la velocidad pura de React."
    />
  );
}
