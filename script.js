/*
let productoA = {
    nombre: 'Mesa',
    precio: 100,
    stock: 10
} */

    function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
} 

/* class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    restarStock(cantidad){
        this.stock -= cantidad
    }
}  */

let productoA = new Producto('Proteina ENA 1KG', 5500, 150)
let productoB = new Producto("Proteina Star 3kg", 15200, 60)
let productoC = new Producto("Whey Protein Gentech 5kgs", 24000, 20)
let productoD = new Producto("Creatina ENA 300Grs", 7200, 30)
let productoE = new Producto("Creatina Star 300Grs", 10000, 20)
let productoF = new Producto("Creatina Gold Nutrition 300Grs", 7000, 80)


/* for(const propiedad in productoA){
    console.log(productoA[propiedad])
} */

let precioTotal = 0
 alert('Estos son nuestros prefuctos en stock: \n- 1.Proteina ENA 1KG\n- 2.Proteina Star 3kg\n- 3.Whey Protein Gentech 5kg\n- 4.Creatina ENA 300Grs\n- 5.Creatina Star 300Grs\n- 6.Creatina Gold Nutrition 300Grs"') 


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

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n- 1.Proteina ENA 1KG\n- 2.Proteina Star 3kg\n- 3.Whey Protein Gentech 5kg\n- 4.Creatina ENA 300Grs\n- 5.Creatina Star 300Grs\n- 6.Creatina Gold Nutrition 300Grs")


    if((productoCompra.toLowerCase() == 'proteina ena 1kg') || (productoCompra == '1') || (productoCompra.toLowerCase() == '1.proteina ena 1kg')){
        let cantidadProductoA = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar.")
        calculoStock(cantidadProductoA, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoA)
    }
    else if((productoCompra.toLowerCase() == 'proteina star 3kg') || (productoCompra == '2') || (productoCompra.toLowerCase() =='2.proteina start 3kg')){
     let cantidadProductoB = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar.")
     calculoStock(cantidadProductoB, productoB.stock, productoB["precio"])
     productoB.restarStock(cantidadProductoB)
    }
    else if((productoCompra.toLowerCase() == 'whey protein gentech 5kg') || (productoCompra == '3') || (productoCompra.toLowerCase() == '3.whey protein gentech 5kg')){
     let cantidadProductoC = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar.")
     calculoStock(cantidadProductoC, productoC.stock, productoC["precio"])
     productoC.restarStock(cantidadProductoC)
    }
    else if((productoCompra.toLowerCase() == 'creatina ena 300grs') || (productoCompra == '4') || (productoCompra.toLowerCase() == '4.creatina ena 300grs')){
        let cantidadProductoD = prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar.")
        calculoStock(cantidadProductoD, productoD.stock, productoD["precio"])
        productoD.restarStock(cantidadProductoD)
    }
    else if((productoCompra.toLowerCase() == 'creatina star 300grs') || (productoCompra == '5') || (productoCompra.toLowerCase() == '5.creatina star 300grs')){
        let cantidadProductoE = prompt("ingrese que cantidad de " + productoE.nombre + " desea comprar.")
        calculoStock(cantidadProductoE, productoE.stock, productoE["precio"])
        productoE.restarStock(cantidadProductoE)
    }
    else if((productoCompra.toLowerCase() == 'creatina gold nutrition 300grs') || (productoCompra == '6') || (productoCompra.toLowerCase() == '6.creatina gold nutrition 300grs')){
        let cantidadProductoF = prompt("ingrese que cantidad de " + productoF.nombre + " desea comprar.")
        calculoStock(cantidadProductoF, productoF.stock, productoF["precio"])
        productoF.restarStock(cantidadProductoF)
    }

    else{
     alert("No tenemos ese producto a la venta")
    }
    }
    if(precioTotal != 0){
        alert("El total de su compra será de: " + precioTotal)
         if(precioTotal >= 210000){
            alert('Su compra obtendrá un descuento de 30% ya que superó el monto de $210.000\n Su nuevo precio final será ' + precioTotal*0.70)
         } 
         else if(precioTotal >= 160000){
        alert('Su compra obtendrá un descuento de 20% ya que superó el monto de $160.000\n Su nuevo precio final será ' + precioTotal*0.80)
        } 
        else if(precioTotal >= 90000){
            alert('Su compra obtendrá un descuento de 10% ya que superó el monto de $90.000\n Su nuevo precio final será ' + precioTotal*0.90)
        }
        else if(precioTotal <12500){
            alert('Para alcanzar el envío gratis debe alcanzar el monto mínimo de $12.500, su monto actual es ' + precioTotal + '\n El adicional de envío en CABA es de $1.100, su precio total será de: ' + (precioTotal+1100))
        }
    }
    else{
        alert("Muhcas gracias, vuelva pronto!")
    }
