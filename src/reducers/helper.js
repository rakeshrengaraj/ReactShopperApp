import groceryListItems from '../data/grocery.json';


export function addToBag(id){
    let item = groceryListItems.find((item) => item.id === id)
    return item;
}