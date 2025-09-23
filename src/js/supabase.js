// src/js/supabase.js
// Load supabase-js via CDN di HTML sebelum file ini:
// <script src="https://unpkg.com/@supabase/supabase-js@2"></script>

const SUPABASE_URL = "https://xwyekdnvnmhrducnvuqo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3eWVrZG52bm1ocmR1Y252dXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTEzMDgsImV4cCI6MjA3Mzc4NzMwOH0.IMByK8g0lZzPG2_RaZuWduyggaMu40wPo8jH3SkFV9Y";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

