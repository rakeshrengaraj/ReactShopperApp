import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { addToBag } from './helper'

import groceryListItems from '../data/grocery.json';

function grocery(state = groceryListItems, action) {
    let grocery;
    switch (action.type) {
        case ADD_GROCERY:
            grocery = state.filter(item => item.id !== action.id);
            return grocery;
        case REMOVE_GROCERY:
            grocery = [...state, addToBag(action.id)];
            return grocery;
        default:
            return state
    }
}


export default grocery;