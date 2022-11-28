'use strict'
//objeto calculadora
let calculadora = {
  lastResult:undefined,//aqui guardo el ultimo resultado

  suma: function(a,b) {
    console.log(a);
    console.log(b);
    this.lastResult = a + b;
    return this.lastResult;
  },
  resta: function(a,b) {
    console.log(a);
    console.log(b);
    this.lastResult = a - b;
    return this.lastResult;
  },
  multiplicacion: function(a,b) {
    console.log(a);
    console.log(b);
    this.lastResult = a * b;
    return this.lastResult;
  },
  division: function(a,b) {
    console.log(a);
    console.log(b);
    this.lastResult = a / b;
    return this.lastResult;
  },
}

let op;//Aqui guardo la operacion
let repetir = false;//Para guardar el booleano para la comparación al salir

//Devuelve un string con +, /, * o -
function pedirOperando() {
  let salir = false;
  while (!salir) {
    op = prompt('Elije operación: +, -, * ó /', '');
    op = op.trim();

    if (op === '+' || op === '-' || op === '*' || op === '/') {
      salir = true;
    } else {
      alert('La operación introducida es errónea. Prueba de nuevo.')
    }
  }

  return op;
}

alert('Hola usuario!');

do {

  op = pedirOperando();

  let operando1 = '';
  let operando2 = '';
  let salir = false;


  while (!salir) {
    let operandos = prompt('Introduce los operandos separados por espacio', '');

    let i = 0;
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
      operando1 = calculadora.lastResult
    }
    if (operando2 === 'R') {
      operando2 = calculadora.lastResult
    }
    operando1 = Number(operando1)
    operando2 = Number(operando2)

    salir = function () {
      if (!isFinite(operando1) || !isFinite(operando2)) {
        alert('Tienes que introducir números')
        salir = false;
      } else {
        salir = true;
      }
    }
    console.log(operando1);
    console.log(operando2);
  }

  let resultado;
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
      (b == 0) ? resultado = 'infinito' : resultado = calculadora.division(operando1, operando2);
      break;
  }

  alert(`El resultado es: ${resultado}`)
  repetir = confirm('Quieres realizar otra operación?');
} while (repetir)

console.log(op);