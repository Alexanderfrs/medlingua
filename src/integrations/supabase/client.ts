// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nqhpkmvwfzaegpjmknmg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaHBrbXZ3ZnphZWdwam1rbm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzE2MzIsImV4cCI6MjA1NzY0NzYzMn0.t6QqLFXmM_y5n6EaSlJ4BofV9BL5ifwS4FjKmMaO1kQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);