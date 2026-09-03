// favorites.js - Favorites page: renders every photo the user has liked
// anywhere on the site (home, gallery, etc). Relies on photos-data.js
// (galleryPhotos) and favorites-core.js (favorite storage) being loaded
// first — both listed before this file in favorites.html.

const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesEmptyNote = document.getElementById("favoritesEmptyNote");
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxGame = document.getElementById("lightboxGame");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPeople = document.getElementById("lightboxPeople");


function getFavoritedPhotos() {
    const favImages = getFavoriteImages();
    // Preserve like order (most recently liked last isn't tracked, so we
    // just follow galleryPhotos' natural order for a stable, predictable list).
    return galleryPhotos.filter((photo) => favImages.includes(photo.image));
}

function renderFavorites() {
    if (!favoritesGrid) return;

    favoritesGrid.innerHTML = "";

    const favoritedPhotos = getFavoritedPhotos();

    if (favoritedPhotos.length === 0) {
        if (favoritesEmptyNote) favoritesEmptyNote.hidden = false;
        return;
    }

    if (favoritesEmptyNote) favoritesEmptyNote.hidden = true;

    favoritedPhotos.forEach((photo, index) => {
        const card = document.createElement("div");
        card.className = `memory-card ${index % 2 === 0 ? "rotation-left" : "rotation-right"}`;

        card.innerHTML = `
            <div class="memory-photo-wrap">
                <img src="${photo.image}" alt="${photo.title}" class="memory-photo" />
                <button class="photo-expand" aria-label="Expand image">
                    🔍
                </button>
                <div class="tape photo-tape" aria-hidden="true"></div>
            </div>
            <div class="memory-content">
                <span class="memory-game">${photo.game || ""}</span>
                <h3 class="memory-title">${photo.title || ""}</h3>
                <time>${photo.date || ""}</time>
                <p class="memory-caption">${photo.caption || ""}</p>
                ${photo.people ? `<span class="memory-people">👥 ${photo.people}</span>` : ""}
            </div>
        `;

        favoritesGrid.appendChild(card);

        const expandBtn = card.querySelector(".photo-expand");
        const img = card.querySelector(".memory-photo");

        expandBtn.addEventListener("click", () => openFavoriteLightbox(photo));
        img.addEventListener("click", () => openFavoriteLightbox(photo));
    });

    // Adds the ❤️ button on every rendered card, and keeps it in sync —
    // unliking a photo here removes it from the grid on next render.
    attachFavoriteButtons(favoritesGrid);
    favoritesGrid.querySelectorAll(".favorite-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            // Re-render so an unliked photo disappears from this page immediately.
            setTimeout(renderFavorites, 0);
        });
    });
}

function openFavoriteLightbox(photo) {
    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title || "";
    lightboxGame.textContent = photo.game || "";
    lightboxTitle.textContent = photo.title || "";
    lightboxDate.textContent = photo.date || "";
    lightboxCaption.textContent = photo.caption || "";

    if (lightboxPeople) {
        lightboxPeople.textContent = photo.people ? `👥 ${photo.people}` : "";
        lightboxPeople.hidden = !photo.people;
    }

    if (lightbox) {
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        lightboxClose.focus();
    }
}

function closeFavoriteLightbox() {
    if (lightbox) {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }
}

if (lightboxClose) lightboxClose.addEventListener("click", closeFavoriteLightbox);
if (lightbox && lightbox.querySelector(".modal-backdrop")) {
    lightbox.querySelector(".modal-backdrop").addEventListener("click", closeFavoriteLightbox);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox && lightbox.classList.contains("is-open")) {
        closeFavoriteLightbox();
    }
});

// Render favorites jika di halaman favorites
if (document.getElementById("favoritesSection")) {
    renderFavorites();
}