let nav = document.getElementById("show-nav");
let menu = document.querySelector("ul");
let triangle = document.querySelector(".triangle");
let isShowed = false;
nav.addEventListener("click", toggleNav);
window.onload = function () {
  if (screen.width < 600) {
    document.getElementById("egg").src =
      "../images/mobile/image-transform.jpg";
    document.getElementById("standout").src =
      "../images/mobile/image-stand-out.jpg";
    document.getElementById("design").src =
      "../images/mobile/image-graphic-design.jpg";
    document.getElementById("photography").src =
      "../images/mobile/image-photography.jpg";
    document.getElementById("milk").src =
      "../images/mobile/image-gallery-milkbottles.jpg";
    document.getElementById("orange").src =
      "../images/mobile/image-gallery-orange.jpg";
    document.getElementById("cone").src =
      "../images/image-gallery-cone.jpg";
      document.getElementById("sugarcubes").src =
      "../images/image-gallery-sugar-cubes.jpg";
  }
};

function toggleNav() {
  if (isShowed) {
    menu.style.display = "none";
    triangle.style.display = "none";
  } else {
    menu.style.display = "flex";
    triangle.style.display = "block";
  }
  isShowed = !isShowed;
}