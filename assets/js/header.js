// Populate Header Data
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
