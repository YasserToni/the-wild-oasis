import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xgexgozobxxnykzccllh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZXhnb3pvYnh4bnlremNjbGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzODU5NDEsImV4cCI6MjAwNzk2MTk0MX0.pTZ1W95_tlydZBrb97F3q1uOksXRYoNPurxiD5JPy5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
