import { LightningElement } from 'lwc';

export default class Quiz2 extends LightningElement {

selected=[];
correctanswer=0



    myquestons=[{      
        id:'question1',
        question:'colour of the moon',
        options:{
                    a:'white',
                    b:'yellow',
                    c:'red'
    
        },
        correcranswer:'a'
    },
    {
    id:'question2',
    question:'colour of the sky',
    options:{
                a:'white',
                b:'yellow',
                c:'Blue'
    
    },
    correcranswer:'c'
    }
    
    ];

    hanadle(event){

        const {name,value}=event.target
        this.selected={...this.selected,[name]:value};
        console.log(this.selected);
    }

    methodsave(event){
 event.preventDefault()

 let correct = this.myquestons.filter(item=>this.selected[item.id]===item.correcranswer);
 this.correctanswer= correct.length
 console.log(this.correctanswer)


    }

    methodreset(event){
        this.selected={}
        this.correctanswer=0;
    }
}