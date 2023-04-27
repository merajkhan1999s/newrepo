import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import username from '@salesforce/schema/User.Name';
import userId from '@salesforce/user/Id';
import email from '@salesforce/schema/User.Email';
const field=[username,email];
export default class Wirefetchuser extends LightningElement {
    
 
    out;
    id=userId 

@wire( getRecord,{recordId:'$id',fields:field}) func({data,error}){

if(data){
 
    this.out=data.fields;

}
if(error){
    console.error(error);
}



}


}