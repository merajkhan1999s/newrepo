import { LightningElement,wire} from 'lwc';
import sample from '@salesforce/messageChannel/hellobc__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class Lmsone extends LightningElement {

inp;
@wire (MessageContext) context 

inputhandle(event){
    this.inp = event.target.value;
}

pub(){

const message = {
    datta:
    { value:this.inp  
}
}


publish(this.context,sample,message)

}



}