
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Comment } from '../types';
import { SUPABASE_URL_PLACEHOLDER, SUPABASE_ANON_KEY_PLACEHOLDER } from '../constants';

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

// IMPORTANT: Replace placeholders with your actual Supabase URL and Anon Key,
// ideally from environment variables. These are client-side safe keys.
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || SUPABASE_URL_PLACEHOLDER;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY_PLACEHOLDER;

let supabase: SupabaseClient<Database> | null = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL !== SUPABASE_URL_PLACEHOLDER && SUPABASE_ANON_KEY !== SUPABASE_ANON_KEY_PLACEHOLDER) {
  try {
    supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error("Error initializing Supabase client:", error);
  }
} else {
  console.warn(
    "Supabase URL or Anon Key not configured or using placeholder values. " +
    "Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY environment variables. " +
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
  return data || [];
};

export const addComment = async (author: string, text: string): Promise<Comment[]> => {
  if (!supabase) throw new Error("Supabase client not initialized.");

  // The 'created_at' field is expected to be set by the database with a default value.
  const { data, error } = await supabase
    .from('comentarios')
    .insert([{ author, text }])
    .select();
  
  if (error) {
    console.error('Supabase error adding comment:', error);
    throw error;
  }
  return data || [];
};
