function AparecerContainerSenha() {
    let containerSenha = document.querySelector('.mob-tela-bloqueio');
    containerSenha.classList.add('animacao-bloqueio-mob');
}

function btt(num) {
    let campoSenha = document.querySelector('#campo-senha').value;
    let guardaSenha = document.querySelector('#campo-senha').value = campoSenha + num;
    document.querySelector('#campo-senha').value = guardaSenha;
}

function apagar() {
    let campoSenha = document.querySelector('#campo-senha').value;
    campoSenha = campoSenha.substring(0, campoSenha.length - 1);
    document.querySelector('#campo-senha').value = campoSenha;
}

var botoesBottom = document.querySelector('.botoes-bottom'); // botoes menu-home-voltar
var cadeado = document.querySelector('.cadeado'); // remove cadeado
var containerBg = document.querySelector('.mob-container'); // remove container desbloqueio
containerBg.classList.add('mob-container-bg');

function enviar() {
    let campo = document.querySelector('#campo-senha').value;
    let senha = '140919';
    let containerSenha = document.querySelector('.mob-tela-bloqueio');

    if (campo == senha) {
        containerBg.classList.remove('mob-container-bg'); 
        containerSenha.style.display = 'none';
        cadeado.style.opacity = '0';
        botoesBottom.style.display = 'flex'; 
    }
}


/* MOB HOME - HORA */
function dataHora() {

    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var diaSemana = data.getDay();


    /* DIA DA SEMANA */
    switch (data.diaSemana) {
        case '1': diaSemana = 'Seg'; break;
        case '2': diaSemana = 'Ter'; break;
        case '3': diaSemana = 'Qua'; break;
        case '4': diaSemana = 'Qui'; break;
        case '5': diaSemana = 'Sex'; break;
        case '6': diaSemana = 'Sáb'; break;
        default: diaSemana = 'Dom';
    }

    /* MES */
    switch (data.mes) {
        case '01': mes = 'jan'; break;
        case '02': mes = 'fev'; break;
        case '03': mes = 'mar'; break;
        case '04': mes = 'abr'; break;
        case '05': mes = 'mai'; break;
        case '06': mes = 'jun'; break;
        case '07': mes = 'jul'; break;
        case '08': mes = 'ago'; break;
        case '09': mes = 'set'; break;
        case '10': mes = 'out'; break;
        case '11': mes = 'nov'; break;
        default: mes = 'dez';
    }


    /* HORARIO */
    if (hora <= 9) {
        hora = '0' + hora;
    }

    if (min <= 9) {
        min = '0' + min;
    }


    document.querySelector("#mob-hora").innerHTML = `${hora}:${min}`;
    document.querySelector("#mob-data").innerHTML = `${diaSemana}, ${dia} de ${mes}`;

}
setInterval(dataHora, 1000);

