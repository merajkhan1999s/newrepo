import { LightningElement,api } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import PHHON from '@salesforce/schema/Account.Phone';
import RAT from '@salesforce/schema/Account.Rating';

export default class Lightningrecordform extends LightningElement {

@api recordId
@api objectApiName
values
nm;
 //field=[NAME,PHHON,RAT];
field = {name:NAME,
phone:PHHON,
rat:RAT}

  
    successHandler(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Account created",
            message: "Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)

    }
    handleError(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Error creating Account",
            message: event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }
      
}