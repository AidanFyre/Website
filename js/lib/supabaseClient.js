// lib/supabaseClient.js™
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
