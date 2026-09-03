// dark-mode.js - ONE dark mode implementation, shared by every page.
// (Sebelumnya ada 2 versi beda-beda: script.js pakai class "dark-mode",
// about.js pakai atribut "data-theme" yang nggak punya CSS sama sekali,
// dan gallery.js nggak punya dark mode sama sekali. Sekarang cuma ini.)
//
// Load file ini di SETIAP halaman, sebelum script lain.

const DARK_MODE_KEY = "darkMode";

function isDarkModeOn() {
    return localStorage.getItem(DARK_MODE_KEY) === "true";
}

function applyDarkMode(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        toggleBtn.title = isDark ? "Light Mode" : "Dark Mode";
        toggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
}

function toggleDarkMode() {
    const isDark = !document.body.classList.contains("dark-mode");
    localStorage.setItem(DARK_MODE_KEY, isDark);
    applyDarkMode(isDark);
}

function initDarkMode() {
    applyDarkMode(isDarkModeOn());

    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleDarkMode);
    }
}

initDarkMode();