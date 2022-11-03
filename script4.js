 const listaDeProductos = [
    {
        id: 1,
        nombre: "Proteina ENA 1KG",
        precio: 5500,
        stock: 150,
        img: "../Images/ProteinaENA1KG.jpg",
        cat: "proteina"
    },
    {
        id: 2,
        nombre: "Proteina Star 3kg",
        precio: 15200,
        stock: 60,
        img: "../Images/ProteinaStar3kg.jpg",
        cat: "proteina"
    },
    {
        id: 3,
        nombre: "Whey Protein Gentech 5kgs",
        precio: 24000,
        stock: 20,
        img: "../Images/WheyProteinGentech5kgs.jpg",
        cat: "proteina"
    },
    {
        id: 4,
        nombre: "Creatina ENA 300Grs",
        precio: 7200,
        stock: 30,
        img: "../Images/CreatinaENA300Grs.jpg",
        cat: "creatina"
    },
    {
        id: 5,
        nombre: "Creatina Star 300Grs",
        precio: 10000,
        stock: 20,
        img: "../Images/CreatinaStar300Grs.jpg",
        cat: "creatina"
    },
    {
        id: 6,
        nombre: "Creatina Gold Nutrition 300Grs",
        precio: 7000,
        stock: 80,
        img: "../Images/CreatinaGoldNutrition300Grs.jpg",
        cat: "creatina"
    }
]

fetch('https://api-dolar-argentina.herokuapp.com/api/contadoliqui')
.then((response) => response.json())
.then ((info) => render(info) )



let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let totalEnvio = document.getElementById('envio')
let cart = []
let inputFilter = document.getElementById('filtro')
inputFilter.addEventListener('input', (e) => renderProducts(e.target.value))

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()
window.onload = () => renderProducts('')

function renderProducts(filter = ''){
    catalog.innerHTML = ''
    const array = filter === '' ? listaDeProductos : listaDeProductos.filter( item => item.nombre.toLowerCase().includes(filter.toLowerCase()))

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
    cardPrice.innerText = `$${prod.precio}`
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
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
    totalEnvio.innerText = 1500
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
    totalValue.innerText = 0
}

function calculateTotalPrice(){
        return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        return total + item[0].precio
     }, 0)   
       
}



function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

