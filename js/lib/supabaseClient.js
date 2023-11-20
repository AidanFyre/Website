// lib/supabaseClient.js™
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Use the environment variables set in Vercel
const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL; // Replace with your Supabase URL variable name
const supabaseAnonKey = NEXT_PUBLIC_SUPABASE_ANON_KEY; // Replace with your Supabase Anon Key variable name

// Create a single Supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonKey);