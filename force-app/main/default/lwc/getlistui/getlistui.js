import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACC from '@salesforce/schema/Account';

export default class Getlistui extends LightningElement {
currentpage=null
accounts=[];
@wire(getListUi,{ objectApiName:ACC,
                     listViewApiName:'AllAccounts',
                     pageSize:5,  
                     currentpage:'$pagetoken'                           

})
wireproperty({data,error}){

if(data){
console.log(data)
this.accounts=data.records.records
this.currentpage=data.records.currentPageToken

 console.log(this.accounts)
}


}

}