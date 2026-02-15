const params = new URLSearchParams(window.location.search);
const fileID = params.get("id");

const url = `https://drive.google.com/uc?export=download&id=${fileID}`;

let pdfDoc = null;
let pageNum = 1;
let scale = 1.5;
const canvas = document.getElementById("pdf-canvas");
const ctx = canvas.getContext("2d");
const loading = document.getElementById("loading");
const pageInfo = document.getElementById("page-info");

// Load PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
    pdfDoc = pdf;
    renderPage(pageNum);
});

// Render Page
function renderPage(num) {
    loading.style.display = "block";

    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        }).promise.then(() => {
            loading.style.display = "none";
        });

        pageInfo.textContent = `Page ${num} / ${pdfDoc.numPages}`;
    });
}

// Next Page
function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
}

// Previous Page
function prevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
}

// Zoom
function zoomIn() {
    scale += 0.2;
    renderPage(pageNum);
}

function zoomOut() {
    if (scale <= 0.6) return;
    scale -= 0.2;
    renderPage(pageNum);
      }
