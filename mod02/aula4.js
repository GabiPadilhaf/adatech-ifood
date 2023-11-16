// desafio 1 - par ou ímpar
/*let numero = 8;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}*/

// desafio 1 usando o operador ternário
/*const numero = 78

let resultado = (numero % 2 === 0) ? "O número é par" : "O número é ímpar";
console.log(resultado);*/

// desafio 2 - Verificação de nota
/*const nota = 80;

if (nota >= 90) {
    console.log('Aprovado')
} else if (nota >= 70 && nota < 90) {
    console.log('Aprovado com mérito')
}else{
    console.log('Reprovado')
}*/

// desafio 3 - Determinação do Mario número

/*const n1=14;
const n2=26;
const n3=8;

if (n1>n2 && n1>n3){
    console.log('O maior número é: '+n1)
}else if(n2>n1 && n2>n3){
    console.log('O maior número é: '+n2)
}else{
    console.log('O maior número é: '+n3)
}*/

// desafio 4- Verificação de Triângulo
/*const l1=4;
const l2=6;
const l3=6;

if(l1==l2 && l1==l3){
    console.log('Este é um triângulo equilátero')
}else if(l1!=l2  l1!=l3){
    console.log('Este é um triângulo isósceles')
}else{
    console.log('Este é um triângulo escaleno.')
}*/

// desafio 5 - verificação de ano bissexto
/*const ano=2000;

let resultado = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? "Ano bissexto" : "Não é um ano bissexto";
console.log(resultado);*/

// desafio 6 - verificação de idade
/*const idade = 25;

if (idade >= 18) {
    console.log("Pode comprar bebidas alcoólicas.");
} else {
    console.log("Não pode comprar bebidas alcoólicas.");
}

// Usando o operador ternário
let mensagem = (idade >= 18) ? "Pode comprar bebidas alcoólicas." : "Não pode comprar bebidas alcoólicas.";
console.log(mensagem);*/

// desafio 7 - Verificação de números pares e ímpares
/*const numero=52;

switch (numero % 2) {
    case 0:
        console.log("O número é par");
        break;
    case 1:
        console.log("O número é  ímpar");
        break;
    default:
        console.log("Por favor, insira um número inteiro válido.");
}*/

// desafio 8 - vogal ou consoante
/*let letra = 'k';

letra = letra.toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}*/

// desafio 9 - estação do ano 
/*let mes = 'SETEMBRO';
mes = mes.toLowerCase();

let estacao;

switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        estacao = "Inverno";
        break;
    case 'março':
    case 'abril':
    case 'maio':
        estacao = "Primavera";
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        estacao = "Verão";
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        estacao = "Outono";
        break;
    default:
        estacao = "Mês inválido";
}

console.log(estacao);
*/