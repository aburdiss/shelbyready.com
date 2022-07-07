// bundle-ignore
const memesContainer = document.querySelector("#memes-container");
fetch("/assets/memes/catalog.json")
  .then((resp) => resp.json())
  .then((data) => {
    memesContainer.innerHTML = "";
    data.reverse().map((element, index) => {
      const newImage = document.createElement("img");
      newImage.loading = "lazy";
      newImage.src = "/assets/memes/" + element;
      const newAnchor = document.createElement("a");
      newAnchor.href = "/assets/memes/" + element;
      // newAnchor.download = element;
      newAnchor.appendChild(newImage);
      memesContainer.appendChild(newAnchor);
    });
  })
  .catch((err) => {
    console.error(err);
    memesContainer.innerHTML =
      '<div style="text-align: center;">There was an error fetching the books. Please try refreshing the page.</div>';
  });
