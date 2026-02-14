const params = new URLSearchParams(window.location.search);

const hero = params.get("hero");
const comic = params.get("comic");
const driveId = params.get("drive");

const viewer = document.getElementById("pdfViewer");

// Google Drive PDF
if (driveId) {
    viewer.src = `https://drive.google.com/file/d/${driveId}/preview`;
}
// Local PDF
else if (hero && comic) {
    viewer.src = `../pdf/${hero}/${comic}`;
}
else {
    alert("PDF not found");
}
