// LAÇOS DE REPETIÇÃO NUMÉRICOS (FOR, FOR-IN, FOR-OF)
// **** FOR IN usa em objetos e o FOR OF usa em array ****

// desafio 1 Utilizando um loop for, calcule a soma dos números de 1 a 10 e imprima o resultado.
/*let soma = 0;
for (let i=1; i<=10; i++){
    soma += i;
}
console.log("A soma dos números de 1 a 10 é: "+soma)*/

// desafio 2 Crie um objeto representando uma pessoa com nome, idade e cidade.Utilize um loop for-in para 
// imprimir no console todas as propriedades e os valores do objeto

/*const pessoa = {
    nome: 'Maria',
    idade: 5,
    cidade: 'Leiria'
}

for (let caracteristica in pessoa){
    console.log(caracteristica+': '+pessoa[caracteristica])
}*/

// desafio 3 Crie um array com pelo menos 5 nomes de frutas.  Utilize um loop for-of para imprimir no console cada nome de fruta.

/*const frutas =[ 'Carambola', 'Açaí', 'Cajá', 'Bacuri', 'Cupuaçu']

for (let fruta of frutas){
    console.log('Fruta: '+fruta)
}*/

// desafio 4 Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop for. Saida: 10 X 1 = 10 

/*let numero=5;

for (let i=1; i<=10; i++){
    console.log(numero*i)
}*/

// desafio 5 Crie um objeto com valores numéricos e utilize um loop for-in para calcular e imprimir a soma desses valores.
/*const valores = {
    valor1: 10, 
    valor2: 20, 
    valor3: 30, 
    valor4: 40
}
let soma = 0;
for (let numero in valores){
    soma += valores[numero]
}

console.log(soma)*/

// desafio 6 Faça um mecanismo de busca dentro de um array. [1,2,3,4,5,6,7,8,9,10] Achei o numero 7
/*const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = 7;
let achado = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === numero) {
    achado = true;
    break;
  }
}
console.log(numero ? "Numero achado" : "Numero não achado");*/

// desafio 7 Ache a logica: 1 1 2 3 5 8 13 Agora, sua tarefa é criar um programa que recebe um número inteiro N como entrada e retorna os primeiros N termos da sequência
// Exemplo: Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8] Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]
// F{n}=F{n-1}+F{n-2}

/*let N = prompt("Digite um número inteiro para obter os primeiros N termos da sequência Fibonacci:");

let array = [];

for (let i = 0; i < N; i++) {
    if (i <= 1) {
        array.push(1);
    } else {
        let proximoTermo = array[i - 1] + array[i - 2];
        array.push(proximoTermo);
    }
}

console.log("Os primeiros " + N + " termos da sequência Fibonacci são: " + array);
*/

// desafio 8 - contagem de vogais

/*let palavra = 'Casa';
palavra = palavra.toLowerCase();

let contagemVogais = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
        contagemVogais++;
    }
}

console.log("A palavra '" + palavra + "' contém " + contagemVogais + " vogais.");*/

// desafio 9 - ordenar array

/*let arrayDesordenado = [5, 3, 8, 2, 1, 4];

let troca;
do {
    troca = false;
    for (let i = 0; i < arrayDesordenado.length - 1; i++) {
        if (arrayDesordenado[i] > arrayDesordenado[i + 1]) {
            let temp = arrayDesordenado[i];
            arrayDesordenado[i] = arrayDesordenado[i + 1];
            arrayDesordenado[i + 1] = temp;
            troca = true;
        }
    }
} while (troca);

console.log("Array Ordenado: " + arrayDesordenado);*/

// desafio 9.1 - método para ordenar
/*let arrayDesordenado = [5, 3, 8, 2, 1, 4];

arrayDesordenado.sort(function(a, b) {
    return a - b; 
});

console.log("Array Ordenado: " + arrayDesordenado);*/

// desafio 10

/*let quantidadeDados = 2;
let rolagensIndividuais = [];

let somaTotal = 0;

for (let i = 0; i < quantidadeDados; i++) {
    let resultadoDado = Math.floor(Math.random() * 6) + 1;
    rolagensIndividuais.push(resultadoDado);
    somaTotal += resultadoDado;
}

console.log("Rolagens Individuais: " + rolagensIndividuais.join(', '));
console.log("Soma Total: " + somaTotal);*/

// desafio 11

/*let quantidadeDados = 2;
let quantidadeLados = 9;

let rolagensIndividuais = [];
let somaTotal = 0;

for (let i = 0; i < quantidadeDados; i++) {
    let resultadoDado = Math.floor(Math.random() * quantidadeLados) + 1;
    rolagensIndividuais.push(resultadoDado);
    somaTotal += resultadoDado;
}

console.log("Rolagens Individuais: " + rolagensIndividuais.join(', '));
console.log("Soma Total: " + somaTotal);*/

// desafio 12
let quantidadeDados = 3;
let quantidadeLados = 9;
let quantidadeTentativas = 3;

let rolagensIndividuais = [];
let somaTotal = 0;

for (let tentativa = 1; tentativa <= quantidadeTentativas; tentativa++) {
    rolagensIndividuais = [];
    somaTotal = 0;

    for (let i = 0; i < quantidadeDados; i++) {
        let resultadoDado = Math.floor(Math.random() * quantidadeLados) + 1;
        rolagensIndividuais.push(resultadoDado);
        somaTotal += resultadoDado;
    }

    console.log("Tentativa " + tentativa + ":");
    console.log("  Rolagens Individuais: " + rolagensIndividuais.join(', '));
    console.log("  Soma Total: " + somaTotal);
}