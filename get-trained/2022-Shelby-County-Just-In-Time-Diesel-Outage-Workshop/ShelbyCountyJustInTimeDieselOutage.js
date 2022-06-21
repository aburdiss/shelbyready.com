// bundle-ignore
const form = document.querySelector("#ShelbyCountyJustInTimeDieselOutageForm");

function updateFormWidth() {
  if (form) {
    const width = window.innerWidth;
    if (width > 850) {
      // Desktop
      form.width = "800";
      form.height = "1362";
    } else if (width > 450) {
      // Tablet
      form.width = "400";
      form.height = "1501";
    } else if (width > 370) {
      // iPhone and other smart phone size
      form.width = "310";
      form.height = "1589";
    } else {
      // Extremely small phone
      form.width = "250";
      form.height = "1777";
    }
  }
}

if (form) {
  updateFormWidth();
  window.addEventListener("resize", updateFormWidth);
}
