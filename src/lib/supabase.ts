import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function hasSupabaseEnv(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseClient(): SupabaseClient {
  if (!hasSupabaseEnv()) {
    throw new Error(
      "Supabase environment variables are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local."
    );
  }

  if (!client) {
    client = createClient(supabaseUrl as string, supabaseAnonKey as string);
  }

  return client;
}
