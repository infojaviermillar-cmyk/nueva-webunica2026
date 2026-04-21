import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Desarrollo de Plataformas E-Learning y LMS a Medida en Chile | Webunica',
  description: 'Creamos plataformas e-learning y LMS personalizadas con Next.js para academias, empresas y creadores de cursos en Chile. Alternativa profesional a Tutor LMS, LearnDash y Moodle. Consulta sin costo.',
  keywords: [
    'plataformas elearning',
    'sistema clases en linea',
    'plataforma moodle',
    'tutor lms elearning',
    'desarrollo elearning chile',
    'plataforma lms a medida',
    'crear academia online chile',
    'alternativa tutor lms',
    'alternativa learndash next.js',
    'desarrollo cursos online chile',
    'software educativo empresas',
    'lms corporativo chile',
    'webunica elearning'
  ],
  openGraph: {
    title: 'Plataformas E-Learning y LMS a Medida | Webunica Chile',
    description: 'Desarrollamos tu plataforma educativa con Next.js: veloz, escalable y con UX de nivel Netflix. Proyectos reales en toda Latinoamérica.',
    url: 'https://webunica.cl/desarrollo-diseno-elearning-tutor-lms',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-diseno-elearning-tutor-lms',
  }
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
