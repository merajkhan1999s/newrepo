import { LightningElement,api } from 'lwc';
import Account from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';


export default class Lwcseflow extends LightningElement {

@api recordIdinputs

objectapiname=Account;

field=[NAME,PHONE];
succeshandler(event){

console.log(event.detail)

}


}