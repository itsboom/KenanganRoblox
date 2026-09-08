// nav-menu.js - Baris menu (Home, Gallery, Statistics, Members, Favorites,
// Guest Book) + toggle hamburger buat mobile. Dipakai di SEMUA halaman
// (sebelumnya cuma ada di home.html lewat script.js).

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function toggleMobileMenu() {
    if (!navLinks || !menuToggle) return;
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
}

if (navLinks) {

    /* Tutup menu abis klik salah satu link */
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    /* Tutup menu kalau klik di luar */
    document.addEventListener("click", (event) => {
        const clickedInside =
            navLinks.contains(event.target) ||
            (menuToggle && menuToggle.contains(event.target));

        if (!clickedInside) {
            closeMobileMenu();
        }
    });

    /* Tutup menu pakai Escape */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });
}
