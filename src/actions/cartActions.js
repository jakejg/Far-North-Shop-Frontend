import {
    ADD
} from './actionTypes';

export const add = (id, item) => {
    return {type:ADD , id, item}
}