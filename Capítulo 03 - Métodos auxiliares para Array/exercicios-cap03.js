// Exercício 1 - Par ou ímpar?
// Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.7

// var numeros = [0,1,2,3,4,5];
// for(var i = 0; i<= numeros.length; i++) {
//     if(i % 2 === 0) {
//         console.log(i + ' é par');
//     } else {
//         console.log(i + ' é ímpar');
//     }
// }

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar




var numeros = [0, 1, 2, 3, 4, 5];
numeros.forEach(function (numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' é par');
  } else {
    console.log(numero + ' é ímpar');
  }
})

