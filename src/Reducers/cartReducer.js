import {
    ADD
} from '../actions/actionTypes';

import { createCart } from '../helpers/sessionStorage';

const INITIAL_STATE = createCart();

const cartReducer = (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD:

            // if item is already in cart just increase the quantity
            if (state[action.id]) {
                return {...state, [action.id]: {...state[action.id], quantity: state[action.id].quantity + 1 } }
            }
            // otherwise set quantity to one and add item
            else {
                action.item.quantity = 1;
                return {...state, [action.id]: action.item }
            }
            
        default:
            return state
    }
}

export default cartReducer;