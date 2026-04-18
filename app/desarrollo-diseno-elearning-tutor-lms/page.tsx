import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Desarrollo de Plataformas E-Learning vs Tutor LMS | Webunica',
  description: 'Creamos Sistemas de Gestión de Aprendizaje (LMS) robustos para instituciones y creadores de contenido digital. Adiós plugins, hola velocidad Next.js.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="Si buscas un E-Learning profesional, no te conformes con un plugin adaptado. Construyamos tu imperio educativo correctamente."
      competitorName="Tutor LMS / Learndash"
      focusText="Crear cursos online es el negocio del siglo, pero la tecnología no debería ser tu dolor de cabeza. Construimos el Netflix de tus cursos para que tú solo te preocupes de enseñar."
    />
  );
}
