// Some Functions In The Header
let toggleMenu = document.querySelector("nav i");
let menu = document.querySelector("header nav ul");
let body = document.body;
let video = document.querySelector(".video");
if (getComputedStyle(toggleMenu).display !== "none") {
  toggleMenu.onclick = function () {
    if (getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
      video.style.display = "flex";
    } else {
      menu.style.display = "flex";
      video.style.display = "none";
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
      video.style.display = "flex";
    }
  });
} else if (toggleMenu.style.display === "none") {
  menu.style.display = "flex";
  video.style.display = "flex";
}
// End Header
// Start video sliding functions
let imgSource = document.querySelector(".images img ");
let Timer = setInterval(function () {
  imgSource.src = `./images/${Math.floor(Math.random() * 7)}.jpg`;
  console.log(Math.floor(Math.random() * 7));
}, 3000);

// End video sliding functions
