import { LightningElement } from 'lwc';
import mrtghd from '@salesforce/apex/SesAss.getAcccountlist';
export default class Callapexmethod extends LightningElement {
acc;

method(){

mrtghd().then(result=>{

this.acc = result
console.log(this.acc);
}).catch(error=>{


    console.error(error);
})

}

}