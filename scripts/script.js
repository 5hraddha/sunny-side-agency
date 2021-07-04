// Select the elements from the DOM
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__link");

// Function to toggle hamburger
const toggleHamburger = () => {
  hamburger.classList.toggle("hamburger_active");
  menuList.classList.toggle("menu__list_active");
}

hamburger.addEventListener("click", toggleHamburger);

// Function to close the mobile menu if any of the menu link is clicked
const closeMobileMenu = () => {
  hamburger.classList.remove("hamburger_active");
  menuList.classList.remove("menu__list_active");
}

menuLinks.forEach(menuLink => menuLink.addEventListener("click", closeMobileMenu));