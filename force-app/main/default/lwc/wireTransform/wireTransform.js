import { LightningElement,wire } from 'lwc';
import metghd from'@salesforce/apex/SesAss.getAcccountlist';
export default class WireTransform extends LightningElement {

    selected={};
    getdaata;
@wire(metghd)
wiringdata({data,error}){

    if(data){
//999999
        this.getdaata = data.map(item=>{

    let mk = item.Phone === '999999'? '33333':''
    // console.log('name of map',item.Name,item.Phone)
    // console.log('let mk ',mk)
    // this.ll = Object.keys(this.selected).length;
    // console.log('this is the lenghtn',this.ll)
    console.log(data)
return this.selected={...this.item,mk} //mk: '33333'
     
          
         } )
       
    }


}


}