import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import ACC from '@salesforce/schema/Account';

const col = [{label:"Id", fieldName:"Id"},
              {label:"Name",fieldName:"Name",editable:true}, 
              {label:"Type",fieldName:"Type",editable:true}, 
                     ]

export default class UpdateRecord extends LightningElement {
    draftValues=[];
    columns = col;
    accounts=[];
    @wire(getListUi,{objectApiName:ACC, listViewApiName:'AllAccounts'})
    data({data,error}){

        if(data){

            console.log(data);
        this.accounts = data.records.records.map(item=>{
            return {"Id":this.getvalue(item,"Id"),
                    "Name":this.getvalue(item,"Name"),
                   "Type":this.getvalue(item,"Type"),
        }
     })
        }
        if(error){
            console.error(error);
        }
    }

    getvalue(data,field){

        return data.fields[field].value;
    }
 method(event){

console.log(JSON.stringify(event.detail.draftValues))
const recordInputs = event.detail.draftValues.map(draft=>{
    const fields={...draft}
    return {fields:fields}


})

const prm = recordInputs.map(recordInput=>
    updateRecord(recordInput))
    Promise.all(prm).then(()=>{
        alert('updated')
        this.draftValues=[]
 console.log('successfully updated');
  }).catch(error=>{
    console.error('error has occur while updating'+error)
  })

}
  

}