import { LightningElement,api } from 'lwc';
export default class Connetntversion extends LightningElement {

@api recordId
text;
myArray
filehandler(event){
console.log('output',event.target.files[0]);


}
handleClick(){
this.text = "How are you doing today? "
this.myArray = text.split(" ");
console.log(this.myArray);


}
 

}