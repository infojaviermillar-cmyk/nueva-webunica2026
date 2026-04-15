import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const supabaseAnonKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSelect() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .limit(1);
  console.log(data);
}

testSelect();
