import { LightningElement,wire,api } from 'lwc';
import {getRecord,getFieldDisplayValue,getFieldValue} from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Account.Name';
import own from '@salesforce/schema/Account.Owner.Name';
import ann from '@salesforce/schema/Account.AnnualRevenue'; 
export default class Fg extends LightningElement {

    name;
    owner;
    annual;
    @api recordId;
    // @wire(getRecord,{recordId:'$recordId',fields:[NAME,own,ann]})
    // wiredata({data}){
@wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
wiredata({data}){
if(data){
console.log(data);
// this.name=data.fields.Name.displayValue? data.fields.Name.displayValue : data.fields.Name.value;
// this.owner=data.fields.Owner.displayValue? data.fields.Owner.displayValue : data.fields.Owner.value;
// this.annual=data.fields.AnnualRevenue.displayValue? data.fields.AnnualRevenue.displayValue: data.fields.AnnualRevenue.value;
this.name=getFieldValue(data,NAME);
this.annual=getFieldDisplayValue(data,ann);
this.owner=getFieldValue(data,own);


}

    }





}