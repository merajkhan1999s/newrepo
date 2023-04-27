import { LightningElement} from 'lwc';
import {NavigationMixin} from 'lightning/pagereferenceutils'; 
export default class Getinformation extends NavigationMixin (LightningElement) {

 
nav(){
this[NavigationMixin.Navigate]({

type:'standard__objectPage',
attributes:{
    objectApiName:'Contact',
    actionName:'new'
}



});


}




}