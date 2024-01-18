let diaSemana = prompt("Qual é o dia da semana?");
if (diaSemana == "Sábado") {
    alert("Bom final de semana")
}if(diaSemana == "Domingo"){
    alert("Bom final de semana")
}else{
    alert("Boa semana!!")
}

numero = prompt("Digite um numero positivo ou negativo");
if (numero > 0) {
    alert("Numero positivo")    
} else {
    alert("Número negativo")
}

let pontuacaoJogo = 200;
if(pontuacaoJogo >= 100){
    console.log("Parabéns você venceu!!")
}else{
    console.log("Tente novamente para ganhar")
}


let nome = prompt("Digite seu nome");
alert(`Boas vindas ${nome}`);