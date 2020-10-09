const toggleTheme = document.querySelector(".navbar__theme");

toggleTheme.addEventListener("click", () => {
   if (localStorage.getItem("theme") !== "dark") {
      document.body.setAttribute("id", "darkmode");;
      localStorage.setItem("theme", "dark");
      toggleTheme.innerText = "🌚";

   } else {
      localStorage.removeItem("theme");
      document.body.setAttribute("id", "");
      toggleTheme.innerText = "🌝";
   }
});
