import { LightningElement,api } from 'lwc';
import PROJECT from '@salesforce/schema/Project__c'
import Nm from '@salesforce/schema/Project__c.Name'
export default class Flowtoproject extends LightningElement {
    Name=Nm.fieldApiName

@api recordId

action(){

    console.log('oejvttttttt',PROJECT.objectApiName)
}
}