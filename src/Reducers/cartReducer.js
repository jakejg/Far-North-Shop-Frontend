import {
    ADD,
    SUBTRACT
} from '../actions/actionTypes';

import { createCart } from '../helpers/sessionStorage';

const INITIAL_STATE = createCart();

const cartReducer = (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD:
            // if item is already in cart set quantity
            if (state[action.id]) {
                return {...state, [action.id]: {...state[action.id], quantity: action.quantity} }
            }
            // otherwise set quantity to one and add item
            else {
                action.item.quantity = 1;
                return {...state, [action.id]: action.item }
            }
        case SUBTRACT:
            // if item quantity is zero, delete item
            if (action.quantity === 0) {
                delete state[action.id];
                return {...state}
            }
            // otherwise set quantity
            else {
                return {...state, [action.id]: {...state[action.id], quantity: action.quantity }}
            }
        default:
            return state
    }
}

export default cartReducer;