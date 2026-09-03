// gallery.js - Gallery grid, filters, search & lightbox.
// Depends on photos-data.js (galleryPhotos) and favorites-core.js
// (favorite ❤️ button) being loaded first.

function extractYear(dateStr) {

    if (!dateStr) {
        return null;
    }

    const match = String(dateStr).match(/\d{4}/);

    return match ? match[0] : null;

}


/* =========================================================
   DOM ELEMENTS
========================================================= */

const galleryFilters = document.getElementById("galleryFilters");
const galleryGridWrap = document.getElementById("galleryGridWrap");
const galleryEmptyNote = document.getElementById("galleryEmptyNote");

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");

const lightboxImage = document.getElementById("lightboxImage");
const lightboxGame = document.getElementById("lightboxGame");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPeople = document.getElementById("lightboxPeople");


/* =========================================================
   FILTER STATE
   -----------------------------------------------------------
   "activeFilter" is either "all" or a specific year string
   (e.g. "2026"). It's whatever the user last clicked.
========================================================= */

let activeFilter = "all";

/* Foto yang lagi ditampilkan (setelah difilter), dipakai
   supaya index di lightbox tetap sesuai foto yang diklik. */
let visiblePhotos = galleryPhotos;


/* =========================================================
   BUILD FILTER CHIPS
   Tahun-tahunnya diambil otomatis dari data galleryPhotos,
   jadi kalau nambah foto tahun baru, chip-nya nambah sendiri.
========================================================= */

function buildGalleryFilters() {

    if (!galleryFilters) {
        return;
    }

    const years = Array.from(
        new Set(
            galleryPhotos
                .map((photo) => extractYear(photo.date))
                .filter(Boolean)
        )
    ).sort((a, b) => b.localeCompare(a));

    if (years.length <= 1) {
        galleryFilters.hidden = true;
        return;
    }

    galleryFilters.innerHTML = "";

    const allChip = document.createElement("button");
    allChip.type = "button";
    allChip.className = "filter-chip";
    allChip.textContent = "Semua";
    allChip.dataset.filter = "all";

    galleryFilters.appendChild(allChip);

    years.forEach((year) => {

        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "filter-chip";
        chip.textContent = year;
        chip.dataset.filter = year;

        galleryFilters.appendChild(chip);

    });

    updateActiveChip();

    galleryFilters.addEventListener("click", (event) => {

        const chip = event.target.closest(".filter-chip");

        if (!chip) {
            return;
        }

        activeFilter = chip.dataset.filter;

        updateActiveChip();
        buildGalleryGrid();

    });

}


function updateActiveChip() {

    galleryFilters
        .querySelectorAll(".filter-chip")
        .forEach((chip) => {

            chip.classList.toggle(
                "is-active",
                chip.dataset.filter === activeFilter
            );

        });

}


/* =========================================================
   BUILD THE GRID
========================================================= */

function buildGalleryGrid() {

    visiblePhotos =
        activeFilter === "all"
            ? galleryPhotos
            : galleryPhotos.filter(
                  (photo) => extractYear(photo.date) === activeFilter
              );

    galleryGridWrap.innerHTML = "";

    if (visiblePhotos.length === 0) {
        galleryEmptyNote.hidden = false;
        return;
    }

    galleryEmptyNote.hidden = true;

    const stars = ["✦", "♡", "✧", "⭐"];

    visiblePhotos.forEach((photo, index) => {

        const card = document.createElement("article");

        card.className =
            "memory-card " +
            (index % 2 === 0 ? "rotation-left" : "rotation-right");

        /* Photo */

        const photoWrap = document.createElement("div");
        photoWrap.className = "memory-photo-wrap";

        const tape = document.createElement("div");
        tape.className = "tape photo-tape";
        tape.setAttribute("aria-hidden", "true");

        const image = document.createElement("img");

        image.src = photo.image;
        image.alt = photo.title || "Roblox memory";
        image.className = "memory-photo";
        image.loading = "lazy";

        image.addEventListener("error", () => {

            if (!image.dataset.fallback) {
                image.dataset.fallback = "true";
                image.src = "../assets/placeholder.jpg";
            }

        });

        const expandButton = document.createElement("button");
        expandButton.type = "button";
        expandButton.className = "photo-expand";
        expandButton.setAttribute("aria-label", "Open memory photo");
        expandButton.textContent = "⤢";

        photoWrap.appendChild(tape);
        photoWrap.appendChild(image);
        photoWrap.appendChild(expandButton);
        photoWrap.appendChild(createFavoriteButton(photo.image));

        /* Text content, below the photo */

        const content = document.createElement("div");
        content.className = "memory-content";

        const gameLabel = document.createElement("span");
        gameLabel.className = "memory-game";
        gameLabel.textContent = photo.game || "";

        const title = document.createElement("h3");
        title.className = "memory-title";
        title.textContent = photo.title || "";

        const caption = document.createElement("p");
        caption.className = "memory-caption";
        caption.textContent = photo.caption || "";

        content.appendChild(gameLabel);
        content.appendChild(title);
        content.appendChild(caption);

        if (photo.people) {
            const people = document.createElement("span");
            people.className = "memory-people";
            people.textContent = `👥 ${photo.people}`;
            content.appendChild(people);
        }

        /* Decorative star */

        const star = document.createElement("span");
        star.className = "paper-star";
        star.setAttribute("aria-hidden", "true");
        star.textContent = stars[index % stars.length];

        card.appendChild(photoWrap);
        card.appendChild(content);
        card.appendChild(star);

        image.addEventListener("click", () => {
            openLightbox(index);
        });

        expandButton.addEventListener("click", () => {
            openLightbox(index);
        });

        galleryGridWrap.appendChild(card);

    });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function toAlbumSlug(title) {
    return String(title || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

const KNOWN_ALBUM_IDS = new Set([
    "niatnya-cuma-main-sebentar",
    "that-was-not-the-plan",
    "we-somehow-survived",
    "the-legendary-disaster",
    "one-last-game",
    "may-it-never-end",
    "fish-it-huhu",
    "fish-it-lagi",
    "menyamar",
    "muncak-bareng-bestie",
    "muncak-bareng-bestie-jill",
    "foto-random",
    "bersama-kak-kiki-yuhu",
    "i-miss-u",
    "i-will-never-forget-you",
    "ghost",
    "muncakk",
    "muncak-lagi-dan-lagi",
    "my-dino",
    "hey",
    "jangan-lupakan-aku",
    "cama-cepupu",
    "kak-kookiee",
    "bacon",
    "mau-bunga",
    "triple-trouble",
    "two-random-people",
    "rawrr-dan-paw",
    "mount-palung",
    "jiesyamiut",
    "awal-mula-kita-kenal",
    "my-bestfriend-in-rl",
    "bang-twist",
    "mount-again",
    "cp-ava",
    "kekacauan-kecil",
    "vd",
    "cute-squad-creepy-vibe",
    "fish-it",  
    "mount",
    "awal-main-violence-district",
    "miss",

]);

function openLightbox(index) {

    const photo = visiblePhotos[index];

    if (!photo) {
        return;
    }

    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title || "";

    lightboxGame.textContent = photo.game || "";
    lightboxTitle.textContent = photo.title || "";
    lightboxDate.textContent = photo.date || "";
    lightboxCaption.textContent = photo.caption || "";
    lightboxPeople.textContent = photo.people ? `👥 ${photo.people}` : "";
    lightboxPeople.hidden = !photo.people;

    lightbox.classList.add("is-open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    lightboxClose.focus();

}


function closeLightbox() {

    lightbox.classList.remove("is-open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    if (lightboxDetailButton) {
        lightboxDetailButton.hidden = true;
    }

    document.body.classList.remove("modal-open");

}

lightboxClose.addEventListener(
    "click",
    closeLightbox
);

lightbox
    .querySelector(".modal-backdrop")
    .addEventListener("click", closeLightbox);


/* Image fallback for the lightbox itself */

lightboxImage.addEventListener("error", () => {

    if (!lightboxImage.dataset.fallback) {
        lightboxImage.dataset.fallback = "true";
        lightboxImage.src = "../assets/placeholder.jpg";
    }

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
        return;
    }

    if (lightbox.classList.contains("is-open")) {
        closeLightbox();
    }

});


/* =========================================================
   INITIALIZATION
========================================================= */

buildGalleryFilters();
buildGalleryGrid();

// Gallery search functionality
const gallerySearchInput = document.getElementById("gallerySearch");
if (gallerySearchInput) {
    gallerySearchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".memory-card");
        
        cards.forEach((card) => {
            const title = card.querySelector(".memory-title")?.textContent.toLowerCase() || "";
            const game = card.querySelector(".memory-game")?.textContent.toLowerCase() || "";
            const people = card.querySelector(".memory-people")?.textContent.toLowerCase() || "";
            const caption = card.querySelector(".memory-caption")?.textContent.toLowerCase() || "";
            
            const matches = title.includes(searchTerm) || 
                          game.includes(searchTerm) || 
                          people.includes(searchTerm) || 
                          caption.includes(searchTerm);
            
            card.style.display = matches ? "" : "none";
        });
    });
}