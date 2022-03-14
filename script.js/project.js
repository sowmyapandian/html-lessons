const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("header nav");

let isNavOpen = false;

const openNav = () => {
  if (!isNavOpen) {
    hamburger.src = "./images/icon-close.svg";
    nav.style.display = "block";

    isNavOpen = !isNavOpen;
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
    nav.style.display = "none";

    isNavOpen = !isNavOpen;
  }
};

document.addEventListener("click", ({ target }) => {
  if (target === hamburger) {
    return openNav();
  }

  if (target !== hamburger && target.offsetParent !== nav && isNavOpen) {
    return openNav();
  }
});