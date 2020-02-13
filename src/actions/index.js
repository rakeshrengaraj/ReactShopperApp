export const ADD_GROCERY = 'ADD_GROCERY';
export const REMOVE_GROCERY = 'REMOVE_GROCERY';

export const ADD_POCKET_MONEY = 'ADD_POCKET_MONEY';
export const REMOVE_POCKET_MONEY = 'REMOVE_POCKET_MONEY';


export function addGroceryById(id){
    return{
        type: ADD_GROCERY,
        id: id
    }
}

export function removeGroceryById(id){
    return{
        type: REMOVE_GROCERY,
        id: id
    }
}


export function addPocketMoney(id){
    return{
        type: ADD_POCKET_MONEY,
        id: id
    }
}

export function removePocketMoney(id){
    return{
        type: REMOVE_POCKET_MONEY,
        id: id
    }
}
