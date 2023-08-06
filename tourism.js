// Some Functions In The Header
let toggleMenu = document.querySelector("nav i");
let menu = document.querySelector("header nav ul");
let body = document.body;
if (getComputedStyle(toggleMenu).display !== "none") {
  toggleMenu.onclick = function () {
    if (getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
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
    }
  });
} else if (toggleMenu.style.display === "none") {
  menu.style.display = "flex";
}

// End Header
