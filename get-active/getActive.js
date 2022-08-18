// bundle-ignore
const upcomingEventContainer = document.querySelector(".js-upcoming-event");
const today = new Date();
fetch("/assets/calendar/calendar.json")
  .then((resp) => resp.json())
  .then(function (data) {
    let hasCurrentEventLoaded = false;
    data
      .filter((event) => event.tags.includes("getactive"))
      .sort(function (a, b) {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate - bDate;
      })
      .forEach((event) => {
        const eventDate = new Date(event.date);
        if (!hasCurrentEventLoaded && eventDate.getTime() >= today.getTime()) {
          const newNode = document.createElement("div");
          newNode.innerHTML = `
        <h3>${event.name}</h3>
        <div><em>${event.date}</em></div>
        ${event.time ? `<div><em>${event.time}</em></div>` : ""}
        ${event.location ? `<p>${event.location}</p>` : ""}
        ${event.description ? `<p>${event.description}</p>` : ""}
        ${
          event.link
            ? `<a href="${event.link}" class="button">Learn More</a>`
            : ""
        }`;
          upcomingEventContainer.appendChild(newNode);
          hasCurrentEventLoaded = true;
        }
      });
    // Fall back to default message if no events are available.
    if (!hasCurrentEventLoaded) {
      upcomingEventContainer.innerText = `There are no upcoming events at this time. Please check back later!`;
    }
  });
