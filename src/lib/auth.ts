import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with public (anon) key
// This is safe to use in the browser - it only has access to auth and public data
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase credentials. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are in .env.local'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
