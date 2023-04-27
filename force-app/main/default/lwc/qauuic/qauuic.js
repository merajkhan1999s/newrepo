import { LightningElement,api } from 'lwc';
import Lightningalert from 'lightning/alert'
export default class Qauuic extends LightningElement {

    @api invoke(){

     Lightningalert.open({
      message:'message will dispaly here',
      label:'hello'
     })
}

    
}