import { LightningElement,wire,track } from 'lwc';
import report from '@salesforce/apex/reportapex.method';

export default class Reportlwc extends LightningElement {
    repdata;
  
   @track foldername
 
   handlechnagefolder(event){
  
        this.foldername=event.target.value;

console.log(this.foldername)

        
    }

    handlechnagedeveloper(event){
  
        this.developername=event.target.value;

console.log(this.developername)

        
    }
     
        
        
@wire(report,{foldname:'$foldername',devname:'$developername'})dataof({data,error}){


    console.log(data)
}

    }