// about.js - Statistics and Members page

const statTotalPhotos = document.getElementById("statTotalPhotos");
const statTotalPeople = document.getElementById("statTotalPeople");
const statYearCount = document.getElementById("statYearCount");
const statAvgPeople = document.getElementById("statAvgPeople");
const membersContainer = document.getElementById("membersList");
const topPeopleList = document.getElementById("topPeopleList");

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
   TOP PEOPLE — most-appeared friends across all photos
========================================================= */

function buildTopPeople() {
    if (!topPeopleList || typeof galleryPhotos === "undefined") return;

    const counts = {};
    galleryPhotos.forEach(photo => {
        if (!photo.people) return;
        photo.people.split(",").map(n => n.trim()).forEach(name => {
            if (!name) return;
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

/* =========================================================
   BUILD MEMBERS LIST WITH PHOTOS
========================================================= */

function buildMembersListWithPhotos() {
    if (!membersContainer || typeof membersList === "undefined") return;
    
    membersContainer.innerHTML = "";
    
    membersList.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.className = "member-profile-card";
        
        const photoWrap = document.createElement("div");
        photoWrap.className = "member-photo-wrap";
        
        const photo = document.createElement("img");
        photo.src = member.photo;
        photo.alt = member.name;
        photo.className = "member-photo";
        
        photo.addEventListener("error", () => {
            if (!photo.dataset.fallback) {
                photo.dataset.fallback = "true";
                photo.src = "../assets/placeholder.jpg";
            }
        });
        
        photoWrap.appendChild(photo);
        
        const infoWrap = document.createElement("div");
        infoWrap.className = "member-info";
        
        const name = document.createElement("h3");
        name.className = "member-name";
        name.textContent = member.name;
        
        const role = document.createElement("span");
        role.className = "member-role";
        role.textContent = member.role;
        
        const bio = document.createElement("p");
        bio.className = "member-bio";
        bio.textContent = member.bio;
        
        infoWrap.appendChild(name);
        infoWrap.appendChild(role);
        infoWrap.appendChild(bio);
        
        memberCard.appendChild(photoWrap);
        memberCard.appendChild(infoWrap);
        
        membersContainer.appendChild(memberCard);
    });
}

// Inisialisasi saat file di-load
buildStatistics();
buildTopPeople();
buildMembersListWithPhotos();