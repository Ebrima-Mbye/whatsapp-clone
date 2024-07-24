import { contacts } from "../data/contacts.js";

let contactsHTML = "";

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
          <div class="last-message-time
            js-last-message-time"
            data-contact-id="${contact.id}"
            >
              ${contact.lastChatDate}
          </div>
        </div>
        <p class="recent-message">
          ${contact.lastMessage}
        </p>
      </div>
    </div> 
    `;
});

document.querySelector(".js-chats-main-conatiner").innerHTML = contactsHTML;

function designLastMessageTime() {
  contacts.forEach((contact) => {
    console.log("contact ID: ", contact.id);
    let matchingDate;
    document.querySelectorAll(".js-last-message-time").forEach((chatDate) => {
      console.log("chat date: ", chatDate.dataset.contactId);
      if (chatDate.dataset.contactId === contact.id) {
        matchingDate = chatDate;
        return;
      }
    });
    console.log("matching date: ", matchingDate);
    if (contact.status.toLowerCase() === "received" && matchingDate) {
      matchingDate.style.color = "rgb(18, 128, 18)";
    }
  });
}

designLastMessageTime();
