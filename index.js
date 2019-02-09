// const operaciones = require('./math'); ejemplo alterno
const math = require('./math');

// dentro de la funcion tiene que tener  separado por comas',';

console.log(math.suma(10, 20));
console.log(math.resta(10, 20));
console.log(math.multiplicacion(10, 20));
console.log(math.divicion(10, 20));

// resultado en terminal:
// richie@holacoder:~/Documents/CentralAcademy/node/Calculadora$ node index.js
// 30
// -10
// 200
// 0.5

/*_____________________________________________________________________*/

// console.log(math.suma(10, 20), math.resta(10, 20));
// console.log();
// console.log(math.multiplicacion(10, 20));
// console.log(math.divicion(10, 20));

// Resultado en terminal:
// richie@holacoder:~/Documents/CentralAcademy/node/Calculadora$ node index.js
// 30 -10
//
// 200
// 0.5

// la diferencia es el orden de imprimir el resultado.
