import { contacts } from "../data/contacts.js";

export function showNofitication(contactIndex) {
  let contact = contacts[contactIndex];
  let notificationHTML = `
    <div class="notification-logo-and-close-button-section">
        <div class="whatsapp-logo-and-label">
          <img src="/icons/whatsapp-logo.jpg" />
          <p>WhatsApp</p>
        </div>
        <button>X</button>
      </div>
      <div class="notification-profile-and-name-section">
        <div class="notification-profile-container">
          <img src="${contact.profilePicture}" />
        </div>
        <p><span class="notification-sender-name">${contact.name}</span><br />xyz</p>
      </div>
      <div class="notification-message-container">
        <p>${contact.lastMessage}</p>
      </div>
      <div class="notification-input-and-time-container">
        <input class="notification-input" placeholder="Reply message" />
        <div class="notification-time">21:00</div>
      </div>
    `;

  let notificationContainer = document.querySelector(
    ".js-notification-container"
  );
  notificationContainer.innerHTML = notificationHTML;
  manageNotification(notificationContainer);
}

function manageNotification(notificationContainer) {
  notificationContainer.classList.add("notification-show");
  setTimeout(() => {
    notificationContainer.classList.remove("notification-show");
  }, 7000);
}
