document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navigation ul li");

  dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function (e) {
          let subMenu = this.querySelector(".dropdown");
          if (subMenu) {
              e.preventDefault();
              subMenu.classList.toggle("active");
          }
      });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
      if (!e.target.closest(".navigation ul li")) {
          document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
              dropdown.classList.remove("active");
          });
      }
  });
});
