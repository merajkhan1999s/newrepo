import { LightningElement,api } from 'lwc';


export default class Carpics extends LightningElement {
    @api car={}
  
handleclick(){

    this.dispatchEvent( new CustomEvent ('slelected',{
        detail:this.car.Id
    }))
}



}