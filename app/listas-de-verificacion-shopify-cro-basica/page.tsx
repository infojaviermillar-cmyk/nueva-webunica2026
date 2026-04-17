import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import ChecklistClient from '@/components/ui/checklist-client';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Checklist Shopify CRO Básica | WebUnica',
  description: 'Auditoría interactiva básica de conversión para tiendas Shopify.'
};

export default async function ChecklistBasicaPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Route protected by middleware

  const filePath = path.join(process.cwd(), 'public', 'listas-de-verificacion-shopify-cro-basica.txt');
  let rawText = '';
  try {
    rawText = await fs.readFile(filePath, 'utf8');
  } catch (e) {
    rawText = 'Error cargando la lista. Verifica que el archivo exista en public.';
  }

  return (
    <>
      <Header />
      <div className="bg-slate-50 min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-6 mb-8 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-bold text-xs uppercase tracking-widest mb-4">
                Recurso Gratuito (Usuario Registrado)
            </span>
        </div>
        <ChecklistClient 
          title="Auditoría CRO Básica"
          description="Detecta de forma rápida si tu tienda Shopify está perdiendo ventas por fricciones comunes. Marca tu avance y descubre oportunidades."
          rawText={rawText}
          storageKey="checklist-cro-basica-webunica"
        />
      </div>
      <Footer />
    </>
  );
}
