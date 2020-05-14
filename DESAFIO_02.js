

// Desafio 02: Retorne a maior e menor altura declarada na lista


/*
-----------------------------------
author: João Soares de Almeida
-----------------------------------
*/


let altura = [147, 169, 200, 182, 150, 230, 187, 154, 177, 144];  //Altura dada em cm
let menorAltura = 100000
let maiorAltura = 0

for (let i = 0; i < altura.length; i++) {
    
    // Nesse eu comparo meu valor no index atual com a var que eu declarei, caso seja menor, eu guardo o valor e comparo com o próximo da lista
    if (altura[i] < menorAltura) {
        menorAltura = altura[i]   
    
    }
    // Nesse caso eu utilizo o mesmo raciocínio só que para verificar o maior valor
    if (altura[i] > maiorAltura) {
        maiorAltura = altura[i]
    } 


}

console.log('Menor Altura:', menorAltura) 
console.log('Maior Altura:', maiorAltura)