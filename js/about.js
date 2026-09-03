// about.js - Statistics page (members moved to members-page.js / members.html)

const statTotalPhotos = document.getElementById("statTotalPhotos");
const statTotalPeople = document.getElementById("statTotalPeople");
const statYearCount = document.getElementById("statYearCount");
const statAvgPeople = document.getElementById("statAvgPeople");
const topPeopleList = document.getElementById("topPeopleList");
const yearBreakdownList = document.getElementById("yearBreakdownList");

// Nama yang dikecualikan dari ranking "paling sering muncul" — Syaa adalah
// founder-nya jadi hampir selalu ada di tiap foto, hitungannya nggak menarik.
const TOP_PEOPLE_EXCLUDE = ["Syaa"];

/* Dark mode is handled by dark-mode.js (shared across every page) */

/* =========================================================
   EXTRACT UNIQUE PEOPLE & STATISTICS
========================================================= */

function extractUniquePeople() {
    const peopleSet = new Set();
    if (typeof galleryPhotos !== "undefined") {
        galleryPhotos.forEach(photo => {
            if (photo.people) {
                const names = photo.people.split(",").map(n => n.trim());
                names.forEach(name => peopleSet.add(name));
            }
        });
    }
    return Array.from(peopleSet).sort();
}

function extractUniqueYears() {
    const yearsSet = new Set();
    if (typeof galleryPhotos !== "undefined") {
        galleryPhotos.forEach(photo => {
            const match = String(photo.date || "").match(/\d{4}/);
            if (match) yearsSet.add(match[0]);
        });
    }
    return Array.from(yearsSet).sort().reverse();
}

function buildStatistics() {
    if (typeof galleryPhotos === "undefined") return;

    const uniquePeople = extractUniquePeople();
    const uniqueYears = extractUniqueYears();
    const totalPhotos = galleryPhotos.length;

    if (statTotalPhotos) statTotalPhotos.textContent = totalPhotos;
    if (statTotalPeople) statTotalPeople.textContent = uniquePeople.length;
    if (statYearCount) statYearCount.textContent = uniqueYears.length;

    if (statAvgPeople) {
        let totalPeople = 0;
        galleryPhotos.forEach(photo => {
            if (photo.people) {
                totalPeople += photo.people.split(",").length;
            }
        });
        const average = totalPhotos > 0 ? (totalPeople / totalPhotos).toFixed(1) : 0;
        statAvgPeople.textContent = average;
    }
}

/* =========================================================
   PHOTOS PER YEAR
========================================================= */

function buildYearBreakdown() {
    if (!yearBreakdownList || typeof galleryPhotos === "undefined") return;

    const counts = {};
    galleryPhotos.forEach(photo => {
        const match = String(photo.date || "").match(/\d{4}/);
        if (!match) return;
        const year = match[0];
        counts[year] = (counts[year] || 0) + 1;
    });

    const years = Object.entries(counts).sort((a, b) => b[0].localeCompare(a[0]));
    const maxCount = Math.max(1, ...years.map(([, count]) => count));

    yearBreakdownList.innerHTML = "";

    if (years.length === 0) {
        yearBreakdownList.parentElement.hidden = true;
        return;
    }

    years.forEach(([year, count]) => {
        const row = document.createElement("div");
        row.className = "year-breakdown-row";

        const label = document.createElement("span");
        label.className = "year-breakdown-label";
        label.textContent = year;

        const barWrap = document.createElement("div");
        barWrap.className = "year-breakdown-bar-wrap";

        const bar = document.createElement("div");
        bar.className = "year-breakdown-bar";
        bar.style.width = `${(count / maxCount) * 100}%`;

        const count_el = document.createElement("span");
        count_el.className = "year-breakdown-count";
        count_el.textContent = `${count} foto`;

        barWrap.appendChild(bar);

        row.appendChild(label);
        row.appendChild(barWrap);
        row.appendChild(count_el);

        yearBreakdownList.appendChild(row);
    });
}

/* =========================================================
   TOP PEOPLE — most-appeared friends across all photos
   (dikecualikan: TOP_PEOPLE_EXCLUDE)
========================================================= */

function buildTopPeople() {
    if (!topPeopleList || typeof galleryPhotos === "undefined") return;

    const counts = {};
    galleryPhotos.forEach(photo => {
        if (!photo.people) return;
        photo.people.split(",").map(n => n.trim()).forEach(name => {
            if (!name || TOP_PEOPLE_EXCLUDE.includes(name)) return;
            counts[name] = (counts[name] || 0) + 1;
        });
    });

    const top = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);

    topPeopleList.innerHTML = "";

    if (top.length === 0) {
        topPeopleList.parentElement.hidden = true;
        return;
    }

    top.forEach(([name, count]) => {
        const chip = document.createElement("span");
        chip.className = "top-person-chip";
        chip.textContent = `${name} · ${count}x`;
        topPeopleList.appendChild(chip);
    });
}

// Inisialisasi saat file di-load
buildStatistics();
buildYearBreakdown();
buildTopPeople();
