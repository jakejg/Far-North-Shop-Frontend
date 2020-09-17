/* function to add a cart item to session storage */

const cart = JSON.parse(sessionStorage.getItem('cart'));

export function addToSessionStorage(item){

    if (cart) {
        cart.push(item);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
        sessionStorage.setItem('cart', JSON.stringify([item]))
    }
}

/* function to create a cart object with items from session storage */

export function createCart(){
    console.log(cart)
    let cartObject = {}
    if (cart) {
        for (let item of cart){
            cartObject[item._id] = item;
        }
    }
    return cartObject;
}