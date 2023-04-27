import { LightningElement,wire } from 'lwc';
import metd from '@salesforce/apex/FercC.methodName';
export default class WirewithparamAndcombobox extends LightningElement {

    tyc='';
@wire(metd,{typ:'$tyc'})wir;

get opt(){
return[
{label:'custumer-direct',value:'Customer - Direct'},
{label:'custumer-channel',value:'Customer - Channel'},
]

}

handle(event){

this.tyc=event.target.value;

}


}