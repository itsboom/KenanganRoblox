// favorites-core.js - ONE favorites system, shared by every page.
//
// Sebelumnya home page (script.js) dan favorites page (favorites.js) pakai
// localStorage KEY YANG BEDA dan nyimpen berdasarkan INDEX (nomor urut foto),
// padahal tiap halaman punya urutan foto sendiri-sendiri. Jadi like di satu
// halaman nggak nyambung ke halaman lain, dan foto favorit bisa salah.
//
// Sekarang semua halaman pakai KEY YANG SAMA dan nyimpen berdasarkan
// PATH GAMBAR (yang unik untuk tiap foto), bukan nomor urut. Jadi like
// dari halaman mana pun selalu konsisten di mana-mana.
//
// Load file ini SEBELUM gallery.js / script.js / favorites.js.

const FAVORITES_KEY = "orm_favorites";

function getFavoriteImages() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    } catch (err) {
        return [];
    }
}

function isImageFavorited(imagePath) {
    return getFavoriteImages().includes(imagePath);
}

function toggleFavoriteImage(imagePath) {
    let favs = getFavoriteImages();

    if (favs.includes(imagePath)) {
        favs = favs.filter((img) => img !== imagePath);
    } else {
        favs.push(imagePath);
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return favs.includes(imagePath);
}

/**
 * Creates a ready-to-insert ❤️ button for a given photo.
 * Handles its own click + visual state; just append it into
 * the card's `.memory-photo-wrap`.
 */
function createFavoriteButton(imagePath) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "favorite-btn";
    btn.setAttribute("aria-label", "Add to favorites");

    function refresh() {
        const isFav = isImageFavorited(imagePath);
        btn.textContent = isFav ? "♥️" : "♡";
        btn.classList.toggle("is-favorite", isFav);
        btn.setAttribute("aria-label", isFav ? "Remove from favorites" : "Add to favorites");
    }

    refresh();

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavoriteImage(imagePath);
        refresh();
    });

    return btn;
}

/**
 * Attaches a favorite button to every `.memory-card` that has a
 * `.memory-photo-wrap` and a photo, using the photo's own `src` as
 * the favorite key. Safe to call on any page — does nothing if there
 * are no memory cards yet.
 */
function attachFavoriteButtons(container) {
    const scope = container || document;
    const cards = scope.querySelectorAll(".memory-card");

    cards.forEach((card) => {
        const photoWrap = card.querySelector(".memory-photo-wrap");
        const img = card.querySelector(".memory-photo");

        if (!photoWrap || !img || photoWrap.querySelector(".favorite-btn")) {
            return;
        }

        photoWrap.appendChild(createFavoriteButton(img.getAttribute("src")));
    });
}
