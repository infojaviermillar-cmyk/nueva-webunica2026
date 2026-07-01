import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase
    .from('leads')
    .select('id, name, company, email, phone')
    .limit(5);

  console.log('Error:', error);
  console.log('Data:', data);
}

test();
