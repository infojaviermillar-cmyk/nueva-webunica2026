import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log('Testing lead insertion via insert_lead RPC...');
  
  const payload = {
    p_name: 'Sofia Test RPC',
    p_email: 'sofia.rpc@gmail.com',
    p_phone: '982817246',
    p_city: 'Santiago',
    p_project_type: 'E-learning Tutor LMS Pro',
    p_source: 'WhatsApp'
  };

  const { data, error } = await supabase.rpc('insert_lead', payload);

  if (error) {
    console.error('RPC invocation failed:', error);
  } else {
    console.log('RPC invocation succeeded! Result:', data);
  }
}

run();
