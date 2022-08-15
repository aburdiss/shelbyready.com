// bundle-ignore

const page = document.querySelector("#meme-hanger-content");
const thisMeme = new URLSearchParams(window.location.search).get("meme");

const pageHtml = `
<img class="main-image" src="/assets/memes/${thisMeme}" alt="" />
`;

page.innerHTML = pageHtml;

window.print();
