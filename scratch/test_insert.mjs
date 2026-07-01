import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log('Inserting a minimal lead to introspect columns...');
  
  // Minimal payload that doesn't specify any questionable columns
  const testLead = {
    name: 'Sofia Test Minimal Introspect',
    email: 'sofia.introspect@gmail.com', // email is required NOT NULL in basedatos-SQL/LEADS.txt, so let's include it
    project_type: 'Shopify - Tienda Completa' // project_type is required NOT NULL in basedatos-SQL/LEADS.txt, let's include it
  };

  const { data, error } = await supabase
    .from('leads')
    .insert([testLead])
    .select();

  if (error) {
    console.error('Insertion failed:', error);
  } else {
    console.log('Insertion succeeded! Live table columns:');
    if (data && data.length > 0) {
      console.log('Columns:', Object.keys(data[0]));
      console.log('Data:', data[0]);
    } else {
      console.log('No data returned.');
    }
  }
}

run();
