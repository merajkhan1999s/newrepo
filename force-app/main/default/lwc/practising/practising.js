import { LightningElement } from 'lwc';

export default class Practising extends LightningElement {



    name="heeelo";
    result=['hhhhi','eeneeen']
    results=['hhhhi','eeneeen','fjfjfjf','fhfhf']
get method(){ 
this.given=this.result.map(item=>{
        return item
         
    })
}

get lenghts(){
              
   this.result[0];
}




}