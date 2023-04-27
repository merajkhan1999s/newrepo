import { LightningElement } from 'lwc';

export default class SliceJava extends LightningElement {

    connectedCallback(){
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
     citrus = fruits.slice(1, 3);
     console.log(citrus)

    }
  
}