//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(altura, peso) {
    let resultadoImc = peso * altura ** 2;
    return resultadoImc
    }
resultadoImc = calculoImc(1.90, 85);
console.log(`Cálculo IMC: ${resultadoImc}`);


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function valorFatorial(num){
   if (num < 0) {
     return -1;
   } else if (num == 0) 
   return 1;
    else {
   return (num * valorFatorial(num - 1));
    }
}
valorFatorial(5);

