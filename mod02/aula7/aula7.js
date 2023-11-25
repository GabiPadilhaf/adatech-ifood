// FUNÇÕES
// DESAFIO 1
/*function calcular(numero1, numero2, operador) {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: Divisão por zero.";
            }
        default:
            return "Operador inválido";
    }
}

let resultadoSoma = calcular(5, 3, '+');
console.log("Soma: " + resultadoSoma);

let resultadoSubtracao = calcular(5, 3, '-');
console.log("Subtração: " + resultadoSubtracao);

let resultadoMultiplicacao = calcular(5, 3, '*');
console.log("Multiplicação: " + resultadoMultiplicacao);

let resultadoDivisao = calcular(5, 3, '/');
console.log("Divisão: " + resultadoDivisao);*/

// Desafio 2
/*let saldo = 0;

function depositar(valor) {
    if (valor > 0) {
        saldo += valor;
        console.log("Depósito de R$" + valor + " realizado. Novo saldo: $" + saldo);
    } else {
        console.log("Valor inválido para depósito.");
    }
}

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        console.log("Saque de R$" + valor + " realizado. Novo saldo: $" + saldo);
    } else {
        console.log("Saldo insuficiente ou valor inválido para saque.");
    }
}

function consultarSaldo() {
    console.log("Saldo atual: R$" + saldo);
}

let continuar = true;
while (continuar) {
    let escolha = prompt("Escolha uma operação: 1 - Depósito, 2 - Saque, 3 - Consultar Saldo, 4 - Encerrar");

    switch (escolha) {
        case '1':
            let valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
            depositar(valorDeposito);
            break;
        case '2':
            let valorSaque = parseFloat(prompt("Digite o valor para saque:"));
            sacar(valorSaque);
            break;
        case '3':
            consultarSaldo();
            break;
        case '4':
            continuar = false;
            console.log("Operações encerradas.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}*/

// Teste de Lógica - 1

/*function encontrarMinMaxSoma(arr) {
    arr.sort((a, b) => a - b);
    let somaMinima = arr[0] + arr[1] + arr[2] + arr[3];
    let somaMaxima = arr[1] + arr[2] + arr[3] + arr[4];

    return [somaMinima, somaMaxima];
}

let numeros = [1, 3, 5, 6, 9];
let resultado = encontrarMinMaxSoma(numeros);
console.log(resultado.join(' ')); 
*/

// Teste de Lógica - 2

function imprimirEscada(n) {
    for (let i = 1; i <= n; i++) {
        let espacos = ' '.repeat(n - i);
        let degrau = '#'.repeat(i);

        console.log(espacos + degrau);
    }
}

let tamanhoEscada = 6;
imprimirEscada(tamanhoEscada);


