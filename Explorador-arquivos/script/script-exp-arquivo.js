function abrirExpArquivo() {
    let expArquivo = document.querySelector(".exp-arquivo-aberta");
    expArquivo.classList.toggle('animar-2');

    let expArquivoMenu = document.querySelector(".pasta");
    expArquivoMenu.style.borderBottom = "2px solid #53c0ff";
}

function minExpArquivo() {
    let expArquivo = document.querySelector(".exp-arquivo-aberta");
    expArquivo.classList.remove('animar-2');
}

function fecharExpArquivo() {
    let expArquivo = document.querySelector(".exp-arquivo-aberta");
    expArquivo.classList.remove('animar-2');

    let expArquivoMenu = document.querySelector(".pasta");
    expArquivoMenu.style.borderBottom = "2px solid #ffffff00";
}

function maxExpArquivo() {
    let maxArquivo= document.querySelector(".exp-arquivo-aberta");
    maxArquivo.classList.toggle('arquivo-max');
}

