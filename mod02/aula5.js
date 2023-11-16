// repetição while e do while
// desafio 1 - contagem regressina
/*let numero=10;
while (numero >= 0){
    console.log(numero)
    numero--;
}*/

// desafio 2 - números primos 

/*let numero = 12;

let primo = true;
let divisor = 2;

while (divisor < numero) {
    if (numero % divisor === 0) {
        primo = false;
        break;
    }
    divisor++;
}

if (primo && numero > 1) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}*/

// desafio 3 - soma dos pares
/*let somaTotal = 0;

let numero = parseInt(prompt("Insira um número inteiro (insira 0 para parar):"));

while (numero !== 0) {
    if (numero % 2 === 0) {
        somaTotal += numero;
    }

    numero = parseInt(prompt("Insira um número inteiro (insira 0 para parar):"));
}

console.log("A soma dos números pares é: " + somaTotal);*/

// desafio 4 - advinhe o número

/*const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa;
let contadorTentativas = 0;

while (true) {
    tentativa = prompt("Tente adivinhar o número (entre 1 e 100):");
    tentativa = parseInt(tentativa);
    contadorTentativas++;

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número " + numeroAleatorio + " em " + contadorTentativas + " tentativas.");
        break;
    } else {
        if (tentativa < numeroAleatorio) {
            console.log("Tente novamente. O número é maior.");
        } else {
            console.log("Tente novamente. O número é menor.");
        }
    }
}*/


// desafio 5 - jogo de advinhação

/*const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 5;
let tentativa;

let contadorTentativas = 0;

while (contadorTentativas < maxTentativas) {
    tentativa = prompt("Tente adivinhar o número (entre 1 e 100):");
    tentativa = parseInt(tentativa);
    contadorTentativas++;

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número " + numeroAleatorio + " em " + contadorTentativas + " tentativas.");
        break;
    } else {
        if (tentativa < numeroAleatorio) {
            console.log("Tente novamente. O número é maior.");
        } else {
            console.log("Tente novamente. O número é menor.");
        }

        if (contadorTentativas === maxTentativas) {
            console.log("Você atingiu o número máximo de tentativas. O número correto era " + numeroAleatorio + ".");
        }
    }
}*/

