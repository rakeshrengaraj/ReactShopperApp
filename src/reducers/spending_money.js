import { ADD_POCKET_MONEY, REMOVE_POCKET_MONEY} from '../actions';
import { addToBag } from './helper'



function pocketMoney(state = 50, action){
    let item;
    let pocketMoney; 
    switch(action.type){
        case ADD_POCKET_MONEY:
            item = addToBag(action.id);
            pocketMoney = state + item.cost
            return pocketMoney;    
        case REMOVE_POCKET_MONEY:
            item = addToBag(action.id);
            pocketMoney = (state - item.cost) < 0 ? 0 : (state - item.cost); 
            return pocketMoney;    
        default:
            return state;    
    }
}


export default pocketMoney;