import { LightningElement, wire } from 'lwc';
import sampl from "@salesforce/messageChannel/SampleChannel__c";
import {  MessageContext,subscribe,unsubscribe,APPLICATION_SCOPE  } from 'lightning/messageService';

export default class Compb extends LightningElement {

reciv;
subsc;
@wire(MessageContext) context 

connectedCallback(){

    this.subscribemsg()
    console.log('called');}

subscribemsg(){

    this.subsc = subscribe(this.context, sampl, (message)=>{this.handle(message)}, 
    {scope:APPLICATION_SCOPE});

  }

handle(message){
    this.reciv=message.lmsdata.value ? message.lmsdata.value :'NO DATA'

}
unsubscribebutton(){

    unsubscribe(this.subsc)
    this.subsc=null
}







}