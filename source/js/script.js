var menuToggle = document.querySelector(".header__menu-toggle");
var topMenu = document.querySelector(".header__top-menu");
var navMenu = document.querySelector(".main-nav__list");
                

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle("header__menu-toggle--opened");
  topMenu.classList.toggle("header__top-menu--opened");
  navMenu.classList.toggle("main-nav__list--opened");
}); 