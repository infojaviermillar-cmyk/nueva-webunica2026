import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log('Fetching a single lead...');
  const { data, error } = await supabase.from('leads').select('*').limit(1);
  if (error) {
    console.error('Error fetching lead:', error);
  } else {
    console.log('Sample lead keys:', data.length > 0 ? Object.keys(data[0]) : 'No leads found');
    console.log('Sample lead data:', data[0]);
  }
}

run();
