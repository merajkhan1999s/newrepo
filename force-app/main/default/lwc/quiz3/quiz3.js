import { LightningElement,track } from 'lwc';

export default class Quiz3 extends LightningElement {


 len=0;
    selected={}

myquestions=[ { Id:"Question1",
                question:"what is salesforce",
                optoins:{
                            A:"cloud",
                            B:"ofline Software"
                },
                 correctAnswer:"A"
            },             

            { Id:"Question2",
            question:"what is apex",
            optoins:{
                        A:"Admin work",
                        B:"programing work"
            },
             correctAnswer:"B"
        },
]

changehandle(event){



// this.nm=event.target.name
// this.vl=event.target.value
// this.selected={...this.ddd,[this.nm]:this.vl}
// // console.log(this.selected)

// this.mm= this.ddd.map(item=>{
//   return  item.nm
//   console.log(item.nm)
// })
// console.log(this.mm)


const{name,value} =event.target
 this.selected ={...this.selected,[name]:value};
console.log(Object.keys(this.selected).length)

}

 get succes(){

        //s=0,mq=2 notequal>> condition is satisfied
        //s=2,mq=2 equal>> condition is not satisfied
       
return !(Object.keys(this.selected).length === this.myquestions.length)
 
    
 }
savemethod(event){
   
event.preventDefault()

let mk = this.myquestions.filter(item=>this.selected[item.Id]===item.correctAnswer)  

this.len =mk.length
console.log(this.len) 
}




// let correct = this.myquestons.filter(item=>this.selected[item.id]===item.correcranswer);
// this.correctanswer= correct.length

  
savemethods(){
   
}
}