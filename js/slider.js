document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");
  const sliders = document.querySelectorAll(".slidedown");

  
  sliders.forEach(slider => {
    slider.style.height = "0px";
  });

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      let slider = this.nextElementSibling;

      if (slider.style.height && slider.style.height !== "0px") {
        slider.style.height = "0px";
        toggle.classList.remove("highlight");
      } else {
        
        document.querySelectorAll(".toggle.highlight").forEach((t) => {
          t.classList.remove("highlight");
          t.nextElementSibling.style.height = "0px";
        });

        toggle.classList.add("highlight");
        slider.style.height = slider.scrollHeight + "px";
      }
    });
  });
});
