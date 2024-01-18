alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute  = prompt("Escolha um número entre 1 e 10");

if (chute == numeroSecreto) {
    //utilizando template String com ` + variável ${nomeDaVariável}
    alert(`Isso aí!! Você descobriu o número secreto é ${numeroSecreto}!!`);
}else{
    alert("Você errou!!")
}