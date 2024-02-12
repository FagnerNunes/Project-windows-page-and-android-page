function entrar() {
    let bloqueio = document.querySelector(".tela-bloqueio");
    let senhaEntrar = document.querySelector("#senha").value;
    let info = document.querySelector("#info");
    let senha = "12345";

    if (senhaEntrar == senha){
        bloqueio.classList.add('animacao-desb');
        info.innerHTML = "Bem vindo..";

        let barraTarefas = document.querySelector("footer");
        barraTarefas.classList.add('animacao-entrar');

        let carregando = document.querySelector(".carregando");
        carregando.style.opacity = "1";
    } else if (senhaEntrar == ""){
        info.innerHTML = "Digite sua senha";
        info.style.fontSize = ".8rem"
    }
    else {
        info.innerHTML = "Senha inválida";
        info.style.fontSize = ".8rem"
    }
}
