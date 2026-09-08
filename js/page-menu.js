// page-menu.js - Dropdown "☰" menu (Home, Gallery, Statistics, Members,
// Favorites, Guest Book) shared by every page. Keeps the navbar from
// piling up with icons — only Dark Mode + this one menu button stay
// directly visible.

const pageMenuToggle = document.getElementById("pageMenuToggle");
const pageMenu = document.getElementById("pageMenu");

function closePageMenu() {
    if (!pageMenu || !pageMenuToggle) return;
    pageMenu.hidden = true;
    pageMenuToggle.setAttribute("aria-expanded", "false");
}

function openPageMenu() {
    if (!pageMenu || !pageMenuToggle) return;
    pageMenu.hidden = false;
    pageMenuToggle.setAttribute("aria-expanded", "true");
}

if (pageMenuToggle && pageMenu) {

    pageMenuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (pageMenu.hidden) {
            openPageMenu();
        } else {
            closePageMenu();
        }
    });

    // Klik di luar menu -> tutup
    document.addEventListener("click", (event) => {
        if (pageMenu.hidden) return;
        if (pageMenu.contains(event.target) || pageMenuToggle.contains(event.target)) return;
        closePageMenu();
    });

    // Escape -> tutup
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !pageMenu.hidden) {
            closePageMenu();
        }
    });
}
