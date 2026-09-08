// submit.js - Form submit foto: upload ke Supabase Storage + Insert ke
// tabel "photos" dengan status "pending" (nunggu di-approve pemilik).
// Butuh supabase-config.js sudah di-load dan diisi sebelum file ini.

const submitForm = document.getElementById("submitForm");
const submitStatus = document.getElementById("submitStatus");
const submitButton = document.getElementById("submitButton");

function showSubmitStatus(message, type) {
    if (!submitStatus) return;
    submitStatus.textContent = message;
    submitStatus.className = "submit-status submit-status-" + type;
    submitStatus.hidden = false;
}

if (submitForm) {

    submitForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!window.supabaseClient) {
            showSubmitStatus(
                "Fitur submit foto belum aktif — pemilik situs belum selesai setup Supabase-nya. Coba lagi nanti ya!",
                "error"
            );
            return;
        }

        const fileInput = document.getElementById("submitImage");
        const file = fileInput.files[0];

        if (!file) {
            showSubmitStatus("Pilih foto dulu ya!", "error");
            return;
        }

        const title = document.getElementById("submitTitle").value.trim();
        const caption = document.getElementById("submitCaption").value.trim();
        const people = document.getElementById("submitPeople").value.trim();
        const date = document.getElementById("submitDate").value.trim();
        const game = document.getElementById("submitGame").value.trim() || "🎮 Roblox";

        submitButton.disabled = true;
        showSubmitStatus("Lagi upload foto...", "info");

        try {
            const fileExt = (file.name.split(".").pop() || "jpg").toLowerCase();
            const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${fileExt}`;

            const { error: uploadError } = await window.supabaseClient
                .storage
                .from("photos")
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: publicUrlData } = window.supabaseClient
                .storage
                .from("photos")
                .getPublicUrl(fileName);

            const { error: insertError } = await window.supabaseClient
                .from("photos")
                .insert({
                    image_url: publicUrlData.publicUrl,
                    title,
                    caption,
                    people,
                    date,
                    game,
                    status: "pending"
                });

            if (insertError) throw insertError;

            showSubmitStatus(
                "Foto berhasil dikirim! Nunggu di-approve dulu sama pemilik situs ya, abis itu bakal muncul di galeri 💕",
                "success"
            );
            submitForm.reset();

        } catch (err) {
            console.error(err);
            showSubmitStatus("Gagal upload: " + err.message, "error");
        } finally {
            submitButton.disabled = false;
        }
    });

}
