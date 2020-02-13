import { ADD_GROCERY,REMOVE_GROCERY } from '../actions';
import { addToBag } from './helper'

function shoppingBag(state = [], action) {
    let shoppingBag;
    switch (action.type) {
        case ADD_GROCERY:
            shoppingBag = [...state, addToBag(action.id)];
            return shoppingBag;
        case REMOVE_GROCERY:
            shoppingBag = state.filter(item => item.id !== action.id);
            return shoppingBag;
        default:
            return state
    }
}


export default shoppingBag;