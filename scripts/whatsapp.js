import { contacts } from "../data/contacts.js";

let contactsHTML;

contacts.forEach((contact) => {
  contactsHTML += `
    <div class="chat-container">
    <div class="profile-picture-container">
    <img
    class="profile-picture"
    src="${contact.profilePicture}"
    />
    </div>
    <div class="chat-preview-container">
    <div class="chat-name-and-time-container">
    <p class="chat-name">${contact.name}</p>
    <!-- The time when the last message was sent or recieved -->
    <div class="last-message-time">${contact.lastChatData}</div>
    </div>
    <p class="recent-message">
    ${contact.lastMessage}
    </p>
    </div>
    </div>
    `;
});

console.log("Inner html: ", contactsHTML);
document.querySelector(".js-chats-main-conatiner").innerHTML = contactsHTML;
