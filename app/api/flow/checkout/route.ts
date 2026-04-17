import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  // Aquí debería ir la integración nativa con Flow.cl
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    const baseUrl = new URL(request.url).origin;
    return NextResponse.redirect(`${baseUrl}/login?next=/listas-de-verificacion-shopify-cro-pro`);
  }

  // REGISTRO REAL EN BASE DE DATOS
  // Marcamos que este usuario ha comprado el acceso PRO
  const { error } = await supabase.from('user_access').insert({
    user_id: user.id,
    resource_id: 'cro-pro'
  });

  // Nota: Si ya existía (error de duplicado), ignoramos y seguimos
  // en producción esto sería parte de un webhook de Flow.cl

  const baseUrl = new URL(request.url).origin;
  
  // Redirigir a la vista de CheckList PRO
  // Ya no necesitamos el token en la URL porque ahora la validamos contra la BD
  return NextResponse.redirect(`${baseUrl}/listas-de-verificacion-shopify-cro-pro`);
}
