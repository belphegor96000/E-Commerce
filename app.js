
let carts = document.querySelectorAll('.add-cart')
let products = [
    {
        name: 'Dark Classic Hoddie',
        tag: 'DarkClassicHoddie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Metal Grey v2',
        tag: 'MetalGreyv2',
        price: 15,
        inCart: 0
    },
    {
        name: 'Light Grey no.7',
        tag: 'LightGreyno.7',
        price: 30,
        inCart: 0
    },
    {
        name: 'Sports Hoodie Fit',
        tag: 'SportsHoodieFit',
        price: 33,
        inCart: 0
    },
    {
        name: 'Blue Koala Hoodie',
        tag: 'BlueKoalaHoodie',
        price: 50,
        inCart: 0
    },
    {
        name: 'Gray Bare Bear Hoodie',
        tag: 'GrayBareBearHoodie',
        price: 40,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1
    } else {
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}
    
    function totalCost(product) {
        let cartCost = localStorage.getItem('totalCost')

        console.log('my cost is ', cartCost)
        console.log(typeof cartCost)

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price)
        } else {
            localStorage.setItem("totalCost", product.price)
        }
    }



onLoadCartNumbers()

