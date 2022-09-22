/*
function bienvenido(nombre, apellido){
    alert ('bienvenido ' + nombre + " " + apellido)
}

bienvenido("Coder", "Ra")
bienvenido("Ana", "Re")
bienvenido("Noah", "Ri")
*/
/*
function suma(a, b){
   return a + b;
}

let resultado = suma(5, 10)
console.log(resultado) */
// let nombre = prompt('ingrese su nombre: ')

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

let numeroA = parseInt(prompt('Ingrese el número:'))

let operacion = prompt('ingrese la oepración que desea relaizar:')

let numeroB = parseInt(prompt('Ingrese otro número:'))

alert(calculadora(numeroA, numeroB, operacion))
