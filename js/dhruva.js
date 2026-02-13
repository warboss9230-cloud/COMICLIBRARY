// ===== MENU TOGGLE =====
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
  });
}

// ===== SEARCH OVERLAY =====
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("searchOverlay");

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    setTimeout(() => {
      searchOverlay.classList.add("active");
    }, 50);
  });
}

// Close when clicking outside
if (searchOverlay) {
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.style.display = "none";
      searchOverlay.classList.remove("active");
    }
  });
}
