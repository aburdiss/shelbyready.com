const form = document.querySelector("#CatastrophicReadinessPlanningEventForm");

function updateFormWidth() {
  if (form) {
    const width = window.innerWidth;
    if (width > 900) {
      form.width = "800";
      form.height = "1212";
    } else if (width > 450) {
      form.width = "400";
      form.height = "1350";
    } else {
      form.width = "250";
      form.height = "1626";
    }
  }
}

if (form) {
  updateFormWidth();
  window.addEventListener("resize", updateFormWidth);
}
