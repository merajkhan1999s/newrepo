import { LightningElement,wire } from 'lwc';
import mett from '@salesforce/apex/acc.mrthod';

export default class Ssc extends LightningElement {


    see;
@wire(mett)data({data,error}){


    if(data){
    
        this.see = data;

    }
}



}