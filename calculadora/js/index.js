'use script'
alert('Buenas')
do {
    let operacionInvalida = true;
    let operacion = '';
    do {
        operacion = prompt('Indica la operación por simbolo; + => suma, - => resta, x => multiplicación, / =>división');
        operacion = operacion.trim();
        if (operacion === '+' || operacion === '-' || operacion === 'x' || operacion === '/') {
            operacionInvalida = false
        }
        else
            alert('No has introducido una operación valida.')

    } while (operacionInvalida);

    let operandosInvalidos = true;
    do {
        let operandosJuntos = prompt('Indicame los dos operandos separados con un espacio', '');
        operandos = operandosJuntos.split(' ');
        operandos[0] = Number(operandos[0])
        operandos[1] = Number(operandos[1])

        if (operandos.length == 2) {
            operandosInvalidos = false;
            if (isNaN(operandos[0]) || isNaN(operandos[1])) {
                operandosInvalidos = true;
                alert('No has introducido números')
            }
        } else
            alert('Has introducido demasiados elementos')

    } while (operandosInvalidos);

    switch (operacion) {
        case '+':
            alert(operandos[0] + operandos[1])
            break;
        case '-':
            alert(operandos[0] - operandos[1])
            break;
        case 'x':
            alert(operandos[0] * operandos[1])
            break;
        case '/':
            alert(operandos[0] / operandos[1])
            break;
    }


} while (confirm('¿Desea realizar otra operación?'));