// bundle-ignore

const booksContainer = document.querySelector("#books-container");

fetch("/assets/books/catalog.json")
  .then((resp) => resp.json())
  .then((data) => {
    booksContainer.innerHTML = "";
    data
      .slice(-4)
      .reverse()
      .map((book) => {
        const bookLink = document.createElement("a");
        bookLink.href = "/get-informed/books/book?name=" + book.title;
        bookLink.classList.add("book");
        bookLink.style.backgroundColor = book.color ? book.color : "#bf2121";
        bookLink.style.color = book.color
          ? window.getContrast(book.color)
          : "white";
        bookLink.innerHTML = `
<h2>${book.title}</h2>
${book.subtitle ? `<div class="subtitle">${book.subtitle}</div>` : ""}
${book.author ? `<div class="author">${book.author}</div>` : ""}
`;
        booksContainer.appendChild(bookLink);
      });
  })
  .catch((err) => {
    console.error(err);
    booksContainer.innerHTML =
      '<div style="text-align: center;">There was an error fetching the books. Please try refreshing the page.</div>';
  });
