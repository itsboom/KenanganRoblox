// members-page.js - Renders the member list on members.html.
// Depends on members.js (membersList) being loaded first.

const membersContainer = document.getElementById("membersList");

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

buildMembersListWithPhotos();
