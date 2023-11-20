import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nzyovcfdebtdnqggzcyd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56eW92Y2ZkZWJ0ZG5xZ2d6Y3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NDA2MzEsImV4cCI6MjAxNjAxNjYzMX0.MLkopaa5jk0rgk5iy-RPWV6qwlvJSlbpqUfPFsxa2eIY';
const supabase = createClient(supabaseUrl, supabaseKey);


async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    })
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }