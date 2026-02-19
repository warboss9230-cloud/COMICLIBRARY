// ===== Menu Toggle =====
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});

