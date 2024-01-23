//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao 
//com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(`Elementos iniciais: ${linguagensDeProgramacao}`);


//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
console.log(`Após adicionar elementos novos: ${linguagensDeProgramacao}`);


//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ["Thiago", "João", "Maria"];
console.log(`Exibindo somente o primeiro elemento:  ${listaNomes[0]}`);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNomes1 = ["Thiago", "João", "Maria"];
console.log(`Exibindo somente o segundo elemento:  ${listaNomes1[1]}`);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomes2 = ["Thiago", "João", "Maria"];
console.log(`Exibindo somente o último elemento ${listaNomes2[2]}`);
console.log(`Segunda forma mais eficas de exibir ultimo item da lista: ${listaNomes2[listaNomes2.length - 1]}`);