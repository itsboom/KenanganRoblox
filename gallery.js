/* =========================================================
   ALL PHOTOS GALLERY
   Vanilla JavaScript
========================================================= */


/* =========================================================
   PHOTO DATA
   -----------------------------------------------------------
   Tambahkan foto baru di sini kapan pun mau. Cukup:
     1. Taruh file foto barunya di folder /assets
     2. Copy salah satu blok { ... } di bawah ini
    3. Ganti "image", "game", "title", "caption", "people", "date"
   Semua foto otomatis muncul di halaman ini, nggak perlu
   ubah HTML sama sekali.

   Soal "date": kalau inget bulannya, tulis "Bulan Tahun"
   (misal "Agustus 2026"). Kalau nggak inget, tahun aja juga
   boleh (misal "2026"). Filter di atas grid tetap ngelompokin
   per tahun otomatis, jadi format apapun di atas tetap kebaca.
========================================================= */

const galleryPhotos = [
    {
        image: "assets/d68fc145-60a4-4cea-ade7-15056a726b2f.jpg",
        game: "🎮 Roblox",
        title: "Niatnya cuma main sebentar 😭",
        caption: "Entah bagaimana, kami akhirnya bermain selama tiga jam. Bahkan lebih deh kayaknya.",
        people: "Dino, Syaa, Yuki",
        date: "2025"
    },

    {
        image: "assets/6b91a6e1-67dc-4f57-8913-80590e73cdf1.jpg",
        game: "🎮 Roblox",
        title: "That was NOT the plan 😭",
        caption: "Awalnya dua cowo itu doang yang mau foto dan berakhir ciwi ciwi ikutan.",
        people: "Vans, Syaa, Ket, Mio, Kak Jiebell",
        date: "2026"
    },

    {
        image: "assets/426c432e-f40e-4bd2-bd26-ce1a7124c4f2.jpg",
        game: "🏝️ Roblox",
        title: "We somehow survived",
        caption: "Nobody knew what we were doing, but somehow we made it.",
        people: "Vin, Syaa, ifa, Mio, Rawr",
        date: "2025"
    },

    {
        image: "assets/8279abf0-a5f0-4058-89f4-a58512396d5b.jpg",
        game: "😂 Roblox",
        title: "The legendary disaster",
        caption: "We laughed more than we actually played. Foto di kesempatan dalam kesempitan.",
        people: "Rawr, Syaa, Mio",
        date: "2026"
    },

    {
        image: "assets/d06e1cf4-3770-44a3-9476-4c66e0997fbb.webp",
        game: "🌙 Roblox",
        title: "One last game...",
        caption: "It was never actually the last game. Jangan bilang \"one last game\" lagi ya😭",
        people: "Mio, Kak Jiebell, Rawr, Syaa",
        date: "2026"
    },

    {
        image: "assets/Gemini_Generated_Image_7eyh2k7eyh2k7eyh.png",
        game: "🌙 Roblox",
        title: "May it never end",
        caption: "Seneng banget bisa main bareng kalian. Semoga kita bisa main bareng terus.",
        people: "Vans, Syaa, Ket, Mio, Kak Jiebell",
        date: "2026"
    }

    
    ,{
        image: "assets/fe8886f5-d472-419f-b26f-344afee38dea.jpg",
        game: "🎮 Roblox",
        title: "Fish it huhu",
        caption: "Seru Banget waktu itu dan bener-bener nggk kenal waktu.",
        people: "Mio, Syaa, Rawr",
        date: "2025"
    }

    ,{
        image: "assets/8807028910_121864768012064_1769618456965.png",
        game: "🎮 Roblox",
        title: "Fish it lagi",
        caption: "Jujur kangen ... tapi nggk bisa main bareng lagi.",
        people: "Vall, Juan, Mio,Rawr, Syaa, Bang Rezz",
        date: "2025"
    }

    ,{
        image: "assets/f9d07e5f-2bf4-481a-acee-69bb7ead6c98.jpg",
        game: "🎮 Roblox",
        title: "Menyamar",
        caption: "Bener-bener jadi mbaas nih kita mio😭",
        people: "Syaa, Rawr, Mio",
        date: "2026"
    }

    ,{
        image: "assets/fe9253d2-38c5-435e-9df4-f4a249d54910.jpg",
        game: "🎮 Roblox",
        title: "Muncak bareng bestie",
        caption: "Kapan kita muncak lagi? dan melewati rintangan bareng lagi?😭",
        people: "Syaa, Mio",
        date: "2026"
    }
    ,{
        image: "assets/c7eb586a-b7a2-4604-bed9-52751ccc21f6.jpg",
        game: "🎮 Roblox",
        title: "Muncak bareng bestie jill",
        caption: "Jill dulu kita main gunung nggk kenal waktu ya ...",
        people: "Syaa, Jijill",
        date: "2025"
    }
    ,{
        image: "assets/a510d728-ba74-45c5-8639-82cae95bd15a.jpg",
        game: "🎮 Roblox",
        title: "Foto random",
        caption: "I always remember ...",
        people: "Jijill",
        date: "2025"
    }

    ,{
        image: "assets/d0e28840-43d0-4552-9aba-c88a448e556d.jpg",
        game: "🎮 Roblox",
        title: "Bersama kak kiki yuhu",
        caption: "Donator kak kiki yang baik hati, semoga kita bisa main bareng lagi ya kak😭",
        people: "Syaa, Kak Kiki, Kak Elin",
        date: "2025"
    }
        ,{
        image: "assets/7adf5c01-b070-4d21-8397-b3ed1f265ba5.jpg",
        game: "🎮 Roblox",
        title: "I MISS U",
        caption: "Kamu temen pertama ku di roblox deh ...",
        people: "Syaa, Jijill",
        date: "2025"
    }

        ,{
        image: "assets/8105746f-9259-40ab-92d0-128ac98495c0.jpg",
        game: "🎮 Roblox",
        title: "I will never forget you",
        caption: "We don't play Roblox together much anymore, but you're still one of my favorite people ...",
        people: "Syaa, Jijill",
        date: "2025"
    }
        ,{
        image: "assets/f7997d78-8f8b-4834-8c08-76f3c67cb76a.jpg",
        game: "🎮 Roblox",
        title: "Ghost...",
        caption: "Ghostfinn atau ghosting?",
        people: "Rawr, Syaa, Mio",
        date: "2025"
    }
     ,{
        image: "assets/7f2b283b-42cf-4bbc-9e26-57ca31d29411.jpg",
        game: "🎮 Roblox",
        title: "Muncakk",
        caption: "Bareng kak jie dan jill nih",
        people: "Kak Jiebell, Syaa, Jijill",
        date: "2025"
    }
    ,{
        image: "assets/1c505caf-e794-4953-bb07-f13d2ccdc20c.jpg",
        game: "🎮 Roblox",
        title: "Muncak lagi dan lagi",
        caption: "Tenang aja, bang xoul masuk juga kok",
        people: "Jijill, Syaa, Bang Xoul",
        date: "2025"
    }
    ,{
        image: "assets/37f54a3c-5e01-4bab-92af-a0edea2ce368.jpg",
        game: "🎮 Roblox",
        title: "My dino",
        caption: "Bestie ku yang satu ini bener-bener nggk bisa di lupain deh😭",
        people: "Syaa, Dino",
        date: "2025"
    }

    ,{
        image: "assets/268b61fe-20f4-4acf-98ea-29ba5de14f0e.jpg",
        game: "🎮 Roblox",
        title: "Hey ...",
        caption: "Ava mu lucu kali paok",
        people: "Juan/Ura, Stranger",
        date: "2025"
    }
    ,{
        image: "assets/8c598ca1-cfe7-4f51-bb09-e08d1f1898f2.jpg",
        game: "🎮 Roblox",
        title: "Jangan lupa ke gunung ini ya bestie ku",
        caption: "Ini gampang banget kok, siapin mental aja",
        people: "Admin, Jijill, Bang Xoul, Syaa",
        date: "2025"
    }
    ,{
        image: "assets/06bb40ae-7bb4-4bd6-8ade-a7b9f9327f22.jpg",
        game: "🎮 Roblox",
        title: "Cama cepupu",
        caption: "uhuk, dah sibuk kerja nich",
        people: "Syaa, Teh Elin",
        date: "2025"
    }
        ,{
        image: "assets/60fbc5d2-6383-4741-be49-8328c41c0897.jpg",
        game: "🎮 Roblox",
        title: "Kak kookiee",
        caption: "Sekarang aku canggung sama donatur ku ini",
        people: "Syaa, Kak Kiki, stranger",
        date: "2025"
    }
    ,{
        image: "assets/0d9a0947-7397-468c-8517-04ea79b8b5f4.jpg",
        game: "🎮 Roblox",
        title: "Bacon",
        caption: "Kita bacon lucu dan imut",
        people: "Jijill, Bang Xoul, Syaa",
        date: "2025"
    }    
    ,{
        image: "assets/6af3a885-234f-47dc-8083-b621586d5c1a.jpg",
        game: "🎮 Roblox",
        title: "Mau Bunga?",
        caption: "Ini bunga dari mio, rawr, dan syaa.",
        people: "Mio, Rawr, Syaa",
        date: "2025"
    }
    ,{
        image: "assets/85cd7220-e3f5-4ffa-957b-7c86f8fac016.jpg",
        game: "🎮 Roblox",
        title: "🤏",
        caption: "Aku masukin aja deh",
        people: "Ura/Juan",
        date: "2025"
    }    ,{
        image: "assets/6027e675-625e-4c47-9c9d-1dd5e5ccf4b0.jpg",
        game: "🎮 Roblox",
        title: "Jijil dan syaa",
        caption: "We're bestie forever, semoga kita bisa main bareng lagi ya😭",
        people: "Jijill, Syaa",
        date: "2025"
    }
    
    ,{
        image: "assets/8807028910_85931312520925_1764258003136.png",
        game: "🎮 Roblox",
        title: "Rawr dan Paw",
        caption: "sipaling jarang join tapi selalu ditunggu join dia... dulu",
        people: "Rash, Rawr",
        date: "2025"
    }    
    ,{
        image: "assets/8807028910_137526408608242_1777889452924.png",
        game: "🎮 Roblox",
        title: "Hey ...",
        caption: "ayo muncak lagi besty tapi anu gendong hehee (lyn)",
        people: "Syaa, Mio",
        date: "2026"
    }
    
    ,{
        image: "assets/8807028910_121864768012064_1769672360760.png",
        game: "🎮 Roblox",
        title: "Kangen hutan (?)",
        caption: "Kangen kenangan bareng kalian.",
        people: "Rawr, Mio, Bin ",
        date: "2025"
    }    
    
    ,{
        image: "assets/9136335981_86954037607818_1779801000689.png",
        game: "🎮 Roblox",
        title: "Mount Palung",
        caption: "Kapan ya muncak bareng lagi? semoga kita bisa main bareng lagi ya😭",
        people: "Uta, Mio, Syaa, Kak Jiebell",
        date: "2026"
    }
    ,{
        image: "assets/9136335981_86954037607818_1779801023151.png",
        game: "🎮 Roblox",
        title: "JieSyaMiUt",
        caption: "Jiebell, Syaa, Mio, dan Uta",
        people: "Uta, Mio, Syaa, Kak Jiebell",
        date: "2025"
    }    
    ,{
        image: "assets/9136335981_119865410252788_1759147761879.png",
        game: "🎮 Roblox",
        title: "Awal mula kita kenal",
        caption: "Pertama kali kenal kak",
        people: "Jijill, Bang Xoul, Syaa, Kak Jiebell",
        date: "2025"
    }
    
    ,{
        image: "assets/afb9ab51-d07f-43fc-b226-957789945dec.jpg",
        game: "🎮 Roblox",
        title: "My bestfriend in rl",
        caption: "my bubub, my bestie, my everything",
        people: "Syaa, Sitiw",
        date: "2025"
    }    ,{
        image: "assets/ce0d8721-693e-4b09-b52e-0eebfa716998.jpg",
        game: "🎮 Roblox",
        title: "Bang twist",
        caption: "Lama kali kita tidak main.",
        people: "Syaa, Bang Twist's Friends",
        date: "2025"
    }
    ,{
        image: "assets/ad88d91e-0582-4263-97dd-b3ee304ba730.jpg",
        game: "🎮 Roblox",
        title: "Mount again",
        caption: "Jill, it's nice to meet you. Let's stay in touch, okay? Let's keep being friends.",
        people: "Jill, You",
        date: "2025"
    }
    ,{
        image: "assets/Screenshot_2026-05-23-21-55-18-722_com.roblox.client.jpg",
        game: "🎮 Roblox",
        title: "Cp Ava",
        caption: "couplean ava ada wong",
        people: "Rawr, Syaa, Mio, Bang Xoul, Kak Jiebell",
        date: "2026"
    }
    
    ,{
        image: "assets/380fb3f5-4fa1-4753-ad30-533735076b2d.png",
        game: "🎮 Roblox",
        title: "kekacauan kecil",
        caption: "yang satu ngomong, yang satu ngikut, yang satu lagi entah ngapain😭",
        people: "Syaa, Desmond, Mio",
        date: "Agustus 2026"
    }
    
    ,{
        image: "assets/68d38416-e71c-4d5a-96e9-78235283f711.png",
        game: "❤ Roblox",
        title: "VD❤",
        caption: "Lagi nunggu match mulai dan kita foto dulu deh.",
        people: "Mio, Syaa",
        date: "2026"
    }
    
    ,{
        image: "assets/af96cc0f-ccd0-4c43-903f-35ff1e361084.jpg",
        game: "💃 Roblox",
        title: "Cute Squad, Creepy Vibe 🍓✨",
        caption: "Peta boleh serem, yang penting outfit tetep kece dan mabar bareng temen sefrekuensi! 🤍👻",
        people: "Riven, Kak Jiebell, Syaa, Mio",
        date: "2026"
    }
    /*
    ,{
        image: "assets/2352c7af-fe20-4ae0-8eae-bc257798eb5e.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/55960ee5-6a77-4d76-b735-dba971bde91b.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/5c6ad203-ecdb-4dbe-a17f-ef80df6fa20e.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/8807028910_121864768012064_1765298215107.png",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/9136335981_119865410252788_1759147779623.png",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/9136335981_86954037607818_1779801109331.png",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/9136335981_86954037607818_1779801124185.png",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/99bdc599-dce5-4426-b396-0f8bf05fa5ee.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/a6acab1e-7a15-459f-b2d8-6cf2b88272ca.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/d4c85822-15e8-4ede-ae56-4aa74cc370cb.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/db9ca31c-46fd-4dc0-b730-744757d119c6.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    */
];


/* =========================================================
   DATE HELPER
   -----------------------------------------------------------
   "date" boleh diisi "Agustus 2026" atau cuma "2026" — fungsi
   ini narik 4 digit tahunnya aja, dipakai buat filter supaya
   chip-nya tetap per tahun (bukan pecah per bulan).
========================================================= */

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
                image.src = "assets/placeholder.jpg";
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

        /* Text content, below the photo */

        const content = document.createElement("div");
        content.className = "memory-content";

        const gameLabel = document.createElement("span");
        gameLabel.className = "memory-game";
        gameLabel.textContent = photo.game || "";

        const title = document.createElement("h3");
        title.textContent = photo.title || "";

        const caption = document.createElement("p");
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
        lightboxImage.src = "assets/placeholder.jpg";
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