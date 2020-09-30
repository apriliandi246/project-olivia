document.querySelector(".navbar__brand").addEventListener("click", () => {
   if (localStorage.getItem("theme") !== "dark") {
      document.body.setAttribute("id", "darkmode");;
      localStorage.setItem("theme", "dark");

   } else {
      localStorage.removeItem("theme");
      document.body.setAttribute("id", "");
   }
});
