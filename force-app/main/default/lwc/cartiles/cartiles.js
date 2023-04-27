import { LightningElement,wire } from 'lwc';
import CarController from '@salesforce/apex/carcontrollers.getCars';


//lms
import carlms from '@salesforce/messageChannel/Carsfiltered__c';
import {subscribe,MessageContext,publish} from 'lightning/messageService';
import carhandle from '@salesforce/messageChannel/carhandle__c';

export default class Cartiles extends LightningElement {
    cardetails=[]
    carsubscription
    err='error whilefetching the data';
    @wire(MessageContext)messageContext
  
   filters={}
@wire(CarController,{filters:'$filters'})wiredata
({data,error}){

if(data){
this.cardetails=data
console.log(this.cardetails)


}else{

  console.error(error)
}


}

connectedCallback(){

    this.subscribehandler()
}


subscribehandler(){

this.carsubscription= subscribe(this.messageContext,carlms,(message)=>this.handlermessage(message) )

}

handlermessage(message){

this.filters={...message.filters}

}
 handlepic(event){
    console.log(event.detail)

      publish(this.messageContext,carhandle,{
        carclick:event.detail
      }
      )  
    

    }



}