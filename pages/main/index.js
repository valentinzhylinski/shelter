/* burger menu */
const nav = document.querySelector(".header-container-nav");
const navList = document.querySelector(".header-container-nav-list-container");
const burgerIcon = document.querySelector(".header-container-burger-menu");
const shadowBox = document.querySelector(".burger-menu-shadow-box");

const burgerMenuToggle = () => {
  if (document.documentElement.clientWidth <= 767) {
    nav.classList.toggle("open");
    /*document.body.classList.toggle("no-scroll");*/
  }
};

burgerIcon.addEventListener("click", burgerMenuToggle);
navList.addEventListener("click", burgerMenuToggle);
shadowBox.addEventListener("click", burgerMenuToggle);
