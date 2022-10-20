'use strict'

alert('Hola usuario!');

let op;
let repetir = false;

let sum = (a, b) => a + b;
let res = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

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

      console.log(operando1);

      for (; i < operandos.length; i++) {
        if (operandos[i] !== ' ') {
          operando2 += operandos[i];
        } else {
          if (operando2 !== '') {
            break;
          }
        }
      }
      console.log(operando2);

      operando1 = Number(operando1);
      operando2 = Number(operando2);
      salir = function() {
        if (isNaN(operando1) || isNaN(operando2)) {
          alert('Tienes que introducir números')
          salir = false;
        } else {
          salir = true;
        }
      }
      
    }

    let resultado;
    switch (op) {
      case '+':
        resultado = sum(operando1, operando2);
        break;
      case '-':
        resultado = res(operando1, operando2);
        break;
      case '*':
        resultado = mul(operando1, operando2);
        break;
      case '/':
        resultado = div(operando1, operando2);
        break;
    }

    alert(`El resultado es: ${resultado}`)
    repetir = confirm('Quieres realizar otra operación?');
} while (repetir)






console.log(op);