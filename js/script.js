document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const dropdown = document.getElementById("dropdownMenu");
  const searchIcon = document.querySelector(".search-icon");
  const searchOverlay = document.getElementById("searchOverlay");

  // MENU
  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", function () {
      dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";
    });
  }

  // SEARCH
  if (searchIcon && searchOverlay) {
    searchIcon.addEventListener("click", function () {
      searchOverlay.style.display = "flex";
      searchOverlay.classList.add("active");
    });

    searchOverlay.addEventListener("click", function () {
      searchOverlay.classList.remove("active");
      setTimeout(function () {
        searchOverlay.style.display = "none";
      }, 200);
    });
  }

});
