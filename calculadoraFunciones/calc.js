'use strict'

alert('Hola usuario!');

let op = null;
let repetir = false;
let operando1 = null;
let operando2 = null;

//funciones flecha
let sum = (a, b) => a + b;
let res = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//función
function pedirOperando() {
  let salir = false;
  while (!salir) {
    op = prompt('Elije operación: +, -, * ó /', '');

    if (op == null || op == undefined || op == '') {
      salir = true;
      op = null;
    } else {
      op = op.trim();

      if (op === '+' || op === '-' || op === '*' || op === '/') {
        salir = true;
      } else {
        console.log(op);
        alert('La operación introducida es errónea. Prueba de nuevo.')
      };
    };
  };
  return op;
}

//expresión de función
let operandosvalidos = function (operando1, operando2) {
  if (!isFinite(operando1) || !isFinite(operando2)) {
    alert('Tienes que introducir números')
    return true;
  } else {
    return false;
  };
};

do {
  //para que en las repeticiones las comprobaciones no sean erroneas.
  op = null;
  operando1 = null;
  operando2 = null;

  op = pedirOperando();

  if (op != null && op != undefined) {
    let salir = false;
    do {
      let operandos = prompt('Introduce los operandos separados por espacio', '');
      if (operandos == null || operandos == undefined) {
        salir = true;
      } else {
        //expresiones de función
        let i = 0;
        operando1 = '';
        operando2 = '';

        for (; i < operandos.length; i++) {
          if (operandos[i] !== ' ') {
            operando1 += operandos[i];
          } else {
            if (operando1 !== '') {
              break;
            };
          };
        };


        for (; i < operandos.length; i++) {
          if (operandos[i] !== ' ') {
            operando2 += operandos[i];
          } else {
            if (operando2 !== '') {
              break;
            };
          };
        };

        operando1 = Number(operando1);
        operando2 = Number(operando2);

      };
    } while (operandosvalidos(operando1, operando2))
  };


  if (op == null || operando1 == null) {
    repetir = false;
  } else {
    let resultado;
    //llamada a funciones flecha
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
  }
} while (repetir)