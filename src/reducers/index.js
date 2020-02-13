import grocery from './grocery_reducer';
import shoppingBag from './shoppingBag_reducer';
import pocketMoney from './spending_money'


import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    grocery: grocery,
    shoppingBag: shoppingBag,
    pocketMoney: pocketMoney
})


export default rootReducer;