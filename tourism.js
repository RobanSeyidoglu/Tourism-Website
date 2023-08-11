// Some Functions In The Header
let toggleMenu = document.querySelector("nav i");
let menu = document.querySelector("header nav ul");
let body = document.body;
let slider = document.querySelector("#slider");
if (getComputedStyle(toggleMenu).display !== "none") {
  toggleMenu.onclick = function () {
    if (getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
      slider.style.display = "flex";
    } else {
      menu.style.display = "flex";
      slider.style.display = "none";
    }
  };
  document.addEventListener("click", function (event) {
    let targetElement = event.target;
    let isClickedInsideMenu = toggleMenu.contains(targetElement);
    if (
      !isClickedInsideMenu &&
      !(getComputedStyle(toggleMenu).display === "none")
    ) {
      menu.style.display = "none";
      slider.style.display = "flex";
    }
  });
} else if (toggleMenu.style.display === "none") {
  menu.style.display = "flex";
  slider.style.display = "flex";
}
// End Header
// Start Slider
new Swiper("#swiper-1", {
  effect: "fade",
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
  loop: true,
});
// End Slider
