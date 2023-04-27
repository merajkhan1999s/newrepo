import { LightningElement,wire} from 'lwc';

export default class Ownquiz extends LightningElement {

    vale=''
    vald=''
    valc=''


questions={
         a:'type yes for procedding',

           
                b:'type yup for procedding',
                          
                              c:'type yoo for procedding',

                          
     
               c:'type how for procedding',
}
                          
             

    handlechnage(event){
      
    //   this.valc =event.target.value; 
    //   this.vald =event.target.value; 
    //   this.vale =event.target.value; 
    const {value} = event.target;
   this.seleection={...this.seleection,value}
   console.log(this.seleection)


console.log(this.valc,this.vald,this.vale)
    
    }
    method(){

       this.mk = this.seleection.array(item=>
     console.log(item) )

      }
    }