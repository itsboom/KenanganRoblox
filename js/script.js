const memories = [
    {
        image: "../assets/d68fc145-60a4-4cea-ade7-15056a726b2f.jpg",
        game: "🎮 Roblox",
        title: "Niatnya cuma main sebentar 😭",
        caption: "Entah bagaimana, kami akhirnya bermain selama tiga jam. Bahkan lebih deh kayaknya.",
        date: "2025",
        people: "Dino, Syaa, Yuki"
    },

    {
        image: "../assets/6b91a6e1-67dc-4f57-8913-80590e73cdf1.jpg",
        game: "🎮 Roblox",
        title: "That was NOT the plan 😭",
        caption: "Awalnya dua cowo itu doang yang mau foto dan berakhir ciwi ciwi ikutan.",
        date: "2026",
        people: "Vans, Syaa, Ket, Mio, Kak Jiebell"
    },

    {
        image: "../assets/426c432e-f40e-4bd2-bd26-ce1a7124c4f2.jpg",
        game: "🏝️ Roblox",
        title: "We somehow survived",
        caption: "Nobody knew what we were doing, but somehow we made it.",
        date: "2025",
        people: "Vin, Syaa, ifa, Mio, Rawr"
    },

    {
        image: "../assets/8279abf0-a5f0-4058-89f4-a58512396d5b.jpg",
        game: "😂 Roblox",
        title: "The legendary disaster",
        caption: "We laughed more than we actually played. Foto di kesempatan dalam kesempitan.",
        date: "2026",
        people: "Rawr, Syaa, Mio"
    },

    {
        image: "../assets/d06e1cf4-3770-44a3-9476-4c66e0997fbb.webp",
        game: "🌙 Roblox",
        title: "One last game...",
        caption: "It was never actually the last game. Jangan bilang \"one last game\" lagi ya😭",
        date: "2026",
        people: "Mio, Kak Jiebell, Rawr, Syaa"
    },

    {
        image: "../assets/Gemini_Generated_Image_7eyh2k7eyh2k7eyh.png",
        game: "🌙 Roblox",
        title: "May it never end",
        caption: "Seneng banget bisa main bareng kalian. Semoga kita bisa main bareng terus.",
        date: "2026",
        people: "Vans, Syaa, Ket, Mio, Kak Jiebell"
    }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const randomMemoryBtn = document.getElementById("randomMemoryBtn");
const randomModal = document.getElementById("randomModal");
const randomClose = document.getElementById("randomClose");
const anotherMemoryBtn = document.getElementById("anotherMemoryBtn");

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");

const lightboxImage = document.getElementById("lightboxImage");
const lightboxGame = document.getElementById("lightboxGame");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPeople = document.getElementById("lightboxPeople");

const randomImage = document.getElementById("randomImage");
const randomGame = document.getElementById("randomGame");
const randomTitle = document.getElementById("randomMemoryTitle");
const randomDate = document.getElementById("randomDate");
const randomCaption = document.getElementById("randomCaption");
const randomPeople = document.getElementById("randomPeople");
const randomAlbum = document.getElementById("randomAlbum");

const secretMessageBtn = document.getElementById("secretMessageBtn");
const secretModal = document.getElementById("secretModal");
const secretClose = document.getElementById("secretClose");

const confettiContainer = document.getElementById("confettiContainer");


/* =========================================================
   FAVORITES & DARK MODE now live in favorites-core.js and
   dark-mode.js (shared across every page — see those files).
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
}

if (menuToggle) {
    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );
}


/* Close mobile menu after clicking a link */

const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* Close mobile menu when clicking outside */

document.addEventListener("click", (event) => {

    const clickedInsideNavigation =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideNavigation) {
        navLinks.classList.remove("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});


/* =========================================================
   SMOOTH SCROLL
   CSS handles most of this, but this ensures the nav
   behaves consistently across browsers.
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   SCROLL REVEAL now lives in scroll-reveal.js (shared across
   every page — see that file, loaded before this one).
========================================================= */


/* =========================================================
   IMAGE FALLBACK
   If a memory image is missing, use placeholder.jpg.
========================================================= */

const memoryImages =
    document.querySelectorAll(".memory-photo");

memoryImages.forEach((image) => {

    image.addEventListener("error", () => {

        if (!image.dataset.fallback) {

            image.dataset.fallback = "true";

            image.src = "../assets/placeholder.jpg";

        }

    });

});


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

/* Slug-slug album yang beneran ada halamannya di memory.html. */
const KNOWN_ALBUM_IDS = new Set([
    "niatnya-cuma-main-sebentar",
    "that-was-not-the-plan",
    "we-somehow-survived",
    "the-legendary-disaster",
    "one-last-game",
    "may-it-never-end"
]);

function openLightbox(index) {

    const memory = memories[index];

    if (!memory) {
        return;
    }

    lightboxImage.src = memory.image;
    lightboxImage.alt = memory.title;

    lightboxGame.textContent = memory.game;
    lightboxTitle.textContent = memory.title;
    lightboxDate.textContent = memory.date;
    lightboxCaption.textContent = memory.caption;

    if (lightboxPeople) {
        lightboxPeople.textContent = memory.people ? `👥 ${memory.people}` : "";
        lightboxPeople.hidden = !memory.people;
    }

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



/* Attach photo buttons */

const memoryCards =
    document.querySelectorAll(".memory-card");

memoryCards.forEach((card) => {

    const expandButton =
        card.querySelector(".photo-expand");

    const image =
        card.querySelector(".memory-photo");

    const detailButton =
        card.querySelector(".memory-detail-link");

    const index =
        Number(card.dataset.memoryIndex);


    if (expandButton) {
        expandButton.addEventListener("click", () => {
            openLightbox(index);
        });
    }


    if (image) {
        image.addEventListener("click", () => {
            openLightbox(index);
        });
    }

    if (detailButton) {
        detailButton.addEventListener("click", () => {
            const albumId = detailButton.dataset.albumId;

            if (albumId) {
                window.location.href = `memory.html?id=${albumId}`;
            }
        });
    }

    const memory = memories[index];

    if (memory && memory.people) {

        const content = card.querySelector(".memory-content");

        if (content && !content.querySelector(".memory-people")) {

            const peopleLabel = document.createElement("span");
            peopleLabel.className = "memory-people";
            peopleLabel.textContent = "👥 " + memory.people;

            content.appendChild(peopleLabel);

        }

    }

});


if (lightboxClose) {
    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );
}


/* Close lightbox by clicking backdrop */

if (lightbox) {
    const lightboxBackdrop = lightbox.querySelector(".modal-backdrop");
    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener("click", closeLightbox);
    }
}


/* =========================================================
   RANDOM MEMORY
========================================================= */

let lastRandomIndex = -1;


function getRandomMemory() {

    if (memories.length === 0) {
        return null;
    }

    let randomIndex;

    /* Avoid showing the exact same memory twice in a row */

    if (memories.length === 1) {

        randomIndex = 0;

    } else {

        do {
            randomIndex =
                Math.floor(
                    Math.random() * memories.length
                );
        } while (
            randomIndex === lastRandomIndex
        );

    }

    lastRandomIndex = randomIndex;

    return memories[randomIndex];
}


function showRandomMemory() {

    const memory = getRandomMemory();

    if (!memory) {
        return;
    }

    randomImage.src = memory.image;
    randomImage.alt = memory.title;

    randomGame.textContent = memory.game;
    randomTitle.textContent = memory.title;
    randomDate.textContent = memory.date;
    randomCaption.textContent = memory.caption;

    if (randomPeople) {
        randomPeople.textContent = memory.people ? `👥 ${memory.people}` : "";
        randomPeople.hidden = !memory.people;
    }

    if (randomAlbum) {

        const albumId = toAlbumSlug(memory.title);

        if (KNOWN_ALBUM_IDS.has(albumId)) {
            randomAlbum.href = `memory.html?id=${albumId}`;
            randomAlbum.textContent = "Lihat kenangan ini →";
            randomAlbum.hidden = false;
        } else {
            randomAlbum.href = "#";
            randomAlbum.textContent = "";
            randomAlbum.hidden = true;
        }

    }

    randomModal.classList.add("is-open");

    randomModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    randomClose.focus();

}


function closeRandomMemory() {

    randomModal.classList.remove("is-open");

    randomModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}


if (randomMemoryBtn) {
    randomMemoryBtn.addEventListener(
        "click",
        showRandomMemory
    );
}

if (anotherMemoryBtn) {
    anotherMemoryBtn.addEventListener(
        "click",
        showRandomMemory
    );
}

if (randomClose) {
    randomClose.addEventListener(
        "click",
        closeRandomMemory
    );
}

if (randomModal) {
    const randomBackdrop = randomModal.querySelector(".modal-backdrop");
    if (randomBackdrop) {
        randomBackdrop.addEventListener(
            "click",
            closeRandomMemory
        );
    }
}


/* Random image fallback */

if (randomImage) {
    randomImage.addEventListener("error", () => {

        if (!randomImage.dataset.fallback) {

            randomImage.dataset.fallback = "true";

            randomImage.src = "../assets/placeholder.jpg";

        }

    });
}


/* =========================================================
   SECRET MESSAGE
========================================================= */

function openSecretMessage() {

    secretModal.classList.add("is-open");

    secretModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    secretClose.focus();

    /* Small final confetti burst */

    createConfetti(35);

}


function closeSecretMessage() {

    secretModal.classList.remove("is-open");

    secretModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}


if (secretMessageBtn) {
    secretMessageBtn.addEventListener(
        "click",
        openSecretMessage
    );
}

if (secretClose) {
    secretClose.addEventListener(
        "click",
        closeSecretMessage
    );
}

secretModal
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeSecretMessage
    );


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

    if (randomModal.classList.contains("is-open")) {
        closeRandomMemory();
    }

    if (secretModal.classList.contains("is-open")) {
        closeSecretMessage();
    }

    navLinks.classList.remove("is-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

});


/* =========================================================
   CONFETTI
   Pure CSS + JavaScript
========================================================= */

function createConfetti(amount = 40) {

    const shapes = [
        "rect",
        "circle"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        const left =
            Math.random() * 100;

        const duration =
            2.5 + Math.random() * 2.5;

        const delay =
            Math.random() * 0.6;

        const drift =
            (Math.random() - 0.5) * 300;

        const rotation =
            Math.floor(
                Math.random() * 900 - 450
            );

        const size =
            5 + Math.random() * 7;

        const shape =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];


        piece.style.left =
            `${left}%`;

        piece.style.width =
            `${size}px`;

        piece.style.height =
            `${size * 1.4}px`;

        piece.style.animationDuration =
            `${duration}s`;

        piece.style.animationDelay =
            `${delay}s`;

        piece.style.setProperty(
            "--drift",
            `${drift}px`
        );

        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        if (shape === "circle") {
            piece.style.borderRadius = "50%";
        }


        /*
         * Different pastel colors without external assets.
         */
        const confettiColors = [
            "#f4c7d8",
            "#dcd2f2",
            "#ead8ad",
            "#cfc4e8",
            "#f7dfc8",
            "#ffffff"
        ];

        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];


        confettiContainer.appendChild(piece);


        /*
         * Remove each piece after animation finishes.
         */
        setTimeout(() => {

            piece.remove();

        }, (duration + delay) * 1000 + 300);

    }

}


/* =========================================================
   SEARCH & FILTER MEMORIES
========================================================= */

const memorySearchInput = document.getElementById("memorySearch");
const memoryGrid = document.getElementById("memoryGrid");

function filterMemories(searchTerm) {
    if (!memoryGrid) return;

    const cards = memoryGrid.querySelectorAll(".memory-card");
    let visibleCount = 0;

    cards.forEach((card) => {
        const title = card.querySelector("h3")?.textContent || "";
        const game = card.querySelector(".memory-game")?.textContent || "";
        const people = card.querySelector(".memory-people")?.textContent || "";
        const caption = card.querySelector("p")?.textContent || "";

        const searchLower = searchTerm.toLowerCase();
        const matches =
            title.toLowerCase().includes(searchLower) ||
            game.toLowerCase().includes(searchLower) ||
            people.toLowerCase().includes(searchLower) ||
            caption.toLowerCase().includes(searchLower);

        if (matches) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Show/hide empty state if needed
    if (visibleCount === 0 && memoryGrid) {
        let emptyMsg = memoryGrid.parentElement.querySelector(".memories-empty-note");
        if (!emptyMsg) {
            emptyMsg = document.createElement("p");
            emptyMsg.className = "memories-empty-note";
            emptyMsg.textContent = "Tidak ada kenangan dengan pencarian tersebut 😔";
            memoryGrid.parentElement.appendChild(emptyMsg);
        }
        emptyMsg.hidden = false;
    } else {
        const emptyMsg = memoryGrid.parentElement.querySelector(".memories-empty-note");
        if (emptyMsg) emptyMsg.hidden = true;
    }
}

if (memorySearchInput) {
    memorySearchInput.addEventListener("input", (e) => {
        filterMemories(e.target.value);
    });
}


/* =========================================================
   FAVORITE BUTTON FUNCTIONALITY
   (uses attachFavoriteButtons() from favorites-core.js)
========================================================= */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachFavoriteButtons());
} else {
    attachFavoriteButtons();
}