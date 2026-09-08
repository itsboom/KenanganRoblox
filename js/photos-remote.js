// photos-remote.js
//
// Ambil foto yang udah di-approve dari Supabase, digabung ke array
// `galleryPhotos` yang udah ada (dari photos-data.js). Setelah selesai,
// nembak event "photos-updated" — gallery.js / about.js / favorites.js
// dengerin event ini buat render ulang begitu foto submisi masuk.
//
// Kalau Supabase belum dikonfigurasi (lihat supabase-config.js), file
// ini diem aja — situs tetap jalan normal cuma pakai foto dari
// photos-data.js seperti biasa.

(async function loadRemotePhotos() {

    if (!window.supabaseClient) return;
    if (typeof galleryPhotos === "undefined") return;

    try {
        const { data, error } = await window.supabaseClient
            .from("photos")
            .select("*")
            .eq("status", "approved")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Gagal ambil foto submission dari Supabase:", error.message);
            return;
        }

        (data || []).forEach((row) => {
            galleryPhotos.push({
                image: row.image_url,
                game: row.game || "🎮 Roblox",
                title: row.title || "",
                caption: row.caption || "",
                date: row.date || "",
                people: row.people || ""
            });
        });

        document.dispatchEvent(new CustomEvent("photos-updated"));

    } catch (err) {
        console.error("Gagal konek ke Supabase:", err);
    }

})();
