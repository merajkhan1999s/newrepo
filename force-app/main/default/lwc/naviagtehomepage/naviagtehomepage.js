import { LightningElement } from 'lwc';
import ACC from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import PHOne from '@salesforce/schema/Account.Phone';
import RATING from '@salesforce/schema/Account.Rating';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Naviagtehomepage extends LightningElement {

 rec ="0015g00000q8DiwAAE"; 
   obj= ACC;
   fie = [NAME,PHOne,RATING];
 action(event){
    console.log(event.detail.id);
    const ev = new ShowToastEvent({
   title:"succes",
   message:"RECORD IS SAVED"+event.detail.id,
   variant:'SUCCESS'
  })
  this.dispatchEvent(ev);



  }


    



}