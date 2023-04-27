import { LightningElement, wire } from 'lwc';
// import CATEGORY_field from '@salesforce/schema/car__c.Category__c'
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';

import CAR  from '@salesforce/schema/car__c'; 

import CARC  from '@salesforce/schema/car__c.Category__c'; 

import CARM  from '@salesforce/schema/car__c.Make__c'; 

//lms
import carlms from '@salesforce/messageChannel/Carsfiltered__c';
import {publish,MessageContext} from 'lightning/messageService';

export default class Carfilter extends LightningElement {
    timer
    filters={
         searchkey:'',
         maxPrice:999999

    }
 

  @wire(MessageContext)messageContext; 

@wire(getObjectInfo, {objectApiName:CAR})carobjectinfo;

@wire(getPicklistValues, {
    recordTypeId:'$carobjectinfo.data.defaultRecordTypeId',
    fieldApiName:CARC
})categories



@wire(getPicklistValues, {
    recordTypeId:'$carobjectinfo.data.defaultRecordTypeId',
    fieldApiName:CARM
})makeType

   searchfilter(event){


    this.filters ={...this.filters, "searchkey":event.target.value}
    

     this.senddatatotiles()
    }
    sliderhandler(event){

        this.filters = {...this.filters,"maxPrice":event.target.value}
        this.senddatatotiles()
        
    }
    checkboxhandler(event){
       
        
       if(!this.filters.categories){
         const categories = this.categories.data.values.map(item => item.value)
         const makeType = this.makeType.data.values.map(item=> item.value)
         this.filters = {...this.filters,categories,makeType}

       }
       const {name,value} = event.target.dataset
  if(event.target.checked){
        if(!this.filters[name].includes(value)){

            this.filters[name] = [...this.filters[name], value]
         
        }

    }
else{

this.filters[name]= this.filters[name].filter(item=> item!==value)

}
     
        

              this.senddatatotiles()

       
       
}
  
senddatatotiles(){


window.clearTimeout(this.timer)
this.timer =window.setTimeout(()=>{

    publish(this.messageContext,carlms,{
        filters:this.filters


})
},1000)
   
   
}
}