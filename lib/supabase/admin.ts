import { createClient } from '@supabase/supabase-js';

/**
 * Función para obtener el cliente de Supabase con privilegios de Administrador.
 * Se usa una función para evitar errores durante el proceso de 'build' si las 
 * variables de entorno no están presentes en ese momento.
 */
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Faltan variables de entorno para Supabase Admin (URL o Service Role Key)");
  }

  return createClient(url, key);
}
