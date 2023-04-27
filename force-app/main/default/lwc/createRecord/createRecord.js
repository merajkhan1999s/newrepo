import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import con from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecord extends LightningElement {

    field={};

    inputhandle(event){

const {name,value} = event.target
this.field[name]=value

    }

savemethod(){

const recordinput ={apiName:con.objectApiName, fields:this.field}
createRecord(recordinput).then((result)=>{

    this.ShowToast('success',`reecord id is${result.id}`,'success')
    this.template.querySelector('form.createForm').reset()
     this.field={}
}).catch(error=>{
    alert('errror')
    console.log('result is>>.'+result)
    console.error(error);
    this.ShowToast('error',error.body.message,'error');
  
})


   }

    ShowToast(title,message,variant){
 this.dispatchEvent(new ShowToastEvent({
        
            title,
            message,
            variant,
        }))
    }

}