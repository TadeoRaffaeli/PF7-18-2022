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
let precioProductoB = 25

alert("Acepte si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar.")

let precioTotalA = cantidadProductoA * precioProductoA

let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar.")

let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert("El precio total es: " + precioTotal)

