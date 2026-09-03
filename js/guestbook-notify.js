// guestbook-notify.js - "Notifikasi untuk pemilik website" for the guest book.
//
// PENTING (jujur soal keterbatasan): situs ini statis, tanpa server/backend,
// jadi TIDAK BISA kirim notifikasi asli (push notification / email) ke HP
// atau inbox pemilik saat ada pesan baru dari device lain — itu butuh server.
// Yang bisa dilakukan di situs statis: badge notifikasi di browser SAAT
// pemilik membuka situsnya sendiri (di device yang sama), menunjukkan ada
// pesan yang belum dibaca. Itu yang dibikin di sini.
//
// Load di SETIAP halaman (butuh elemen <span id="guestbookBadge"> di navbar).

const GB_NOTIFY_STORAGE_KEY = "robloxMemoriesGuestbook";
const GB_NOTIFY_SEEN_KEY = "robloxMemoriesGuestbookSeenCount";

function gbGetMessageCount() {
    try {
        const stored = localStorage.getItem(GB_NOTIFY_STORAGE_KEY);
        return stored ? JSON.parse(stored).length : 0;
    } catch (err) {
        return 0;
    }
}

function gbGetSeenCount() {
    return Number(localStorage.getItem(GB_NOTIFY_SEEN_KEY) || 0);
}

function updateGuestbookBadge() {
    const badge = document.getElementById("guestbookBadge");
    if (!badge) return;

    const unread = Math.max(0, gbGetMessageCount() - gbGetSeenCount());

    if (unread > 0) {
        badge.textContent = unread > 9 ? "9+" : String(unread);
        badge.hidden = false;
    } else {
        badge.hidden = true;
    }
}

function markGuestbookAsRead() {
    localStorage.setItem(GB_NOTIFY_SEEN_KEY, String(gbGetMessageCount()));
    updateGuestbookBadge();
}

updateGuestbookBadge();
