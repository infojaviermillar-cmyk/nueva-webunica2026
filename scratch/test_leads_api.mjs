import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Faltan variables de entorno SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const admin = createClient(supabaseUrl, supabaseServiceKey);

async function test() {
  try {
    const { data, error } = await admin
      .from('leads')
      .select('id, name, company, email, phone')
      .limit(5);

    if (error) {
      console.error('Error al consultar leads:', error.message);
    } else {
      console.log('Leads encontrados en la base de datos:', data);
    }
  } catch (err) {
    console.error('Excepción:', err);
  }
}

test();
