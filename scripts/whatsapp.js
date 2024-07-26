import { contacts } from "../data/contacts.js";
import { showNofitication } from "./notification.js";

let contactsHTML = "";

contacts.forEach((contact) => {
  contactsHTML += `
    <div class="chat-container">
      <div class="profile-picture-container">
        <img class="profile-picture" src="${contact.profilePicture}" />
      </div>
      <div class="chat-preview-container">
        <div class="chat-name-and-time-container">
          <div class="chat-name">
            <p>${contact.name}</p>
          </div>
          <!-- The time when the last message was sent or recieved -->
          <div
            class="last-message-time js-last-message-time"
            data-contact-id="${contact.id}"
          >
            ${contact.lastChatDate}
          </div>
        </div>
        <div class="messages-preview-and-count">
          <p class="recent-message">${contact.lastMessage}</p>
          <div class="chat-unread-messages js-chat-unread-messages">
          ${contact.unreadMessagesCount}
          </div>
        </div>
      </div>
    </div>
    `;
});

document.querySelector(".js-chats-main-conatiner").innerHTML = contactsHTML;

function designLastMessageTime() {
  contacts.forEach((contact) => {
    let matchingDate;
    document.querySelectorAll(".js-last-message-time").forEach((chatDate) => {
      if (chatDate.dataset.contactId === contact.id) {
        matchingDate = chatDate;
        return;
      }
    });
    if (contact.status.toLowerCase() === "received" && matchingDate) {
      matchingDate.style.color = "rgb(37, 211, 102)";
    }
  });
}

designLastMessageTime();

function formatCount(messageCount) {
  /* supposed to display '1k' for '1000', 
  '2k" for '2000', and so on */

  //Convert the number to a string for easy manipulation
  let messageStr = messageCount.toString();

  // Check if the number has 4 or more digits
  if (messageStr.length >= 4 && messageStr.length <= 6) {
    return messageStr.substring(0, messageStr.length - 3) + "k";
  } else if (messageStr.length >= 7 && messageStr.length <= 9) {
    return messageStr.substring(0, messageStr.length - 6) + "m";
  } else return messageCount.toString();
}
function updateContactUnreadMessagesCount(contact) {
  document
    .querySelectorAll(".js-chat-unread-messages")
    .forEach((unreadCount) => {
      unreadCount.innerHTML = formatCount(contact.unreadMessagesCount);
    });
}
function simulateIncomingMessages() {
  setInterval(() => {
    contacts.forEach((contact) => {
      contact.unreadMessagesCount++;
      updateContactUnreadMessagesCount(contact);
      updateTotalUnreadMessagesCount();
    });
  }, 1);
}

simulateIncomingMessages(); // for testing purposes

function updateTotalUnreadMessagesCount() {
  let totalNewMessagesCount = 0;
  contacts.forEach((contact) => {
    totalNewMessagesCount += contact.unreadMessagesCount;
  });
  document.querySelector(".js-total-unread-messages").innerHTML = formatCount(
    totalNewMessagesCount
  );
}

// simulate notifications
setInterval(() => {
  let randomIndex = Math.floor(Math.random() * contacts.length) + 1;
  showNofitication(randomIndex);
}, 10000);
