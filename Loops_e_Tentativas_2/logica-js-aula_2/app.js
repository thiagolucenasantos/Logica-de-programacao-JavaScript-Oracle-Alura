alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//condição WHILE, enquanto chute for diferente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute} `);        
        }else{
            alert(`O número secreto é maior que ${chute} `);
        }
        tentativas++ //a cada tentativa de acerto será contabilizado
    }
}