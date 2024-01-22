//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio"

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function consoleClicado(){
    console.log("O botão foi clicado");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function botaoAlert(){
    alert("Eu amo JS")
}
//Crie uma função que é executada quando o botão prompt é clicado,
// perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com 
//a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
    let cidade = prompt("Qual a sua cidade no Brasil?");
    cidade = alert(`Estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function botaosomar(){
    let pedidoNumero1 = parseInt(prompt("Digite dois números"));
    let pedidoNumero2 = parseInt(prompt("Digite o segundo número"));
    alert(pedidoNumero1 + pedidoNumero2);

}
