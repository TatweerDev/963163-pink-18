var menuToggle = document.querySelector(".header__menu-toggle");
var topMenu = document.querySelector(".header__top-menu");
var navMenu = document.querySelector(".main-nav__list");


menuToggle.classList.remove("header__menu-toggle--nojs");
topMenu.classList.remove("header__top-menu--nojs");
navMenu.classList.remove("main-nav__list--nojs");


menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle("header__menu-toggle--opened");
  topMenu.classList.toggle("header__top-menu--opened");
  navMenu.classList.toggle("main-nav__list--opened");
});
