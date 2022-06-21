// bundle.js created by bundlejs.sh v1.2.0 Mon Jun 20 23:01:52 EDT 2022
// ./assets/js/footer.js
(function assetsjsfooterjs() {// Populate footer with links
const footer = document.querySelector("footer");
footer.innerHTML = `
<div class="inner-content">
  <div class="left-container">
    <h2><a href="/get-involved/">Get Involved</a></h2>
    <h2><a href="/get-informed/">Get Informed</a></h2>
    <a href="/get-informed/guides/">How-To Guides</a>
    <a href="/get-informed/recipes/">Recipes</a>
    <h2><a href="/get-trained/">Get Trained</a></h2>
    <h2><a href="/get-active/">Get Active</a></h2>
    <a href="/get-active/memes/">Memes</a>
    <h2><a href="/about/">About</a></h2>
  </div>
  <div>
    <address>
      <a href="mailto:info@shelbyready.com">info@shelbyready.com</a>
    </address>
    <a href="/privacy-policy/">Privacy Policy</a>
  </div>
</div>
`;
})();
// ./assets/js/header.js
(function assetsjsheaderjs() {// Populate Header Data
const headerNav = document.querySelector("header nav");
headerNav.innerHTML = `
<a href="/">Home</a>
<a href="/get-involved/">Get Involved</a>
<a href="/get-informed/">Get Informed</a>
<a href="/get-trained/">Get Trained</a>
<a href="/get-active/">Get Active</a>
`;

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
// ./assets/js/noticeBanner.js
(function assetsjsnoticeBannerjs() {// Add under construction banner to every page.
const noticeBannerExists = document.querySelector(".notice-banner");
if (!noticeBannerExists) {
  const noticeBanner = `
<div class="inner-content">
  <img src="/assets/images/warning.svg" alt="Notice" />
  This site is still under construction. Some site features may not work as
  intended.
</div>`;
  const bannerRoot = document.createElement("div");
  bannerRoot.classList.add("notice-banner");
  bannerRoot.innerHTML = noticeBanner;

  const header = document.querySelector("header");
  document.body.insertBefore(bannerRoot, header.nextSibling);
}
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
// ./global.js
(function globaljs() {// Add a JS class so the CSS can take into account the new JS styles.
document.querySelector("body").classList.add("JS-Enabled");
})();
