import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACC from '@salesforce/schema/Account';


export default class Mukltiplepicklist extends LightningElement {
    industryptions;
    recordOptions;
    indvalue;
    ratvalue;

@wire(getObjectInfo,{objectApiName:ACC})onjectInfo;

@wire(getPicklistValuesByRecordType,{objectApiName:ACC,
    recordTypeId:'$onjectInfo.data.defaultRecordTypeId'})
pickadapter({data,error}){

if(data){

console.log(data)
this.industryptions= this.method2(data.picklistFieldValues.Industry);
this.recordOptions = this.method2(data.picklistFieldValues.Rating);

}
if(error){
    console.error(error);
}
}

method2(data){

return data.values.map(item=>({"label":item.label,"value":item.value}));

}

handleinput(event){


   const{name,value} =event.target;
   console.log(name + '===>' + value);
   
   if(name ==='industry'){
   this.indvalue=value;

   }

   if(name ==='rating'){

    this.ratvalue=value;
   }

}



}