import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACC from '@salesforce/schema/Account';


const columns =[{label:"Id",fieldName:"Id"},
     {label:"Name",fieldName:"Name"},
     {label:"Type",fieldName:"Type"}
];


export default class Update2 extends LightningElement {
    col= columns;
    accounts=[];

@wire(getListUi,{objectApiName:ACC, listViewApiName:'AllAccounts'})
wiringdata({data,error}){

if(data){

    this.accounts=data.records.records.map(item=>{
        return {  "Id":this.getvalue(item,"Id"),
                   "Name":this.getvalue(item,"Name"),
                   "Type":this.getvalue(item,"Type"),
     }
    })
}if(error){
    console.error(error);
}
}
getvalue(data,field){
    return data.fields[field].value;
}


methods(event){

    console.log(event.detail.draftValues);

}
}