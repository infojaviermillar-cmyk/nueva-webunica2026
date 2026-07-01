const supabaseUrl = 'https://pereskyvymsyiqbihydj.supabase.co';
const apiKey = 'sb_publishable_DlGqRTtFRbRidTplcMbMmw_6XgeFuuI';

async function run() {
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'OPTIONS',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    console.log('Status:', res.status, res.statusText);
    console.log('Headers:');
    for (const [key, value] of res.headers.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    const text = await res.text();
    console.log('Body length:', text.length);
    if (text) {
      console.log('Body:', text.substring(0, 1000));
    }
  } catch (err) {
    console.error('Error fetching OPTIONS:', err);
  }
}

run();
