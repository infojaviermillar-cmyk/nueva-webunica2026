import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Returns null if env vars are not configured (avoids crashes in production)
 */
export const supabase = supabaseUrl && supabaseAnonKey
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null;
