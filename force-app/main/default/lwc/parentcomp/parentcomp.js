import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {

//     pc='10';
// // arra={
// //         name:'merajkhan',age:'23',height:'5`2'

// // };


// handlechange(event){

// this.pc = event.target.value;

// }
getdet
handleclick(){

  this.template.querySelector('c-ccomp').methdname();


}
handlereset(){

    this.template.querySelector('c-ccomp').resermt();

}
 ss=false
 metc(){
 this.ss=true

}

yupp(event){


  this.getdet=event.detail.name
  this.getdetw=event.detail.id
}









}