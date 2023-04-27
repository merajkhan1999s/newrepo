import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions'
export default class Quicksactionpanel extends LightningElement {


    savehandler(event){
    event.preventDefault
     this.dispatchEvent(new CloseActionScreenEvent())
    }
}