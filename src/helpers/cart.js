import { addToSessionStorage, subtractFromSessionStorage } from '../helpers/sessionStorage';
import { add, subtract } from '../actions/cartActions';

/* creates object with a property for each item in the cart set to the quantity */

export function createFormState(items){
    const form = {}
    for (let item of Object.keys(items)){
        form[item] = items[item].quantity
    }
    return form;
}

/* adds an item to session storage and redux store cart */

export const addToCart = (dispatch, id, item, quantity) => {

    addToSessionStorage(item, quantity)
    dispatch(add(id, item, quantity))
}

/* removes an item from session storage and redux store cart */

export const subtractFromCart = (dispatch, id, item, quantity) => {

    subtractFromSessionStorage(item, quantity)
    dispatch(subtract(id, quantity))
}

/* calculates cart total */

export const getTotalPrice = (items) => {
    let total = 0;
    for (let item of Object.keys(items)){
        total += (items[item].price * items[item].quantity)
    }
    return total;
}

/* validates input for changing cart quanitites */

export const validateInput = (input) => {
    input = input.replace(/[^0-9]/, '');
    if (input.startsWith('0')) {
        input = input.slice(1);
    }
    return input;
}