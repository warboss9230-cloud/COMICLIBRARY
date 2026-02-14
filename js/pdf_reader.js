// Get PDF name from URL
const params = new URLSearchParams(window.location.search);
const file = params.get("file");

if (!file) {
    alert("PDF not found");
}

// Set title
document.getElementById("comicTitle").innerText = file.replace(".pdf", "");

// Load PDF
document.getElementById("pdfViewer").src = `../pdf/${file}`;

// Back button
function goBack() {
    history.back();
}
