document.querySelector(".toggle-menu").addEventListener("click", () => {
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");
});

document.querySelector(".toggle-menu").removeEventListener("click", () => {
   console.log("ok")
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");
});
