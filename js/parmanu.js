// ===== Header Menu =====
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});

// ===== Search Overlay =====
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("searchOverlay");

searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  setTimeout(() => {
    searchOverlay.classList.add("active");
  }, 50);
});

searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.style.display = "none";
    searchOverlay.classList.remove("active");
  }
});

// Atomic glow interaction
document.querySelectorAll(".comic-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 35px #ffee00";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 15px #ffee00";
    });
});
