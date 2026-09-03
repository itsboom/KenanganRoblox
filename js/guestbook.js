/* =========================================================
   GUEST BOOK - FORM SUBMISSION & MESSAGE DISPLAY
========================================================= */

const GUESTBOOK_KEY = "robloxMemoriesGuestbook";

function getGuestbookMessages() {
    const stored = localStorage.getItem(GUESTBOOK_KEY);
    return stored ? JSON.parse(stored) : [];
}

function addGuestbookMessage(name, message) {
    const messages = getGuestbookMessages();
    messages.push({
        name: name.trim(),
        message: message.trim(),
        date: new Date().toLocaleString('id-ID')
    });
    localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(messages));
}


/* =========================================================
   DOM ELEMENTS
========================================================= */

const guestbookForm = document.getElementById("guestbookForm");
const formSuccess = document.getElementById("formSuccess");
const guestbookMessages = document.getElementById("guestbookMessages");
const guestbookEmptyNote = document.getElementById("guestbookEmptyNote");


/* =========================================================
   FORM HANDLING
========================================================= */

if (guestbookForm) {
    guestbookForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("visitorName");
        const messageInput = document.getElementById("visitorMessage");

        const name = nameInput.value;
        const message = messageInput.value;

        if (!name || !message) {
            alert("Please fill in all fields!");
            return;
        }

        addGuestbookMessage(name, message);

        nameInput.value = "";
        messageInput.value = "";

        if (formSuccess) {
            formSuccess.hidden = false;
            setTimeout(() => {
                formSuccess.hidden = true;
            }, 3000);
        }

        renderGuestbookMessages();
    });
}


/* =========================================================
   RENDER MESSAGES
========================================================= */

function renderGuestbookMessages() {
    if (!guestbookMessages) return;

    const messages = getGuestbookMessages();

    guestbookMessages.innerHTML = "";

    if (messages.length === 0) {
        if (guestbookEmptyNote) guestbookEmptyNote.hidden = false;
        return;
    }

    if (guestbookEmptyNote) guestbookEmptyNote.hidden = true;

    messages.forEach((msg, index) => {
        const messageEl = document.createElement("div");
        messageEl.className = "guestbook-message";

        messageEl.innerHTML = `
            <div class="guestbook-message-author">${msg.name} ✨</div>
            <div class="guestbook-message-date">${msg.date}</div>
            <div class="guestbook-message-text">${msg.message}</div>
        `;

        guestbookMessages.appendChild(messageEl);
    });
}


/* =========================================================
   INITIALIZE
========================================================= */

renderGuestbookMessages();

// Owner opened the guest book — clear the unread badge (see guestbook-notify.js)
if (typeof markGuestbookAsRead === "function") {
    markGuestbookAsRead();
}