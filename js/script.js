// ===== Menu Toggle =====
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});

// ===== Search Overlay =====
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Open search
searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  setTimeout(() => {
    searchOverlay.classList.add("active");
    searchInput.focus(); // auto focus
  }, 50);
});

// Close on outside click
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.style.display = "none";
    searchOverlay.classList.remove("active");
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

// ===== Search Logic =====

// Get all comics
const comics = document.querySelectorAll(".card");

// Search on typing
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query === "") return;

  comics.forEach(card => {
    const title = card.dataset.title.toLowerCase();

    if (title.includes(query)) {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = card.dataset.title;

      // Click → scroll to comic
      div.addEventListener("click", () => {
        card.scrollIntoView({ behavior: "smooth" });

        searchOverlay.style.display = "none";
        searchOverlay.classList.remove("active");
        searchInput.value = "";
        searchResults.innerHTML = "";
      });

      searchResults.appendChild(div);
    }
  });
});
