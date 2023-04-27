import { LightningElement } from 'lwc';

export default class Lifehooks extends LightningElement {

constructor(){

    super()

        console.log('this is constructor');
    
}

connectedCallback(){
    console.log('this is connected call back');

}

renderedCallback(){

    console.log('this is renderedCallback');
}


}