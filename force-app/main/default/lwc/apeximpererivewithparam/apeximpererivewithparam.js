import { LightningElement } from 'lwc';
import metdd from '@salesforce/apex/SesAss.getacc';


export default class Apeximpererivewithparam extends LightningElement {

da;
acc=''
timer;
mett(event){

console.log(this.acc)
    window.clearTimeout(this.timer);
   this.acc=event.target.value;
   this.timer = setTimeout(()=>{

    this.Callapex();
  },2000)
}


 Callapex(){

metdd({search:this.acc}).then(result=>{
this.da=result

}).catch(error=>{
    console.error(error);
})

   }
}