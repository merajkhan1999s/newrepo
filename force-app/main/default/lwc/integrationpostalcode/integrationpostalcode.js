import { LightningElement } from 'lwc';

export default class Integrationpostalcode extends LightningElement {
post;
    q;
    chng(event){
this.q=event.target.value;

    }
  click(){

       fetch("https://api.postalpincode.in/pincode/"+this.q, 
       ).then(response=>response.json()).then((data)=>{

        this.post= data[0].PostOffice
        
       }).catch(error=>console.error(error))
            
            
        
        
    }


}