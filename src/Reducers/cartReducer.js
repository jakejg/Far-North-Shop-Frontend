import {
    ADD
} from '../actions/actionTypes';

let INITIAL_STATE = {}
const cart = JSON.parse(sessionStorage.getItem('cart'));
if (cart) {
    for (let item of cart){
        INITIAL_STATE[item._id] = item
    }
}

const cartReducer = (state=INITIAL_STATE, action) => {
    console.log(state)
    switch(action.type) {
        case ADD:
            let storage = JSON.parse(sessionStorage.getItem('cart'));
            if (storage) {
                storage.push(action.item);
                sessionStorage.setItem('cart', JSON.stringify(storage))
            }
            else {
                sessionStorage.setItem('cart', JSON.stringify([action.item]))
            }
      
            return {...state, [action.id]: action.item }
    }
}

export default cartReducer;