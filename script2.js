let nombreProductoA = 'Mesa'
let precioProductoA = 100

let nombreProductoB = 'Silla'
let precioProductoB = 10

let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

console.log(compra)

if(compra == "SI"){
    console.log("entra")
let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar.")
let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar.")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert("El precio total es: " + precioTotal)
}
else{
    console.log(" no entra")
    alert("Gracias por su visita")
}
