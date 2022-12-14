'use strict';
// objeto calculadora
const calculadora = {
  lastResult: undefined, // aqui guardo el ultimo resultado

  suma: function (a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  },
  resta: function (a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  },
  multiplicacion: function (a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  },
  division: function (a, b) {
    this.lastResult = a / b;
    return this.lastResult;
  }
};

// expresión de función
const operandosvalidos = function (operando1, operando2) {
  if (!isFinite(operando1) || !isFinite(operando2)) {
    window.alert('Tienes que introducir números');
    return false;
  } else {
    return true;
  }
};

let op = null;
let repetir = false;
let operando1 = null;
let operando2 = null;

// Devuelve un string con +, /, * o -
function pedirOperando () {
  let salir = false;
  while (!salir) {
    op = window.prompt('Elije operación: +, -, * ó /', '');

    if (op === null || op === undefined || op === '') {
      salir = true;
      op = null;
    } else {
      op = op.trim();

      if (op === '+' || op === '-' || op === '*' || op === '/') {
        salir = true;
      } else {
        window.alert('La operación introducida es errónea. Prueba de nuevo.');
      }
    }
  }
  return op;
}

window.alert('Hola usuario!');

do {
  // para que en las repeticiones las comprobaciones no sean erroneas.
  op = null;
  operando1 = null;
  operando2 = null;

  op = pedirOperando();

  if (op !== null && op !== undefined) {
    let seguir = true;
    do {
      const operandos = window.prompt('Introduce los operandos separados por espacio', '');
      if (operandos == null || operandos === undefined) {
        seguir = false;
      } else {
        // expresiones de función
        let i = 0;
        operando1 = '';
        operando2 = '';

        for (; i < operandos.length; i++) {
          if (operandos[i] !== ' ') {
            operando1 += operandos[i];
          } else {
            if (operando1 !== '') {
              break;
            }
          }
        }

        for (; i < operandos.length; i++) {
          if (operandos[i] !== ' ') {
            operando2 += operandos[i];
          } else {
            if (operando2 !== '') {
              break;
            }
          }
        }

        if (operando1 === 'R') {
          operando1 = calculadora.lastResult;
        }
        if (operando2 === 'R') {
          operando2 = calculadora.lastResult;
        }

        operando1 = Number(operando1);
        operando2 = Number(operando2);
      }
      console.log(operandosvalidos(operando1, operando2));
    } while (seguir && !operandosvalidos(operando1, operando2));
  }

  if (op == null || op === undefined || operando1 == null) {
    repetir = false;
  } else {
    let resultado;
    // llamada a funciones flecha
    switch (op) {
      case '+':
        resultado = calculadora.suma(operando1, operando2);
        break;
      case '-':
        resultado = calculadora.resta(operando1, operando2);
        break;
      case '*':
        resultado = calculadora.multiplicacion(operando1, operando2);
        break;
      case '/':
        (operando2 === 0) ? resultado = 'infinito' : resultado = calculadora.division(operando1, operando2);
        break;
    }
    window.alert(`El resultado es: ${resultado}`);
    repetir = window.confirm('Quieres realizar otra operación?');
  }
} while (repetir);
