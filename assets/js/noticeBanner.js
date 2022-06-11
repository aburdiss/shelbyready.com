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
