import { LightningElement } from 'lwc';

export default class Pdfgenerator extends LightningElement {
     
 image= "https://yt3.ggpht.com/ytc/AMLnZu-jK5zoRwrSDrVgABCTRWgQenZ9Op1sUkjsh5_pfg=s900-c-k-c0x00ffffff-no-rj"
    invoice={

            innvoiceNmber:'23',
            invoicedue:'janauary',
            companyName:'google',
    }

    clientdata={
           client:'meraj khan',
           userName:'mkmkm'

    }

services=[ {name:'jhonny',amount:200},
{name:'shampoo',amount:20},
{name:'hrithik',amount:300},
{name:'liver',amount:400} ]

 get totalamount(){
return this.services.reduce((total,item)=>{
     return total = total+item.amount
     console.log(this.total);
 },0)}

 pdfhandle(){

    let cc = this.template.querySelector('.container');
    console.log(cc.outerHTML)
 }

}