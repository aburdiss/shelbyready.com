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
