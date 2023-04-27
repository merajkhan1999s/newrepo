import { LightningElement,wire,api } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi';


export default class GetRecordui extends LightningElement {
    formfields;
    @api recordId;

formfields=[

    {"fieldName":"Name","label":"Account Name"},
    {"fieldName":"Phone","label":"phone"},
    {"fieldName":"AnnualRevenue","label":"Annual Revenue"},
]

@wire (getRecordUi,{ recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
wirekadata({data,error}){

if(data){
    console.log(data)
this.formfields  =this.formfields.map(item=>{

    return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
})

}


}


}