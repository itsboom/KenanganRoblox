// supabase-config.js
//
// ISI INI dengan Project URL & anon key kamu sendiri dari
// Supabase Dashboard → Project Settings → API.
//
// PENTING: pakai "anon public" key, JANGAN pakai "service_role" key
// di file ini. service_role key itu rahasia (bisa baca/hapus semua
// data tanpa batasan) — kalau itu yang dipasang di sini, siapapun
// yang buka situs kamu bisa lihat key-nya lewat "View Source" dan
// bisa ngerusak database kamu. anon key memang didesain buat aman
// dipasang di kode client-side seperti ini, karena dibatasi oleh
// Row Level Security (RLS) yang kamu atur di Supabase.

const SUPABASE_URL = "https://qvetipxkdllqvdjblijb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2ZXRpcHhrZGxscXZkamJsaWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NDYyMTYsImV4cCI6MjEwNDQyMjIxNn0.qhjkZ8HNpSiCR-Fk8PjJt6hOAkNABgB7FR96daTUbdg";

if (typeof supabase !== "undefined" && !SUPABASE_URL.includes("xxxx")) {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn(
        "Supabase belum dikonfigurasi — isi SUPABASE_URL dan SUPABASE_ANON_KEY " +
        "di js/supabase-config.js. Sampai itu diisi, fitur submit foto & foto " +
        "dari orang lain nggak akan jalan (foto yang di photos-data.js tetap " +
        "muncul seperti biasa)."
    );
}
