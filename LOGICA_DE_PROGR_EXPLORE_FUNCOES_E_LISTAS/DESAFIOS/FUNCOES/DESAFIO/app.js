//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    alert("Olá Mundo");
}
olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function recebeNome(nome){
    console.log(`Olá ${nome}`)
}
recebeNome("Thiago");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobrado(){
    let numero = parseInt(prompt("Digite um número para obter o dobro do seu valor"));
    return console.log(numero * 2);
}
numeroDobrado();

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function numerosMedia(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3
    return media;
}
var resultMedia = numerosMedia(8,9,6);
console.log("A média é: ", resultMedia)

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(n1, n2){
    if (n1 > n2) {
        return n1;
    }return n2;
}
let maior = numeroMaior(70, 39);
    console.log("O número maior entre os dois é: ", maior);


//Criar uma função que recebe um número como parâmetro e retorna o resultado da 
//multiplicação desse número por ele mesmo

function recebeNumero(n1){
return n1 * n1;
}
let numeMultiplicado = recebeNumero(9);
console.log("Resultado de multiplicação pelo próprio número: ", numeMultiplicado)