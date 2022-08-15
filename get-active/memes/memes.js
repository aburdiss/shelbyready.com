// bundle-ignore
const memesContainer = document.querySelector("#memes-container");
const canShare = !!navigator.share;
const canPrint =
  navigator.userAgent.match(/chrome|chromium|crios/i) ||
  navigator.userAgent.match(/firefox|fxios/i);

fetch("/assets/memes/catalog.json")
  .then((resp) => resp.json())
  .then((data) => {
    memesContainer.innerHTML = "";
    data.reverse().map((element, index) => {
      const newImage = document.createElement("img");
      newImage.loading = "lazy";
      newImage.src = "/assets/memes/" + element;

      const newIconContainer = document.createElement("div");
      newIconContainer.classList.add("icon-container");
      newIconContainer.innerHTML = `
      <a href="/assets/memes/${element}" download>
        <img class="download" src="/assets/images/download.svg" />
      </a>

      ${
        canShare
          ? `
      <button id="share">
        <img class="share" src="/assets/images/share.svg" />
      </button>
      `
          : ""
      }

      ${
        canPrint
          ? `
      <a href="./meme-hanger?meme=${encodeURIComponent(element)}">
        <img class="print" src="/assets/images/print.svg" />
      </a>
      `
          : ""
      }
      
      `;

      const newContainer = document.createElement("div");
      newContainer.classList.add("meme");
      newContainer.appendChild(newImage);
      newContainer.appendChild(newIconContainer);
      memesContainer.appendChild(newContainer);

      if (canShare) {
        const shareButton = newContainer.querySelector("#share");
        shareButton.addEventListener("click", async function share() {
          const response = await fetch("/assets/memes/" + element);
          const blob = await response.blob();
          const fileType = element.split(".")[1];
          const filesArray = [
            new File([blob], element, {
              type: "image/" + fileType,
              lastModified: new Date().getTime(),
            }),
          ];
          navigator.share({
            files: filesArray,
          });
        });
      }
    });
  })
  .catch((err) => {
    console.error(err);
    memesContainer.innerHTML =
      '<div style="text-align: center;">There was an error fetching the memes. Please check your connection, and try refreshing the page. If this problem persists, contact us.</div>';
  });
