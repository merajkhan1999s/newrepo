import { LightningElement,wire } from 'lwc';
import sampl from "@salesforce/messageChannel/SampleChannel__c";
import { MessageContext,publish  } from 'lightning/messageService';

export default class Compoa extends LightningElement {
    inputvar;
@wire (MessageContext) context
input(event){

    this.inputvar=event.target.value;
}
publishmessage(){

const message ={
lmsdata:{ value:this.inputvar
}

}
publish(this.context, sampl, message);
}
}