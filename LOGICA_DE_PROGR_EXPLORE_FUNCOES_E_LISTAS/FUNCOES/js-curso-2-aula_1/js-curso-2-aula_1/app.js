let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}
exibirTextoNaTela("h1", "Jogo do múmero secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10")

function chutarNumero(){
    let chute = document.querySelector("input").value; //este value no final indica que ele irá comparar com nosso número digitado
    console.log(chute == numeroSecreto)
}


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}