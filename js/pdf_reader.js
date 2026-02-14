// Get URL parameters
const params = new URLSearchParams(window.location.search);
const hero = params.get("hero");
const comic = params.get("comic");

if (!hero || !comic) {
    alert("Comic not found");
}

// Set title
document.getElementById("comicTitle").innerText =
    comic.replace(".pdf", "").replaceAll("_", " ");

// Set PDF path
document.getElementById("pdfViewer").src =
    `../pdf/${hero}/${comic}`;

// Back button
function goBack() {
    history.back();
}
