import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Alternativas a Tutor LMS Pro: Plataforma Next.js | Webunica',
  description: 'Descubre por qué las plataformas corporativas en Chile están migrando desde plugins pesados como Tutor LMS a arquitecturas modernas en Next.js.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="¿Buscabas instalar Tutor LMS Pro en WordPress? Migrahacia una experiencia superior con tecnología desacoplada."
      competitorName="Tutor LMS / WordPress"
      focusText="WordPress revolucionó los blogs, pero adaptar un blog para que funcione como una academia robusta trae problemas de escalabilidad y performance que afectan tus ventas."
    />
  );
}
