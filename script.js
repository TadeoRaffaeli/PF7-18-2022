//Clase 1
// Arancamos con JS//
//variables

let nombreProducto

let year

nombreProducto = "Mesa"

year = 2022

const altura = 1.79

let numeroA = 5
let numeroB = 10

let resultado = numeroA + numeroB

console.log("suma de la operación", resultado)

let texto = "hola"
let texto2 = "mundo"

let texto3 = texto + " " + texto2

console.log(texto3)

let union = numeroA + texto
console.log(union)

let num1 = "5"
let num2 = 3
let num3 = num1 - num2
console.log(num3)
/*
let numeroIngresado = prompt("ingrese un número:")
console.log(numeroIngresado)

alert("Bienvenido")
*/

//2 Productos -> Mostrar Prods -> Compra?
//Qué cantidad? -> Mostrar precio total de la compra

let nombreProductoA = 'Mesa'
let precioProductoA = 100

let nombreProductoB = 'Silla'
let precioProductoB = 10

let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

if(compra == "SI"){
let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar.")
let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar.")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita")
}

//Clase 2
/*
let verdadero = true
let falso = false

let numero = prompt("Ingrese un número: ")

if (numero > 5) {
    console.log("El número es mayor") 
}
console.log("Este es el final")
*/
/* let text = prompt("ingrese SI para comprar \nIngrese NO para salir")

if(text == "SI"){
    alert("Gracias por su respuesta")
}
else{
    alert("Gracias vuelva pronto")
}
*/
/*
let precio = prompt("ingrese un número:")

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
console.log("Fin")
*/
