import { LightningElement, wire ,track} from 'lwc';
import CAR from '@salesforce/schema/car__c'
import NAME_F from '@salesforce/schema/car__c.Name'
import PIC from '@salesforce/schema/car__c.Picture_URL__c'
import FUEL from '@salesforce/schema/car__c.Fuel_Type__c'
import CATEGORIE from '@salesforce/schema/car__c.Category__c'
import MAKE from '@salesforce/schema/car__c.Make__c'
import SEAT from '@salesforce/schema/car__c.Number_of_Seats__c'
import CONTROL from '@salesforce/schema/car__c.Control__c'
import { getFieldValue } from 'lightning/uiRecordApi';
import { subscribe,MessageContext } from 'lightning/messageService';
import carhandle from '@salesforce/messageChannel/carhandle__c';
import { NavigationMixin } from 'lightning/navigation'
export default class Carcard extends NavigationMixin (LightningElement) {
 recordId
 subscription
    //fields Name
        pic = PIC
        name=NAME_F
        control =CONTROL
        seat=SEAT
        make =MAKE
        category =CATEGORIE
        fuel =FUEL
        @track carname
        carpic
@wire(MessageContext)messagecontext



        handlerecordloaded(event){
const{records} = event.detail
const recordData = records[this.recordId]
console.log(event.detail.records)

        this.carname = getFieldValue(recordData,NAME_F)
this.carpic =  getFieldValue(recordData,PIC)
     



        }
connectedCallback(){

        this.fetchrecordid()
}

fetchrecordid(){
        subscribe(this.messagecontext,carhandle,(message)=>this.retrivedata(message))

}

retrivedata(message){

        this.recordId=message.carclick
        console.log(message.carclick,'hiiiiii')
}

handlenavigation(){
this[NavigationMixin.Navigate]({

        type:'standard__recordPage',
        attributes:{
                recordId:this.recordId,
                objectApiNAme:CAR.objectApiNAme,
                actionName:'view'
        }

})


}


handlenavigatio(){
        if(this.recordId='' || this.recordId==null){
                this.carname = getFieldValue('')
        }
        
}


}