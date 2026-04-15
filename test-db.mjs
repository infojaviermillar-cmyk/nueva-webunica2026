import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkSchema() {
  const { data } = await supabase.from('blog_posts').select('*').limit(1);
  console.log(JSON.stringify(data, null, 2));
}
checkSchema();
