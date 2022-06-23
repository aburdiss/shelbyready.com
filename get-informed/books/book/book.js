// bundle-ignore

const thisBook = new URLSearchParams(window.location.search).get("name");
const bookTitle = document.querySelector("#title");
const bookDescription = document.querySelector("#book-description");
fetch("/assets/books/catalog.json")
  .then((resp) => resp.json())
  .then((data) => {
    const bookData = data.filter((book) => book.title === thisBook)[0];
    if (bookData == undefined) {
      bookTitle.innerText = "Book Not Found";
      bookDescription.innerHTML = `
<div style="text-align: center";>
  This book does not exist. Go back to <a href="/get-informed/books">All Books</a> and try again.
</div>
`;
      return;
    }
    const newTitle = bookData.title + " | Shelby Ready";
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", newTitle);
    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute("content", newTitle);
    document.title = newTitle;
    bookTitle.innerText = bookData.title;
    bookDescription.innerHTML = `
    ${bookData.subtitle ? `<h2>${bookData.subtitle}</h2>` : ""}
    ${bookData.author ? `<h3>By ${bookData.author}</h3>` : ""}
    ${
      bookData.files.web
        ? `<p>Find it on the web: <a href="${bookData.files.web}">${bookData.files.web}</a></p>`
        : ""
    }
    ${
      Object.keys(bookData.files).length > 1 ||
      (Object.keys(bookData.files).length === 1 &&
        bookData.files.web == undefined)
        ? `
<p>Download this book:</p>
<div class="Downloads">
${
  bookData.files.pdf
    ? `
<a href="/assets/books/${bookData.files.pdf}" class="Download-Link" title="Download PDF of &quot;${bookData.title}&quot;" download>
  <img src="/assets/images/pdf.svg" alt="Download PDF" />
  <span>PDF</span>
</a>
`
    : ""
}
${
  bookData.files.epub
    ? `
<a href="/assets/books/${bookData.files.epub}" class="Download-Link" download title="Download EPUB of &quot;${bookData.title}&quot;">
  <img src="/assets/images/epub.svg" alt="Download EPUB" />
  <span>EPUB (Most E-readers)</span
</a>
`
    : ""
}
${
  bookData.files.mobi
    ? `
<a href="/assets/books/${bookData.files.mobi}" class="Download-Link" download title="Download MOBI (Amazon Kindle) of &quot;${bookData.title}&quot;">
  <img src="/assets/images/kindle.svg" alt="Download MOBI" />
  <span>MOBI (Amazon Kindle)</span>
</a>
`
    : ""
}
</div>
`
        : ""
    } 
`;
  })
  .catch((err) => {
    console.error(err);
    bookTitle.innerText = "Book Not Found";
    bookDescription.innerHTML =
      '<div style="text-align: center;">There was an error fetching the book. Please try refreshing the page.</div>';
  });
