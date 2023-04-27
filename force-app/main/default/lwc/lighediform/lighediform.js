import { LightningElement,api} from 'lwc';
import ACC from '@salesforce/schema/Account'
export default class Lighediform extends LightningElement {
@api recordId;
  objectApiName  = ACC


name
phone
rating
handleName(event){
   this.name=event.target.value
}
handlePhone(event){
   this.phone=event.target.value
}
handleRating(event){
   this.rating=event.target.value
}



onsubhandler(event){

   // let input = this.template.querySelectorAll('lightning-input-field ');
   //  input.forEach(item => {
   //     console.log(item.value)
   //  });
   event.preventDefault();

     let input = this.template.querySelector('.val1');
     if(!input.value){
        input.setCustomValidity('please enetr value')
     }
     else{
        input.setCustomValidity('');
              const field = event.detail.fields;
              field.Name=this.name
               field.Phone=this.phone
                field.Rating=this.rating
               alert(this.name)
        this.template.querySelector('lightning-record-edit-form').submit(field);

     }
     input.reportValidity();




}

}