import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
let key = '';
try {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const match = envContent.match(/SUPABASE_SERVICE_ROLE_KEY\s*=\s*["']?(.*?)["']?(\r?\n|$)/);
  if (match) {
    key = match[1].trim();
  }
} catch (e) {
  console.error('Error reading .env.local:', e.message);
}

if (!key) {
  console.error('SUPABASE_SERVICE_ROLE_KEY not found in .env.local');
  process.exit(1);
}

const admin = createClient(supabaseUrl, key);

async function test() {
  const { data, error } = await admin
    .from('leads')
    .select('*')
    .limit(1);

  console.log('Error:', error);
  if (data && data.length > 0) {
    console.log('Fila de Leads encontrada:', data[0]);
    console.log('Columnas de la tabla leads:', Object.keys(data[0]));
  } else {
    console.log('No se encontraron leads o la tabla está vacía.');
  }
}

test();
