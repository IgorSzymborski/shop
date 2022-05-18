const products = [{
    name: "Underwater world, purple",
    price: 5.54,
    sku: "Und-pur",
    id: 1,
    thumbnail: "assets/products-photos/prod-photo-4.png",
  },
  {
    name: "Underwater world, green",
    price: 6.22,
    sku: "Und-gre",
    id: 2,
    thumbnail: "assets/products-photos/prod-photo-5.png",
  },
  {
    name: "Underwater world, red",
    price: 10.54,
    sku: "Und-red",
    id: 3,
    thumbnail: "assets/products-photos/prod-photo-6.png",
  },
  {
    name: "Underwater world, yellow",
    price: 35.54,
    sku: "Und-yel",
    id: 4,
    thumbnail: "assets/products-photos/prod-photo-7.png",
  },
]

const productsEl = document.querySelector('.container-product')
const cartItemEl = document.querySelector('.cart-product')
const openCartBtn = document.querySelector('.openCartBtn')
const cartShop = document.querySelector('.cart')
const cartSummary = document.querySelector('.cart-summary')
const closeCartBtn = document.querySelector('.closeCartBtn')
const price = document.querySelector('.price')
const cart = []

const openCart = () => {
  cartShop.classList.add('open-cart')
}
const closeCart = () => {
  cartShop.classList.remove('open-cart')
}

const renderProducts = () => {
  products.map((product) => {
    productsEl.innerHTML +=
      `<article class="products">
      <img src="${product.thumbnail}" />
      <header class="product-header">
        <p class="product-name">${product.name}</p>
        <p class="price">${product.price} <span class="price-unit">$</p>
      </header>
      <button class="button" onclick="addToCart(${product.id})">Dodaj do koszyka</button>
    </article>`
  })
}
renderProducts()

const addToCart = (id) => {

  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits('plus', id)
  } else {
    const item = products.find((product) => product.id === id)

    cart.push({
      ...item,
      numberOfUnits: 1,
    })
  }

  renderCartItems()

}

const removeFromCart = (id) => {
  const foundIndex = products.find((product) => product.id === id)
  cart.splice(foundIndex, 1)
  renderCartItems()
}



const renderCartItems = () => {
  cartItemEl.innerHTML = ''
  cart.map((item) => {
    cartItemEl.innerHTML += `<div class="product">
      <img class="cartIMG" src="${item.thumbnail}" />
      <div class="cart-info">
        <p class="cart-product_name">${item.name}</p>
        <button class="deleteBtn" onclick="removeFromCart(${item.id})">Usuń</button>
        <div class="details-order">
          <p class="product-price">${item.price} <span class="price-unit">$</span></p>
         <p class="quantity">Ilość:</p>
        <input type="text" name="" id="" class="quantity-product">
       </div>
      </div>
    </div>`
  })
}




openCartBtn.addEventListener('click', openCart)
closeCartBtn.addEventListener('click', closeCart)