// bundle.js created by bundlejs.sh v1.2.2 Wed Jul  5 21:58:59 EDT 2023
// ./global.js
(function globaljs() {// Add a JS class so the CSS can take into account the new JS styles.
document.querySelector("body").classList.add("JS-Enabled");
})();
// ./assets/js/_utils/getContrast.js
(function assetsjsutilsgetContrastjs() {/**
 * @function getContrast
 * @description Get the contrasting color for any hex color
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @see https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/
 * @param  {string} inputHexColor A hexcolor value
 * @return {string|undefined} The contrasting color (black or white), or
 * undefined if the input is not a string.
 * @since 10/14/21
 * @version 1.0.1
 * @author Alexander Burdiss
 */
window.getContrast = function (inputHexColor) {
  if (typeof inputHexColor !== "string") {
    return undefined;
  }

  let hexcolor = inputHexColor;

  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split("")
      .map((hex) => hex + hex)
      .join("");
  }

  // Convert to RGB value
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "black" : "white";
};
})();
// ./assets/js/_utils/capitalize.js
(function assetsjsutilscapitalizejs() {/**
 * @function capitalize
 * @description Capitalizes the first letter of the string passed in.
 * @param {string} inputString
 * @returns {string}
 * @author Alexander Burdiss
 * @since 9/11/21
 * @version 1.0.0
 */
window.capitalize = function (inputString) {
  if (typeof inputString !== "string") {
    return undefined;
  }
  const firstLetter = inputString[0];
  const restOfString = inputString.slice(1);
  return `${firstLetter.toUpperCase()}${restOfString}`;
};
})();
// ./assets/js/smoothScroll.js
(function assetsjssmoothScrolljs() {document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
})();
// ./assets/js/header.js
(function assetsjsheaderjs() {// Populate Header Data
const headerNav = document.querySelector("header nav");
headerNav.innerHTML = `
<a href="/">Home</a>
<div class="navgroup" aria-expanded="false">
  <button class="chevron" id="nav1">Get Informed</button>
  <div class="subnav" id="subnav1">
    <a href="/get-informed/">Overview</a>
    <a href="/get-informed/books/">Books</a>
    <a href="/get-informed/butchering">Butchering</a>
    <a href="/get-informed/food-preservation">Food Preservation</a>
    <a href="/get-informed/gardening/">Gardening</a>
    <a href="/get-informed/guides/">How-To Guides</a>
    <a href="/get-informed/recipes/">Recipes</a>
  </div>
</div>
<a href="/get-trained/">Get Trained</a>
<div class="navgroup" aria-expanded="false">
  <button class="chevron" id="nav3">Get Active</button>
  <div class="subnav" id="subnav3">
    <a href="/get-active/">Overview</a>
    <a href="/get-active/activism/">Activism</a>
    <a href="/get-active/churches/">Churches</a>
    <a href="/get-active/community-events/">Community Events</a>
    <a href="/get-active/memes/">Memes</a>
    <a href="/get-active/small-group-resources/">Small Group Resources</a>
  </div>
</div>
<a href="/about/">About</a>
`;

// Build dynamic navigation
const navButtons = document.querySelectorAll('[id^="nav"]');
const subnavButtons = document.querySelectorAll(".subnav");
/**
 * Closes open navigation elements and removes event listeners from the body
 * @author Alexander Burdiss
 * @since 10/22/22
 * @version 1.0.0
 */
function closeOpenNavigation(event) {
  navButtons.forEach((button) => {
    if (button.classList.contains("open")) {
      button.parentElement.ariaExpanded = false;
      button.classList.remove("open");
    }
  });
  subnavButtons.forEach((button) => {
    if (button.style.display === "block") {
      button.style.display = "none";
    }
  });
  if (document.body.onclick) {
    document.body.onclick = undefined;
  }
}
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.id[button.id.length - 1];
    const subnav = document.querySelector("#subnav" + number);
    if (subnav.style.display === "block") {
      button.parentElement.ariaExpanded = false;
      button.classList.remove("open");
      subnav.style.display = "none";
    } else {
      closeOpenNavigation();
      button.parentElement.ariaExpanded = true;
      button.classList.add("open");
      subnav.style.display = "block";
      setTimeout(() => (document.body.onclick = closeOpenNavigation), 0);
    }
  });
});

// Build hamburger navigation to replace static navigation (if JS enabled)
const closeButton = document.createElement("button");
closeButton.classList.add("hamburger");
closeButton.innerHTML = `
<span class="visually-hidden-accessibility">Open Menu</span>
<span class="first-span"></span>
<span class="second-span"></span>
<span class="third-span"></span>
`;
const headerContent = document.querySelector("header .inner-content");
closeButton.addEventListener("click", function () {
  const header = document.querySelector("header");
  const hamburgerMenu = document.querySelector(".hamburger");
  const menuAccessibilityText = document.querySelector(
    ".hamburger .visually-hidden-accessibility"
  );
  const isOpen = hamburgerMenu.classList.contains("open");
  if (isOpen) {
    document.body.style.overflow = "visible";
    hamburgerMenu.classList.remove("open");
    header.classList.remove("mobile-menu-open");
    menuAccessibilityText.innerText = "Open Menu";
  } else {
    document.body.style.overflow = "hidden";
    hamburgerMenu.classList.add("open");
    header.classList.add("mobile-menu-open");
    menuAccessibilityText.innerText = "Close Menu";
  }
});
// Close the menu when resized larger than mobile
window.addEventListener("resize", function (event) {
  if (window.innerWidth >= 860) {
    const header = document.querySelector("header");
    const hamburgerMenu = document.querySelector(".hamburger");
    const menuAccessibilityText = document.querySelector(
      ".hamburger .visually-hidden-accessibility"
    );
    document.body.style.overflow = "visible";
    hamburgerMenu.classList.remove("open");
    header.classList.remove("mobile-menu-open");
    menuAccessibilityText.innerText = "Open Menu";
  }
});
headerContent.appendChild(closeButton);
})();
// ./assets/js/breadcrumbs.js
(function assetsjsbreadcrumbsjs() {const main = document.querySelector("main");
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
})();
// ./assets/js/footer.js
(function assetsjsfooterjs() {// Populate footer with links
const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="inner-content">
  <div class="left-container">
    <h2><a href="/get-informed/">Get Informed</a></h2>
    <a href="/get-informed/books/">Books</a>
    <a href="/get-informed/butchering/">Butchering</a>
    <a href="/get-informed/food-preservation">Food Preservation</a>
    <a href="/get-informed/gardening/">Gardening</a>
    <a href="/get-informed/guides/">How-To Guides</a>
    <a href="/get-informed/recipes/">Recipes</a>
    <h2><a href="/get-trained/">Get Trained</a></h2>
    <h2><a href="/get-active/">Get Active</a></h2>
    <a href="/get-active/activism/">Activism</a>
    <a href="/get-active/churches/">Churches</a>
    <a href="/get-active/community-events/">Community Events</a>
    <a href="/get-active/memes/">Memes</a>
    <a href="/get-active/small-group-resources/">Small Group Resources</a>
    <h2><a href="/about/">About</a></h2>
  </div>
  <div>
    <address>
      <a href="mailto:info@shelbyready.com">info@shelbyready.com</a>
    </address>
    <p>
      Website built and designed by
      <a href="https://alexanderburdiss.com">Alexander Burdiss</a>
    </p>
    <a href="/privacy-policy/">Privacy Policy</a>
  </div>
</div>
`;
})();
