const navbar = document.querySelector(".navbar");
const productSearch = document.querySelector(".product-search");

document.addEventListener("scroll", () => {
   if (this.scrollY >= 1) {
      navbar.style.opacity = "0";
      productSearch.style.opacity = "1";
      productSearch.style.zIndex = "3";

   } else {
      productSearch.style.opacity = "0";
      productSearch.style.zIndex = "1";
      navbar.style.opacity = "1";
   }
});
