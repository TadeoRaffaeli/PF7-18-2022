
let nombreProductoA = 'Mesa'
let precioProductoA = 100
let stockProductoA = 40

let nombreProductoB = 'Silla'
let precioProductoB = 45
let stockProductoB = 140

let nombreProductoC = 'Lampara'
let precioProductoC = 20
let stockProductoC = 25

let precioTotal = 0

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

alert('Estos son nuestros prefuctos: \n- Mesa\n- Silla\n- Lampara')

function calculoPrecio(cantidad, precio){
    precioTotal +=  (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)}
    else{
    alert("Actualmente tenemos un stock total de " + stock)
    }
}

let cantidadCompra = parseInt(prompt('Qué cantidad de productos distintos quiere comprar?: '))


for(let i = 0; i  < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n- Mesa\n- Silla\n- Lampara")


    if(productoCompra.toLowerCase() == 'mesa'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar.")
        calculoStock(cantidadProductoMesa, stockProductoA, precioProductoA)
    }
    else if(productoCompra.toLowerCase() == 'silla'){
     let cantidadProductoSilla = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar.")
     calculoStock(cantidadProductoSilla, stockProductoB, precioProductoB)
    }
    else if(productoCompra.toLowerCase() == 'lampara'){
     let cantidadProductoLampara = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar.")
     calculoStock(cantidadProductoLampara, stockProductoC, precioProductoC)
    }
    else{
     alert("No tenemos ese producto a la venta")
    }

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
      console.log("no entra")
      alert("Gracias por su visita")
    }
}


/*
for(let i = 0; i < 10; i = i + 1){
    alert('el numero es el ' + i)
}

*/

/*
for(let i = 0; i < 10; i = i + 1){
    
    if(i == 5){
        continue
    }

    console.log(i)
 
}

let flag = true

while(flag){
    
    if(nomre != 'Pedro')
    flag = false
}
*/

/*
entrada = prompt('1 - Cuentas\n2 - Cajero\n3 - Contador\n ESC - Salir');

while (entrada != 'ESC'){
    alert('El usuario ingresó ' + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("1 - Cuentas\n2 - Cajero\n3 - Contador\n ESC - Salir");

}
*/


/*
let i = 0

do{
    console.log('Solo una vez');
    i = i + 1
}
while(i < 3)
*/

