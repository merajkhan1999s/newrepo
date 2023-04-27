import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Quizapp extends LightningElement {
   correctanswers =0;
  selected
  iseww=false;
   
myquestions =[

{ id:'question1',
     question:'what is salesforce',
     options:{
        a:'cloud computing',
        b:'software',
        c:'game'
     },
   correctanswer:'a'
},

{ id:'question2',
     question:'what is declarative',
     options:{
        a:'for:each',
        b:' if:true',
        c:'none'
     },
   correctanswer:'b'
},

{ id:'question3',
     question:'which is lightning component part',
     options:{
        a:'lightning:datatabele',
        b:'aura:if.true',
        c:'none'
     },
   correctanswer:'a'
},

];



selected={}


optionhandler(event){

console.log('cmpany',event.target.name);
console.log('value',event.target.value);
const {name,value} = event.target; // similat to const name/value = event.target.name/value
this.selected ={...this.selected,[name]:value};

}

get alldisabled(){

   return !(Object.keys(this.selected).length === this.myquestions.length)
}



savemth(event){
   event.preventDefault();
   this.iseww=true

let co = this.myquestions.filter(item => 
   this.selected[item.id]===item.correctanswer);
 this.correctanswers  = co.length;
 if(co.length == 3){


      const evte = new ShowToastEvent({
          title: 'SUCCESS',
          message: 'SAHI JAWAB',
          variant:'SUCCESS',
      });
      this.dispatchEvent(evte);

 }
 else{

   const evt = new ShowToastEvent({
      title: 'UN CORRECT ANSWERS',
      message: 'SELECTED WRONG OPTIONS',
      variant: 'destructive',
  });
  this.dispatchEvent(evt);



 }
// console.log('this is the items',item)
 //console.log('this is the correct ansers',item.correctanswer)
 console.log(co);
console.log(this.correctanswers);
}

resetmth(event){
   

   this.selected={}
   this.correctanswers=0;
}



}