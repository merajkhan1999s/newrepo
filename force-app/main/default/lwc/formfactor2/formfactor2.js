import { LightningElement,track } from 'lwc';
import FORM from '@salesforce/client/formFactor';
export default class Formfactor2 extends LightningElement {

    @track formfactor = FORM 
    istrue;
    connectedCallback(){

      console.log(this.formfactor);

     if(this.formfactor=='Small'){

       this.istrue=True

     }

    }

    

}