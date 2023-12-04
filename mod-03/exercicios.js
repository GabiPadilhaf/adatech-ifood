// DESAFIO 1- Crie uma classe MathUtils que tenha os métodos estáticos (soma, sub, multi e div)

// class MathUtils{
//     static sum(n1,n2){
//         return n1+n2;
//     }
//     static sub(n1,n2) {
//         return n1-n2;
//     }
//     static mul(n1,n2){
//         return n1*n2;
//     }
//     static div(n1,n2){
//         return n1/n2;
//     }
// }

// console.log(MathUtils.sum(2,5), MathUtils.sub(5,1), MathUtils.mul(2,2), MathUtils.div(6,2))

// DESAFIO 2- Crie uma classe círculo que tenha os atributos: raio do círculo, criar os estáticos (calcularArea, carclularCircunferencia)

// class Circulo{
//     constructor(raio){
//         this.raio=raio
//     }    


//     static calcularArea(raio) {
//         return Math.PI * raio * raio;
//     }

//     static calcularCircunferencia(raio) {
//         return 2 * Math.PI * raio;
//     }
// }


// const raioDoCirculo = 5;
// const meuCirculo = new Circulo(raioDoCirculo);

// const areaDoCirculo = Circulo.calcularArea(raioDoCirculo);
// const circunferenciaDoCirculo = Circulo.calcularCircunferencia(raioDoCirculo);

// console.log(`Raio do círculo: ${meuCirculo.raio}`);
// console.log(`Área do círculo: ${areaDoCirculo.toFixed(2)}`);
// console.log(`Circunferência do círculo: ${circunferenciaDoCirculo.toFixed(2)}`)


// DESAFIO 3 

// class Conta {
//     #numeroConta;
//     #nomeTitular;
//     #saldo;
  
//     constructor(numeroConta, nomeTitular, saldo = 0) {
//       this.#numeroConta = numeroConta;
//       this.#nomeTitular = nomeTitular;
//       this.#saldo = saldo;
//     }
  
//     #validarSaldo(saque) {
//       if (this.#saldo >= saque) {
//         return true;
//       } else {
//         console.log('Saldo insuficiente. Saque não permitido.');
//         return false;
//       }
//     }
  
//     depositar(valor) {
//       this.#saldo += valor;
//       console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
//     }
  
//     sacar(valor) {
//       if (this.#validarSaldo(valor)) {
//         this.#saldo -= valor;
//         console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
//       }
//     }
  
//     consultarSaldo() {
//       console.log(`Saldo atual: R$${this.#saldo}`);
//     }
//   }
  
//   const minhaConta = new Conta(123, 'Fulano de Tal', 1000);
  
//   minhaConta.consultarSaldo(); 
//   minhaConta.depositar(200);    
//   minhaConta.sacar(3000);       
//   minhaConta.sacar(300);        
//   minhaConta.consultarSaldo(); 
  

// DESAFIO 4

/*class FiguraGeometrica {
    constructor(cor) {
      this.cor = cor;
    }
  
    calcularArea() {
    }
  
    imprimir() {
    }
  }
  
  class Angulo90 extends FiguraGeometrica {
    constructor(base, altura, cor) {
      super(cor);
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  
    imprimir() {
      return `<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor}'></div>`;
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    constructor(base, altura, cor) {
      super(cor);
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  
    imprimir() {
      return `<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor}'></div>`;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(raio, cor) {
      super(cor);
      this.raio = raio;
    }
  
    calcularArea() {
      return this.raio * this.raio * Math.PI;
    }
  
    imprimir() {
      return `<div style='width:${2 * this.raio}px; height:${2 * this.raio}px; border-radius:50%; background-color:${this.cor}'></div>`;
    }
  }
  
  const angulo = new Angulo90(50, 30, 'blue');
  console.log(angulo.calcularArea()); 
  console.log(angulo.imprimir()); 
  
  const triangulo = new Triangulo(40, 20, 'green');
  console.log(triangulo.calcularArea()); 
  console.log(triangulo.imprimir()); 
  
  const circulo = new Circulo(10, 'red');
  console.log(circulo.calcularArea()); 
  console.log(circulo.imprimir()); */

  // DESAFIO 5

  class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    imprimirDados() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`);
    }
  
    emitirSom() {
      console.log('Som do animal');
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, tamanho) {
      super(nome, idade, 'Cachorro');
      this.tamanho = tamanho;
    }
  
    emitirSom() {
      console.log('Au, au!');
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade, 'Gato');
      this.cor = cor;
    }
  
    emitirSom() {
      console.log('Miaaaau!');
    }
  }

  const cachorro = new Cachorro('Tobias', 2, 'Porte Grande');
  cachorro.imprimirDados(); 
  cachorro.emitirSom(); 
  
  const gato = new Gato('Xanin', 7, 'Branco e Preto');
  gato.imprimirDados(); 
  gato.emitirSom(); 
  
  