import {
    ADD,
    SUBTRACT
} from './actionTypes';

export const add = (id, item, quantity) => {
    return {type:ADD , id, item, quantity}
}

export const subtract = (id, quantity) => {
    return {type:SUBTRACT, id, quantity}
}