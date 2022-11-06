import products from "./productos.json" assert{type:'json'}

let listaDeProductos = products.data


let api = ()=> {
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then((response) =>response.json())
.then((dolarValue) => precioNuevo(parseFloat(dolarValue[3].casa.venta.replace(',','.'))))
.then ((info) => renderProducts(info))
}


let precioNuevo = (precioDolar) => {
    listaDeProductos = listaDeProductos.map((producto) => {
    const precioViejo = producto.precio
    return{... producto,"precio": precioViejo * precioDolar}
})
return listaDeProductos
}


let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let totalEnvio = document.getElementById('envio')
let cart = []
let inputFilter = document.getElementById('filtro')
inputFilter.addEventListener('input', (e) => renderProducts(listaDeProductos, e.target.value))



loadCartFromStorage()
renderCart()
window.onload = () => api()

function renderProducts(listaDeProductos, filter = ''){
    catalog.innerHTML = ''
    const array = filter === '' ? listaDeProductos : listaDeProductos.filter( item => item.cat.toLowerCase().includes(filter.toLowerCase()))

    array.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    //Precio
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio.toFixed(2)}`
    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    //Img
    let cardImg = document.createElement("img")
    cardImg.classList.add('card-img')
    cardImg.src = `${prod.img}`
    //Button
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardImg)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

} 
function addProdToCart(event){
    cart.push(event.target.getAttribute('mark'))
    renderCart()
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio.toFixed(2)}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)
    

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = "$" + calculateTotalPrice().toFixed(2)
    totalEnvio.innerText = envioC()
}

function deleteProduct(event){
    
 Swal.fire({
    title: 'Querés eliminar este producto?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Conservar producto`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
       return cartId != id
    })
    renderCart()
      Swal.fire('Guardado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Se conservó el producto', '', 'error')
    }
  })
}

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = "$0"
    totalEnvio.innerText = "$0"
    saveCartToStorage()
}

function calculateTotalPrice(){
        return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        return total + item[0].precio
     }, 0) 
       
}
function envioC(){
    if(calculateTotalPrice() != 0){
    if(calculateTotalPrice() <= 50000){
        return "$1500"
    }
    else if(calculateTotalPrice() > 50000){
        return "Envío Gratis"
    }
}
else{
    return "$0"
}
}



function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

buttonEmpty.addEventListener('click', emptyButtonHandler)
