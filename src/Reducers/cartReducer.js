import {
    ADD
} from '../actions/actionTypes';

const cartReducer = (state={}, action) => {
    switch(action.type) {
        case ADD:
            return {...state, [action.id]: action.item }
    }
}

export default cartReducer;