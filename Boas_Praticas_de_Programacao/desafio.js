console.log("Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.")

console.log("Boas Vindas");

console.log('Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador')
let nome = "Thiago";
    console.log(`Olá, ${nome}!`);

console.log('Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"')
let nome1 = "Thiago";
alert(`Olá ${nome1}`)

console.log('Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador')
let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemPreferida);

console.log('Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console')
let valor1 = 25;
let valor2 = 12;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)

console.log('Crie uma variável chamada "valor3" e outra chamada "valor4", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console')
let valor3 = 20;
let valor4 = 10;
let resultado1 = valor3 - valor4;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}`)

console.log('Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console')
prompt("Digite sua idade.")
if(idade > 17){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

console.log('Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem')
let numero = parseFloat(prompt("Digite um número positivo, negativo ou zero"));
if (numero > 0) {
    console.log("É positivo")
}else if (numero < 0) {
    console.log("É negativo")
} else {
    console.log("É O número é 0")
}

console.log('Use um loop while para imprimir os números de 1 a 10 no console')
let numero1 = 1;
while (numero1 <= 10) {
    console.log(numero1);
    numero1++    
}

console.log('Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console')
let nota = 5;
if (nota >= 7) {
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

console.log('Use o Math.random para gerar qualquer número aleatório e exiba esse número no console')
let numAleatorio = Math.random();
console.log(numAleatorio);

console.log('Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console')
let numeroAleatorio = parseInt(Math.random() * 10) +1;
    console.log(numeroAleatorio);    

console.log('Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console')
let numeroAleatorio1 = parseInt(Math.random() * 1000) +1;
    console.log(numeroAleatorio1);    