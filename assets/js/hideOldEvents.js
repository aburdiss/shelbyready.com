const events = document.querySelectorAll("[data-date]");
const today = new Date();
if (events && events.length) {
  events.forEach((event) => {
    const eventDate = new Date(event.dataset.date);
    if (eventDate.getTime() < today.getTime()) {
      event.remove();
    }
  });
}

// Add a message if all upcoming events are hidden
const recentUpdates = document.querySelector(".recent-updates");
let nonTextNodes = 0;
if (recentUpdates) {
  recentUpdates.childNodes.forEach((node) => {
    if (node.nodeType != Node.TEXT_NODE) {
      nonTextNodes++;
    }
  });
  if (nonTextNodes === 1) {
    const div = document.createElement("div");
    div.innerText =
      "There are no upcoming events at this time. Please check back later!";
    recentUpdates.appendChild(div);
  }
}
