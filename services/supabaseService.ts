
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Comment } from '../types';
import { SUPABASE_URL_PLACEHOLDER, SUPABASE_ANON_KEY_PLACEHOLDER } from '../constants.tsx';

// This is a minimal schema definition based on the usage in the app.
// It makes the Supabase client fully type-safe for comment operations.
type Database = {
  public: {
    Tables: {
      comentarios: {
        Row: {
          id: string;
          author: string;
          text: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          author: string;
          text: string;
          created_at?: string; // Made optional as it's typically handled by the DB
        };
        Update: {
          id?: string;
          author?: string;
          text?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [key: string]: never };
    Functions: { [key: string]: never };
    Enums: { [key: string]: never };
    CompositeTypes: { [key: string]: never };
  }
}

// Supabase credentials are expected to be available in the process.env object.
// This is typically handled by a build tool that replaces these variables
// with their actual values at build time.
const SUPABASE_URL = process.env.SUPABASE_URL || SUPABASE_URL_PLACEHOLDER;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || SUPABASE_ANON_KEY_PLACEHOLDER;


let supabase: SupabaseClient<Database> | null = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL !== SUPABASE_URL_PLACEHOLDER && SUPABASE_ANON_KEY !== SUPABASE_ANON_KEY_PLACEHOLDER) {
  try {
    // Initialize the client with the Database generic to ensure full type safety.
    // This is the correct way to ensure Supabase methods are aware of the table schemas.
    supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error("Error initializing Supabase client:", error);
  }
} else {
  console.warn(
    "Supabase URL or Anon Key not configured or using placeholder values. " +
    "Please set SUPABASE_URL and SUPABASE_ANON_KEY in your environment. " +
    "Comment functionality will be disabled."
  );
}

export const getSupabaseClient = (): SupabaseClient<Database> | null => {
    return supabase;
};

export const isSupabaseAvailable = (): boolean => !!supabase;

export const loadComments = async (): Promise<Comment[]> => {
  if (!supabase) throw new Error("Supabase client not initialized.");
  
  const { data, error } = await supabase
    .from('comentarios')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase error loading comments:', error);
    if (error.message.includes('relation "public.comentarios" does not exist')) {
        throw new Error('A tabela "comentarios" não existe na base de dados. Por favor, crie-a no painel do Supabase.');
    }
    throw error;
  }
  // The type inference for `data` seems to be failing in this environment,
  // so we cast it to the expected type. The logic is sound: if `error` is null,
  // `data` will be an array of comments or null.
  return (data as unknown as Comment[]) || [];
};

export const addComment = async (author: string, text: string): Promise<void> => {
  if (!supabase) throw new Error("Supabase client not initialized.");

  // The 'id' and 'created_at' fields are handled by the database.
  // We just need to provide the author and text for the new comment.
  // The type inference for `insert` seems to be failing, expecting `never`.
  // Casting `from()` to `any` bypasses this typing issue.
  const { error } = await (supabase.from('comentarios') as any)
    .insert([{ author, text }]);
  
  if (error) {
    console.error('Supabase error adding comment:', error);
    throw error;
  }
};
