import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACC from '@salesforce/schema/Account';
import indu from '@salesforce/schema/Account.Industry';

import typ from '@salesforce/schema/Account.Type';
export default class Pucklist extends LightningElement {


seelct='' ;
optio=[];
@wire(getObjectInfo,{objectApiName:ACC}) objdata

@wire(getPicklistValues,{recordTypeId:'$objdata.data.defaultRecordTypeId',fieldApiName:indu}) 
pickdata({data,error}){
 if(data){
 console.log(data)
   this.optio =[...this.method(data)];

 }
 if(error){

    console.error(error);
 }
}
 method(data){
return data.values.map(item=>({label:item.label,value:item.value}));
    

 }


 handleinput(event){

// alert('huuu');
//     this.seelct = event.detail.value;
//     console.log(seelct)
console.log(this.seelct)
this.seelct = event.detail.value;
 }

seelcttype='';
 optio1=[]

 @wire(getPicklistValues,{recordTypeId:'$objdata.data.defaultRecordTypeId',fieldApiName:typ}) 
 pickdata({data,error}){
  if(data){
  console.log(data)
    this.optio1 =[...this.method1(data)];
 
  }
  if(error){
 
     console.error(error);
  }
 }
  method1(data){
 return data.values.map(item=>({label:item.label,value:item.value}));
     
 
  }
 
 
  handleinput1(event){
 
 // alert('huuu');
 //     this.seelct = event.detail.value;
 //     console.log(seelct)
 console.log(this.seelcttype)
 this.seelcttype = event.detail.value;
  }
 









}