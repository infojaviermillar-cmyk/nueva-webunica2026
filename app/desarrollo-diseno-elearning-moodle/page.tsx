import { Metadata } from 'next';
import LMSLanding from '@/components/sections/lms-landing';

export const metadata: Metadata = {
  title: 'Migra de Moodle a tu Propio LMS Moderno | Webunica',
  description: 'El diseño de Moodle se quedó en el pasado. Moderniza la capacitación de tu empresa con un LMS corporativo desarrollado en Next.js, veloz e integrado.',
};

export default function Page() {
  return (
    <LMSLanding 
      heroTitle="¿Cansado de la interfaz anticuada y la lentitud de Moodle? Da el salto a un LMS Corporativo Privado y moderno."
      competitorName="Moodle"
      focusText="Moodle fue una gran herramienta para la academia del siglo pasado, pero las empresas e infoproductores de hoy requieren experiencias visuales impecables que cierren ventas o mantengan a su fuerza laboral motivada."
    />
  );
}
