// ===== Get URL Params =====
const params = new URLSearchParams(window.location.search);
const hero = params.get("hero");
const comic = params.get("comic");
const totalPages = parseInt(params.get("pages"));

if (!hero || !comic || !totalPages) {
    alert("Comic data missing in URL");
}

// Title
document.getElementById("comicTitle").innerText =
    hero.toUpperCase() + " - " + comic.replaceAll("_", " ");

// Folder path
const folderPath = `../images/comics/${hero}/${comic}/`;

const bookElement = document.getElementById("book");

// ===== Create Pages =====
for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement("div");
    page.className = "page";

    const img = document.createElement("img");
    img.src = folderPath + i + ".jpg";
    img.loading = "lazy";

    page.appendChild(img);
    bookElement.appendChild(page);
}

// ===== Initialize PageFlip =====
const pageFlip = new St.PageFlip(bookElement, {
    width: 400,
    height: 600,
    size: "stretch",
    minWidth: 300,
    maxWidth: 1000,
    minHeight: 400,
    maxHeight: 1200,
    showCover: true,
    mobileScrollSupport: false
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// ===== Controls =====
const pageInfo = document.getElementById("pageInfo");

pageFlip.on("flip", (e) => {
    pageInfo.innerText = "Page " + (e.data + 1) + " / " + totalPages;
});

document.getElementById("prevBtn").onclick = () => pageFlip.flipPrev();
document.getElementById("nextBtn").onclick = () => pageFlip.flipNext();

// Back Button
function goBack() {
    history.back();
  }
