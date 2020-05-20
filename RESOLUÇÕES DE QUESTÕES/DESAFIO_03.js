
// Dado 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles. O programa deve imprimir um valor inteiro.
// Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.


/*
-----------------------------------
author: João Soares de Almeida
-----------------------------------
*/

const somaImpares = function(x,y) {
    // declaração de vars
    let min = 0;
    let max = 0;
    let contador = 0;

    // faço uma verificação de qual menor/maior número
    if (x < y) {
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    } 

    // hora de percorrer os ímpares entre os valores passados como parametros
    for (let i = ++min; i < max; i++) {
        if (i % 2 != 0){
            contador += i;
        }
    }

    return contador
}

console.log('SOMA DE TODOS OS VALORES ÍMPARES:',somaImpares(-5,6))
