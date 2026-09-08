// scroll-reveal.js - Fades/slides elements with class="reveal" into view as
// the user scrolls. Shared across every page (previously lived only inside
// script.js, so pages that don't load script.js — like gallery.html —
// ended up with .reveal elements stuck invisible forever).

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* =========================================================
   SCROLL-LOCK SAFETY NET
   -----------------------------------------------------------
   Modal (lightbox, dll) ngunci scroll body pakai class
   "modal-open". Kalau karena sebab apapun modal-nya gagal
   ke-close dengan bener (script lain error, browser HP restore
   halaman dari cache pas tombol back, dll), class itu bisa
   nyangkut selamanya → situs kerasa freeze/nggak bisa discroll.
   Ini nge-cek terus: kalau body dikunci tapi nggak ada modal
   yang beneran kebuka, kunci-nya dilepas otomatis.
========================================================= */

function releaseStaleScrollLock() {
    if (!document.body.classList.contains("modal-open")) return;
    const anyModalOpen = document.querySelector(".modal.is-open");
    if (!anyModalOpen) {
        document.body.classList.remove("modal-open");
    }
}

document.addEventListener("click", releaseStaleScrollLock, true);
document.addEventListener("keyup", releaseStaleScrollLock, true);
document.addEventListener("touchend", releaseStaleScrollLock, true);
window.addEventListener("pageshow", releaseStaleScrollLock);
