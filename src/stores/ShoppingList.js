import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable  list = [];
    @observable  length;
    checkItem = () => {
        // your code here
    }
   @action addItem = (name, location) => {
    this.list.push(new Item(name, location))
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    } 
}

