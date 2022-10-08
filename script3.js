function Producto(nombre, precio, stock, img, cat){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.cat = cat;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
} 

let productoA = new Producto('Proteina ENA 1KG', 5500, 150, "../Images/ProteinaENA1KG.jpg","proteina")
let productoB = new Producto("Proteina Star 3kg", 15200, 60,"../Images/ProteinaStar3kg.jpg","proteina")
let productoC = new Producto("Whey Protein Gentech 5kgs", 24000, 20,"../Images/WheyProteinGentech5kgs.jpg","proteina")
let productoD = new Producto("Creatina ENA 300Grs", 7200, 30,"../Images/CreatinaENA300Grs.jpg","creatina")
let productoE = new Producto("Creatina Star 300Grs", 10000, 20,"../Images/CreatinaStar300Grs.jpg","creatina")
let productoF = new Producto("Creatina Gold Nutrition 300Grs", 7000, 80,"../Images/CreatinaGoldNutrition300Grs.jpg","creatina")

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")

function render(lista){
    catalogo.innerHTML = ""
    
    for(const prod of lista){

        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><img src=${prod.img}></img><button>Comprame!</button>`

        catalogo.append(card)

    }
}

render(listaProductosConStock)

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)


function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    if(filtroActual.length == 0){
        console.log("Esa categoria no existe")
    }
    render(filtroActual)
}

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})



/* console.log(catalogo)

let card = document.getElementsByClassName("NombreDeLaClass")

card[0].className = "nuevaCard" */

/* catalogo.innerText = "No es bienvenido"

console.log(catalogo.innerText)

let catalogo = document.getElementById("nombreDelID")

catalogo.innerHTML = "<h2>Hola</h2>" */

