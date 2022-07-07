const main = document.querySelector("main");
const breadcrumbs = document.createElement("div");
breadcrumbs.classList.add("breadcrumbs");

let currentPath = window.location.pathname;
if (currentPath[0] == "/") {
  currentPath = currentPath.slice(1);
}
// Remove trailing /
if (currentPath[currentPath.length - 1] == "/") {
  currentPath = currentPath.slice(0, currentPath.length - 1);
}

const tempPathParts = currentPath.split("/");
// Remove current path from breadcrumbs
tempPathParts.pop();

tempPathParts.map((pathPart) => {
  const humanReadable = pathPart.split("-").map(window.capitalize).join(" ");
  const breadcrumb = document.createElement("a");
  breadcrumb.innerText = humanReadable;
  breadcrumb.href = "/" + currentPath.split(pathPart)[0] + pathPart;
  breadcrumbs.appendChild(breadcrumb);
});

if (tempPathParts.length > 0) {
  main.insertBefore(breadcrumbs, main.firstChild);
}
