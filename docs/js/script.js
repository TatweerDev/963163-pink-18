var menuToggle = document.querySelector(".header__menu-toggle");
var topMenu = document.querySelector(".header__top-menu");
var navMenu = document.querySelector(".main-nav__list");
var formSubmit = document.querySelector(".form-submit__input");
var modal = document.querySelector(".modal");
var form = document.querySelector(".form");
var modalSuccess = document.querySelector(".modal-window--succes");
var modalFailure = document.querySelector(".modal-window--failure");

menuToggle.classList.remove("header__menu-toggle--nojs");
menuToggle.classList.remove("header__top-menu--overlap");
topMenu.classList.remove("header__top-menu--nojs");
navMenu.classList.remove("main-nav__list--nojs");


menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle("header__menu-toggle--opened");
  topMenu.classList.toggle("header__top-menu--opened");
  navMenu.classList.toggle("main-nav__list--opened");
});

formSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (form.checkValidity() === true) {
    modalSuccess.classList.add("modal-window--opened");
    modalFailure.classList.remove("modal-window--opened");
  } else {
    modalFailure.classList.add("modal-window--opened");
    modalSuccess.classList.remove("modal-window--opened");
  }
  modal.classList.add("modal--show");
});

modal.addEventListener("click", function (evt) {
  var target = evt.target;
  if (target.classList.contains("modal__close")) {
    modal.classList.remove("modal--show");
  }
});
