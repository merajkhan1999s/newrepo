import { LightningElement, wire } from 'lwc';
import met from '@salesforce/apex/acc.mrthod';
export default class Ssschhjj extends LightningElement {
vie;
leng;
@wire(met)wiredata({data,error}){


    if(data){

        this.vie =data;
        this.leng = Object.keys(this.vie).length;

        
        console.log(data);
    }
}



}