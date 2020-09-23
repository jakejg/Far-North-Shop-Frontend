/* function to add a cart item to session storage */

export function addToSessionStorage(item, quantity){
    const cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart) {
    
        let cartItem = cart.find(cartItem => (cartItem._id === item._id))
        // if item is already in cart set the quantity
      
        if (cartItem){
            cartItem.quantity = quantity;
        }
        // otherwise set quantity to one and add item to cart
        else {
            item.quantity = 1;
            cart.push(item);
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
        item.quantity = 1;
        sessionStorage.setItem('cart', JSON.stringify([item]))
    }
}

/* function to subtract item from session storage */

export function subtractFromSessionStorage(item, quantity){
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart) {
    
        let cartItem = cart.find(cartItem => (cartItem._id === item._id))

        // if quantity is zero, delete item
        if (quantity === 0){
            cart = cart.filter(cartItem => (cartItem._id !== item._id))
        }
        // otherwise set quantity
        else {
            cartItem.quantity = quantity;
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
        item.quantity = 1;
        sessionStorage.setItem('cart', JSON.stringify([item]))
    }
}

/* function to create a cart object with items from session storage */

export function createCart(){
    const cart = JSON.parse(sessionStorage.getItem('cart'));

    let cartObject = {}
    if (cart) {
        for (let item of cart){
            cartObject[item._id] = item;
        }
    }
    return cartObject;
}