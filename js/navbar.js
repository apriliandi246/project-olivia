const formSearch = document.querySelector(".product-search");
const navbarItems = document.querySelector(".navbar__items");

document.querySelector(".toggle-menu").addEventListener("click", () => {
   navbarItems.classList.toggle("navbar--slide");
   navbarItems.classList[1] === "navbar--slide" ? formSearch.style.zIndex = 0 : formSearch.style.zIndex = 1;
});
