function abrirLixeira() {
    let lixeira = document.querySelector(".lixeira-aberta");
    lixeira.classList.add('animar');

    let lixeiraMenu = document.querySelector(".lixeira-menu-iniciar");
    lixeiraMenu.style.display = "block";
}

function minLixeira() {
    let lixeira = document.querySelector(".lixeira-aberta");
    lixeira.classList.remove('animar');
}

function abrirLixeiraMenu() {
    let lixeiraMenu = document.querySelector(".lixeira-aberta");
    lixeiraMenu.classList.toggle('animar');
}

function fecharLixeira() {
    let lixeira = document.querySelector(".lixeira-aberta");
    lixeira.classList.remove('animar');

    let lixeiraMenu = document.querySelector(".lixeira-menu-iniciar");
    lixeiraMenu.style.display = "none";
}

function maxLixeira() {
    let maxLixeira = document.querySelector(".lixeira-aberta");
    maxLixeira.classList.toggle('lixeira-max');
}