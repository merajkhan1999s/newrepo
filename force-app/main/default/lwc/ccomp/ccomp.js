import { LightningElement,api } from 'lwc';

export default class Ccomp extends LightningElement {
    vad;
    // @api valu;

    // @api valus;

    // @api inp;
      @api methdname(){

        this.vad ='im inside child method contrled by parent'
      }

@api resermt(){

    this.vad=''
}


 met(){

  
 const c = new CustomEvent('eve',{detail:{
  name:'khan',id:'sugsugs'
 }});
 this.dispatchEvent(c);

}

// metd(){

// const d = new CustomEvent('evenf',{detail:"meraj"})
// this.dispatchEvent(d);


// }










}