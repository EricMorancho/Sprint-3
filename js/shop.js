// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var addCart = [];

var total = 0;

let applied = false;

let cartItems = document.getElementById('cart_list');

let totalPrice = document.getElementById('total_price');

let totalQuantity = document.getElementById('count_product');



// Exercise 1
/*
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (i=0; i<products.length-1; i++){
        if (id == products[i].id){
            cartList.push(products[i]);
        }
    }
    console.log(id);
    
   console.log(products[i].id);
   console.log(cartList);
} */

// Exercise 2
function cleanCart() {
    cartList.splice(0, cartList.length);

    cartItems.innerHTML = `
        <tr>
			<th scope="row"></th>
			<td>$</td>
			<td></td>
		    <td>$</td>
		</tr>
        `;
    totalPrice.innerHTML = `
        <div class="text-center fs-3">
			Total: $<span id="total_price"></span>
		</div>
        `;
}



// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return total;
}

// Exercise 4 
/*
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let i= 0;
    
    for (i = 0; i<cartList.length; i++){
        if (!cart.includes(cartList[i])){
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].quantity*cartList[i].price;
            cart.push(cartList[i]);
        } else {
            for (let j=0; j<cart.length; j++){
                if (cart[j].id == cartList[i].id){
                    cart[j].quantity += 1;
                    cart[j].subtotal = cart[j].quantity*cart[j].price;
                }
            }
        }
    }
    console.log(cart);
} */


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++)
        if (cart[i].id == 1 && cart[i].quantity == 3) {
            cart[i].price = 10;
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
        } else if (cart[i].id == 3 && cart[i].quantity == 10 && applied == false) {
        cart[i].price = cart[i].price * (2 / 3).toFixed(2);
        cart[i].subtotalWithDiscount = (cart[i].quantity * cart[i].price).toFixed(2);
        applied = true;
    } else if (cart[i].id == 1 && cart[i].quantity < 3) {
        cart[i].price = 10.5;
        cart[i].subtotal = cart[i].quantity * cart[i].price;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
    } else if (cart[i].id == 3 && cart[i].quantity < 10) {
        cart[i].price = 5;
        cart[i].subtotal = cart[i].quantity * cart[i].price;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
        applied = false;
    } else {
        cart[i].subtotalWithDiscount = cart[i].subtotal;
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    showTotal = 0;

    cartItems.innerHTML = '';
    totalPrice.innerHTML = '';


    applyPromotionsCart()
    cart.forEach((item) => {
        cartItems.innerHTML += `
        <tr>
			<th scope="row">${item.name}</th>
			<td>$${item.price}</td>
			<td>${item.quantity}</td>
		    <td>$${item.subtotalWithDiscount}</td>
		</tr>
        `;
        showTotal += item.subtotalWithDiscount;
        totalPrice.innerHTML = `
        <div class="text-center fs-3">
			Total: $<span id="total_price">${showTotal}</span>
		</div>
        `;
    });
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.



    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id && products[i].quantity == undefined) {
            cart.push(products[i]);
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == id) {
                    cart[j].quantity = 1;
                    cart[j].subtotal = cart[j].quantity * cart[j].price;
                }
            }
        } else if (id == products[i].id && products[i].quantity >= 1) {
            for (j = 0; j < cart.length; j++) {
                if (cart[j].id == id) {
                    cart[j].quantity += 1;
                    cart[j].subtotal = cart[j].quantity * cart[j].price;
                    applyPromotionsCart();
                }
            }
        }
    }

    productsQuantity = 0;
    totalQuantity.innerHTML = '';

    cart.forEach((item) => {
        productsQuantity += item.quantity;
        totalQuantity.innerHTML = `
        <span class="badge bg-secondary text-white ms-1 rounded-pill" id="count_product">${productsQuantity}</span>
        `;
    });
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < cart.length; i++) {
        if (id == cart[i].id && cart[i].quantity >= 2) {
            cart[i].quantity -= 1;
            cart[i].subtotal = cart[i].quantity * cart[i].price;
            applyPromotionsCart();


        } else if (id == cart[i].id && cart[i].quantity == 1) {
            cart[i].quantity = undefined;
            cart.splice(i, 1);
        }
    }

    productsQuantity -= 1;
    totalQuantity.innerHTML = `
        <span class="badge bg-secondary text-white ms-1 rounded-pill" id="count_product">${productsQuantity}</span>
        `;

}

function open_modal() {
    printCart();
}