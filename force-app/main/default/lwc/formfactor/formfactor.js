import { LightningElement,api } from 'lwc';
import fm from '@salesforce/client/formFactor';
import PROJECT from '@salesforce/schema/Project__c'
import NAme from '@salesforce/schema/Project__c.Name'
export default class Formfactor extends LightningElement {

    form=fm;
    Name=NAme
    @api recordId
    objectApiName=PROJECT
    action(){
    
        console.log('oejvttttttt',PROJECT.objectApiName)
        console.log('nammmm',NAme.fieldApiName
        )
    }
}