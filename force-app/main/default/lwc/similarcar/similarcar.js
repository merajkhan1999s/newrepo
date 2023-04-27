import { LightningElement,api,wire} from 'lwc';
import getsimilarcars from '@salesforce/apex/carcontrollers.getsimilarcars';
import {getRecord} from 'lightning/uiRecordApi'

import MAKE from '@salesforce/schema/car__c.Make__c';
import {NavigationMixin} from 'lightning/navigation'
export default class Similarcar extends NavigationMixin  (LightningElement) {

    @api recordId
    @api objectApiName
    cardata
    @wire(getRecord,{recordId:'$recordId',fields:[MAKE]})wiredata
  
    handlesimilar(){

      getsimilarcars({
              carId:this.recordId,
           makeType:this.wiredata.data.fields.Make__c.value
        }).then(result=>{
            this.cardata = result
            console.log(this.cardata,'fhfh')
        }).catch(error=>{
            console.log(error)
        })

 

}

handlecarrec(event){

this[NavigationMixin.Navigate]({

    type:'standard__recordPage',
  attributes:{
   recordId:event.target.dataset.id,
   objectApiName:this.objectApiName,
   actionName:'view'

  }

})

}



}