import { LightningElement,wire } from 'lwc';
import sample from '@salesforce/messageChannel/hellobc__c';
import { APPLICATION_SCOPE,MessageContext,subscribe,unsubscribe } from 'lightning/messageService';

export default class Lmstwo extends LightningElement {
    receive;
  
    @wire(MessageContext) context


subb(){ 
 this.subsc = subscribe(this.context, sample, (message)=>{this.handle(message)},{scope:APPLICATION_SCOPE});
}


handle(message){

    this.receive = message.datta.value 

}
unsub(){

unsubscribe(this.subsc)
this.subsc=null
}


}