import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class Splitfnctions extends LightningElement {

  onchangehandler(event){
  const {name} = event.target
 
    LightningAlert.open({
      message:`${name}`,
      theme:name,
      label:`${name} craeted the lightning alert`
    }).then(result=>{
      console.log('ok the button is clicked')

    })
  }



  async onchangehandler1(event){
 const {name} = event.target
 
  await LightningAlert.open({
      message:`${name}`,
      theme:name,
      label:`${name} craeted the lightning alert`
    }).then(result=>{
      console.log('ok the button is clicked')
      this.mrthods();

    })
  }
  mrthods(){
console.log('yes the method is called')

  }



  }