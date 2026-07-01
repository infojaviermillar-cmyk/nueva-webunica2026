console.log('Environment variables:');
for (const key of Object.keys(process.env)) {
  if (key.includes('SUPABASE') || key.includes('NEXT_PUBLIC')) {
    console.log(`${key}: ${process.env[key] ? 'DEFINED (length ' + process.env[key].length + ')' : 'UNDEFINED'}`);
  }
}
