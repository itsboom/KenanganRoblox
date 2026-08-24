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
     3. Ganti "image", "game", "title", "caption", "date"
   Semua foto otomatis muncul di halaman ini, nggak perlu
   ubah HTML sama sekali.
========================================================= */

const galleryPhotos = [
    {
        image: "assets/d68fc145-60a4-4cea-ade7-15056a726b2f.jpg",
        game: "🎮 Roblox",
        title: "Niatnya cuma main sebentar 😭",
        caption: "Entah bagaimana, kami akhirnya bermain selama tiga jam. Bahkan lebih deh kayaknya.",
        date: "2026"
    },

    {
        image: "assets/6b91a6e1-67dc-4f57-8913-80590e73cdf1.jpg",
        game: "🎮 Roblox",
        title: "That was NOT the plan 😭",
        caption: "Awalnya dua cowo itu doang yang mau foto dan berakhir ciwi ciwi ikutan.",
        date: "2026"
    },

    {
        image: "assets/426c432e-f40e-4bd2-bd26-ce1a7124c4f2.jpg",
        game: "🏝️ Roblox",
        title: "We somehow survived",
        caption: "Nobody knew what we were doing, but somehow we made it.",
        date: "2026"
    },

    {
        image: "assets/8279abf0-a5f0-4058-89f4-a58512396d5b.jpg",
        game: "😂 Roblox",
        title: "The legendary disaster",
        caption: "We laughed more than we actually played. Foto di kesempatan dalam kesempitan.",
        date: "2026"
    },

    {
        image: "assets/d06e1cf4-3770-44a3-9476-4c66e0997fbb.webp",
        game: "🌙 Roblox",
        title: "One last game...",
        caption: "It was never actually the last game. Jangan bilang \"one last game\" lagi ya😭",
        date: "2026"
    },

    {
        image: "assets/Gemini_Generated_Image_7eyh2k7eyh2k7eyh.png",
        game: "🌙 Roblox",
        title: "May it never end",
        caption: "Seneng banget bisa main bareng kalian. Semoga kita bisa main bareng terus.",
        date: "2026"
    }

    
    ,{
        image: "assets/fe8886f5-d472-419f-b26f-344afee38dea.jpg",
        game: "🎮 Roblox",
        title: "Fish it huhu",
        caption: "Seru Banget waktu itu dan bener-bener nggk kenal waktu.",
        date: "2025"
    }

    ,{
        image: "assets/8807028910_121864768012064_1769618456965.png",
        game: "🎮 Roblox",
        title: "Fish it lagi",
        caption: "Jujur kangen ... tapi nggk bisa main bareng lagi.",
        date: "2025"
    }

    ,{
        image: "assets/f9d07e5f-2bf4-481a-acee-69bb7ead6c98.jpg",
        game: "🎮 Roblox",
        title: "Menyamar",
        caption: "Bener-bener jadi mbaas nih kita mio😭",
        date: "2026"
    }

    ,{
        image: "assets/fe9253d2-38c5-435e-9df4-f4a249d54910.jpg",
        game: "🎮 Roblox",
        title: "Muncak bareng bestie",
        caption: "Kapan kita muncak lagi? dan melewati rintangan bareng lagi?😭",
        date: "2026"
    }
    ,{
        image: "assets/c7eb586a-b7a2-4604-bed9-52751ccc21f6.jpg",
        game: "🎮 Roblox",
        title: "Muncak bareng bestie jill",
        caption: "Jill dulu kita main gunung nggk kenal waktu ya ...",
        date: "2025"
    }
    ,{
        image: "assets/a510d728-ba74-45c5-8639-82cae95bd15a.jpg",
        game: "🎮 Roblox",
        title: "Foto random",
        caption: "I always remember ...",
        date: "2025"
    }

    ,{
        image: "assets/d0e28840-43d0-4552-9aba-c88a448e556d.jpg",
        game: "🎮 Roblox",
        title: "Bersama kak kiki yuhu",
        caption: "Donator kak kiki yang baik hati, semoga kita bisa main bareng lagi ya kak😭",
        date: "2025"
    }
        ,{
        image: "assets/7adf5c01-b070-4d21-8397-b3ed1f265ba5.jpg",
        game: "🎮 Roblox",
        title: "I MISS U",
        caption: "Kamu temen pertama ku di roblox deh ...",
        date: "2025"
    }

        ,{
        image: "assets/8105746f-9259-40ab-92d0-128ac98495c0.jpg",
        game: "🎮 Roblox",
        title: "I will never forget you",
        caption: "We don't play Roblox together much anymore, but you're still one of my favorite people ...",
        date: "2025"
    }
        ,{
        image: "assets/f7997d78-8f8b-4834-8c08-76f3c67cb76a.jpg",
        game: "🎮 Roblox",
        title: "Ghost...",
        caption: "Ghostfinn atau ghosting?",
        date: "2025"
    }
            ,{
        image: "assets/7f2b283b-42cf-4bbc-9e26-57ca31d29411.jpg",
        game: "🎮 Roblox",
        title: "Muncakk",
        caption: "Bareng kak jie dan jill nih",
        date: "2025"
    }
    ,{
        image: "assets/1c505caf-e794-4953-bb07-f13d2ccdc20c.jpg",
        game: "🎮 Roblox",
        title: "Muncak lagi dan lagi",
        caption: "Tenang aja, bang xoul masuk juga kok",
        date: "2025"
    }
    ,{
        image: "assets/37f54a3c-5e01-4bab-92af-a0edea2ce368.jpg",
        game: "🎮 Roblox",
        title: "My dino",
        caption: "Bestie ku yang satu ini bener-bener nggk bisa di lupain deh😭",
        date: "2025"
    }

    ,{
        image: "assets/268b61fe-20f4-4acf-98ea-29ba5de14f0e.jpg",
        game: "🎮 Roblox",
        title: "Hey ...",
        caption: "Ava mu lucu kali paok",
        date: "2025"
    }
    ,{
        image: "assets/8c598ca1-cfe7-4f51-bb09-e08d1f1898f2.jpg",
        game: "🎮 Roblox",
        title: "Jangan lupa ke gunung ini ya bestie ku",
        caption: "Ini gampang banget kok, siapin mental aja",
        date: "2025"
    }
    ,{
        image: "assets/06bb40ae-7bb4-4bd6-8ade-a7b9f9327f22.jpg",
        game: "🎮 Roblox",
        title: "Cama cepupu",
        caption: "uhuk, dah sibuk kerja nich",
        date: "2025"
    }
        ,{
        image: "assets/60fbc5d2-6383-4741-be49-8328c41c0897.jpg",
        game: "🎮 Roblox",
        title: "Kak kookiee",
        caption: "Sekarang aku canggung sama donatur ku ini",
        date: "2025"
    }
    ,{
        image: "assets/0d9a0947-7397-468c-8517-04ea79b8b5f4.jpg",
        game: "🎮 Roblox",
        title: "Bacon",
        caption: "Kita bacon lucu dan imut",
        date: "2025"
    }    
    ,{
        image: "assets/6af3a885-234f-47dc-8083-b621586d5c1a.jpg",
        game: "🎮 Roblox",
        title: "Mau Bunga?",
        caption: "Ini bunga dari mio, rawr, dan syaa.",
        date: "2025"
    }
    ,{
        image: "assets/85cd7220-e3f5-4ffa-957b-7c86f8fac016.jpg",
        game: "🎮 Roblox",
        title: "🤏",
        caption: "Aku masukin aja deh",
        date: "2025"
    }    ,{
        image: "assets/6027e675-625e-4c47-9c9d-1dd5e5ccf4b0.jpg",
        game: "🎮 Roblox",
        title: "Jijil dan syaa",
        caption: "We're bestie forever, semoga kita bisa main bareng lagi ya😭",
        date: "2025"
    }
    
    ,{
        image: "assets/8807028910_85931312520925_1764258003136.png",
        game: "🎮 Roblox",
        title: "Rawr dan Paw",
        caption: "sipaling jarang join tapi selalu ditunggu join dia... dulu",
        date: "2025"
    }    
    ,{
        image: "assets/8807028910_137526408608242_1777889452924.png",
        game: "🎮 Roblox",
        title: "Hey ...",
        caption: "ayo muncak lagi besty tapi anu gendong hehee (lyn)",
        date: "2026"
    }
    
    ,{
        image: "assets/8807028910_121864768012064_1769672360760.png",
        game: "🎮 Roblox",
        title: "Kangen hutan (?)",
        caption: "Kangen kenangan bareng kalian.",
        date: "2025"
    }    
    
    ,{
        image: "assets/9136335981_86954037607818_1779801000689.png",
        game: "🎮 Roblox",
        title: "Mount Palung",
        caption: "Kapan ya muncak bareng lagi? semoga kita bisa main bareng lagi ya😭",
        date: "2026"
    }
    ,{
        image: "assets/9136335981_86954037607818_1779801023151.png",
        game: "🎮 Roblox",
        title: "JieSyaMiUt",
        caption: "Jiebell, Syaa, Mio, dan Uta",
        date: "2025"
    }    
    ,{
        image: "assets/9136335981_119865410252788_1759147761879.png",
        game: "🎮 Roblox",
        title: "...",
        caption: "...",
        date: "2025"
    }
    
    ,{
        image: "assets/afb9ab51-d07f-43fc-b226-957789945dec.jpg",
        game: "🎮 Roblox",
        title: "My bestfriend in rl",
        caption: "my bubub, my bestie, my everything",
        date: "2025"
    }    ,{
        image: "assets/ce0d8721-693e-4b09-b52e-0eebfa716998.jpg",
        game: "🎮 Roblox",
        title: "Bang twist",
        caption: "Lama kali kita tidak main.",
        date: "2025"
    }
    ,{
        image: "assets/ad88d91e-0582-4263-97dd-b3ee304ba730.jpg",
        game: "🎮 Roblox",
        title: "Mount again",
        caption: "Jill, it's nice to meet you. Let's stay in touch, okay? Let's keep being friends.",
        date: "2025"
    }
    ,{
        image: "assets/Screenshot_2026-05-23-21-55-18-722_com.roblox.client.jpg",
        game: "🎮 Roblox",
        title: "Cp Ava",
        caption: "couplean ava ada wong",
        date: "2025"
    }
    /*
    ,{
        image: "assets/268b61fe-20f4-4acf-98ea-29ba5de14f0e.jpg",
        game: "🎮 Roblox",
        title: "Hey ...",
        caption: "Ava mu lucu kali paok",
        date: "2025"
    }
    ,{
        image: "assets/0222b1a5-3974-4a57-8707-0c2df711e952.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
    ,{
        image: "assets/128ecf5d-ccc4-4827-b526-1fee5a04fc4b.jpg",
        game: "🎮 Roblox",
        title: "Kenangan Roblox",
        caption: "Salah satu kenangan seru kita.",
        date: "2025"
    }
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
   DOM ELEMENTS
========================================================= */

const galleryGridWrap = document.getElementById("galleryGridWrap");
const galleryEmptyNote = document.getElementById("galleryEmptyNote");

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");

const lightboxImage = document.getElementById("lightboxImage");
const lightboxGame = document.getElementById("lightboxGame");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxCaption = document.getElementById("lightboxCaption");


/* =========================================================
   BUILD THE GRID
========================================================= */

function buildGalleryGrid() {

    if (galleryPhotos.length === 0) {
        galleryEmptyNote.hidden = false;
        return;
    }

    const stars = ["✦", "♡", "✧", "⭐"];

    galleryPhotos.forEach((photo, index) => {

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

    const photo = galleryPhotos[index];

    if (!photo) {
        return;
    }

    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title || "";

    lightboxGame.textContent = photo.game || "";
    lightboxTitle.textContent = photo.title || "";
    lightboxDate.textContent = photo.date || "";
    lightboxCaption.textContent = photo.caption || "";

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

buildGalleryGrid();
