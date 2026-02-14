let pdfDoc = null,
    pageNum = 1,
    scale = 1.2,
    canvas = document.getElementById("pdfCanvas"),
    ctx = canvas.getContext("2d");

const urlParams = new URLSearchParams(window.location.search);
const fileID = urlParams.get("id");

const url = `https://drive.google.com/uc?export=download&id=${fileID}`;

pdfjsLib.getDocument(url).promise.then(function(pdf){
    pdfDoc = pdf;
    renderPage(pageNum);
});

function renderPage(num){
    pdfDoc.getPage(num).then(function(page){
        let viewport = page.getViewport({scale: scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });

        document.getElementById("pageInfo").innerText =
            `Page ${num} / ${pdfDoc.numPages}`;
    });
}

function nextPage(){
    if(pageNum < pdfDoc.numPages){
        pageNum++;
        renderPage(pageNum);
    }
}

function prevPage(){
    if(pageNum > 1){
        pageNum--;
        renderPage(pageNum);
    }
}

function zoomIn(){
    scale += 0.2;
    renderPage(pageNum);
}

function zoomOut(){
    if(scale > 0.6){
        scale -= 0.2;
        renderPage(pageNum);
    }
}

function goBack(){
    window.history.back();
}

/* ===== FULLSCREEN ===== */
function toggleFullScreen(){
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }else{
        document.exitFullscreen();
    }
}

/* ===== BASIC PROTECTION ===== */

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable Ctrl+S, Ctrl+P, Ctrl+U
document.addEventListener("keydown", function(e){
    if(
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 'u')
    ){
        e.preventDefault();
    }
});
