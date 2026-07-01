import fs from 'fs';

const logFile = 'C:\\Users\\studioo\\.gemini\\antigravity\\brain\\3622d4b2-88d2-41e0-bdb0-3264f7fdba02\\.system_generated\\logs\\transcript.jsonl';

if (!fs.existsSync(logFile)) {
  console.log('Log file not found');
  process.exit(1);
}

const content = fs.readFileSync(logFile, 'utf-8');
const lines = content.split('\n');

console.log(`Analyzing steps 600 to 750...`);

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const obj = JSON.parse(line);
    const step = obj.step_index;
    if (step >= 600 && step <= 760) {
      const text = JSON.stringify(obj);
      if (text.includes('env') || text.includes('write_to_file') || text.includes('replace_file') || text.includes('SUPABASE') || text.includes('key')) {
        console.log(`[Step ${step}] Type: ${obj.type}`);
        if (obj.tool_calls) {
          console.log('Tool calls:', JSON.stringify(obj.tool_calls).substring(0, 500));
        }
        if (obj.content && obj.content.includes('env')) {
          console.log('Content snippet:', obj.content.substring(0, 300));
        }
        console.log('---');
      }
    }
  } catch (e) {}
}
