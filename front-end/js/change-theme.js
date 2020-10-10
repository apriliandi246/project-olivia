const toggleTheme = document.querySelector(".navbar__theme");

document.addEventListener("DOMContentLoaded", () => {
   if (localStorage.getItem("theme") === "dark") {
      toggleTheme.innerText = "🌚";

   } else {
      toggleTheme.innerText = "🌝";
   }
});

toggleTheme.addEventListener("click", () => {
   if (localStorage.getItem("theme") !== "dark") {
      toggleTheme.innerText = "🌚";
      localStorage.setItem("theme", "dark");
      document.body.setAttribute("id", "darkmode");;

   } else {
      toggleTheme.innerText = "🌝";
      localStorage.removeItem("theme");
      document.body.setAttribute("id", "");
   }
});
