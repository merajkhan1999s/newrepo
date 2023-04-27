import { LightningElement,api } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account';
import name from '@salesforce/schema/Account.Name';
import phone from '@salesforce/schema/Account.Phone';
export default class Lightningrecordformtotheflow extends LightningElement {

@api recordId;

objectapiname=ACCOUNT
field = [name,phone];


}