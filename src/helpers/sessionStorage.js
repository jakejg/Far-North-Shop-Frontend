/* function to add a cart item to session storage */



export function addToSessionStorage(item){
    const cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart) {
    
        let cartItem = cart.find(cartItem => (cartItem._id === item._id))
        // if item is already in cart just increase the quantity
      
        if (cartItem){
            cartItem.quantity = cartItem.quantity + 1;
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