import { LightningElement,api } from 'lwc';
    import ACCOUNT from '@salesforce/schema/Account';
    import NAME from '@salesforce/schema/Account.Name';
    import PHONE from '@salesforce/schema/Account.Phone';
    export default class Lightningrecrdflow extends LightningElement {
    @api recordId
    ojectapiname='Account'
    field=[NAME,PHONE];





    }