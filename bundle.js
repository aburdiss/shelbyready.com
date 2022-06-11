// bundle.js created by bundlejs.sh v1.1.0 Sat Jun 11 10:11:30 EDT 2022 Copyright (c) Alexander Burdiss
//==============================
// ./assets/js/footer.js
//==============================
(function assetsjsfooterjs() {
console.log("footer");
})();
//==============================
// ./assets/js/header.js
//==============================
(function assetsjsheaderjs() {
console.log("header");
})();
//==============================
// ./assets/js/noticeBanner.js
//==============================
(function assetsjsnoticeBannerjs() {
// Add under construction banner to every page.
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
//==============================
// ./global.js
//==============================
(function globaljs() {
// Add a JS class so the CSS can take into account the new JS styles.
document.querySelector("body").classList.add("JS-Enabled");
})();
