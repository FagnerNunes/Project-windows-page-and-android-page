function dataHora() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    if (hora <= 9) {
        hora = '0' + hora;
    }
    if (min <= 9) {
        min = '0' + min;
    }

    document.querySelector("#hora").innerHTML = `${hora}:${min}`;
    document.querySelector("#data").innerHTML = `${dia}/${mes}/${ano}`;
}
setInterval(dataHora, 1000);

function voltarAreaTrabalho() {
    let lixeira = document.querySelector(".lixeira-aberta");
    lixeira.classList.remove('animar');

    let arquivo = document.querySelector(".exp-arquivo-aberta");
    arquivo.classList.remove('animar-2');

}

function abrirMenu() {
    let botaoMenu = document.querySelector('.container-iniciar');
    botaoMenu.classList.toggle('animar-menu');

   let menuHover = document.querySelector('.bt-menu-iniciar');
   menuHover.classList.toggle('bt-menu-iniciar-hover');
}