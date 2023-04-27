import { LightningElement } from 'lwc';
export default class Error extends LightningElement {
    val;
chngehandler(event){
    this.val =event.target.value
     console.log(this.val);
     this.val1=event.target.value
}
handleClick(){
   
   let vals =this.template.querySelector('.vvclass')
    let vals1 = this.template.querySelector('.vvclass1')
  
   if(!vals.value){
       vals.setCustomValidity("Name value is required");
  
   }
   else{
       //vals.setCustomvalidity("");
       vals.setCustomValidity("");

}
vals.reportValidity();
   
      if(!vals1.value){
          vals1.setCustomValidity('please eneter the secom field value');
      }
      else{
         vals1.setCustomValidity('');
      }
      vals1.reportValidity();







}
}